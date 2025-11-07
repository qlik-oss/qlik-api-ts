import "./chunks/utils-DI6bFnHB.js";
import "./chunks/public-runtime-modules-DNHVdCZ6.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-Cn50MiSD.js";
import { t as auth_default } from "./chunks/auth-Dn3pvK1N.js";
import { a as interceptors_default$1 } from "./chunks/interceptors-CT9deBo6.js";
import { n as qix_default } from "./chunks/qix-6XcsO79b.js";

//#region src/runtime-api-generator/runtime-api-generator-common.ts
const methodAbbreviations = {
	G: "GET",
	P: "POST",
	U: "PUT",
	A: "PATCH",
	D: "DELETE",
	O: "OPTIONS",
	H: "HEAD",
	C: "CONNECT",
	T: "TRACE"
};
function methodCharToMethodName(method) {
	try {
		return methodAbbreviations[method];
	} catch {
		throw new Error(`Unknown short hand method:${method}`);
	}
}
const contentTypeAbbreviations = {
	"": "",
	J: "application/json",
	M: "multipart/form-data",
	O: "application/octet-stream",
	T: "text/plain"
};
function contentTypeCharToContentType(typeChar) {
	try {
		return contentTypeAbbreviations[typeChar];
	} catch {
		throw new Error(`Unknown short hand content-type: ${typeChar}`);
	}
}
const ignoredProps = new Set([
	"$$typeof",
	"then",
	"__esmodule"
]);
/**
* createLazyApiProxy returns a new Proxy that calls the passed initFunc on
* the first "legitimate access" of the RuntimeApi.
* We define legitimate access as checking or getting a prop that isn't
* in the list of ignored-props (see 'ignoredProps' in this file) or calling the
* 'ownKeys' function (e.g. through Object.keys).
*/
function createLazyApiProxy(api$1, initFunc) {
	const handler = {
		initiated: false,
		init: () => {
			if (!handler.initiated) {
				initFunc();
				handler.initiated = true;
			}
		},
		ownKeys(target) {
			if (!handler.initiated) handler.init();
			return Object.keys(target);
		},
		has(target, key) {
			if (ignoredProps.has(key)) return false;
			if (!handler.initiated) handler.init();
			return !!target[key];
		},
		get(target, key) {
			if (!ignoredProps.has(key) && !handler.initiated) handler.init();
			return target[key];
		}
	};
	return new Proxy(api$1, handler);
}
function parseMiniApi(namespace, def) {
	const api$1 = { operations: {} };
	traverse(namespace, "", def, api$1.operations);
	return api$1;
}
/**
* traverse visits each node in the "URL-segment tree".
* If a node contains an array (of operation-info)
* operations are generated for each of these and added to
* the provided RuntimeApi. The URL-path used for the operations
* is the path from the root to the node.
*/
function traverse(namespace, parentPath, node, operations) {
	Object.entries(node).forEach(([key, value]) => {
		const pathTemplate = key ? `${parentPath}/${key}` : parentPath;
		if (Array.isArray(value)) value.forEach((operationString) => {
			const argNames = [...pathTemplate.matchAll(/\{([\w\-_]+)\}/g)].map((match) => match[1]);
			const [operationNames, options, useInstead] = operationString.split(":");
			const method = methodCharToMethodName(options[0]);
			const [operationName, ...oldOperationNames] = operationNames.split(",");
			const hasQuery = options.indexOf("Q") >= 0;
			const bodyIndex = options.indexOf("B");
			const hasBody = bodyIndex >= 0;
			let contentType = "";
			if (bodyIndex >= 0) {
				if (options.length > bodyIndex) contentType = contentTypeCharToContentType(options[bodyIndex + 1]);
			}
			operations[operationName] = {
				namespace,
				operationName,
				pathTemplate,
				method,
				argNames,
				hasQuery,
				hasBody,
				contentType,
				useInstead,
				oldOperationNames
			};
		});
		else traverse(namespace, pathTemplate, value, operations);
	});
}
/**
* Creates a function based on an operation that calls
* invokeFetch with the correct arguments.
* Query and body, if present, will be sent as arguments.
*/
function createClassicApiFn({ namespace, operationName, pathTemplate, method, argNames, hasQuery, hasBody, contentType, useInstead }, hostConfig, interceptors$1, enableConsoleWarnings, invokeFetchFnGetter) {
	return (...args) => {
		const pathVariables = {};
		argNames.forEach((argName, index) => {
			pathVariables[argName] = args[index];
		});
		let argPos = argNames.length;
		let query;
		let body;
		if (hasQuery) {
			query = args[argPos];
			argPos++;
		}
		if (hasBody) {
			body = args[argPos];
			argPos++;
		}
		const options = args.length > argPos ? args[argPos] : void 0;
		if (enableConsoleWarnings && useInstead) {
			let fullUseInstead;
			if (useInstead.includes(".")) fullUseInstead = useInstead;
			else fullUseInstead = `${useInstead}.${operationName}`;
			console.warn(`${namespace}.${operationName} is deprecated, use ${fullUseInstead} instead`);
		}
		const optionsIncludingDefaultHostConfig = hostConfig ? {
			hostConfig,
			...options
		} : options;
		return invokeFetchFnGetter()(namespace, {
			method,
			pathTemplate,
			pathVariables,
			query,
			body,
			...contentType ? { contentType } : {},
			options: optionsIncludingDefaultHostConfig
		}, interceptors$1?.getInterceptors());
	};
}

//#endregion
//#region src/runtime-api-generator/runtime-api-generator-public.ts
const parsedMiniApis = {};
/**
* apiDefToApi generates a RuntimeApi for the namespace provided based on
* the URL-segment tree.
*
* See the traverse function, the generated code and the generator
* (found in tools/api-generator/genspecs) for the full picture.
*/
function apiDefToApiPublic(namespace, def, subApis) {
	parsedMiniApis[namespace] = parsedMiniApis[namespace] || parseMiniApi(namespace, def);
	const parsedMiniApi = parsedMiniApis[namespace];
	return (hostConfig, interceptors$1) => {
		const lazyApi = { clearCache: () => clearApiCache(namespace) };
		const initFunc = () => {
			Object.entries(parsedMiniApi.operations).forEach(([operationName, operation]) => {
				lazyApi[operationName] = createClassicApiFn(operation, hostConfig, interceptors$1, true, () => invokeFetch);
				operation.oldOperationNames.forEach((oldOperationName) => {
					lazyApi[oldOperationName] = lazyApi[operationName];
				});
			});
			if (subApis) Object.entries(subApis).forEach(([apiName, apiBuilder]) => {
				lazyApi[apiName] = apiBuilder(hostConfig, interceptors$1);
			});
		};
		return createLazyApiProxy(lazyApi, initFunc);
	};
}

//#endregion
//#region src/public/interceptors.ts
var interceptors_default = interceptors_default$1;

//#endregion
//#region src/public/index.ts
const createApiKeysRuntimeAPI = apiDefToApiPublic("api-keys", { api: { v1: { "api-keys": {
	"": ["getApiKeys:GQ:", "createApiKey:PBJ:"],
	configs: { "{tenantId}": ["getApiKeysConfig:G:", "patchApiKeysConfig:ABJ:"] },
	"{id}": [
		"deleteApiKey:D:",
		"getApiKey:G:",
		"patchApiKey:ABJ:"
	]
} } } });
const createAppsRuntimeAPI = apiDefToApiPublic("apps", { api: { v1: { apps: {
	"": ["createApp:PBJ:"],
	evaluations: {
		"{baseid}": { actions: { compare: { "{comparisonid}": {
			"": ["getAppEvaluationComparison:GQ:"],
			actions: { download: ["getAppEvaluationComparisonXml:G:"] }
		} } } },
		"{id}": {
			"": ["getAppEvaluation:GQ:"],
			actions: { download: ["getAppEvaluationXml:G:"] }
		}
	},
	import: ["importApp:PQBO:"],
	privileges: ["getAppsPrivileges:G:"],
	"{appId}": {
		"": [
			"deleteApp:D:",
			"getAppInfo:G:",
			"updateAppInfo:UBJ:"
		],
		copy: ["copyApp:PBJ:"],
		data: {
			lineage: ["getAppDataLineage:G:"],
			metadata: ["getAppDataMetadata:G:"]
		},
		export: ["exportApp:PQ:"],
		"insight-analyses": {
			"": ["getAppInsightAnalyses:G:"],
			actions: { recommend: ["getAppInsightAnalysisRecommendations:PBJ:"] },
			model: ["getAppInsightAnalysisModel:G:"]
		},
		media: {
			files: { "{path}": [
				"deleteAppMedia:D:",
				"getAppMedia:G:",
				"uploadAppMedia:UBO:"
			] },
			list: { "{path}": ["getAppMediaList:GQ:"] },
			thumbnail: ["getAppThumbnail:G:"]
		},
		objects: { "{objectId}": { actions: { "change-owner": ["updateAppObjectOwner:PBJ:"] } } },
		owner: ["updateAppOwner:UBJ:"],
		publish: ["publishApp:PBJ:", "republishApp:UBJ:"],
		reloads: {
			logs: {
				"": ["getAppReloadLogs:G:"],
				"{reloadId}": ["getAppReloadLog:G:"]
			},
			metadata: { "{reloadId}": ["getAppReloadMetadata:GQ:"] }
		},
		"report-filters": {
			"": ["getAppReportFilters:GQ:", "createAppReportFilter:PBJ:"],
			actions: { count: ["countAppReportFilters:GQ:"] },
			"{id}": [
				"deleteAppReportFilter:D:",
				"getAppReportFilter:G:",
				"patchAppReportFilter:ABJ:"
			]
		},
		scripts: {
			"": ["getAppScriptHistory:GQ:", "updateAppScript:PBJ:"],
			"{id}": [
				"deleteAppScript:D:",
				"getAppScript:G:",
				"patchAppScript:ABJ:"
			]
		},
		space: ["removeAppFromSpace:D:", "moveAppToSpace:UBJ:"]
	},
	"{guid}": { evaluations: ["getAppEvaluations:GQ:", "queueAppEvaluation:P:"] }
} } } });
const createAssistantsRuntimeAPI = apiDefToApiPublic("assistants", { api: { v1: { assistants: {
	"": ["getAssistants:GQ:", "createAssistant:PBJ:"],
	"{assistantId}": {
		feedback: ["getAssistantFeedback:G:"],
		sources: { plaintexts: ["getAssistantSources:PBJ:"] },
		starters: {
			"": ["getAssistantStarters:GQ:", "createAssistantStarter:PBJ:"],
			"{starterId}": {
				"": [
					"deleteAssistantStarter:D:",
					"getAssistantStarter:G:",
					"updateAssistantStarter:UBJ:"
				],
				followups: { "{followupId}": ["deleteAssistantStarterFollowup:D:", "updateAssistantStarterFollowup:UBJ:"] }
			}
		},
		threads: {
			"": ["getAssistantThreads:GQ:", "createAssistantThread:PBJ:"],
			"{threadId}": {
				actions: {
					invoke: ["invokeAssistantThread:PBJ:"],
					stream: ["streamAssistantThread:PBJ:"]
				},
				interactions: {
					"": ["getAssistantThreadInteractions:GQ:", "createAssistantThreadInteraction:PBJ:"],
					"{interactionId}": {
						"": ["deleteAssistantThreadInteraction:D:", "getAssistantThreadInteraction:G:"],
						feedback: {
							"": ["createAssistantThreadInteractionFeedback:PBJ:"],
							"{feedbackId}": ["patchAssistantThreadInteractionFeedback:ABJ:"]
						},
						reviews: ["createAssistantThreadInteractionReview:PBJ:"]
					}
				}
			}
		}
	},
	"{assistantid}": { threads: { "{threadid}": [
		"deleteAssistantThread:D:",
		"getAssistantThread:G:",
		"patchAssistantThread:ABJ:"
	] } },
	"{id}": [
		"deleteAssistant:D:",
		"getAssistant:G:",
		"patchAssistant:ABJ:"
	]
} } } });
const createAuditsRuntimeAPI = apiDefToApiPublic("audits", { api: { v1: { audits: {
	"": ["getAudits:GQ:"],
	actions: { "fetch-consumption-app": ["fetchConsumptionAppAudits:P:"] },
	archive: ["getArchivedAudits:GQ:"],
	settings: ["getAuditsSettings:G:"],
	sources: ["getAuditSources:G:"],
	types: ["getAuditTypes:G:"],
	"{id}": ["getAudit:G:"]
} } } });
const createAutomationConnectionsRuntimeAPI = apiDefToApiPublic("automation-connections", { api: { v1: { "automation-connections": {
	"": ["getAutomationConnections:GQ:", "createAutomationConnection:PBJ:"],
	"{id}": {
		"": [
			"deleteAutomationConnection:DQ:",
			"getAutomationConnection:G:",
			"updateAutomationConnection:UBJ:"
		],
		actions: {
			"change-owner": ["changeOwnerAutomationConnection:PBJ:"],
			"change-space": ["changeSpaceAutomationConnection:PBJ:"],
			check: ["checkAutomationConnection:P:"]
		}
	}
} } } });
const createAutomationConnectorsRuntimeAPI = apiDefToApiPublic("automation-connectors", { api: { v1: { "automation-connectors": ["getAutomationConnectors:GQ:"] } } });
const createAutomationsRuntimeAPI = apiDefToApiPublic("automations", { api: { v1: { automations: {
	"": ["getAutomations:GQ:", "createAutomation:PBJ:"],
	usage: ["getAutomationsUsageMetrics:GQ:"],
	"{id}": {
		"": [
			"deleteAutomation:D:",
			"getAutomationWithQuery:GQ:",
			"getAutomation:G:",
			"updateAutomation:UBJ:"
		],
		actions: {
			"change-owner": ["changeOwnerAutomation:PBJ:"],
			"change-space": ["changeSpaceAutomation:PBJ:"],
			copy: ["copyAutomation:PBJ:"],
			disable: ["disableAutomation:P:"],
			enable: ["enableAutomation:P:"],
			move: ["moveAutomation:PBJ:"]
		},
		runs: {
			"": ["getAutomationRuns:GQ:", "queueAutomationRun:PBJ:"],
			"{runId}": {
				"": ["getAutomationRunWithQuery:GQ:", "getAutomationRun:G:"],
				actions: {
					export: ["getAutomationRunDetails:P:"],
					retry: ["retryAutomationRun:P:"],
					stop: ["stopAutomationRun:P:"]
				}
			}
		}
	}
} } } });
const createAutomlDeploymentsRuntimeAPI = apiDefToApiPublic("automl-deployments", { api: { v1: { "automl-deployments": { "{deploymentId}": { "realtime-predictions": ["createAutomlDeploymentRealtimePrediction:PQBJ:"] } } } } });
const createAutomlPredictionsRuntimeAPI = apiDefToApiPublic("automl-predictions", { api: { v1: { "automl-predictions": { "{predictionId}": {
	"coordinate-shap": ["getAutomlPredictionCoordinateShap:GQ:"],
	jobs: ["createAutomlPredictionJob:P:"],
	"not-predicted-reasons": ["getAutomlPredictionNotPredictedReasons:GQ:"],
	predictions: ["getAutomlPredictionPredictions:GQ:"],
	shap: ["getAutomlPredictionShap:GQ:"],
	source: ["getAutomlPredictionSource:GQ:"]
} } } } });
const createBrandsRuntimeAPI = apiDefToApiPublic("brands", { api: { v1: { brands: {
	"": ["getBrands:GQ:", "createBrand:PBM:"],
	active: ["getActiveBrand:G:"],
	"{brand-id}": {
		"": [
			"deleteBrand:D:",
			"getBrand:G:",
			"patchBrand:ABJ:"
		],
		actions: {
			activate: ["activateBrand:PB:"],
			deactivate: ["deactivateBrand:PB:"]
		},
		files: { "{brand-file-id}": [
			"deleteBrandFile:D:",
			"getBrandFile:G:",
			"createBrandFile:PBM:",
			"updateBrandFile:UBM:"
		] }
	}
} } } });
const createCollectionsRuntimeAPI = apiDefToApiPublic("collections", { api: { v1: { collections: {
	"": ["getCollections:GQ:", "createCollection:PBJ:"],
	favorites: ["getFavoritesCollection:G:"],
	"{collectionId}": {
		"": [
			"deleteCollection:D:",
			"getCollection:G:",
			"patchCollection:ABJ:",
			"updateCollection:UBJ:"
		],
		items: {
			"": ["getCollectionItems:GQ:", "addCollectionItem:PBJ:"],
			"{itemId}": ["deleteCollectionItem:D:", "getCollectionItem:G:"]
		}
	}
} } } });
const createConditionsRuntimeAPI = apiDefToApiPublic("conditions", { api: { v1: { conditions: {
	"": ["createCondition:PBJ:"],
	previews: {
		"": ["createConditionPreview:PBJ:"],
		"{id}": ["getConditionPreview:G:"]
	},
	settings: ["getConditionsSettings:G:", "setConditionsSettings:UBJ:"],
	"{id}": {
		"": [
			"deleteCondition:D:",
			"getCondition:G:",
			"patchCondition:ABJ:"
		],
		evaluations: {
			"": ["createConditionEvaluation:PBJ:"],
			"{evaluationId}": ["deleteConditionEvaluation:D:", "getConditionEvaluation:G:"]
		}
	}
} } } });
const createConsumptionRuntimeAPI = apiDefToApiPublic("consumption", { api: { v1: { consumption: { executions: ["getConsumptionExecutions:GQ:"] } } } });
const createCspOriginsRuntimeAPI = apiDefToApiPublic("csp-origins", { api: { v1: { "csp-origins": {
	"": ["getCSPEntries:GQ:", "createCSPEntry:PBJ:"],
	actions: { "generate-header": ["getCSPHeader:G:"] },
	"{id}": [
		"deleteCSPEntry:D:",
		"getCSPEntry:G:",
		"updateCSPEntry:UBJ:"
	]
} } } });
const createCsrfTokenRuntimeAPI = apiDefToApiPublic("csrf-token", { api: { v1: { "csrf-token": ["getCsrfToken:G:"] } } });
const createDataAlertsRuntimeAPI = apiDefToApiPublic("data-alerts", { api: { v1: { "data-alerts": {
	"": ["getDataAlerts:GQ:", "createDataAlert:PBJ:"],
	actions: {
		trigger: ["triggerDataAlerts:PBJ:"],
		validate: ["validateDataAlerts:PBJ:"]
	},
	settings: ["getDataAlertsSettings:G:", "setDataAlertsSettings:UBJ:"],
	"{alertId}": {
		"": [
			"deleteDataAlert:D:",
			"getDataAlert:G:",
			"patchDataAlert:ABJ:"
		],
		condition: ["getDataAlertCondition:G:"],
		executions: { "{executionId}": ["deleteDataAlertExecution:D:", "getDataAlertExecution:G:"] },
		"recipient-stats": ["getDataAlertRecipientStats:GQ:"]
	},
	"{taskId}": { executions: {
		"": ["getDataAlertExecutions:GQ:"],
		stats: ["getDataAlertExecutionsStats:GQ:"],
		"{executionId}": { evaluations: ["getDataAlertExecutionEvaluations:G:"] }
	} }
} } } });
const createDataAssetsRuntimeAPI = apiDefToApiPublic("data-assets", { api: { v1: { "data-assets": {
	"": ["deleteDataAssets:DBJ:", "createDataAsset:PBJ:"],
	"{data-asset-id}": [
		"getDataAsset:GQ:",
		"patchDataAsset:ABJ:",
		"updateDataAsset:UBJ:"
	]
} } } });
const createDataConnectionsRuntimeAPI = apiDefToApiPublic("data-connections", { api: { v1: { "data-connections": {
	"": ["getDataConnections:GQ:", "createDataConnection:PBJ:"],
	actions: {
		delete: ["deleteDataConnections:PBJ:"],
		duplicate: ["duplicateDataAConnection:PBJ:"],
		update: ["updateDataConnections:PBJ:"]
	},
	"{qID}": [
		"deleteDataConnection:DQ:",
		"getDataConnection:GQ:",
		"patchDataConnection:AQBJ:",
		"updateDataConnection:UQBJ:"
	]
} } } });
const createDataCredentialsRuntimeAPI = apiDefToApiPublic("data-credentials", { api: { v1: { "data-credentials": {
	actions: { "filter-orphan": ["filterOrphanedDataCredentials:PBJ:"] },
	"{qID}": [
		"deleteDataCredential:DQ:",
		"getDataCredential:GQ:",
		"patchDataCredential:AQBJ:",
		"updateDataCredential:UQBJ:"
	]
} } } });
const createDataFilesRuntimeAPI = apiDefToApiPublic("data-files", { api: { v1: { "data-files": {
	"": ["getDataFiles:GQ:", "uploadDataFile:PBM:"],
	actions: {
		"change-space": ["moveDataFiles:PBJ:"],
		delete: ["deleteDataFiles:PBJ:"]
	},
	connections: {
		"": ["getDataFilesConnections:GQ:"],
		"{id}": ["getDataFileConnection:G:"]
	},
	quotas: ["getDataFilesQuotas:G:"],
	"{id}": {
		"": [
			"deleteDataFile:D:",
			"getDataFile:G:",
			"reuploadDataFile:UBM:"
		],
		actions: {
			"change-owner": ["changeDataFileOwner:PBJ:"],
			"change-space": ["moveDataFile:PBJ:"]
		}
	}
} } } });
const createDataQualitiesRuntimeAPI = apiDefToApiPublic("data-qualities", { api: { v1: { "data-qualities": {
	computations: {
		"": ["triggerDataQualitiesComputation:PBJ:"],
		"{computationId}": ["getDataQualitiesComputation:G:"]
	},
	"global-results": ["getDataQualitiesGlobalResults:GQ:"]
} } } });
const createDataSetsRuntimeAPI = apiDefToApiPublic("data-sets", { api: { v1: { "data-sets": {
	"": ["deleteDataSets:DBJ:", "createDataSet:PBJ:"],
	"{data-set-id}": {
		"": [
			"getDataSet:GQ:",
			"patchDataSet:ABJ:",
			"updateDataSet:UBJ:"
		],
		profiles: ["getDataSetProfiles:GQ:"]
	}
} } } });
const createDataSourcesRuntimeAPI = apiDefToApiPublic("data-sources", { api: { v1: { "data-sources": {
	"": ["getDataSources:GQ:"],
	"{dataSourceId}": {
		"api-specs": ["getDataSourceApiSpecs:G:"],
		gateways: ["getDataSourceGateways:GQ:"],
		settings: ["getDataSourceSettings:G:", "putDataSourceSettings:UBJ:"]
	}
} } } });
const createDataStoresRuntimeAPI = apiDefToApiPublic("data-stores", { api: { v1: { "data-stores": {
	"": [
		"deleteDataStores:DBJ:",
		"getDataStores:GQ:",
		"createDataStore:PBJ:"
	],
	"{data-store-ids}": { "data-assets": {
		"": ["deleteDataStoreDataAssets:D:", "getDataStoreDataAssets:GQ:"],
		"{data-asset-ids}": { "data-sets": ["deleteDataStoreDataAssetDataSets:D:", "getDataStoreDataAssetDataSets:GQ:"] }
	} },
	"{data-store-id}": [
		"getDataStore:GQ:",
		"patchDataStore:ABJ:",
		"updateDataStore:UBJ:"
	]
} } } });
const createDcaasRuntimeAPI = apiDefToApiPublic("dcaas", { api: { v1: { dcaas: { actions: { "data-connections": {
	"": ["dataConnectionsDcaas:PBJ:"],
	"api-specs": ["dataConnectionsDcaasApiSpecs:GQ:"],
	"{connectionId}": ["dataConnectionsDcaa:G:"]
} } } } } });
const createDiProjectsRuntimeAPI = apiDefToApiPublic("di-projects", { api: { v1: { "di-projects": {
	"": ["getDiProjects:GQ:", "createDiProject:PBJ:"],
	actions: { "{actionId}": ["getDiProject:GQ:"] },
	"{projectId}": {
		actions: {
			export: ["exportDiProject:PBJ:"],
			import: ["importDiProject:PBM:"],
			prepare: ["prepareDiProject:PBJ:"],
			validate: ["validateDiProject:PBJ:"]
		},
		bindings: ["getDiProjectExportVariables:GQ:", "setDiProjectExportVariables:UBJ:"],
		"di-tasks": {
			"": ["getDiProjectDiTasks:G:"],
			"{dataTaskId}": {
				"": ["getDiProjectDiTask:G:"],
				actions: {
					prepare: ["prepareDiProjectDiTask:PBJ:"],
					validate: ["validateDiProjectDiTask:PBJ:"]
				},
				runtime: {
					actions: {
						start: ["startDiProjectDiTaskRuntime:P:"],
						stop: ["stopDiProjectDiTaskRuntime:P:"]
					},
					state: {
						"": ["getDiProjectDiTaskRuntimeState:G:"],
						datasets: ["getDiProjectDiTaskRuntimeStateDatasets:G:"]
					}
				}
			}
		}
	}
} } } });
const createDirectAccessAgentsRuntimeAPI = apiDefToApiPublic("direct-access-agents", { api: { v1: { "direct-access-agents": { "{agentId}": {
	actions: { "{agentAction}": ["restartDirectAccessAgent:P:"] },
	configurations: ["getDirectAccessAgentConfiguration:GQ:", "patchDirectAccessAgentConfiguration:ABJ:"],
	connectors: { "{connectorType}": { files: {
		"": ["getDirectAccessAgentConnectorFiles:GQ:", "getDirectAccessAgentConnectorFilesWithoutQuery:G:"],
		"allowed-paths": ["getDirectAccessAgentConnectorFilesAllowedPaths:G:", "putDirectAccessAgentConnectorFilesAllowedPaths:UBJ:"],
		"custom-data-type-mappings": ["getDirectAccessAgentConnectorCustomDataTypeMappings:G:", "putDirectAccessAgentConnectorCustomDataTypeMappings:UBJ:"],
		"{fileType}": [
			"getDirectAccessAgentConnectorFile:G:",
			"updateDirectAccessAgentConnectorFile:UQBJ:",
			"updateDirectAccessAgentConnectorFileWithoutQuery:UBJ:"
		]
	} } }
} } } } });
const createEncryptionRuntimeAPI = apiDefToApiPublic("encryption", { api: { v1: { encryption: { keyproviders: {
	"": ["getEncryptionKeyproviders:G:", "createEncryptionKeyprovider:PBJ:"],
	actions: {
		list: ["listEncryptionKeyproviders:G:"],
		"reset-to-default-provider": ["resetEncryptionKeyproviders:P:"]
	},
	migration: { actions: { details: ["getEncryptionKeyprovidersMigrationDetails:G:"] } },
	"{arnFingerPrint}": {
		"": [
			"deleteEncryptionKeyprovider:D:",
			"getEncryptionKeyprovider:G:",
			"patchEncryptionKeyprovider:ABJ:"
		],
		actions: {
			migrate: ["migrateEncryptionKeyprovider:P:"],
			test: ["testEncryptionKeyprovider:P:"]
		}
	}
} } } } });
const createExtensionsRuntimeAPI = apiDefToApiPublic("extensions", { api: { v1: { extensions: {
	"": ["getExtensions:G:", "uploadExtension:PBM:"],
	"{id}": {
		"": [
			"deleteExtension:D:",
			"getExtension:G:",
			"patchExtension:ABM:"
		],
		file: {
			"": ["downloadExtension:G:"],
			"{filepath}": ["downloadFileFromExtension:G:"]
		}
	}
} } } });
const createGlossariesRuntimeAPI = apiDefToApiPublic("glossaries", { api: { v1: { glossaries: {
	"": ["getGlossaries:GQ:", "createGlossary:PBJ:"],
	actions: { import: ["importGlossary:PQBJ:"] },
	"{id}": {
		"": [
			"deleteGlossary:D:",
			"getGlossary:G:",
			"patchGlossary:ABJ:",
			"updateGlossary:UBJ:"
		],
		actions: { export: ["exportGlossary:G:"] },
		categories: {
			"": ["getGlossaryCategories:GQ:", "createGlossaryCategory:PBJ:"],
			"{categoryId}": [
				"deleteGlossaryCategory:D:",
				"getGlossaryCategory:G:",
				"patchGlossaryCategory:ABJ:",
				"updateGlossaryCategory:UBJ:"
			]
		},
		terms: {
			"": ["getGlossaryTerms:GQ:", "createGlossaryTerm:PBJ:"],
			"{termId}": {
				"": [
					"deleteGlossaryTerm:D:",
					"getGlossaryTerm:G:",
					"patchGlossaryTerm:ABJ:",
					"updateGlossaryTerm:UBJ:"
				],
				actions: { "change-status": ["changeGlossaryTermStatus:PQ:"] },
				links: ["getGlossaryTermLinks:GQ:", "createGlossaryTermLink:PBJ:"],
				revisions: ["getGlossaryTermRevisions:GQ:"]
			}
		}
	}
} } } });
const createGroupsRuntimeAPI = apiDefToApiPublic("groups", { api: { v1: { groups: {
	"": ["getGroups:GQ:", "createGroup:PBJ:"],
	actions: { filter: ["filterGroups:PQBJ:"] },
	settings: ["getGroupsSettings:G:", "patchGroupsSettings:ABJ:"],
	"{groupId}": [
		"deleteGroup:D:",
		"getGroup:G:",
		"patchGroup:ABJ:"
	]
} } } });
const createIdentityProvidersRuntimeAPI = apiDefToApiPublic("identity-providers", { api: { v1: { "identity-providers": {
	"": ["getIdps:GQ:", "createIdp:PBJ:"],
	".well-known": { "metadata.json": ["getIdpWellKnownMetaData:G:"] },
	me: { meta: ["getMyIdpMeta:G:"] },
	status: ["getIdpStatuses:G:"],
	"{id}": [
		"deleteIdp:D:",
		"getIdp:G:",
		"patchIdp:ABJ:"
	]
} } } });
const createItemsRuntimeAPI = apiDefToApiPublic("items", { api: { v1: { items: {
	"": ["getItems:GQ:"],
	settings: ["getItemsSettings:G:", "patchItemsSettings:ABJ:"],
	"{itemId}": {
		"": [
			"deleteItem:D:",
			"getItem:G:",
			"updateItem:UBJ:"
		],
		collections: ["getItemCollections:GQ:"],
		publisheditems: ["getPublishedItems:GQ:"]
	}
} } } });
const createKnowledgebasesRuntimeAPI = apiDefToApiPublic("knowledgebases", { api: { v1: { knowledgebases: {
	"": ["getKnowledgebases:GQ:", "createKnowledgebase:PBJ:"],
	"{id}": {
		"": [
			"deleteKnowledgebase:D:",
			"getKnowledgebase:G:",
			"patchKnowledgebase:ABJ:"
		],
		datasources: {
			"": ["createKnowledgebaseDatasource:PBJ:"],
			"{datasourceId}": {
				"": ["deleteKnowledgebaseDatasource:D:", "updateKnowledgebaseDatasource:UBJ:"],
				actions: {
					cancel: ["cancelKnowledgebaseDatasource:P:"],
					download: ["downloadKnowledgebaseDatasource:PBJ:"],
					sync: ["syncKnowledgebaseDatasource:PQ:"]
				},
				histories: {
					"": ["getKnowledgebaseDatasourceHistories:GQ:"],
					"{syncId}": ["getKnowledgebaseDatasourceHistory:G:"]
				},
				schedules: [
					"deleteKnowledgebaseDatasourceSchedule:D:",
					"getKnowledgebaseDatasourceSchedule:G:",
					"createKnowledgebaseDatasourceSchedule:PBJ:"
				]
			}
		},
		histories: ["getKnowledgebaseHistories:GQ:"]
	}
} } } });
const createLicensesRuntimeAPI = apiDefToApiPublic("licenses", { api: { v1: { licenses: {
	assignments: {
		"": ["getLicenseAssignments:GQ:"],
		actions: {
			add: ["addLicenseAssignments:PBJ:"],
			delete: ["deleteLicenseAssignments:PBJ:"],
			update: ["updateLicenseAssignments:PBJ:"]
		}
	},
	consumption: ["getLicenseConsumption:GQ:"],
	overview: ["getLicenseOverview:G:"],
	settings: ["getLicenseSettings:G:", "updateLicenseSettings:UBJ:"],
	status: ["getLicenseStatus:G:"]
} } } });
const createLineageGraphsRuntimeAPI = apiDefToApiPublic("lineage-graphs", { api: { v1: { "lineage-graphs": {
	impact: { "{id}": {
		actions: {
			expand: ["expandLineageGraphImpact:GQ:"],
			search: ["searchLineageGraphImpact:GQ:"]
		},
		overview: ["getLineageGraphImpactOverview:GQ:"],
		source: ["getLineageGraphImpactSource:G:"]
	} },
	nodes: { "{id}": {
		"": ["getLineageGraphNode:GQ:"],
		actions: {
			expand: ["expandLineageGraphNode:GQ:"],
			search: ["searchLineageGraphNode:GQ:"]
		},
		overview: ["createLineageGraphNodeOverview:PQBJ:"]
	} }
} } } });
const createMlRuntimeAPI = apiDefToApiPublic("ml", { api: { v1: { ml: {
	deployments: {
		"": ["getMlDeployments:GQ:", "createMlDeployment:PBJ:"],
		"{deploymentId}": {
			"": [
				"deleteMlDeployment:D:",
				"getMlDeployment:G:",
				"patchMlDeployment:ABJ:"
			],
			actions: {
				"activate-models": ["activateModelsMlDeployment:P:"],
				"deactivate-models": ["deactivateModelsMlDeployment:P:"]
			},
			aliases: {
				"": ["getMlDeploymentAliases:GQ:", "createMlDeploymentAliase:PBJ:"],
				"{aliasId}": [
					"deleteMlDeploymentAliase:D:",
					"getMlDeploymentAliase:G:",
					"patchMlDeploymentAliase:ABJ:"
				],
				"{aliasName}": { "realtime-predictions": { actions: { run: ["runMlDeploymentAliaseRealtimePredictions:PQBJ:"] } } }
			},
			"batch-predictions": {
				"": ["getMlDeploymentBatchPredictions:GQ:", "createMlDeploymentBatchPrediction:PBJ:"],
				"{batchPredictionId}": {
					"": [
						"deleteMlDeploymentBatchPrediction:D:",
						"getMlDeploymentBatchPrediction:G:",
						"patchMlDeploymentBatchPrediction:ABJ:"
					],
					actions: { predict: ["predictMlDeploymentBatchPrediction:P:"] },
					schedule: [
						"deleteMlDeploymentBatchPredictionSchedule:D:",
						"getMlDeploymentBatchPredictionSchedule:G:",
						"updateMlDeploymentBatchPredictionSchedule:ABJ:",
						"setMlDeploymentBatchPredictionSchedule:UBJ:"
					]
				}
			},
			models: { actions: {
				add: ["addMlDeploymentModels:PBJ:"],
				remove: ["removeMlDeploymentModels:PBJ:"]
			} },
			"realtime-predictions": { actions: { run: ["runMlDeploymentRealtimePredictions:PQBJ:"] } }
		}
	},
	experiments: {
		"": ["getMlExperiments:GQ:", "createMlExperiment:PBJ:"],
		"{experimentId}": {
			"": [
				"deleteMlExperiment:D:",
				"getMlExperiment:G:",
				"patchMlExperiment:ABJ:"
			],
			actions: { "recommend-models": ["recommendModelsMlExperiment:PBJ:"] },
			models: {
				"": ["getMlExperimentModels:GQ:"],
				"{modelId}": ["getMlExperimentModel:G:"]
			},
			versions: {
				"": ["getMlExperimentVersions:GQ:", "createMlExperimentVersion:PBJ:"],
				"{experimentVersionId}": [
					"deleteMlExperimentVersion:D:",
					"getMlExperimentVersion:G:",
					"patchMlExperimentVersion:ABJ:"
				]
			}
		}
	},
	jobs: { "{corrType}": { "{corrId}": { actions: { cancel: ["cancelMlJob:P:"] } } } },
	"profile-insights": {
		"": ["createMlProfileInsight:PBJ:"],
		"{dataSetId}": ["getMlProfileInsightWithQuery:GQ:", "getMlProfileInsight:G:"]
	}
} } } });
const createNotesRuntimeAPI = apiDefToApiPublic("notes", { api: { v1: { notes: { settings: ["getNotesSettings:G:", "setNotesSettings:UBJ:"] } } } });
const createNotificationsRuntimeAPI = apiDefToApiPublic("notifications", { api: { v1: { notifications: ["getNotifications:GQ:"] } } });
const createOauthClientsRuntimeAPI = apiDefToApiPublic("oauth-clients", { api: { v1: { "oauth-clients": {
	"": ["getOAuthClients:GQ:", "createOAuthClient:PBJ:"],
	"{id}": {
		"": [
			"deleteOAuthClient:D:",
			"getOAuthClient:G:",
			"patchOAuthClient:ABJ:"
		],
		actions: { publish: ["publishOAuthClient:P:"] },
		"client-secrets": {
			"": ["createOAuthClientSecret:P:"],
			"{hint}": ["deleteOAuthClientSecret:D:"]
		},
		"connection-configs": { me: [
			"deleteOAuthClientConnectionConfig:D:",
			"getOAuthClientConnectionConfig:G:",
			"patchOAuthClientConnectionConfig:ABJ:"
		] }
	}
} } } });
const createOauthTokensRuntimeAPI = apiDefToApiPublic("oauth-tokens", { api: { v1: { "oauth-tokens": {
	"": ["getOauthTokens:GQ:"],
	"{tokenId}": ["deleteOauthToken:D:"]
} } } });
const createQuestionsRuntimeAPI = apiDefToApiPublic("questions", { api: { v1: { questions: { actions: {
	ask: ["askQuestions:PBJ:"],
	filter: ["filterQuestions:PQBJ:"]
} } } } });
const createQuotasRuntimeAPI = apiDefToApiPublic("quotas", { api: { v1: { quotas: {
	"": ["getQuotas:GQ:"],
	"{id}": ["getQuota:GQ:"]
} } } });
const createReloadTasksRuntimeAPI = apiDefToApiPublic("reload-tasks", { api: { v1: { "reload-tasks": {
	"": ["getReloadTasks:GQ:", "createReloadTask:PBJ:"],
	"{taskId}": [
		"deleteReloadTask:D:",
		"getReloadTask:G:",
		"updateReloadTask:UBJ:"
	]
} } } });
const createReloadsRuntimeAPI = apiDefToApiPublic("reloads", { api: { v1: { reloads: {
	"": ["getReloads:GQ:", "queueReload:PBJ:"],
	"{reloadId}": {
		"": ["getReload:G:"],
		actions: { cancel: ["cancelReload:P:"] }
	}
} } } });
const createReportTemplatesRuntimeAPI = apiDefToApiPublic("report-templates", { api: { v1: { "report-templates": {
	"": ["getReportTemplates:GQ:", "createReportTemplate:PBJ:"],
	"{id}": {
		"": [
			"deleteReportTemplate:D:",
			"getReportTemplate:G:",
			"patchReportTemplate:ABJ:",
			"updateReportTemplate:UBJ:"
		],
		actions: { download: ["downloadReportTemplate:P:"] }
	}
} } } });
const createReportsRuntimeAPI = apiDefToApiPublic("reports", { api: { v1: { reports: {
	"": ["createReport:PBJ:"],
	"{id}": {
		outputs: ["getReportOutputs:GQ:"],
		status: ["getReportStatus:G:"]
	}
} } } });
const createRolesRuntimeAPI = apiDefToApiPublic("roles", { api: { v1: { roles: {
	"": ["getRoles:GQ:", "createRole:PBJ:"],
	"{id}": [
		"deleteRole:D:",
		"getRole:G:",
		"patchRole:ABJ:"
	]
} } } });
const createSharingTasksRuntimeAPI = apiDefToApiPublic("sharing-tasks", { api: { v1: { "sharing-tasks": {
	"": ["getSharingTasks:GQ:", "createSharingTask:PBJ:"],
	actions: { execute: ["executeSharingTasks:PBJ:"] },
	settings: [
		"getSharingTasksSettings:G:",
		"updateSharingTasksSettings:ABJ:",
		"configureSharingTasksSettings:UBJ:"
	],
	"{taskId}": {
		"": [
			"deleteSharingTask:D:",
			"getSharingTask:GQ:",
			"patchSharingTask:ABJ:"
		],
		actions: { cancel: ["cancelSharingTask:P:"] },
		executions: {
			"": ["getSharingTaskExecutions:GQ:"],
			"{executionId}": {
				"": ["getSharingTaskExecution:GQ:"],
				files: { "{fileAlias}": ["getSharingTaskExecutionFile:GQ:"] }
			}
		}
	}
} } } });
const createSpacesRuntimeAPI = apiDefToApiPublic("spaces", { api: { v1: { spaces: {
	"": ["getSpaces:GQ:", "createSpace:PBJ:"],
	types: ["getSpaceTypes:G:"],
	"{spaceId}": {
		"": [
			"deleteSpace:D:",
			"getSpace:G:",
			"patchSpace:ABJ:",
			"updateSpace:UBJ:"
		],
		assignments: {
			"": ["getSpaceAssignments:GQ:", "createSpaceAssignment:PBJ:"],
			"{assignmentId}": [
				"deleteSpaceAssignment:D:",
				"getSpaceAssignment:G:",
				"updateSpaceAssignment:UBJ:"
			]
		},
		shares: {
			"": ["getSpaceShares:GQ:", "createSpaceShare:PBJ:"],
			"{shareId}": [
				"deleteSpaceShare:D:",
				"getSpaceShare:G:",
				"patchShare:ABJ:"
			]
		}
	}
} } } });
const createTasksRuntimeAPI = apiDefToApiPublic("tasks", { api: { v1: { tasks: {
	"": ["getTasks:GQ:", "createTask:PQBJ:"],
	resources: { "{id}": { runs: ["getTasksResourceRuns:GQ:"] } },
	"{id}": {
		"": [
			"deleteTask:D:",
			"getTask:G:",
			"updateTask:UBJ:"
		],
		actions: { start: ["startTask:PQ:"] },
		runs: {
			"": ["getTaskRuns:GQ:"],
			last: ["getLastTaskRun:G:"],
			"{runId}": { log: ["getTaskRunLog:G:"] }
		}
	}
} } } });
const createTempContentsRuntimeAPI = apiDefToApiPublic("temp-contents", { api: { v1: { "temp-contents": {
	"": ["uploadTempFile:PQBO:"],
	"{id}": {
		"": ["downloadTempFile:GQ:"],
		details: ["getTempFileDetails:G:"]
	}
} } } });
const createTenantsRuntimeAPI = apiDefToApiPublic("tenants", { api: { v1: { tenants: {
	"": ["createTenant:PBJ:"],
	me: ["getMyTenant:G:"],
	"{tenantId}": {
		"": ["getTenant:G:", "patchTenant:ABJ:"],
		actions: {
			deactivate: ["deactivateTenant:PBJ:"],
			reactivate: ["reactivateTenant:PBJ:"]
		}
	}
} } } });
const createThemesRuntimeAPI = apiDefToApiPublic("themes", { api: { v1: { themes: {
	"": ["getThemes:G:", "uploadTheme:PBM:"],
	"{id}": {
		"": [
			"deleteTheme:D:",
			"getTheme:G:",
			"patchTheme:ABM:"
		],
		file: {
			"": ["downloadTheme:G:"],
			"{filepath}": ["downloadFileFromTheme:G:"]
		}
	}
} } } });
const createTransportsRuntimeAPI = apiDefToApiPublic("transports", { api: { v1: { transports: { "email-config": {
	"": [
		"deleteEmailConfig:D:",
		"getEmailConfig:G:",
		"patchEmailConfig:ABJ:"
	],
	actions: {
		"send-test-email": ["sendTestEmail:PBJ:"],
		validate: ["validateEmailConfig:P:"],
		"verify-connection": ["verifyEmailConfigConnection:P:"]
	}
} } } } });
const createUiConfigRuntimeAPI = apiDefToApiPublic("ui-config", { api: { v1: { "ui-config": { "pinned-links": {
	"": ["getUiConfigPinnedLinks:G:", "createUiConfigPinnedLink:PBJ:"],
	actions: {
		"bulk-create-pinned-links": ["createUiConfigPinnedLinks:PBJ:"],
		"delete-all-pinned-links": ["deleteAllUiConfigPinnedLinks:P:"]
	},
	"{id}": [
		"deleteUiConfigPinnedLink:D:",
		"getUiConfigPinnedLink:G:",
		"patchUiConfigPinnedLink:ABJ:"
	]
} } } } });
const createUsersRuntimeAPI = apiDefToApiPublic("users", { api: { v1: { users: {
	"": ["getUsers:GQ:", "createUser:PBJ:"],
	actions: {
		count: ["countUsers:GQ:"],
		filter: ["filterUsers:PQBJ:"],
		invite: ["inviteUsers:PBJ:"]
	},
	me: ["getMyUser:G:"],
	"{userId}": [
		"deleteUser:D:",
		"getUser:GQ:",
		"patchUser:ABJ:"
	]
} } } });
const createWebIntegrationsRuntimeAPI = apiDefToApiPublic("web-integrations", { api: { v1: { "web-integrations": {
	"": ["getWebIntegrations:GQ:", "createWebIntegration:PBJ:"],
	"{id}": [
		"deleteWebIntegration:D:",
		"getWebIntegration:G:",
		"patchWebIntegration:ABJ:"
	]
} } } });
const createWebNotificationsRuntimeAPI = apiDefToApiPublic("web-notifications", { api: { v1: { "web-notifications": {
	"": ["getNotifications:GQ:"],
	all: ["deleteNotifications:D:", "patchNotifications:ABJ:"],
	"{notificationId}": [
		"deleteNotification:D:",
		"getNotification:G:",
		"patchNotification:ABJ:"
	]
} } } });
const createWebhooksRuntimeAPI = apiDefToApiPublic("webhooks", { api: { v1: { webhooks: {
	"": ["getWebhooks:GQ:", "createWebhook:PBJ:"],
	"event-types": ["getWebhookEventTypes:G:"],
	"{id}": {
		"": [
			"deleteWebhook:D:",
			"getWebhook:G:",
			"patchWebhook:ABJ:",
			"updateWebhook:UBJ:"
		],
		deliveries: {
			"": ["getWebhookDeliveries:GQ:"],
			"{deliveryId}": {
				"": ["getWebhookDelivery:G:"],
				actions: { resend: ["resendWebhookDelivery:P:"] }
			}
		}
	}
} } } });
const auth = auth_default;
const interceptors = interceptors_default;
const qix = qix_default;
const apiKeys = createApiKeysRuntimeAPI(void 0, interceptors_default);
const apps = createAppsRuntimeAPI(void 0, interceptors_default);
const assistants = createAssistantsRuntimeAPI(void 0, interceptors_default);
const audits = createAuditsRuntimeAPI(void 0, interceptors_default);
const automationConnections = createAutomationConnectionsRuntimeAPI(void 0, interceptors_default);
const automationConnectors = createAutomationConnectorsRuntimeAPI(void 0, interceptors_default);
const automations = createAutomationsRuntimeAPI(void 0, interceptors_default);
const automlDeployments = createAutomlDeploymentsRuntimeAPI(void 0, interceptors_default);
const automlPredictions = createAutomlPredictionsRuntimeAPI(void 0, interceptors_default);
const brands = createBrandsRuntimeAPI(void 0, interceptors_default);
const collections = createCollectionsRuntimeAPI(void 0, interceptors_default);
const conditions = createConditionsRuntimeAPI(void 0, interceptors_default);
const consumption = createConsumptionRuntimeAPI(void 0, interceptors_default);
const cspOrigins = createCspOriginsRuntimeAPI(void 0, interceptors_default);
const csrfToken = createCsrfTokenRuntimeAPI(void 0, interceptors_default);
const dataAlerts = createDataAlertsRuntimeAPI(void 0, interceptors_default);
const dataAssets = createDataAssetsRuntimeAPI(void 0, interceptors_default);
const dataConnections = createDataConnectionsRuntimeAPI(void 0, interceptors_default);
const dataCredentials = createDataCredentialsRuntimeAPI(void 0, interceptors_default);
const dataFiles = createDataFilesRuntimeAPI(void 0, interceptors_default);
const dataQualities = createDataQualitiesRuntimeAPI(void 0, interceptors_default);
const dataSets = createDataSetsRuntimeAPI(void 0, interceptors_default);
const dataSources = createDataSourcesRuntimeAPI(void 0, interceptors_default);
const dataStores = createDataStoresRuntimeAPI(void 0, interceptors_default);
const dcaas = createDcaasRuntimeAPI(void 0, interceptors_default);
const diProjects = createDiProjectsRuntimeAPI(void 0, interceptors_default);
const directAccessAgents = createDirectAccessAgentsRuntimeAPI(void 0, interceptors_default);
const encryption = createEncryptionRuntimeAPI(void 0, interceptors_default);
const extensions = createExtensionsRuntimeAPI(void 0, interceptors_default);
const glossaries = createGlossariesRuntimeAPI(void 0, interceptors_default);
const groups = createGroupsRuntimeAPI(void 0, interceptors_default);
const identityProviders = createIdentityProvidersRuntimeAPI(void 0, interceptors_default);
const items = createItemsRuntimeAPI(void 0, interceptors_default);
const knowledgebases = createKnowledgebasesRuntimeAPI(void 0, interceptors_default);
const licenses = createLicensesRuntimeAPI(void 0, interceptors_default);
const lineageGraphs = createLineageGraphsRuntimeAPI(void 0, interceptors_default);
const ml = createMlRuntimeAPI(void 0, interceptors_default);
const notes = createNotesRuntimeAPI(void 0, interceptors_default);
const notifications = createNotificationsRuntimeAPI(void 0, interceptors_default);
const oauthClients = createOauthClientsRuntimeAPI(void 0, interceptors_default);
const oauthTokens = createOauthTokensRuntimeAPI(void 0, interceptors_default);
const questions = createQuestionsRuntimeAPI(void 0, interceptors_default);
const quotas = createQuotasRuntimeAPI(void 0, interceptors_default);
const reloadTasks = createReloadTasksRuntimeAPI(void 0, interceptors_default);
const reloads = createReloadsRuntimeAPI(void 0, interceptors_default);
const reportTemplates = createReportTemplatesRuntimeAPI(void 0, interceptors_default);
const reports = createReportsRuntimeAPI(void 0, interceptors_default);
const roles = createRolesRuntimeAPI(void 0, interceptors_default);
const sharingTasks = createSharingTasksRuntimeAPI(void 0, interceptors_default);
const spaces = createSpacesRuntimeAPI(void 0, interceptors_default);
const tasks = createTasksRuntimeAPI(void 0, interceptors_default);
const tempContents = createTempContentsRuntimeAPI(void 0, interceptors_default);
const tenants = createTenantsRuntimeAPI(void 0, interceptors_default);
const themes = createThemesRuntimeAPI(void 0, interceptors_default);
const transports = createTransportsRuntimeAPI(void 0, interceptors_default);
const uiConfig = createUiConfigRuntimeAPI(void 0, interceptors_default);
const users = createUsersRuntimeAPI(void 0, interceptors_default);
const webIntegrations = createWebIntegrationsRuntimeAPI(void 0, interceptors_default);
const webNotifications = createWebNotificationsRuntimeAPI(void 0, interceptors_default);
const webhooks = createWebhooksRuntimeAPI(void 0, interceptors_default);
const createQlikApi = (props) => {
	const scopedInterceptors = interceptors_default.createInterceptors();
	return {
		auth: auth_default,
		interceptors: scopedInterceptors,
		qix: qix_default.withHostConfig(props?.hostConfig),
		apiKeys: createApiKeysRuntimeAPI(props?.hostConfig, scopedInterceptors),
		apps: createAppsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		assistants: createAssistantsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		audits: createAuditsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		automationConnections: createAutomationConnectionsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		automationConnectors: createAutomationConnectorsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		automations: createAutomationsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		automlDeployments: createAutomlDeploymentsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		automlPredictions: createAutomlPredictionsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		brands: createBrandsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		collections: createCollectionsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		conditions: createConditionsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		consumption: createConsumptionRuntimeAPI(props?.hostConfig, scopedInterceptors),
		cspOrigins: createCspOriginsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		csrfToken: createCsrfTokenRuntimeAPI(props?.hostConfig, scopedInterceptors),
		dataAlerts: createDataAlertsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		dataAssets: createDataAssetsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		dataConnections: createDataConnectionsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		dataCredentials: createDataCredentialsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		dataFiles: createDataFilesRuntimeAPI(props?.hostConfig, scopedInterceptors),
		dataQualities: createDataQualitiesRuntimeAPI(props?.hostConfig, scopedInterceptors),
		dataSets: createDataSetsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		dataSources: createDataSourcesRuntimeAPI(props?.hostConfig, scopedInterceptors),
		dataStores: createDataStoresRuntimeAPI(props?.hostConfig, scopedInterceptors),
		dcaas: createDcaasRuntimeAPI(props?.hostConfig, scopedInterceptors),
		diProjects: createDiProjectsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		directAccessAgents: createDirectAccessAgentsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		encryption: createEncryptionRuntimeAPI(props?.hostConfig, scopedInterceptors),
		extensions: createExtensionsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		glossaries: createGlossariesRuntimeAPI(props?.hostConfig, scopedInterceptors),
		groups: createGroupsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		identityProviders: createIdentityProvidersRuntimeAPI(props?.hostConfig, scopedInterceptors),
		items: createItemsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		knowledgebases: createKnowledgebasesRuntimeAPI(props?.hostConfig, scopedInterceptors),
		licenses: createLicensesRuntimeAPI(props?.hostConfig, scopedInterceptors),
		lineageGraphs: createLineageGraphsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		ml: createMlRuntimeAPI(props?.hostConfig, scopedInterceptors),
		notes: createNotesRuntimeAPI(props?.hostConfig, scopedInterceptors),
		notifications: createNotificationsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		oauthClients: createOauthClientsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		oauthTokens: createOauthTokensRuntimeAPI(props?.hostConfig, scopedInterceptors),
		questions: createQuestionsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		quotas: createQuotasRuntimeAPI(props?.hostConfig, scopedInterceptors),
		reloadTasks: createReloadTasksRuntimeAPI(props?.hostConfig, scopedInterceptors),
		reloads: createReloadsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		reportTemplates: createReportTemplatesRuntimeAPI(props?.hostConfig, scopedInterceptors),
		reports: createReportsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		roles: createRolesRuntimeAPI(props?.hostConfig, scopedInterceptors),
		sharingTasks: createSharingTasksRuntimeAPI(props?.hostConfig, scopedInterceptors),
		spaces: createSpacesRuntimeAPI(props?.hostConfig, scopedInterceptors),
		tasks: createTasksRuntimeAPI(props?.hostConfig, scopedInterceptors),
		tempContents: createTempContentsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		tenants: createTenantsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		themes: createThemesRuntimeAPI(props?.hostConfig, scopedInterceptors),
		transports: createTransportsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		uiConfig: createUiConfigRuntimeAPI(props?.hostConfig, scopedInterceptors),
		users: createUsersRuntimeAPI(props?.hostConfig, scopedInterceptors),
		webIntegrations: createWebIntegrationsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		webNotifications: createWebNotificationsRuntimeAPI(props?.hostConfig, scopedInterceptors),
		webhooks: createWebhooksRuntimeAPI(props?.hostConfig, scopedInterceptors)
	};
};
/** Javascript/Typescript bindings to Qlik's platform API's */
const api = {
	auth,
	interceptors,
	qix,
	apiKeys,
	apps,
	assistants,
	audits,
	automationConnections,
	automationConnectors,
	automations,
	automlDeployments,
	automlPredictions,
	brands,
	collections,
	conditions,
	consumption,
	cspOrigins,
	csrfToken,
	dataAlerts,
	dataAssets,
	dataConnections,
	dataCredentials,
	dataFiles,
	dataQualities,
	dataSets,
	dataSources,
	dataStores,
	dcaas,
	diProjects,
	directAccessAgents,
	encryption,
	extensions,
	glossaries,
	groups,
	identityProviders,
	items,
	knowledgebases,
	licenses,
	lineageGraphs,
	ml,
	notes,
	notifications,
	oauthClients,
	oauthTokens,
	questions,
	quotas,
	reloadTasks,
	reloads,
	reportTemplates,
	reports,
	roles,
	sharingTasks,
	spaces,
	tasks,
	tempContents,
	tenants,
	themes,
	transports,
	uiConfig,
	users,
	webIntegrations,
	webNotifications,
	webhooks,
	createQlikApi
};
var public_default = api;

//#endregion
export { apiKeys, apps, assistants, audits, auth, automationConnections, automationConnectors, automations, automlDeployments, automlPredictions, brands, collections, conditions, consumption, createQlikApi, cspOrigins, csrfToken, dataAlerts, dataAssets, dataConnections, dataCredentials, dataFiles, dataQualities, dataSets, dataSources, dataStores, dcaas, public_default as default, diProjects, directAccessAgents, encryption, extensions, glossaries, groups, identityProviders, interceptors, items, knowledgebases, licenses, lineageGraphs, ml, notes, notifications, oauthClients, oauthTokens, qix, questions, quotas, reloadTasks, reloads, reportTemplates, reports, roles, sharingTasks, spaces, tasks, tempContents, tenants, themes, transports, uiConfig, users, webIntegrations, webNotifications, webhooks };