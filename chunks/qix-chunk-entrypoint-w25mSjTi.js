import { createResolvablePromise as createResolvablePromise$1, isNode } from "./utils-1j8VpsDa.js";
import "./interceptors-D4JOaDrv.js";
import "./global-types-BGMD2sDY.js";
import "./auth-types-B0Z-Reol.js";
import { appendQueryToUrl, exposeInternalApiOnWindow, generateRandomString, getRestCallAuthParams, getWebSocketAuthParams, handleAuthenticationError, isWindows, toValidWebsocketLocationUrl } from "./auth-functions-By9Ryr3H.js";
import { getHumanReadableSocketClosedErrorMessage } from "./websocket-errors-CnW4OQWd.js";
import isPlainObject from "lodash/isPlainObject.js";
import merge from "lodash/merge.js";
import originalExtend from "extend";

//#region src/qix/session/schema/engine-api.js
var engine_api_default = {
	structs: {
		Field: {
			GetCardinal: {
				In: [],
				Out: []
			},
			GetAndMode: {
				In: [],
				Out: []
			},
			SelectValues: {
				In: [
					{
						Name: "qFieldValues",
						DefaultValue: [{
							qText: "",
							qIsNumeric: false,
							qNumber: 0
						}]
					},
					{
						Name: "qToggleMode",
						DefaultValue: false,
						Optional: true
					},
					{
						Name: "qSoftLock",
						DefaultValue: false,
						Optional: true
					}
				],
				Out: []
			},
			Select: {
				In: [
					{
						Name: "qMatch",
						DefaultValue: ""
					},
					{
						Name: "qSoftLock",
						DefaultValue: false,
						Optional: true
					},
					{
						Name: "qExcludedValuesMode",
						DefaultValue: 0,
						Optional: true
					}
				],
				Out: []
			},
			ToggleSelect: {
				In: [
					{
						Name: "qMatch",
						DefaultValue: ""
					},
					{
						Name: "qSoftLock",
						DefaultValue: false,
						Optional: true
					},
					{
						Name: "qExcludedValuesMode",
						DefaultValue: 0,
						Optional: true
					}
				],
				Out: []
			},
			ClearAllButThis: {
				In: [{
					Name: "qSoftLock",
					DefaultValue: false,
					Optional: true
				}],
				Out: []
			},
			SelectPossible: {
				In: [{
					Name: "qSoftLock",
					DefaultValue: false,
					Optional: true
				}],
				Out: []
			},
			SelectExcluded: {
				In: [{
					Name: "qSoftLock",
					DefaultValue: false,
					Optional: true
				}],
				Out: []
			},
			SelectAll: {
				In: [{
					Name: "qSoftLock",
					DefaultValue: false,
					Optional: true
				}],
				Out: []
			},
			Lock: {
				In: [],
				Out: []
			},
			Unlock: {
				In: [],
				Out: []
			},
			GetNxProperties: {
				In: [],
				Out: [{ Name: "qProperties" }]
			},
			SetNxProperties: {
				In: [{
					Name: "qProperties",
					DefaultValue: { qOneAndOnlyOne: false }
				}],
				Out: []
			},
			SetAndMode: {
				In: [{
					Name: "qAndMode",
					DefaultValue: false
				}],
				Out: []
			},
			SelectAlternative: {
				In: [{
					Name: "qSoftLock",
					DefaultValue: false,
					Optional: true
				}],
				Out: []
			},
			LowLevelSelect: {
				In: [
					{
						Name: "qValues",
						DefaultValue: [0]
					},
					{
						Name: "qToggleMode",
						DefaultValue: false
					},
					{
						Name: "qSoftLock",
						DefaultValue: false,
						Optional: true
					}
				],
				Out: []
			},
			Clear: {
				In: [],
				Out: []
			}
		},
		Variable: {
			GetContent: {
				In: [],
				Out: [{ Name: "qContent" }]
			},
			GetRawContent: {
				In: [],
				Out: []
			},
			SetContent: {
				In: [{
					Name: "qContent",
					DefaultValue: ""
				}, {
					Name: "qUpdateMRU",
					DefaultValue: false
				}],
				Out: []
			},
			ForceContent: {
				In: [{
					Name: "qs",
					DefaultValue: ""
				}, {
					Name: "qd",
					DefaultValue: 0
				}],
				Out: []
			},
			GetNxProperties: {
				In: [],
				Out: [{ Name: "qProperties" }]
			},
			SetNxProperties: {
				In: [{
					Name: "qProperties",
					DefaultValue: {
						qName: "",
						qNumberPresentation: {
							qType: 0,
							qnDec: 0,
							qUseThou: 0,
							qFmt: "",
							qDec: "",
							qThou: ""
						},
						qIncludeInBookmark: false,
						qUsePredefListedValues: false,
						qPreDefinedList: [""]
					}
				}],
				Out: []
			}
		},
		SheetObject: {
			SetFrameDef: {
				In: [{
					Name: "qFrame",
					DefaultValue: {
						qBorderWidth: 0,
						qBorderEffect: 0,
						qColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qCaptionFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qName: { qv: "" },
						qInternalCtlNo: 0,
						qRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qBmp_OBSOLETE: [0],
						qBmpMode_OBSOLETE: 0,
						qMinimizedRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qShowMode: 0,
						qDetached: false,
						qAllowMinimize: false,
						qAutoMinimize: false,
						qAllowMaximize: false,
						qAllowInfo: false,
						qPrintIcon: false,
						qCopyIcon: false,
						qXLIcon: false,
						qSearchIcon: false,
						qSelectPossibleIcon: false,
						qSelectExcludedIcon: false,
						qSelectAllIcon: false,
						qClearIcon: false,
						qClearOtherIcon: false,
						qLockIcon: false,
						qHelpText: { qv: "" },
						qObjectId: "",
						qZedLevel: 0,
						qShrinkFrameToData: false,
						qShowCaption: false,
						qMultiLine: 0,
						qActiveBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qActiveFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFixCorner: false,
						qFixCornerSize: 0,
						qRelCornerSize: 0,
						qPower: 0,
						qRoundedShape: false,
						qEnableTopLeftRounded: false,
						qEnableTopRightRounded: false,
						qEnableBottomLeftRounded: false,
						qEnableBottomRightRounded: false,
						qLight: 0,
						qDark: 0,
						qRainbow: false,
						qTextAdjustHorizontal: 0,
						qTextAdjustVertical: 0,
						qShow: {
							qAlways: false,
							qExpression: { qv: "" }
						},
						qOnActivateMacro_OBSOLETE: "",
						qOnDeactivateMacro_OBSOLETE: "",
						qAllowMoveSize: false,
						qAllowCopyClone: false,
						qdummy: [false],
						qCustomObjectGuid: [0],
						qCustomObjectProperties: [0],
						qScrollBkgColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollButtonColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollStyle: 0,
						qScrollWidth: 0,
						qIconColor_OBSOLETE: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qIconStyle_OBSOLETE: 0,
						qAllowModify: false,
						qCopyImageIcon: false,
						qPreserveScrollPosition: false,
						qShadowIntensity: 0,
						qOnActivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qOnDeactivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qExtension: "",
						qBackground: {
							qColor: {
								qMode: 0,
								qLuminosity: 0,
								qFillDirection: 0,
								qFillPattern: 0,
								qPrimaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qSecondaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qAlpha: 0
							},
							qImageBlob: [0],
							qImageLayout: {
								qStretchMode: 0,
								qHorizontalAdjust: 0,
								qVerticalAdjust: 0,
								qAlpha: 0
							},
							qUseColor: false,
							qUseImage: false
						},
						qMenuIcon: false,
						qExtendedProperties: [{
							qName: "",
							qValue: ""
						}],
						qExtendedValues: [{
							qName: "",
							qValue: { qv: "" }
						}],
						qStateName: ""
					}
				}],
				Out: []
			},
			GetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qIn",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						}
					}
				}],
				Out: [{ Name: "qData" }]
			},
			SetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qData",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						},
						qExpansionInfo: [{
							qExcludeList: false,
							qPos: {
								qDimName: "",
								qElemNo: [0],
								qElemValues: [[0]]
							}
						}],
						qLeftCollapsed: false,
						qTopCollapsed: false,
						qSortData: [{
							qName: "",
							qReversed: false
						}],
						qDimensionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qExpressionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qUseGraphMode: false,
						qGraphMode: 0,
						qActiveContainerChildObjectId: "",
						qExtendedPivotState: {
							qExpressionPosition: 0,
							qNumberOfLeftDimensions: 0,
							qDimensionNames: [""],
							qEnableConditions: [""]
						}
					}
				}],
				Out: []
			},
			GetCellsDataForExport: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qData" }]
			},
			GetCellsLayoutForExport: {
				In: [],
				Out: [{ Name: "qLayout" }]
			}
		},
		CustomDropDown: {
			SetFrameDef: {
				In: [{
					Name: "qFrame",
					DefaultValue: {
						qBorderWidth: 0,
						qBorderEffect: 0,
						qColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qCaptionFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qName: { qv: "" },
						qInternalCtlNo: 0,
						qRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qBmp_OBSOLETE: [0],
						qBmpMode_OBSOLETE: 0,
						qMinimizedRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qShowMode: 0,
						qDetached: false,
						qAllowMinimize: false,
						qAutoMinimize: false,
						qAllowMaximize: false,
						qAllowInfo: false,
						qPrintIcon: false,
						qCopyIcon: false,
						qXLIcon: false,
						qSearchIcon: false,
						qSelectPossibleIcon: false,
						qSelectExcludedIcon: false,
						qSelectAllIcon: false,
						qClearIcon: false,
						qClearOtherIcon: false,
						qLockIcon: false,
						qHelpText: { qv: "" },
						qObjectId: "",
						qZedLevel: 0,
						qShrinkFrameToData: false,
						qShowCaption: false,
						qMultiLine: 0,
						qActiveBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qActiveFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFixCorner: false,
						qFixCornerSize: 0,
						qRelCornerSize: 0,
						qPower: 0,
						qRoundedShape: false,
						qEnableTopLeftRounded: false,
						qEnableTopRightRounded: false,
						qEnableBottomLeftRounded: false,
						qEnableBottomRightRounded: false,
						qLight: 0,
						qDark: 0,
						qRainbow: false,
						qTextAdjustHorizontal: 0,
						qTextAdjustVertical: 0,
						qShow: {
							qAlways: false,
							qExpression: { qv: "" }
						},
						qOnActivateMacro_OBSOLETE: "",
						qOnDeactivateMacro_OBSOLETE: "",
						qAllowMoveSize: false,
						qAllowCopyClone: false,
						qdummy: [false],
						qCustomObjectGuid: [0],
						qCustomObjectProperties: [0],
						qScrollBkgColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollButtonColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollStyle: 0,
						qScrollWidth: 0,
						qIconColor_OBSOLETE: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qIconStyle_OBSOLETE: 0,
						qAllowModify: false,
						qCopyImageIcon: false,
						qPreserveScrollPosition: false,
						qShadowIntensity: 0,
						qOnActivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qOnDeactivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qExtension: "",
						qBackground: {
							qColor: {
								qMode: 0,
								qLuminosity: 0,
								qFillDirection: 0,
								qFillPattern: 0,
								qPrimaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qSecondaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qAlpha: 0
							},
							qImageBlob: [0],
							qImageLayout: {
								qStretchMode: 0,
								qHorizontalAdjust: 0,
								qVerticalAdjust: 0,
								qAlpha: 0
							},
							qUseColor: false,
							qUseImage: false
						},
						qMenuIcon: false,
						qExtendedProperties: [{
							qName: "",
							qValue: ""
						}],
						qExtendedValues: [{
							qName: "",
							qValue: { qv: "" }
						}],
						qStateName: ""
					}
				}],
				Out: []
			},
			GetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qIn",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						}
					}
				}],
				Out: [{ Name: "qData" }]
			},
			SetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qData",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						},
						qExpansionInfo: [{
							qExcludeList: false,
							qPos: {
								qDimName: "",
								qElemNo: [0],
								qElemValues: [[0]]
							}
						}],
						qLeftCollapsed: false,
						qTopCollapsed: false,
						qSortData: [{
							qName: "",
							qReversed: false
						}],
						qDimensionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qExpressionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qUseGraphMode: false,
						qGraphMode: 0,
						qActiveContainerChildObjectId: "",
						qExtendedPivotState: {
							qExpressionPosition: 0,
							qNumberOfLeftDimensions: 0,
							qDimensionNames: [""],
							qEnableConditions: [""]
						}
					}
				}],
				Out: []
			},
			GetCellsDataForExport: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qData" }]
			},
			GetCellsLayoutForExport: {
				In: [],
				Out: [{ Name: "qLayout" }]
			}
		},
		GraphBasics: {
			SetFrameDef: {
				In: [{
					Name: "qFrame",
					DefaultValue: {
						qBorderWidth: 0,
						qBorderEffect: 0,
						qColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qCaptionFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qName: { qv: "" },
						qInternalCtlNo: 0,
						qRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qBmp_OBSOLETE: [0],
						qBmpMode_OBSOLETE: 0,
						qMinimizedRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qShowMode: 0,
						qDetached: false,
						qAllowMinimize: false,
						qAutoMinimize: false,
						qAllowMaximize: false,
						qAllowInfo: false,
						qPrintIcon: false,
						qCopyIcon: false,
						qXLIcon: false,
						qSearchIcon: false,
						qSelectPossibleIcon: false,
						qSelectExcludedIcon: false,
						qSelectAllIcon: false,
						qClearIcon: false,
						qClearOtherIcon: false,
						qLockIcon: false,
						qHelpText: { qv: "" },
						qObjectId: "",
						qZedLevel: 0,
						qShrinkFrameToData: false,
						qShowCaption: false,
						qMultiLine: 0,
						qActiveBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qActiveFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFixCorner: false,
						qFixCornerSize: 0,
						qRelCornerSize: 0,
						qPower: 0,
						qRoundedShape: false,
						qEnableTopLeftRounded: false,
						qEnableTopRightRounded: false,
						qEnableBottomLeftRounded: false,
						qEnableBottomRightRounded: false,
						qLight: 0,
						qDark: 0,
						qRainbow: false,
						qTextAdjustHorizontal: 0,
						qTextAdjustVertical: 0,
						qShow: {
							qAlways: false,
							qExpression: { qv: "" }
						},
						qOnActivateMacro_OBSOLETE: "",
						qOnDeactivateMacro_OBSOLETE: "",
						qAllowMoveSize: false,
						qAllowCopyClone: false,
						qdummy: [false],
						qCustomObjectGuid: [0],
						qCustomObjectProperties: [0],
						qScrollBkgColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollButtonColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollStyle: 0,
						qScrollWidth: 0,
						qIconColor_OBSOLETE: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qIconStyle_OBSOLETE: 0,
						qAllowModify: false,
						qCopyImageIcon: false,
						qPreserveScrollPosition: false,
						qShadowIntensity: 0,
						qOnActivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qOnDeactivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qExtension: "",
						qBackground: {
							qColor: {
								qMode: 0,
								qLuminosity: 0,
								qFillDirection: 0,
								qFillPattern: 0,
								qPrimaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qSecondaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qAlpha: 0
							},
							qImageBlob: [0],
							qImageLayout: {
								qStretchMode: 0,
								qHorizontalAdjust: 0,
								qVerticalAdjust: 0,
								qAlpha: 0
							},
							qUseColor: false,
							qUseImage: false
						},
						qMenuIcon: false,
						qExtendedProperties: [{
							qName: "",
							qValue: ""
						}],
						qExtendedValues: [{
							qName: "",
							qValue: { qv: "" }
						}],
						qStateName: ""
					}
				}],
				Out: []
			},
			GetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qIn",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						}
					}
				}],
				Out: [{ Name: "qData" }]
			},
			SetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qData",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						},
						qExpansionInfo: [{
							qExcludeList: false,
							qPos: {
								qDimName: "",
								qElemNo: [0],
								qElemValues: [[0]]
							}
						}],
						qLeftCollapsed: false,
						qTopCollapsed: false,
						qSortData: [{
							qName: "",
							qReversed: false
						}],
						qDimensionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qExpressionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qUseGraphMode: false,
						qGraphMode: 0,
						qActiveContainerChildObjectId: "",
						qExtendedPivotState: {
							qExpressionPosition: 0,
							qNumberOfLeftDimensions: 0,
							qDimensionNames: [""],
							qEnableConditions: [""]
						}
					}
				}],
				Out: []
			},
			GetCellsDataForExport: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qData" }]
			},
			GetCellsLayoutForExport: {
				In: [],
				Out: [{ Name: "qLayout" }]
			}
		},
		Graph: {
			SetFrameDef: {
				In: [{
					Name: "qFrame",
					DefaultValue: {
						qBorderWidth: 0,
						qBorderEffect: 0,
						qColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qCaptionFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qName: { qv: "" },
						qInternalCtlNo: 0,
						qRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qBmp_OBSOLETE: [0],
						qBmpMode_OBSOLETE: 0,
						qMinimizedRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qShowMode: 0,
						qDetached: false,
						qAllowMinimize: false,
						qAutoMinimize: false,
						qAllowMaximize: false,
						qAllowInfo: false,
						qPrintIcon: false,
						qCopyIcon: false,
						qXLIcon: false,
						qSearchIcon: false,
						qSelectPossibleIcon: false,
						qSelectExcludedIcon: false,
						qSelectAllIcon: false,
						qClearIcon: false,
						qClearOtherIcon: false,
						qLockIcon: false,
						qHelpText: { qv: "" },
						qObjectId: "",
						qZedLevel: 0,
						qShrinkFrameToData: false,
						qShowCaption: false,
						qMultiLine: 0,
						qActiveBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qActiveFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFixCorner: false,
						qFixCornerSize: 0,
						qRelCornerSize: 0,
						qPower: 0,
						qRoundedShape: false,
						qEnableTopLeftRounded: false,
						qEnableTopRightRounded: false,
						qEnableBottomLeftRounded: false,
						qEnableBottomRightRounded: false,
						qLight: 0,
						qDark: 0,
						qRainbow: false,
						qTextAdjustHorizontal: 0,
						qTextAdjustVertical: 0,
						qShow: {
							qAlways: false,
							qExpression: { qv: "" }
						},
						qOnActivateMacro_OBSOLETE: "",
						qOnDeactivateMacro_OBSOLETE: "",
						qAllowMoveSize: false,
						qAllowCopyClone: false,
						qdummy: [false],
						qCustomObjectGuid: [0],
						qCustomObjectProperties: [0],
						qScrollBkgColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollButtonColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollStyle: 0,
						qScrollWidth: 0,
						qIconColor_OBSOLETE: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qIconStyle_OBSOLETE: 0,
						qAllowModify: false,
						qCopyImageIcon: false,
						qPreserveScrollPosition: false,
						qShadowIntensity: 0,
						qOnActivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qOnDeactivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qExtension: "",
						qBackground: {
							qColor: {
								qMode: 0,
								qLuminosity: 0,
								qFillDirection: 0,
								qFillPattern: 0,
								qPrimaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qSecondaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qAlpha: 0
							},
							qImageBlob: [0],
							qImageLayout: {
								qStretchMode: 0,
								qHorizontalAdjust: 0,
								qVerticalAdjust: 0,
								qAlpha: 0
							},
							qUseColor: false,
							qUseImage: false
						},
						qMenuIcon: false,
						qExtendedProperties: [{
							qName: "",
							qValue: ""
						}],
						qExtendedValues: [{
							qName: "",
							qValue: { qv: "" }
						}],
						qStateName: ""
					}
				}],
				Out: []
			},
			GetRowCount: {
				In: [],
				Out: []
			},
			GetColumnCount: {
				In: [],
				Out: []
			},
			GetCells: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qCells" }]
			},
			GetTableInfo: {
				In: [],
				Out: [{ Name: "qTableInfo" }]
			},
			GetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qIn",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						}
					}
				}],
				Out: [{ Name: "qData" }]
			},
			SetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qData",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						},
						qExpansionInfo: [{
							qExcludeList: false,
							qPos: {
								qDimName: "",
								qElemNo: [0],
								qElemValues: [[0]]
							}
						}],
						qLeftCollapsed: false,
						qTopCollapsed: false,
						qSortData: [{
							qName: "",
							qReversed: false
						}],
						qDimensionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qExpressionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qUseGraphMode: false,
						qGraphMode: 0,
						qActiveContainerChildObjectId: "",
						qExtendedPivotState: {
							qExpressionPosition: 0,
							qNumberOfLeftDimensions: 0,
							qDimensionNames: [""],
							qEnableConditions: [""]
						}
					}
				}],
				Out: []
			},
			GetCellsDataForExport: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qData" }]
			},
			GetCellsLayoutForExport: {
				In: [],
				Out: [{ Name: "qLayout" }]
			}
		},
		StraightTableBox: {
			GetRowCount: {
				In: [],
				Out: []
			},
			GetColumnCount: {
				In: [],
				Out: []
			},
			GetCells: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qCells" }]
			},
			GetTableInfo: {
				In: [],
				Out: [{ Name: "qTableInfo" }]
			},
			SetFrameDef: {
				In: [{
					Name: "qFrame",
					DefaultValue: {
						qBorderWidth: 0,
						qBorderEffect: 0,
						qColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qCaptionFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qName: { qv: "" },
						qInternalCtlNo: 0,
						qRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qBmp_OBSOLETE: [0],
						qBmpMode_OBSOLETE: 0,
						qMinimizedRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qShowMode: 0,
						qDetached: false,
						qAllowMinimize: false,
						qAutoMinimize: false,
						qAllowMaximize: false,
						qAllowInfo: false,
						qPrintIcon: false,
						qCopyIcon: false,
						qXLIcon: false,
						qSearchIcon: false,
						qSelectPossibleIcon: false,
						qSelectExcludedIcon: false,
						qSelectAllIcon: false,
						qClearIcon: false,
						qClearOtherIcon: false,
						qLockIcon: false,
						qHelpText: { qv: "" },
						qObjectId: "",
						qZedLevel: 0,
						qShrinkFrameToData: false,
						qShowCaption: false,
						qMultiLine: 0,
						qActiveBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qActiveFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFixCorner: false,
						qFixCornerSize: 0,
						qRelCornerSize: 0,
						qPower: 0,
						qRoundedShape: false,
						qEnableTopLeftRounded: false,
						qEnableTopRightRounded: false,
						qEnableBottomLeftRounded: false,
						qEnableBottomRightRounded: false,
						qLight: 0,
						qDark: 0,
						qRainbow: false,
						qTextAdjustHorizontal: 0,
						qTextAdjustVertical: 0,
						qShow: {
							qAlways: false,
							qExpression: { qv: "" }
						},
						qOnActivateMacro_OBSOLETE: "",
						qOnDeactivateMacro_OBSOLETE: "",
						qAllowMoveSize: false,
						qAllowCopyClone: false,
						qdummy: [false],
						qCustomObjectGuid: [0],
						qCustomObjectProperties: [0],
						qScrollBkgColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollButtonColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollStyle: 0,
						qScrollWidth: 0,
						qIconColor_OBSOLETE: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qIconStyle_OBSOLETE: 0,
						qAllowModify: false,
						qCopyImageIcon: false,
						qPreserveScrollPosition: false,
						qShadowIntensity: 0,
						qOnActivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qOnDeactivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qExtension: "",
						qBackground: {
							qColor: {
								qMode: 0,
								qLuminosity: 0,
								qFillDirection: 0,
								qFillPattern: 0,
								qPrimaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qSecondaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qAlpha: 0
							},
							qImageBlob: [0],
							qImageLayout: {
								qStretchMode: 0,
								qHorizontalAdjust: 0,
								qVerticalAdjust: 0,
								qAlpha: 0
							},
							qUseColor: false,
							qUseImage: false
						},
						qMenuIcon: false,
						qExtendedProperties: [{
							qName: "",
							qValue: ""
						}],
						qExtendedValues: [{
							qName: "",
							qValue: { qv: "" }
						}],
						qStateName: ""
					}
				}],
				Out: []
			},
			GetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qIn",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						}
					}
				}],
				Out: [{ Name: "qData" }]
			},
			SetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qData",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						},
						qExpansionInfo: [{
							qExcludeList: false,
							qPos: {
								qDimName: "",
								qElemNo: [0],
								qElemValues: [[0]]
							}
						}],
						qLeftCollapsed: false,
						qTopCollapsed: false,
						qSortData: [{
							qName: "",
							qReversed: false
						}],
						qDimensionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qExpressionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qUseGraphMode: false,
						qGraphMode: 0,
						qActiveContainerChildObjectId: "",
						qExtendedPivotState: {
							qExpressionPosition: 0,
							qNumberOfLeftDimensions: 0,
							qDimensionNames: [""],
							qEnableConditions: [""]
						}
					}
				}],
				Out: []
			},
			GetCellsDataForExport: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qData" }]
			},
			GetCellsLayoutForExport: {
				In: [],
				Out: [{ Name: "qLayout" }]
			}
		},
		PivotTableBox: {
			GetRowCount: {
				In: [],
				Out: []
			},
			GetColumnCount: {
				In: [],
				Out: []
			},
			GetCells: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qCells" }]
			},
			GetTableInfo: {
				In: [],
				Out: [{ Name: "qTableInfo" }]
			},
			SetFrameDef: {
				In: [{
					Name: "qFrame",
					DefaultValue: {
						qBorderWidth: 0,
						qBorderEffect: 0,
						qColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qCaptionFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qName: { qv: "" },
						qInternalCtlNo: 0,
						qRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qBmp_OBSOLETE: [0],
						qBmpMode_OBSOLETE: 0,
						qMinimizedRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qShowMode: 0,
						qDetached: false,
						qAllowMinimize: false,
						qAutoMinimize: false,
						qAllowMaximize: false,
						qAllowInfo: false,
						qPrintIcon: false,
						qCopyIcon: false,
						qXLIcon: false,
						qSearchIcon: false,
						qSelectPossibleIcon: false,
						qSelectExcludedIcon: false,
						qSelectAllIcon: false,
						qClearIcon: false,
						qClearOtherIcon: false,
						qLockIcon: false,
						qHelpText: { qv: "" },
						qObjectId: "",
						qZedLevel: 0,
						qShrinkFrameToData: false,
						qShowCaption: false,
						qMultiLine: 0,
						qActiveBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qActiveFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFixCorner: false,
						qFixCornerSize: 0,
						qRelCornerSize: 0,
						qPower: 0,
						qRoundedShape: false,
						qEnableTopLeftRounded: false,
						qEnableTopRightRounded: false,
						qEnableBottomLeftRounded: false,
						qEnableBottomRightRounded: false,
						qLight: 0,
						qDark: 0,
						qRainbow: false,
						qTextAdjustHorizontal: 0,
						qTextAdjustVertical: 0,
						qShow: {
							qAlways: false,
							qExpression: { qv: "" }
						},
						qOnActivateMacro_OBSOLETE: "",
						qOnDeactivateMacro_OBSOLETE: "",
						qAllowMoveSize: false,
						qAllowCopyClone: false,
						qdummy: [false],
						qCustomObjectGuid: [0],
						qCustomObjectProperties: [0],
						qScrollBkgColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollButtonColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollStyle: 0,
						qScrollWidth: 0,
						qIconColor_OBSOLETE: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qIconStyle_OBSOLETE: 0,
						qAllowModify: false,
						qCopyImageIcon: false,
						qPreserveScrollPosition: false,
						qShadowIntensity: 0,
						qOnActivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qOnDeactivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qExtension: "",
						qBackground: {
							qColor: {
								qMode: 0,
								qLuminosity: 0,
								qFillDirection: 0,
								qFillPattern: 0,
								qPrimaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qSecondaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qAlpha: 0
							},
							qImageBlob: [0],
							qImageLayout: {
								qStretchMode: 0,
								qHorizontalAdjust: 0,
								qVerticalAdjust: 0,
								qAlpha: 0
							},
							qUseColor: false,
							qUseImage: false
						},
						qMenuIcon: false,
						qExtendedProperties: [{
							qName: "",
							qValue: ""
						}],
						qExtendedValues: [{
							qName: "",
							qValue: { qv: "" }
						}],
						qStateName: ""
					}
				}],
				Out: []
			},
			GetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qIn",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						}
					}
				}],
				Out: [{ Name: "qData" }]
			},
			SetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qData",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						},
						qExpansionInfo: [{
							qExcludeList: false,
							qPos: {
								qDimName: "",
								qElemNo: [0],
								qElemValues: [[0]]
							}
						}],
						qLeftCollapsed: false,
						qTopCollapsed: false,
						qSortData: [{
							qName: "",
							qReversed: false
						}],
						qDimensionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qExpressionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qUseGraphMode: false,
						qGraphMode: 0,
						qActiveContainerChildObjectId: "",
						qExtendedPivotState: {
							qExpressionPosition: 0,
							qNumberOfLeftDimensions: 0,
							qDimensionNames: [""],
							qEnableConditions: [""]
						}
					}
				}],
				Out: []
			},
			GetCellsDataForExport: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qData" }]
			},
			GetCellsLayoutForExport: {
				In: [],
				Out: [{ Name: "qLayout" }]
			}
		},
		CurrentSelection: {
			GetRowCount: {
				In: [],
				Out: []
			},
			GetColumnCount: {
				In: [],
				Out: []
			},
			GetCells: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qCells" }]
			},
			GetTableInfo: {
				In: [],
				Out: [{ Name: "qTableInfo" }]
			},
			SetFrameDef: {
				In: [{
					Name: "qFrame",
					DefaultValue: {
						qBorderWidth: 0,
						qBorderEffect: 0,
						qColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qCaptionFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qName: { qv: "" },
						qInternalCtlNo: 0,
						qRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qBmp_OBSOLETE: [0],
						qBmpMode_OBSOLETE: 0,
						qMinimizedRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qShowMode: 0,
						qDetached: false,
						qAllowMinimize: false,
						qAutoMinimize: false,
						qAllowMaximize: false,
						qAllowInfo: false,
						qPrintIcon: false,
						qCopyIcon: false,
						qXLIcon: false,
						qSearchIcon: false,
						qSelectPossibleIcon: false,
						qSelectExcludedIcon: false,
						qSelectAllIcon: false,
						qClearIcon: false,
						qClearOtherIcon: false,
						qLockIcon: false,
						qHelpText: { qv: "" },
						qObjectId: "",
						qZedLevel: 0,
						qShrinkFrameToData: false,
						qShowCaption: false,
						qMultiLine: 0,
						qActiveBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qActiveFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFixCorner: false,
						qFixCornerSize: 0,
						qRelCornerSize: 0,
						qPower: 0,
						qRoundedShape: false,
						qEnableTopLeftRounded: false,
						qEnableTopRightRounded: false,
						qEnableBottomLeftRounded: false,
						qEnableBottomRightRounded: false,
						qLight: 0,
						qDark: 0,
						qRainbow: false,
						qTextAdjustHorizontal: 0,
						qTextAdjustVertical: 0,
						qShow: {
							qAlways: false,
							qExpression: { qv: "" }
						},
						qOnActivateMacro_OBSOLETE: "",
						qOnDeactivateMacro_OBSOLETE: "",
						qAllowMoveSize: false,
						qAllowCopyClone: false,
						qdummy: [false],
						qCustomObjectGuid: [0],
						qCustomObjectProperties: [0],
						qScrollBkgColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollButtonColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollStyle: 0,
						qScrollWidth: 0,
						qIconColor_OBSOLETE: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qIconStyle_OBSOLETE: 0,
						qAllowModify: false,
						qCopyImageIcon: false,
						qPreserveScrollPosition: false,
						qShadowIntensity: 0,
						qOnActivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qOnDeactivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qExtension: "",
						qBackground: {
							qColor: {
								qMode: 0,
								qLuminosity: 0,
								qFillDirection: 0,
								qFillPattern: 0,
								qPrimaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qSecondaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qAlpha: 0
							},
							qImageBlob: [0],
							qImageLayout: {
								qStretchMode: 0,
								qHorizontalAdjust: 0,
								qVerticalAdjust: 0,
								qAlpha: 0
							},
							qUseColor: false,
							qUseImage: false
						},
						qMenuIcon: false,
						qExtendedProperties: [{
							qName: "",
							qValue: ""
						}],
						qExtendedValues: [{
							qName: "",
							qValue: { qv: "" }
						}],
						qStateName: ""
					}
				}],
				Out: []
			},
			GetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qIn",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						}
					}
				}],
				Out: [{ Name: "qData" }]
			},
			SetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qData",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						},
						qExpansionInfo: [{
							qExcludeList: false,
							qPos: {
								qDimName: "",
								qElemNo: [0],
								qElemValues: [[0]]
							}
						}],
						qLeftCollapsed: false,
						qTopCollapsed: false,
						qSortData: [{
							qName: "",
							qReversed: false
						}],
						qDimensionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qExpressionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qUseGraphMode: false,
						qGraphMode: 0,
						qActiveContainerChildObjectId: "",
						qExtendedPivotState: {
							qExpressionPosition: 0,
							qNumberOfLeftDimensions: 0,
							qDimensionNames: [""],
							qEnableConditions: [""]
						}
					}
				}],
				Out: []
			},
			GetCellsDataForExport: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qData" }]
			},
			GetCellsLayoutForExport: {
				In: [],
				Out: [{ Name: "qLayout" }]
			}
		},
		InputBox: {
			SetFrameDef: {
				In: [{
					Name: "qFrame",
					DefaultValue: {
						qBorderWidth: 0,
						qBorderEffect: 0,
						qColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qCaptionFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qName: { qv: "" },
						qInternalCtlNo: 0,
						qRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qBmp_OBSOLETE: [0],
						qBmpMode_OBSOLETE: 0,
						qMinimizedRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qShowMode: 0,
						qDetached: false,
						qAllowMinimize: false,
						qAutoMinimize: false,
						qAllowMaximize: false,
						qAllowInfo: false,
						qPrintIcon: false,
						qCopyIcon: false,
						qXLIcon: false,
						qSearchIcon: false,
						qSelectPossibleIcon: false,
						qSelectExcludedIcon: false,
						qSelectAllIcon: false,
						qClearIcon: false,
						qClearOtherIcon: false,
						qLockIcon: false,
						qHelpText: { qv: "" },
						qObjectId: "",
						qZedLevel: 0,
						qShrinkFrameToData: false,
						qShowCaption: false,
						qMultiLine: 0,
						qActiveBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qActiveFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFixCorner: false,
						qFixCornerSize: 0,
						qRelCornerSize: 0,
						qPower: 0,
						qRoundedShape: false,
						qEnableTopLeftRounded: false,
						qEnableTopRightRounded: false,
						qEnableBottomLeftRounded: false,
						qEnableBottomRightRounded: false,
						qLight: 0,
						qDark: 0,
						qRainbow: false,
						qTextAdjustHorizontal: 0,
						qTextAdjustVertical: 0,
						qShow: {
							qAlways: false,
							qExpression: { qv: "" }
						},
						qOnActivateMacro_OBSOLETE: "",
						qOnDeactivateMacro_OBSOLETE: "",
						qAllowMoveSize: false,
						qAllowCopyClone: false,
						qdummy: [false],
						qCustomObjectGuid: [0],
						qCustomObjectProperties: [0],
						qScrollBkgColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollButtonColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollStyle: 0,
						qScrollWidth: 0,
						qIconColor_OBSOLETE: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qIconStyle_OBSOLETE: 0,
						qAllowModify: false,
						qCopyImageIcon: false,
						qPreserveScrollPosition: false,
						qShadowIntensity: 0,
						qOnActivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qOnDeactivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qExtension: "",
						qBackground: {
							qColor: {
								qMode: 0,
								qLuminosity: 0,
								qFillDirection: 0,
								qFillPattern: 0,
								qPrimaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qSecondaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qAlpha: 0
							},
							qImageBlob: [0],
							qImageLayout: {
								qStretchMode: 0,
								qHorizontalAdjust: 0,
								qVerticalAdjust: 0,
								qAlpha: 0
							},
							qUseColor: false,
							qUseImage: false
						},
						qMenuIcon: false,
						qExtendedProperties: [{
							qName: "",
							qValue: ""
						}],
						qExtendedValues: [{
							qName: "",
							qValue: { qv: "" }
						}],
						qStateName: ""
					}
				}],
				Out: []
			},
			GetRowCount: {
				In: [],
				Out: []
			},
			GetColumnCount: {
				In: [],
				Out: []
			},
			GetCells: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qCells" }]
			},
			GetTableInfo: {
				In: [],
				Out: [{ Name: "qTableInfo" }]
			},
			GetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qIn",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						}
					}
				}],
				Out: [{ Name: "qData" }]
			},
			SetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qData",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						},
						qExpansionInfo: [{
							qExcludeList: false,
							qPos: {
								qDimName: "",
								qElemNo: [0],
								qElemValues: [[0]]
							}
						}],
						qLeftCollapsed: false,
						qTopCollapsed: false,
						qSortData: [{
							qName: "",
							qReversed: false
						}],
						qDimensionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qExpressionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qUseGraphMode: false,
						qGraphMode: 0,
						qActiveContainerChildObjectId: "",
						qExtendedPivotState: {
							qExpressionPosition: 0,
							qNumberOfLeftDimensions: 0,
							qDimensionNames: [""],
							qEnableConditions: [""]
						}
					}
				}],
				Out: []
			},
			GetCellsDataForExport: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qData" }]
			},
			GetCellsLayoutForExport: {
				In: [],
				Out: [{ Name: "qLayout" }]
			}
		},
		SearchObject: {
			SetFrameDef: {
				In: [{
					Name: "qFrame",
					DefaultValue: {
						qBorderWidth: 0,
						qBorderEffect: 0,
						qColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qCaptionFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qName: { qv: "" },
						qInternalCtlNo: 0,
						qRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qBmp_OBSOLETE: [0],
						qBmpMode_OBSOLETE: 0,
						qMinimizedRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qShowMode: 0,
						qDetached: false,
						qAllowMinimize: false,
						qAutoMinimize: false,
						qAllowMaximize: false,
						qAllowInfo: false,
						qPrintIcon: false,
						qCopyIcon: false,
						qXLIcon: false,
						qSearchIcon: false,
						qSelectPossibleIcon: false,
						qSelectExcludedIcon: false,
						qSelectAllIcon: false,
						qClearIcon: false,
						qClearOtherIcon: false,
						qLockIcon: false,
						qHelpText: { qv: "" },
						qObjectId: "",
						qZedLevel: 0,
						qShrinkFrameToData: false,
						qShowCaption: false,
						qMultiLine: 0,
						qActiveBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qActiveFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFixCorner: false,
						qFixCornerSize: 0,
						qRelCornerSize: 0,
						qPower: 0,
						qRoundedShape: false,
						qEnableTopLeftRounded: false,
						qEnableTopRightRounded: false,
						qEnableBottomLeftRounded: false,
						qEnableBottomRightRounded: false,
						qLight: 0,
						qDark: 0,
						qRainbow: false,
						qTextAdjustHorizontal: 0,
						qTextAdjustVertical: 0,
						qShow: {
							qAlways: false,
							qExpression: { qv: "" }
						},
						qOnActivateMacro_OBSOLETE: "",
						qOnDeactivateMacro_OBSOLETE: "",
						qAllowMoveSize: false,
						qAllowCopyClone: false,
						qdummy: [false],
						qCustomObjectGuid: [0],
						qCustomObjectProperties: [0],
						qScrollBkgColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollButtonColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollStyle: 0,
						qScrollWidth: 0,
						qIconColor_OBSOLETE: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qIconStyle_OBSOLETE: 0,
						qAllowModify: false,
						qCopyImageIcon: false,
						qPreserveScrollPosition: false,
						qShadowIntensity: 0,
						qOnActivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qOnDeactivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qExtension: "",
						qBackground: {
							qColor: {
								qMode: 0,
								qLuminosity: 0,
								qFillDirection: 0,
								qFillPattern: 0,
								qPrimaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qSecondaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qAlpha: 0
							},
							qImageBlob: [0],
							qImageLayout: {
								qStretchMode: 0,
								qHorizontalAdjust: 0,
								qVerticalAdjust: 0,
								qAlpha: 0
							},
							qUseColor: false,
							qUseImage: false
						},
						qMenuIcon: false,
						qExtendedProperties: [{
							qName: "",
							qValue: ""
						}],
						qExtendedValues: [{
							qName: "",
							qValue: { qv: "" }
						}],
						qStateName: ""
					}
				}],
				Out: []
			},
			GetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qIn",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						}
					}
				}],
				Out: [{ Name: "qData" }]
			},
			SetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qData",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						},
						qExpansionInfo: [{
							qExcludeList: false,
							qPos: {
								qDimName: "",
								qElemNo: [0],
								qElemValues: [[0]]
							}
						}],
						qLeftCollapsed: false,
						qTopCollapsed: false,
						qSortData: [{
							qName: "",
							qReversed: false
						}],
						qDimensionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qExpressionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qUseGraphMode: false,
						qGraphMode: 0,
						qActiveContainerChildObjectId: "",
						qExtendedPivotState: {
							qExpressionPosition: 0,
							qNumberOfLeftDimensions: 0,
							qDimensionNames: [""],
							qEnableConditions: [""]
						}
					}
				}],
				Out: []
			},
			GetCellsDataForExport: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qData" }]
			},
			GetCellsLayoutForExport: {
				In: [],
				Out: [{ Name: "qLayout" }]
			}
		},
		Container: {
			SetFrameDef: {
				In: [{
					Name: "qFrame",
					DefaultValue: {
						qBorderWidth: 0,
						qBorderEffect: 0,
						qColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qCaptionFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qName: { qv: "" },
						qInternalCtlNo: 0,
						qRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qBmp_OBSOLETE: [0],
						qBmpMode_OBSOLETE: 0,
						qMinimizedRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qShowMode: 0,
						qDetached: false,
						qAllowMinimize: false,
						qAutoMinimize: false,
						qAllowMaximize: false,
						qAllowInfo: false,
						qPrintIcon: false,
						qCopyIcon: false,
						qXLIcon: false,
						qSearchIcon: false,
						qSelectPossibleIcon: false,
						qSelectExcludedIcon: false,
						qSelectAllIcon: false,
						qClearIcon: false,
						qClearOtherIcon: false,
						qLockIcon: false,
						qHelpText: { qv: "" },
						qObjectId: "",
						qZedLevel: 0,
						qShrinkFrameToData: false,
						qShowCaption: false,
						qMultiLine: 0,
						qActiveBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qActiveFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFixCorner: false,
						qFixCornerSize: 0,
						qRelCornerSize: 0,
						qPower: 0,
						qRoundedShape: false,
						qEnableTopLeftRounded: false,
						qEnableTopRightRounded: false,
						qEnableBottomLeftRounded: false,
						qEnableBottomRightRounded: false,
						qLight: 0,
						qDark: 0,
						qRainbow: false,
						qTextAdjustHorizontal: 0,
						qTextAdjustVertical: 0,
						qShow: {
							qAlways: false,
							qExpression: { qv: "" }
						},
						qOnActivateMacro_OBSOLETE: "",
						qOnDeactivateMacro_OBSOLETE: "",
						qAllowMoveSize: false,
						qAllowCopyClone: false,
						qdummy: [false],
						qCustomObjectGuid: [0],
						qCustomObjectProperties: [0],
						qScrollBkgColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollButtonColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollStyle: 0,
						qScrollWidth: 0,
						qIconColor_OBSOLETE: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qIconStyle_OBSOLETE: 0,
						qAllowModify: false,
						qCopyImageIcon: false,
						qPreserveScrollPosition: false,
						qShadowIntensity: 0,
						qOnActivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qOnDeactivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qExtension: "",
						qBackground: {
							qColor: {
								qMode: 0,
								qLuminosity: 0,
								qFillDirection: 0,
								qFillPattern: 0,
								qPrimaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qSecondaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qAlpha: 0
							},
							qImageBlob: [0],
							qImageLayout: {
								qStretchMode: 0,
								qHorizontalAdjust: 0,
								qVerticalAdjust: 0,
								qAlpha: 0
							},
							qUseColor: false,
							qUseImage: false
						},
						qMenuIcon: false,
						qExtendedProperties: [{
							qName: "",
							qValue: ""
						}],
						qExtendedValues: [{
							qName: "",
							qValue: { qv: "" }
						}],
						qStateName: ""
					}
				}],
				Out: []
			},
			GetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qIn",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						}
					}
				}],
				Out: [{ Name: "qData" }]
			},
			SetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qData",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						},
						qExpansionInfo: [{
							qExcludeList: false,
							qPos: {
								qDimName: "",
								qElemNo: [0],
								qElemValues: [[0]]
							}
						}],
						qLeftCollapsed: false,
						qTopCollapsed: false,
						qSortData: [{
							qName: "",
							qReversed: false
						}],
						qDimensionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qExpressionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qUseGraphMode: false,
						qGraphMode: 0,
						qActiveContainerChildObjectId: "",
						qExtendedPivotState: {
							qExpressionPosition: 0,
							qNumberOfLeftDimensions: 0,
							qDimensionNames: [""],
							qEnableConditions: [""]
						}
					}
				}],
				Out: []
			},
			GetCellsDataForExport: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qData" }]
			},
			GetCellsLayoutForExport: {
				In: [],
				Out: [{ Name: "qLayout" }]
			}
		},
		ListBox: {
			GetRowCount: {
				In: [],
				Out: []
			},
			GetColumnCount: {
				In: [],
				Out: []
			},
			GetCells: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qCells" }]
			},
			GetTableInfo: {
				In: [],
				Out: [{ Name: "qTableInfo" }]
			},
			SetFrameDef: {
				In: [{
					Name: "qFrame",
					DefaultValue: {
						qBorderWidth: 0,
						qBorderEffect: 0,
						qColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qCaptionFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qName: { qv: "" },
						qInternalCtlNo: 0,
						qRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qBmp_OBSOLETE: [0],
						qBmpMode_OBSOLETE: 0,
						qMinimizedRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qShowMode: 0,
						qDetached: false,
						qAllowMinimize: false,
						qAutoMinimize: false,
						qAllowMaximize: false,
						qAllowInfo: false,
						qPrintIcon: false,
						qCopyIcon: false,
						qXLIcon: false,
						qSearchIcon: false,
						qSelectPossibleIcon: false,
						qSelectExcludedIcon: false,
						qSelectAllIcon: false,
						qClearIcon: false,
						qClearOtherIcon: false,
						qLockIcon: false,
						qHelpText: { qv: "" },
						qObjectId: "",
						qZedLevel: 0,
						qShrinkFrameToData: false,
						qShowCaption: false,
						qMultiLine: 0,
						qActiveBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qActiveFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFixCorner: false,
						qFixCornerSize: 0,
						qRelCornerSize: 0,
						qPower: 0,
						qRoundedShape: false,
						qEnableTopLeftRounded: false,
						qEnableTopRightRounded: false,
						qEnableBottomLeftRounded: false,
						qEnableBottomRightRounded: false,
						qLight: 0,
						qDark: 0,
						qRainbow: false,
						qTextAdjustHorizontal: 0,
						qTextAdjustVertical: 0,
						qShow: {
							qAlways: false,
							qExpression: { qv: "" }
						},
						qOnActivateMacro_OBSOLETE: "",
						qOnDeactivateMacro_OBSOLETE: "",
						qAllowMoveSize: false,
						qAllowCopyClone: false,
						qdummy: [false],
						qCustomObjectGuid: [0],
						qCustomObjectProperties: [0],
						qScrollBkgColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollButtonColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollStyle: 0,
						qScrollWidth: 0,
						qIconColor_OBSOLETE: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qIconStyle_OBSOLETE: 0,
						qAllowModify: false,
						qCopyImageIcon: false,
						qPreserveScrollPosition: false,
						qShadowIntensity: 0,
						qOnActivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qOnDeactivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qExtension: "",
						qBackground: {
							qColor: {
								qMode: 0,
								qLuminosity: 0,
								qFillDirection: 0,
								qFillPattern: 0,
								qPrimaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qSecondaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qAlpha: 0
							},
							qImageBlob: [0],
							qImageLayout: {
								qStretchMode: 0,
								qHorizontalAdjust: 0,
								qVerticalAdjust: 0,
								qAlpha: 0
							},
							qUseColor: false,
							qUseImage: false
						},
						qMenuIcon: false,
						qExtendedProperties: [{
							qName: "",
							qValue: ""
						}],
						qExtendedValues: [{
							qName: "",
							qValue: { qv: "" }
						}],
						qStateName: ""
					}
				}],
				Out: []
			},
			GetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qIn",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						}
					}
				}],
				Out: [{ Name: "qData" }]
			},
			SetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qData",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						},
						qExpansionInfo: [{
							qExcludeList: false,
							qPos: {
								qDimName: "",
								qElemNo: [0],
								qElemValues: [[0]]
							}
						}],
						qLeftCollapsed: false,
						qTopCollapsed: false,
						qSortData: [{
							qName: "",
							qReversed: false
						}],
						qDimensionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qExpressionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qUseGraphMode: false,
						qGraphMode: 0,
						qActiveContainerChildObjectId: "",
						qExtendedPivotState: {
							qExpressionPosition: 0,
							qNumberOfLeftDimensions: 0,
							qDimensionNames: [""],
							qEnableConditions: [""]
						}
					}
				}],
				Out: []
			},
			GetCellsDataForExport: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qData" }]
			},
			GetCellsLayoutForExport: {
				In: [],
				Out: [{ Name: "qLayout" }]
			}
		},
		MultiBox: {
			SetFrameDef: {
				In: [{
					Name: "qFrame",
					DefaultValue: {
						qBorderWidth: 0,
						qBorderEffect: 0,
						qColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qCaptionFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qName: { qv: "" },
						qInternalCtlNo: 0,
						qRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qBmp_OBSOLETE: [0],
						qBmpMode_OBSOLETE: 0,
						qMinimizedRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qShowMode: 0,
						qDetached: false,
						qAllowMinimize: false,
						qAutoMinimize: false,
						qAllowMaximize: false,
						qAllowInfo: false,
						qPrintIcon: false,
						qCopyIcon: false,
						qXLIcon: false,
						qSearchIcon: false,
						qSelectPossibleIcon: false,
						qSelectExcludedIcon: false,
						qSelectAllIcon: false,
						qClearIcon: false,
						qClearOtherIcon: false,
						qLockIcon: false,
						qHelpText: { qv: "" },
						qObjectId: "",
						qZedLevel: 0,
						qShrinkFrameToData: false,
						qShowCaption: false,
						qMultiLine: 0,
						qActiveBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qActiveFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFixCorner: false,
						qFixCornerSize: 0,
						qRelCornerSize: 0,
						qPower: 0,
						qRoundedShape: false,
						qEnableTopLeftRounded: false,
						qEnableTopRightRounded: false,
						qEnableBottomLeftRounded: false,
						qEnableBottomRightRounded: false,
						qLight: 0,
						qDark: 0,
						qRainbow: false,
						qTextAdjustHorizontal: 0,
						qTextAdjustVertical: 0,
						qShow: {
							qAlways: false,
							qExpression: { qv: "" }
						},
						qOnActivateMacro_OBSOLETE: "",
						qOnDeactivateMacro_OBSOLETE: "",
						qAllowMoveSize: false,
						qAllowCopyClone: false,
						qdummy: [false],
						qCustomObjectGuid: [0],
						qCustomObjectProperties: [0],
						qScrollBkgColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollButtonColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollStyle: 0,
						qScrollWidth: 0,
						qIconColor_OBSOLETE: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qIconStyle_OBSOLETE: 0,
						qAllowModify: false,
						qCopyImageIcon: false,
						qPreserveScrollPosition: false,
						qShadowIntensity: 0,
						qOnActivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qOnDeactivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qExtension: "",
						qBackground: {
							qColor: {
								qMode: 0,
								qLuminosity: 0,
								qFillDirection: 0,
								qFillPattern: 0,
								qPrimaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qSecondaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qAlpha: 0
							},
							qImageBlob: [0],
							qImageLayout: {
								qStretchMode: 0,
								qHorizontalAdjust: 0,
								qVerticalAdjust: 0,
								qAlpha: 0
							},
							qUseColor: false,
							qUseImage: false
						},
						qMenuIcon: false,
						qExtendedProperties: [{
							qName: "",
							qValue: ""
						}],
						qExtendedValues: [{
							qName: "",
							qValue: { qv: "" }
						}],
						qStateName: ""
					}
				}],
				Out: []
			},
			GetRowCount: {
				In: [],
				Out: []
			},
			GetColumnCount: {
				In: [],
				Out: []
			},
			GetCells: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qCells" }]
			},
			GetTableInfo: {
				In: [],
				Out: [{ Name: "qTableInfo" }]
			},
			GetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qIn",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						}
					}
				}],
				Out: [{ Name: "qData" }]
			},
			SetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qData",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						},
						qExpansionInfo: [{
							qExcludeList: false,
							qPos: {
								qDimName: "",
								qElemNo: [0],
								qElemValues: [[0]]
							}
						}],
						qLeftCollapsed: false,
						qTopCollapsed: false,
						qSortData: [{
							qName: "",
							qReversed: false
						}],
						qDimensionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qExpressionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qUseGraphMode: false,
						qGraphMode: 0,
						qActiveContainerChildObjectId: "",
						qExtendedPivotState: {
							qExpressionPosition: 0,
							qNumberOfLeftDimensions: 0,
							qDimensionNames: [""],
							qEnableConditions: [""]
						}
					}
				}],
				Out: []
			},
			GetCellsDataForExport: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qData" }]
			},
			GetCellsLayoutForExport: {
				In: [],
				Out: [{ Name: "qLayout" }]
			}
		},
		Button: {
			SetFrameDef: {
				In: [{
					Name: "qFrame",
					DefaultValue: {
						qBorderWidth: 0,
						qBorderEffect: 0,
						qColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qCaptionFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qName: { qv: "" },
						qInternalCtlNo: 0,
						qRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qBmp_OBSOLETE: [0],
						qBmpMode_OBSOLETE: 0,
						qMinimizedRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qShowMode: 0,
						qDetached: false,
						qAllowMinimize: false,
						qAutoMinimize: false,
						qAllowMaximize: false,
						qAllowInfo: false,
						qPrintIcon: false,
						qCopyIcon: false,
						qXLIcon: false,
						qSearchIcon: false,
						qSelectPossibleIcon: false,
						qSelectExcludedIcon: false,
						qSelectAllIcon: false,
						qClearIcon: false,
						qClearOtherIcon: false,
						qLockIcon: false,
						qHelpText: { qv: "" },
						qObjectId: "",
						qZedLevel: 0,
						qShrinkFrameToData: false,
						qShowCaption: false,
						qMultiLine: 0,
						qActiveBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qActiveFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFixCorner: false,
						qFixCornerSize: 0,
						qRelCornerSize: 0,
						qPower: 0,
						qRoundedShape: false,
						qEnableTopLeftRounded: false,
						qEnableTopRightRounded: false,
						qEnableBottomLeftRounded: false,
						qEnableBottomRightRounded: false,
						qLight: 0,
						qDark: 0,
						qRainbow: false,
						qTextAdjustHorizontal: 0,
						qTextAdjustVertical: 0,
						qShow: {
							qAlways: false,
							qExpression: { qv: "" }
						},
						qOnActivateMacro_OBSOLETE: "",
						qOnDeactivateMacro_OBSOLETE: "",
						qAllowMoveSize: false,
						qAllowCopyClone: false,
						qdummy: [false],
						qCustomObjectGuid: [0],
						qCustomObjectProperties: [0],
						qScrollBkgColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollButtonColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollStyle: 0,
						qScrollWidth: 0,
						qIconColor_OBSOLETE: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qIconStyle_OBSOLETE: 0,
						qAllowModify: false,
						qCopyImageIcon: false,
						qPreserveScrollPosition: false,
						qShadowIntensity: 0,
						qOnActivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qOnDeactivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qExtension: "",
						qBackground: {
							qColor: {
								qMode: 0,
								qLuminosity: 0,
								qFillDirection: 0,
								qFillPattern: 0,
								qPrimaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qSecondaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qAlpha: 0
							},
							qImageBlob: [0],
							qImageLayout: {
								qStretchMode: 0,
								qHorizontalAdjust: 0,
								qVerticalAdjust: 0,
								qAlpha: 0
							},
							qUseColor: false,
							qUseImage: false
						},
						qMenuIcon: false,
						qExtendedProperties: [{
							qName: "",
							qValue: ""
						}],
						qExtendedValues: [{
							qName: "",
							qValue: { qv: "" }
						}],
						qStateName: ""
					}
				}],
				Out: []
			},
			GetRowCount: {
				In: [],
				Out: []
			},
			GetColumnCount: {
				In: [],
				Out: []
			},
			GetCells: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qCells" }]
			},
			GetTableInfo: {
				In: [],
				Out: [{ Name: "qTableInfo" }]
			},
			GetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qIn",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						}
					}
				}],
				Out: [{ Name: "qData" }]
			},
			SetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qData",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						},
						qExpansionInfo: [{
							qExcludeList: false,
							qPos: {
								qDimName: "",
								qElemNo: [0],
								qElemValues: [[0]]
							}
						}],
						qLeftCollapsed: false,
						qTopCollapsed: false,
						qSortData: [{
							qName: "",
							qReversed: false
						}],
						qDimensionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qExpressionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qUseGraphMode: false,
						qGraphMode: 0,
						qActiveContainerChildObjectId: "",
						qExtendedPivotState: {
							qExpressionPosition: 0,
							qNumberOfLeftDimensions: 0,
							qDimensionNames: [""],
							qEnableConditions: [""]
						}
					}
				}],
				Out: []
			},
			GetCellsDataForExport: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qData" }]
			},
			GetCellsLayoutForExport: {
				In: [],
				Out: [{ Name: "qLayout" }]
			}
		},
		TextObject: {
			SetFrameDef: {
				In: [{
					Name: "qFrame",
					DefaultValue: {
						qBorderWidth: 0,
						qBorderEffect: 0,
						qColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qCaptionFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qName: { qv: "" },
						qInternalCtlNo: 0,
						qRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qBmp_OBSOLETE: [0],
						qBmpMode_OBSOLETE: 0,
						qMinimizedRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qShowMode: 0,
						qDetached: false,
						qAllowMinimize: false,
						qAutoMinimize: false,
						qAllowMaximize: false,
						qAllowInfo: false,
						qPrintIcon: false,
						qCopyIcon: false,
						qXLIcon: false,
						qSearchIcon: false,
						qSelectPossibleIcon: false,
						qSelectExcludedIcon: false,
						qSelectAllIcon: false,
						qClearIcon: false,
						qClearOtherIcon: false,
						qLockIcon: false,
						qHelpText: { qv: "" },
						qObjectId: "",
						qZedLevel: 0,
						qShrinkFrameToData: false,
						qShowCaption: false,
						qMultiLine: 0,
						qActiveBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qActiveFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFixCorner: false,
						qFixCornerSize: 0,
						qRelCornerSize: 0,
						qPower: 0,
						qRoundedShape: false,
						qEnableTopLeftRounded: false,
						qEnableTopRightRounded: false,
						qEnableBottomLeftRounded: false,
						qEnableBottomRightRounded: false,
						qLight: 0,
						qDark: 0,
						qRainbow: false,
						qTextAdjustHorizontal: 0,
						qTextAdjustVertical: 0,
						qShow: {
							qAlways: false,
							qExpression: { qv: "" }
						},
						qOnActivateMacro_OBSOLETE: "",
						qOnDeactivateMacro_OBSOLETE: "",
						qAllowMoveSize: false,
						qAllowCopyClone: false,
						qdummy: [false],
						qCustomObjectGuid: [0],
						qCustomObjectProperties: [0],
						qScrollBkgColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollButtonColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollStyle: 0,
						qScrollWidth: 0,
						qIconColor_OBSOLETE: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qIconStyle_OBSOLETE: 0,
						qAllowModify: false,
						qCopyImageIcon: false,
						qPreserveScrollPosition: false,
						qShadowIntensity: 0,
						qOnActivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qOnDeactivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qExtension: "",
						qBackground: {
							qColor: {
								qMode: 0,
								qLuminosity: 0,
								qFillDirection: 0,
								qFillPattern: 0,
								qPrimaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qSecondaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qAlpha: 0
							},
							qImageBlob: [0],
							qImageLayout: {
								qStretchMode: 0,
								qHorizontalAdjust: 0,
								qVerticalAdjust: 0,
								qAlpha: 0
							},
							qUseColor: false,
							qUseImage: false
						},
						qMenuIcon: false,
						qExtendedProperties: [{
							qName: "",
							qValue: ""
						}],
						qExtendedValues: [{
							qName: "",
							qValue: { qv: "" }
						}],
						qStateName: ""
					}
				}],
				Out: []
			},
			GetRowCount: {
				In: [],
				Out: []
			},
			GetColumnCount: {
				In: [],
				Out: []
			},
			GetCells: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qCells" }]
			},
			GetTableInfo: {
				In: [],
				Out: [{ Name: "qTableInfo" }]
			},
			GetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qIn",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						}
					}
				}],
				Out: [{ Name: "qData" }]
			},
			SetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qData",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						},
						qExpansionInfo: [{
							qExcludeList: false,
							qPos: {
								qDimName: "",
								qElemNo: [0],
								qElemValues: [[0]]
							}
						}],
						qLeftCollapsed: false,
						qTopCollapsed: false,
						qSortData: [{
							qName: "",
							qReversed: false
						}],
						qDimensionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qExpressionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qUseGraphMode: false,
						qGraphMode: 0,
						qActiveContainerChildObjectId: "",
						qExtendedPivotState: {
							qExpressionPosition: 0,
							qNumberOfLeftDimensions: 0,
							qDimensionNames: [""],
							qEnableConditions: [""]
						}
					}
				}],
				Out: []
			},
			GetCellsDataForExport: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qData" }]
			},
			GetCellsLayoutForExport: {
				In: [],
				Out: [{ Name: "qLayout" }]
			}
		},
		CustomObject: {
			SetFrameDef: {
				In: [{
					Name: "qFrame",
					DefaultValue: {
						qBorderWidth: 0,
						qBorderEffect: 0,
						qColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qCaptionFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qName: { qv: "" },
						qInternalCtlNo: 0,
						qRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qBmp_OBSOLETE: [0],
						qBmpMode_OBSOLETE: 0,
						qMinimizedRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qShowMode: 0,
						qDetached: false,
						qAllowMinimize: false,
						qAutoMinimize: false,
						qAllowMaximize: false,
						qAllowInfo: false,
						qPrintIcon: false,
						qCopyIcon: false,
						qXLIcon: false,
						qSearchIcon: false,
						qSelectPossibleIcon: false,
						qSelectExcludedIcon: false,
						qSelectAllIcon: false,
						qClearIcon: false,
						qClearOtherIcon: false,
						qLockIcon: false,
						qHelpText: { qv: "" },
						qObjectId: "",
						qZedLevel: 0,
						qShrinkFrameToData: false,
						qShowCaption: false,
						qMultiLine: 0,
						qActiveBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qActiveFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFixCorner: false,
						qFixCornerSize: 0,
						qRelCornerSize: 0,
						qPower: 0,
						qRoundedShape: false,
						qEnableTopLeftRounded: false,
						qEnableTopRightRounded: false,
						qEnableBottomLeftRounded: false,
						qEnableBottomRightRounded: false,
						qLight: 0,
						qDark: 0,
						qRainbow: false,
						qTextAdjustHorizontal: 0,
						qTextAdjustVertical: 0,
						qShow: {
							qAlways: false,
							qExpression: { qv: "" }
						},
						qOnActivateMacro_OBSOLETE: "",
						qOnDeactivateMacro_OBSOLETE: "",
						qAllowMoveSize: false,
						qAllowCopyClone: false,
						qdummy: [false],
						qCustomObjectGuid: [0],
						qCustomObjectProperties: [0],
						qScrollBkgColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollButtonColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollStyle: 0,
						qScrollWidth: 0,
						qIconColor_OBSOLETE: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qIconStyle_OBSOLETE: 0,
						qAllowModify: false,
						qCopyImageIcon: false,
						qPreserveScrollPosition: false,
						qShadowIntensity: 0,
						qOnActivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qOnDeactivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qExtension: "",
						qBackground: {
							qColor: {
								qMode: 0,
								qLuminosity: 0,
								qFillDirection: 0,
								qFillPattern: 0,
								qPrimaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qSecondaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qAlpha: 0
							},
							qImageBlob: [0],
							qImageLayout: {
								qStretchMode: 0,
								qHorizontalAdjust: 0,
								qVerticalAdjust: 0,
								qAlpha: 0
							},
							qUseColor: false,
							qUseImage: false
						},
						qMenuIcon: false,
						qExtendedProperties: [{
							qName: "",
							qValue: ""
						}],
						qExtendedValues: [{
							qName: "",
							qValue: { qv: "" }
						}],
						qStateName: ""
					}
				}],
				Out: []
			},
			GetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qIn",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						}
					}
				}],
				Out: [{ Name: "qData" }]
			},
			SetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qData",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						},
						qExpansionInfo: [{
							qExcludeList: false,
							qPos: {
								qDimName: "",
								qElemNo: [0],
								qElemValues: [[0]]
							}
						}],
						qLeftCollapsed: false,
						qTopCollapsed: false,
						qSortData: [{
							qName: "",
							qReversed: false
						}],
						qDimensionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qExpressionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qUseGraphMode: false,
						qGraphMode: 0,
						qActiveContainerChildObjectId: "",
						qExtendedPivotState: {
							qExpressionPosition: 0,
							qNumberOfLeftDimensions: 0,
							qDimensionNames: [""],
							qEnableConditions: [""]
						}
					}
				}],
				Out: []
			},
			GetCellsDataForExport: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qData" }]
			},
			GetCellsLayoutForExport: {
				In: [],
				Out: [{ Name: "qLayout" }]
			}
		},
		BookmarkObject: {
			SetFrameDef: {
				In: [{
					Name: "qFrame",
					DefaultValue: {
						qBorderWidth: 0,
						qBorderEffect: 0,
						qColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qCaptionFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qName: { qv: "" },
						qInternalCtlNo: 0,
						qRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qBmp_OBSOLETE: [0],
						qBmpMode_OBSOLETE: 0,
						qMinimizedRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qShowMode: 0,
						qDetached: false,
						qAllowMinimize: false,
						qAutoMinimize: false,
						qAllowMaximize: false,
						qAllowInfo: false,
						qPrintIcon: false,
						qCopyIcon: false,
						qXLIcon: false,
						qSearchIcon: false,
						qSelectPossibleIcon: false,
						qSelectExcludedIcon: false,
						qSelectAllIcon: false,
						qClearIcon: false,
						qClearOtherIcon: false,
						qLockIcon: false,
						qHelpText: { qv: "" },
						qObjectId: "",
						qZedLevel: 0,
						qShrinkFrameToData: false,
						qShowCaption: false,
						qMultiLine: 0,
						qActiveBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qActiveFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFixCorner: false,
						qFixCornerSize: 0,
						qRelCornerSize: 0,
						qPower: 0,
						qRoundedShape: false,
						qEnableTopLeftRounded: false,
						qEnableTopRightRounded: false,
						qEnableBottomLeftRounded: false,
						qEnableBottomRightRounded: false,
						qLight: 0,
						qDark: 0,
						qRainbow: false,
						qTextAdjustHorizontal: 0,
						qTextAdjustVertical: 0,
						qShow: {
							qAlways: false,
							qExpression: { qv: "" }
						},
						qOnActivateMacro_OBSOLETE: "",
						qOnDeactivateMacro_OBSOLETE: "",
						qAllowMoveSize: false,
						qAllowCopyClone: false,
						qdummy: [false],
						qCustomObjectGuid: [0],
						qCustomObjectProperties: [0],
						qScrollBkgColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollButtonColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollStyle: 0,
						qScrollWidth: 0,
						qIconColor_OBSOLETE: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qIconStyle_OBSOLETE: 0,
						qAllowModify: false,
						qCopyImageIcon: false,
						qPreserveScrollPosition: false,
						qShadowIntensity: 0,
						qOnActivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qOnDeactivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qExtension: "",
						qBackground: {
							qColor: {
								qMode: 0,
								qLuminosity: 0,
								qFillDirection: 0,
								qFillPattern: 0,
								qPrimaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qSecondaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qAlpha: 0
							},
							qImageBlob: [0],
							qImageLayout: {
								qStretchMode: 0,
								qHorizontalAdjust: 0,
								qVerticalAdjust: 0,
								qAlpha: 0
							},
							qUseColor: false,
							qUseImage: false
						},
						qMenuIcon: false,
						qExtendedProperties: [{
							qName: "",
							qValue: ""
						}],
						qExtendedValues: [{
							qName: "",
							qValue: { qv: "" }
						}],
						qStateName: ""
					}
				}],
				Out: []
			},
			GetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qIn",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						}
					}
				}],
				Out: [{ Name: "qData" }]
			},
			SetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qData",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						},
						qExpansionInfo: [{
							qExcludeList: false,
							qPos: {
								qDimName: "",
								qElemNo: [0],
								qElemValues: [[0]]
							}
						}],
						qLeftCollapsed: false,
						qTopCollapsed: false,
						qSortData: [{
							qName: "",
							qReversed: false
						}],
						qDimensionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qExpressionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qUseGraphMode: false,
						qGraphMode: 0,
						qActiveContainerChildObjectId: "",
						qExtendedPivotState: {
							qExpressionPosition: 0,
							qNumberOfLeftDimensions: 0,
							qDimensionNames: [""],
							qEnableConditions: [""]
						}
					}
				}],
				Out: []
			},
			GetCellsDataForExport: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qData" }]
			},
			GetCellsLayoutForExport: {
				In: [],
				Out: [{ Name: "qLayout" }]
			}
		},
		Slider: {
			SetFrameDef: {
				In: [{
					Name: "qFrame",
					DefaultValue: {
						qBorderWidth: 0,
						qBorderEffect: 0,
						qColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qCaptionFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qName: { qv: "" },
						qInternalCtlNo: 0,
						qRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qBmp_OBSOLETE: [0],
						qBmpMode_OBSOLETE: 0,
						qMinimizedRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qShowMode: 0,
						qDetached: false,
						qAllowMinimize: false,
						qAutoMinimize: false,
						qAllowMaximize: false,
						qAllowInfo: false,
						qPrintIcon: false,
						qCopyIcon: false,
						qXLIcon: false,
						qSearchIcon: false,
						qSelectPossibleIcon: false,
						qSelectExcludedIcon: false,
						qSelectAllIcon: false,
						qClearIcon: false,
						qClearOtherIcon: false,
						qLockIcon: false,
						qHelpText: { qv: "" },
						qObjectId: "",
						qZedLevel: 0,
						qShrinkFrameToData: false,
						qShowCaption: false,
						qMultiLine: 0,
						qActiveBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qActiveFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFixCorner: false,
						qFixCornerSize: 0,
						qRelCornerSize: 0,
						qPower: 0,
						qRoundedShape: false,
						qEnableTopLeftRounded: false,
						qEnableTopRightRounded: false,
						qEnableBottomLeftRounded: false,
						qEnableBottomRightRounded: false,
						qLight: 0,
						qDark: 0,
						qRainbow: false,
						qTextAdjustHorizontal: 0,
						qTextAdjustVertical: 0,
						qShow: {
							qAlways: false,
							qExpression: { qv: "" }
						},
						qOnActivateMacro_OBSOLETE: "",
						qOnDeactivateMacro_OBSOLETE: "",
						qAllowMoveSize: false,
						qAllowCopyClone: false,
						qdummy: [false],
						qCustomObjectGuid: [0],
						qCustomObjectProperties: [0],
						qScrollBkgColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollButtonColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollStyle: 0,
						qScrollWidth: 0,
						qIconColor_OBSOLETE: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qIconStyle_OBSOLETE: 0,
						qAllowModify: false,
						qCopyImageIcon: false,
						qPreserveScrollPosition: false,
						qShadowIntensity: 0,
						qOnActivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qOnDeactivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qExtension: "",
						qBackground: {
							qColor: {
								qMode: 0,
								qLuminosity: 0,
								qFillDirection: 0,
								qFillPattern: 0,
								qPrimaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qSecondaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qAlpha: 0
							},
							qImageBlob: [0],
							qImageLayout: {
								qStretchMode: 0,
								qHorizontalAdjust: 0,
								qVerticalAdjust: 0,
								qAlpha: 0
							},
							qUseColor: false,
							qUseImage: false
						},
						qMenuIcon: false,
						qExtendedProperties: [{
							qName: "",
							qValue: ""
						}],
						qExtendedValues: [{
							qName: "",
							qValue: { qv: "" }
						}],
						qStateName: ""
					}
				}],
				Out: []
			},
			GetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qIn",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						}
					}
				}],
				Out: [{ Name: "qData" }]
			},
			SetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qData",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						},
						qExpansionInfo: [{
							qExcludeList: false,
							qPos: {
								qDimName: "",
								qElemNo: [0],
								qElemValues: [[0]]
							}
						}],
						qLeftCollapsed: false,
						qTopCollapsed: false,
						qSortData: [{
							qName: "",
							qReversed: false
						}],
						qDimensionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qExpressionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qUseGraphMode: false,
						qGraphMode: 0,
						qActiveContainerChildObjectId: "",
						qExtendedPivotState: {
							qExpressionPosition: 0,
							qNumberOfLeftDimensions: 0,
							qDimensionNames: [""],
							qEnableConditions: [""]
						}
					}
				}],
				Out: []
			},
			GetCellsDataForExport: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qData" }]
			},
			GetCellsLayoutForExport: {
				In: [],
				Out: [{ Name: "qLayout" }]
			}
		},
		LineArrow: {
			SetFrameDef: {
				In: [{
					Name: "qFrame",
					DefaultValue: {
						qBorderWidth: 0,
						qBorderEffect: 0,
						qColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qCaptionFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qName: { qv: "" },
						qInternalCtlNo: 0,
						qRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qBmp_OBSOLETE: [0],
						qBmpMode_OBSOLETE: 0,
						qMinimizedRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qShowMode: 0,
						qDetached: false,
						qAllowMinimize: false,
						qAutoMinimize: false,
						qAllowMaximize: false,
						qAllowInfo: false,
						qPrintIcon: false,
						qCopyIcon: false,
						qXLIcon: false,
						qSearchIcon: false,
						qSelectPossibleIcon: false,
						qSelectExcludedIcon: false,
						qSelectAllIcon: false,
						qClearIcon: false,
						qClearOtherIcon: false,
						qLockIcon: false,
						qHelpText: { qv: "" },
						qObjectId: "",
						qZedLevel: 0,
						qShrinkFrameToData: false,
						qShowCaption: false,
						qMultiLine: 0,
						qActiveBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qActiveFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFixCorner: false,
						qFixCornerSize: 0,
						qRelCornerSize: 0,
						qPower: 0,
						qRoundedShape: false,
						qEnableTopLeftRounded: false,
						qEnableTopRightRounded: false,
						qEnableBottomLeftRounded: false,
						qEnableBottomRightRounded: false,
						qLight: 0,
						qDark: 0,
						qRainbow: false,
						qTextAdjustHorizontal: 0,
						qTextAdjustVertical: 0,
						qShow: {
							qAlways: false,
							qExpression: { qv: "" }
						},
						qOnActivateMacro_OBSOLETE: "",
						qOnDeactivateMacro_OBSOLETE: "",
						qAllowMoveSize: false,
						qAllowCopyClone: false,
						qdummy: [false],
						qCustomObjectGuid: [0],
						qCustomObjectProperties: [0],
						qScrollBkgColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollButtonColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollStyle: 0,
						qScrollWidth: 0,
						qIconColor_OBSOLETE: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qIconStyle_OBSOLETE: 0,
						qAllowModify: false,
						qCopyImageIcon: false,
						qPreserveScrollPosition: false,
						qShadowIntensity: 0,
						qOnActivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qOnDeactivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qExtension: "",
						qBackground: {
							qColor: {
								qMode: 0,
								qLuminosity: 0,
								qFillDirection: 0,
								qFillPattern: 0,
								qPrimaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qSecondaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qAlpha: 0
							},
							qImageBlob: [0],
							qImageLayout: {
								qStretchMode: 0,
								qHorizontalAdjust: 0,
								qVerticalAdjust: 0,
								qAlpha: 0
							},
							qUseColor: false,
							qUseImage: false
						},
						qMenuIcon: false,
						qExtendedProperties: [{
							qName: "",
							qValue: ""
						}],
						qExtendedValues: [{
							qName: "",
							qValue: { qv: "" }
						}],
						qStateName: ""
					}
				}],
				Out: []
			},
			GetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qIn",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						}
					}
				}],
				Out: [{ Name: "qData" }]
			},
			SetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qData",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						},
						qExpansionInfo: [{
							qExcludeList: false,
							qPos: {
								qDimName: "",
								qElemNo: [0],
								qElemValues: [[0]]
							}
						}],
						qLeftCollapsed: false,
						qTopCollapsed: false,
						qSortData: [{
							qName: "",
							qReversed: false
						}],
						qDimensionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qExpressionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qUseGraphMode: false,
						qGraphMode: 0,
						qActiveContainerChildObjectId: "",
						qExtendedPivotState: {
							qExpressionPosition: 0,
							qNumberOfLeftDimensions: 0,
							qDimensionNames: [""],
							qEnableConditions: [""]
						}
					}
				}],
				Out: []
			},
			GetCellsDataForExport: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qData" }]
			},
			GetCellsLayoutForExport: {
				In: [],
				Out: [{ Name: "qLayout" }]
			}
		},
		TableBox: {
			GetRowCount: {
				In: [],
				Out: []
			},
			GetColumnCount: {
				In: [],
				Out: []
			},
			GetCells: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qCells" }]
			},
			GetTableInfo: {
				In: [],
				Out: [{ Name: "qTableInfo" }]
			},
			SetFrameDef: {
				In: [{
					Name: "qFrame",
					DefaultValue: {
						qBorderWidth: 0,
						qBorderEffect: 0,
						qColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qCaptionFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qName: { qv: "" },
						qInternalCtlNo: 0,
						qRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qBmp_OBSOLETE: [0],
						qBmpMode_OBSOLETE: 0,
						qMinimizedRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qShowMode: 0,
						qDetached: false,
						qAllowMinimize: false,
						qAutoMinimize: false,
						qAllowMaximize: false,
						qAllowInfo: false,
						qPrintIcon: false,
						qCopyIcon: false,
						qXLIcon: false,
						qSearchIcon: false,
						qSelectPossibleIcon: false,
						qSelectExcludedIcon: false,
						qSelectAllIcon: false,
						qClearIcon: false,
						qClearOtherIcon: false,
						qLockIcon: false,
						qHelpText: { qv: "" },
						qObjectId: "",
						qZedLevel: 0,
						qShrinkFrameToData: false,
						qShowCaption: false,
						qMultiLine: 0,
						qActiveBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qActiveFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFixCorner: false,
						qFixCornerSize: 0,
						qRelCornerSize: 0,
						qPower: 0,
						qRoundedShape: false,
						qEnableTopLeftRounded: false,
						qEnableTopRightRounded: false,
						qEnableBottomLeftRounded: false,
						qEnableBottomRightRounded: false,
						qLight: 0,
						qDark: 0,
						qRainbow: false,
						qTextAdjustHorizontal: 0,
						qTextAdjustVertical: 0,
						qShow: {
							qAlways: false,
							qExpression: { qv: "" }
						},
						qOnActivateMacro_OBSOLETE: "",
						qOnDeactivateMacro_OBSOLETE: "",
						qAllowMoveSize: false,
						qAllowCopyClone: false,
						qdummy: [false],
						qCustomObjectGuid: [0],
						qCustomObjectProperties: [0],
						qScrollBkgColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollButtonColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollStyle: 0,
						qScrollWidth: 0,
						qIconColor_OBSOLETE: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qIconStyle_OBSOLETE: 0,
						qAllowModify: false,
						qCopyImageIcon: false,
						qPreserveScrollPosition: false,
						qShadowIntensity: 0,
						qOnActivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qOnDeactivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qExtension: "",
						qBackground: {
							qColor: {
								qMode: 0,
								qLuminosity: 0,
								qFillDirection: 0,
								qFillPattern: 0,
								qPrimaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qSecondaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qAlpha: 0
							},
							qImageBlob: [0],
							qImageLayout: {
								qStretchMode: 0,
								qHorizontalAdjust: 0,
								qVerticalAdjust: 0,
								qAlpha: 0
							},
							qUseColor: false,
							qUseImage: false
						},
						qMenuIcon: false,
						qExtendedProperties: [{
							qName: "",
							qValue: ""
						}],
						qExtendedValues: [{
							qName: "",
							qValue: { qv: "" }
						}],
						qStateName: ""
					}
				}],
				Out: []
			},
			GetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qIn",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						}
					}
				}],
				Out: [{ Name: "qData" }]
			},
			SetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qData",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						},
						qExpansionInfo: [{
							qExcludeList: false,
							qPos: {
								qDimName: "",
								qElemNo: [0],
								qElemValues: [[0]]
							}
						}],
						qLeftCollapsed: false,
						qTopCollapsed: false,
						qSortData: [{
							qName: "",
							qReversed: false
						}],
						qDimensionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qExpressionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qUseGraphMode: false,
						qGraphMode: 0,
						qActiveContainerChildObjectId: "",
						qExtendedPivotState: {
							qExpressionPosition: 0,
							qNumberOfLeftDimensions: 0,
							qDimensionNames: [""],
							qEnableConditions: [""]
						}
					}
				}],
				Out: []
			},
			GetCellsDataForExport: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qData" }]
			},
			GetCellsLayoutForExport: {
				In: [],
				Out: [{ Name: "qLayout" }]
			}
		},
		StatisticsBox: {
			GetRowCount: {
				In: [],
				Out: []
			},
			GetColumnCount: {
				In: [],
				Out: []
			},
			GetCells: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qCells" }]
			},
			GetTableInfo: {
				In: [],
				Out: [{ Name: "qTableInfo" }]
			},
			SetFrameDef: {
				In: [{
					Name: "qFrame",
					DefaultValue: {
						qBorderWidth: 0,
						qBorderEffect: 0,
						qColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qCaptionFont: {
							qFontName: "",
							qPointSize1000: 0,
							qUnderline: false,
							qBold: false,
							qItalic: false,
							qDropShadow: false,
							qAntiAlias_OBSOLETE: 0
						},
						qName: { qv: "" },
						qInternalCtlNo: 0,
						qRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qBmp_OBSOLETE: [0],
						qBmpMode_OBSOLETE: 0,
						qMinimizedRect: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qShowMode: 0,
						qDetached: false,
						qAllowMinimize: false,
						qAutoMinimize: false,
						qAllowMaximize: false,
						qAllowInfo: false,
						qPrintIcon: false,
						qCopyIcon: false,
						qXLIcon: false,
						qSearchIcon: false,
						qSelectPossibleIcon: false,
						qSelectExcludedIcon: false,
						qSelectAllIcon: false,
						qClearIcon: false,
						qClearOtherIcon: false,
						qLockIcon: false,
						qHelpText: { qv: "" },
						qObjectId: "",
						qZedLevel: 0,
						qShrinkFrameToData: false,
						qShowCaption: false,
						qMultiLine: 0,
						qActiveBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qBgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qActiveFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFgColor: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qFixCorner: false,
						qFixCornerSize: 0,
						qRelCornerSize: 0,
						qPower: 0,
						qRoundedShape: false,
						qEnableTopLeftRounded: false,
						qEnableTopRightRounded: false,
						qEnableBottomLeftRounded: false,
						qEnableBottomRightRounded: false,
						qLight: 0,
						qDark: 0,
						qRainbow: false,
						qTextAdjustHorizontal: 0,
						qTextAdjustVertical: 0,
						qShow: {
							qAlways: false,
							qExpression: { qv: "" }
						},
						qOnActivateMacro_OBSOLETE: "",
						qOnDeactivateMacro_OBSOLETE: "",
						qAllowMoveSize: false,
						qAllowCopyClone: false,
						qdummy: [false],
						qCustomObjectGuid: [0],
						qCustomObjectProperties: [0],
						qScrollBkgColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollButtonColor: {
							qCol: {
								qRed: 0,
								qGreen: 0,
								qBlue: 0,
								qAlpha: 0
							},
							qIsCalculated: false,
							qColorExpr: { qv: "" }
						},
						qScrollStyle: 0,
						qScrollWidth: 0,
						qIconColor_OBSOLETE: {
							qMode: 0,
							qLuminosity: 0,
							qFillDirection: 0,
							qFillPattern: 0,
							qPrimaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qSecondaryCol: {
								qCol: {
									qRed: 0,
									qGreen: 0,
									qBlue: 0,
									qAlpha: 0
								},
								qIsCalculated: false,
								qColorExpr: { qv: "" }
							},
							qAlpha: 0
						},
						qIconStyle_OBSOLETE: 0,
						qAllowModify: false,
						qCopyImageIcon: false,
						qPreserveScrollPosition: false,
						qShadowIntensity: 0,
						qOnActivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qOnDeactivateActionItems: [{
							qType: 0,
							qParameters: [{ qv: "" }],
							qStateName: { qv: "" }
						}],
						qExtension: "",
						qBackground: {
							qColor: {
								qMode: 0,
								qLuminosity: 0,
								qFillDirection: 0,
								qFillPattern: 0,
								qPrimaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qSecondaryCol: {
									qCol: {
										qRed: 0,
										qGreen: 0,
										qBlue: 0,
										qAlpha: 0
									},
									qIsCalculated: false,
									qColorExpr: { qv: "" }
								},
								qAlpha: 0
							},
							qImageBlob: [0],
							qImageLayout: {
								qStretchMode: 0,
								qHorizontalAdjust: 0,
								qVerticalAdjust: 0,
								qAlpha: 0
							},
							qUseColor: false,
							qUseImage: false
						},
						qMenuIcon: false,
						qExtendedProperties: [{
							qName: "",
							qValue: ""
						}],
						qExtendedValues: [{
							qName: "",
							qValue: { qv: "" }
						}],
						qStateName: ""
					}
				}],
				Out: []
			},
			GetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qIn",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						}
					}
				}],
				Out: [{ Name: "qData" }]
			},
			SetExtendedBookmarkLayoutData: {
				In: [{
					Name: "qData",
					DefaultValue: {
						qId: "",
						qActive: false,
						qShowMode: 0,
						qScrollPos: {
							qUsePosition: false,
							qPos: {
								qx: 0,
								qy: 0
							}
						},
						qExpansionInfo: [{
							qExcludeList: false,
							qPos: {
								qDimName: "",
								qElemNo: [0],
								qElemValues: [[0]]
							}
						}],
						qLeftCollapsed: false,
						qTopCollapsed: false,
						qSortData: [{
							qName: "",
							qReversed: false
						}],
						qDimensionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qExpressionGroupPos: [{
							qGroupName: "",
							qCurrentItemName: ""
						}],
						qUseGraphMode: false,
						qGraphMode: 0,
						qActiveContainerChildObjectId: "",
						qExtendedPivotState: {
							qExpressionPosition: 0,
							qNumberOfLeftDimensions: 0,
							qDimensionNames: [""],
							qEnableConditions: [""]
						}
					}
				}],
				Out: []
			},
			GetCellsDataForExport: {
				In: [{
					Name: "qRect",
					DefaultValue: {
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}
				}],
				Out: [{ Name: "qData" }]
			},
			GetCellsLayoutForExport: {
				In: [],
				Out: [{ Name: "qLayout" }]
			}
		},
		GenericObject: {
			GetLayout: {
				In: [],
				Out: [{ Name: "qLayout" }]
			},
			GetListObjectData: {
				In: [{
					Name: "qPath",
					DefaultValue: ""
				}, {
					Name: "qPages",
					DefaultValue: [{
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}]
				}],
				Out: [{ Name: "qDataPages" }]
			},
			GetHyperCubeData: {
				In: [{
					Name: "qPath",
					DefaultValue: ""
				}, {
					Name: "qPages",
					DefaultValue: [{
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}]
				}],
				Out: [{ Name: "qDataPages" }]
			},
			GetHyperCubeReducedData: {
				In: [
					{
						Name: "qPath",
						DefaultValue: ""
					},
					{
						Name: "qPages",
						DefaultValue: [{
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						}]
					},
					{
						Name: "qZoomFactor",
						DefaultValue: 0
					},
					{
						Name: "qReductionMode",
						DefaultValue: 0
					}
				],
				Out: [{ Name: "qDataPages" }]
			},
			GetHyperCubePivotData: {
				In: [{
					Name: "qPath",
					DefaultValue: ""
				}, {
					Name: "qPages",
					DefaultValue: [{
						qLeft: 0,
						qTop: 0,
						qWidth: 0,
						qHeight: 0
					}]
				}],
				Out: [{ Name: "qDataPages" }]
			},
			GetHyperCubeStackData: {
				In: [
					{
						Name: "qPath",
						DefaultValue: ""
					},
					{
						Name: "qPages",
						DefaultValue: [{
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						}]
					},
					{
						Name: "qMaxNbrCells",
						DefaultValue: 0,
						Optional: true
					}
				],
				Out: [{ Name: "qDataPages" }]
			},
			GetHyperCubeContinuousData: {
				In: [
					{
						Name: "qPath",
						DefaultValue: ""
					},
					{
						Name: "qOptions",
						DefaultValue: {
							qStart: 0,
							qEnd: 0,
							qNbrPoints: 0,
							qMaxNbrTicks: 0,
							qMaxNumberLines: 0
						}
					},
					{
						Name: "qReverseSort",
						DefaultValue: false,
						Optional: true
					}
				],
				Out: [{ Name: "qDataPages" }, { Name: "qAxisData" }]
			},
			GetHyperCubeTreeData: {
				In: [{
					Name: "qPath",
					DefaultValue: ""
				}, {
					Name: "qNodeOptions",
					DefaultValue: {
						qMaxNbrOfNodes: 0,
						qTreeNodes: [{
							qArea: {
								qLeft: 0,
								qTop: 0,
								qWidth: 0,
								qHeight: 0
							},
							qAllValues: false
						}],
						qTreeLevels: {
							qLeft: 0,
							qDepth: 0
						}
					},
					Optional: true
				}],
				Out: [{ Name: "qNodes" }]
			},
			GetHyperCubeBinnedData: {
				In: [
					{
						Name: "qPath",
						DefaultValue: ""
					},
					{
						Name: "qPages",
						DefaultValue: [{
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						}]
					},
					{
						Name: "qViewport",
						DefaultValue: {
							qWidth: 0,
							qHeight: 0,
							qZoomLevel: 0
						}
					},
					{
						Name: "qDataRanges",
						DefaultValue: [{
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						}]
					},
					{
						Name: "qMaxNbrCells",
						DefaultValue: 0
					},
					{
						Name: "qQueryLevel",
						DefaultValue: 0
					},
					{
						Name: "qBinningMethod",
						DefaultValue: 0
					}
				],
				Out: [{ Name: "qDataPages" }]
			},
			ApplyPatches: {
				In: [{
					Name: "qPatches",
					DefaultValue: [{
						qOp: 0,
						qPath: "",
						qValue: ""
					}]
				}, {
					Name: "qSoftPatch",
					DefaultValue: false,
					Optional: true
				}],
				Out: []
			},
			ClearSoftPatches: {
				In: [],
				Out: []
			},
			SetProperties: {
				In: [{
					Name: "qProp",
					DefaultValue: {
						qInfo: {
							qId: "",
							qType: ""
						},
						qExtendsId: "",
						qMetaDef: {},
						qStateName: ""
					}
				}],
				Out: []
			},
			GetProperties: {
				In: [],
				Out: [{ Name: "qProp" }]
			},
			GetEffectiveProperties: {
				In: [],
				Out: [{ Name: "qProp" }]
			},
			SetFullPropertyTree: {
				In: [{
					Name: "qPropEntry",
					DefaultValue: {
						qProperty: {
							qInfo: {
								qId: "",
								qType: ""
							},
							qExtendsId: "",
							qMetaDef: {},
							qStateName: ""
						},
						qChildren: [],
						qEmbeddedSnapshotRef: null
					}
				}],
				Out: []
			},
			GetFullPropertyTree: {
				In: [],
				Out: [{ Name: "qPropEntry" }]
			},
			GetInfo: {
				In: [],
				Out: [{ Name: "qInfo" }]
			},
			ClearSelections: {
				In: [{
					Name: "qPath",
					DefaultValue: ""
				}, {
					Name: "qColIndices",
					DefaultValue: [0],
					Optional: true
				}],
				Out: []
			},
			ExportData: {
				In: [
					{
						Name: "qFileType",
						DefaultValue: 0
					},
					{
						Name: "qPath",
						DefaultValue: "",
						Optional: true
					},
					{
						Name: "qFileName",
						DefaultValue: "",
						Optional: true
					},
					{
						Name: "qExportState",
						DefaultValue: 0,
						Optional: true
					},
					{
						Name: "qServeOnce",
						DefaultValue: false,
						Optional: true
					}
				],
				Out: [{ Name: "qUrl" }, { Name: "qWarnings" }]
			},
			StoreData: {
				In: [
					{
						Name: "qFileType",
						DefaultValue: 0
					},
					{
						Name: "qPath",
						DefaultValue: "",
						Optional: true
					},
					{
						Name: "qLibRef",
						DefaultValue: ""
					},
					{
						Name: "qExportState",
						DefaultValue: 0,
						Optional: true
					},
					{
						Name: "qParquetCompression",
						DefaultValue: 0,
						Optional: true
					}
				],
				Out: [{ Name: "qUrl" }, { Name: "qWarnings" }]
			},
			SelectListObjectValues: {
				In: [
					{
						Name: "qPath",
						DefaultValue: ""
					},
					{
						Name: "qValues",
						DefaultValue: [0]
					},
					{
						Name: "qToggleMode",
						DefaultValue: false
					},
					{
						Name: "qSoftLock",
						DefaultValue: false,
						Optional: true
					}
				],
				Out: [{ Name: "qSuccess" }]
			},
			SelectListObjectPossible: {
				In: [{
					Name: "qPath",
					DefaultValue: ""
				}, {
					Name: "qSoftLock",
					DefaultValue: false,
					Optional: true
				}],
				Out: [{ Name: "qSuccess" }]
			},
			SelectListObjectExcluded: {
				In: [{
					Name: "qPath",
					DefaultValue: ""
				}, {
					Name: "qSoftLock",
					DefaultValue: false,
					Optional: true
				}],
				Out: [{ Name: "qSuccess" }]
			},
			SelectListObjectAlternative: {
				In: [{
					Name: "qPath",
					DefaultValue: ""
				}, {
					Name: "qSoftLock",
					DefaultValue: false,
					Optional: true
				}],
				Out: [{ Name: "qSuccess" }]
			},
			SelectListObjectAll: {
				In: [{
					Name: "qPath",
					DefaultValue: ""
				}, {
					Name: "qSoftLock",
					DefaultValue: false,
					Optional: true
				}],
				Out: [{ Name: "qSuccess" }]
			},
			SelectListObjectContinuousRange: {
				In: [
					{
						Name: "qPath",
						DefaultValue: ""
					},
					{
						Name: "qRanges",
						DefaultValue: [{
							qMin: 0,
							qMax: 0,
							qMinInclEq: false,
							qMaxInclEq: false
						}]
					},
					{
						Name: "qSoftLock",
						DefaultValue: false,
						Optional: true
					}
				],
				Out: [{ Name: "qSuccess" }]
			},
			SearchListObjectFor: {
				In: [{
					Name: "qPath",
					DefaultValue: ""
				}, {
					Name: "qMatch",
					DefaultValue: ""
				}],
				Out: [{ Name: "qSuccess" }]
			},
			AbortListObjectSearch: {
				In: [{
					Name: "qPath",
					DefaultValue: ""
				}],
				Out: []
			},
			AcceptListObjectSearch: {
				In: [
					{
						Name: "qPath",
						DefaultValue: ""
					},
					{
						Name: "qToggleMode",
						DefaultValue: false
					},
					{
						Name: "qSoftLock",
						DefaultValue: false,
						Optional: true
					}
				],
				Out: []
			},
			ExpandLeft: {
				In: [
					{
						Name: "qPath",
						DefaultValue: ""
					},
					{
						Name: "qRow",
						DefaultValue: 0
					},
					{
						Name: "qCol",
						DefaultValue: 0
					},
					{
						Name: "qAll",
						DefaultValue: false
					}
				],
				Out: []
			},
			ExpandTop: {
				In: [
					{
						Name: "qPath",
						DefaultValue: ""
					},
					{
						Name: "qRow",
						DefaultValue: 0
					},
					{
						Name: "qCol",
						DefaultValue: 0
					},
					{
						Name: "qAll",
						DefaultValue: false
					}
				],
				Out: []
			},
			CollapseLeft: {
				In: [
					{
						Name: "qPath",
						DefaultValue: ""
					},
					{
						Name: "qRow",
						DefaultValue: 0
					},
					{
						Name: "qCol",
						DefaultValue: 0
					},
					{
						Name: "qAll",
						DefaultValue: false
					}
				],
				Out: []
			},
			CollapseTop: {
				In: [
					{
						Name: "qPath",
						DefaultValue: ""
					},
					{
						Name: "qRow",
						DefaultValue: 0
					},
					{
						Name: "qCol",
						DefaultValue: 0
					},
					{
						Name: "qAll",
						DefaultValue: false
					}
				],
				Out: []
			},
			DrillUp: {
				In: [
					{
						Name: "qPath",
						DefaultValue: ""
					},
					{
						Name: "qDimNo",
						DefaultValue: 0
					},
					{
						Name: "qNbrSteps",
						DefaultValue: 0
					}
				],
				Out: []
			},
			Lock: {
				In: [{
					Name: "qPath",
					DefaultValue: ""
				}, {
					Name: "qColIndices",
					DefaultValue: [0],
					Optional: true
				}],
				Out: []
			},
			Unlock: {
				In: [{
					Name: "qPath",
					DefaultValue: ""
				}, {
					Name: "qColIndices",
					DefaultValue: [0],
					Optional: true
				}],
				Out: []
			},
			StepCycle: {
				In: [
					{
						Name: "qPath",
						DefaultValue: ""
					},
					{
						Name: "qDimNo",
						DefaultValue: 0
					},
					{
						Name: "qNbrSteps",
						DefaultValue: 0
					}
				],
				Out: []
			},
			SetActiveField: {
				In: [
					{
						Name: "qPath",
						DefaultValue: ""
					},
					{
						Name: "qDimNo",
						DefaultValue: 0
					},
					{
						Name: "qNewIndex",
						DefaultValue: 0
					}
				],
				Out: []
			},
			SelectHyperCubeValues: {
				In: [
					{
						Name: "qPath",
						DefaultValue: ""
					},
					{
						Name: "qDimNo",
						DefaultValue: 0
					},
					{
						Name: "qValues",
						DefaultValue: [0]
					},
					{
						Name: "qToggleMode",
						DefaultValue: false
					}
				],
				Out: [{ Name: "qSuccess" }]
			},
			SelectHyperCubeCells: {
				In: [
					{
						Name: "qPath",
						DefaultValue: ""
					},
					{
						Name: "qRowIndices",
						DefaultValue: [0]
					},
					{
						Name: "qColIndices",
						DefaultValue: [0]
					},
					{
						Name: "qSoftLock",
						DefaultValue: false,
						Optional: true
					},
					{
						Name: "qDeselectOnlyOneSelected",
						DefaultValue: false,
						Optional: true
					}
				],
				Out: [{ Name: "qSuccess" }]
			},
			SelectPivotCells: {
				In: [
					{
						Name: "qPath",
						DefaultValue: ""
					},
					{
						Name: "qSelections",
						DefaultValue: [{
							qType: 0,
							qCol: 0,
							qRow: 0
						}]
					},
					{
						Name: "qSoftLock",
						DefaultValue: false,
						Optional: true
					},
					{
						Name: "qDeselectOnlyOneSelected",
						DefaultValue: false,
						Optional: true
					}
				],
				Out: [{ Name: "qSuccess" }]
			},
			RangeSelectHyperCubeValues: {
				In: [
					{
						Name: "qPath",
						DefaultValue: ""
					},
					{
						Name: "qRanges",
						DefaultValue: [{
							qRange: {
								qMin: 0,
								qMax: 0,
								qMinInclEq: false,
								qMaxInclEq: false
							},
							qMeasureIx: 0
						}]
					},
					{
						Name: "qColumnsToSelect",
						DefaultValue: [0],
						Optional: true
					},
					{
						Name: "qOrMode",
						DefaultValue: false,
						Optional: true
					},
					{
						Name: "qDeselectOnlyOneSelected",
						DefaultValue: false,
						Optional: true
					}
				],
				Out: [{ Name: "qSuccess" }]
			},
			MultiRangeSelectHyperCubeValues: {
				In: [
					{
						Name: "qPath",
						DefaultValue: ""
					},
					{
						Name: "qRanges",
						DefaultValue: [{
							qRanges: [{
								qRange: {
									qMin: 0,
									qMax: 0,
									qMinInclEq: false,
									qMaxInclEq: false
								},
								qMeasureIx: 0
							}],
							qColumnsToSelect: [0]
						}]
					},
					{
						Name: "qOrMode",
						DefaultValue: false,
						Optional: true
					},
					{
						Name: "qDeselectOnlyOneSelected",
						DefaultValue: false,
						Optional: true
					}
				],
				Out: [{ Name: "qSuccess" }]
			},
			MultiRangeSelectTreeDataValues: {
				In: [
					{
						Name: "qPath",
						DefaultValue: ""
					},
					{
						Name: "qRanges",
						DefaultValue: [{ qRanges: [{
							qRange: {
								qMin: 0,
								qMax: 0,
								qMinInclEq: false,
								qMaxInclEq: false
							},
							qMeasureIx: 0,
							qDimensionIx: 0
						}] }]
					},
					{
						Name: "qOrMode",
						DefaultValue: false,
						Optional: true
					},
					{
						Name: "qDeselectOnlyOneSelected",
						DefaultValue: false,
						Optional: true
					}
				],
				Out: [{ Name: "qSuccess" }]
			},
			SelectHyperCubeContinuousRange: {
				In: [
					{
						Name: "qPath",
						DefaultValue: ""
					},
					{
						Name: "qRanges",
						DefaultValue: [{
							qRange: {
								qMin: 0,
								qMax: 0,
								qMinInclEq: false,
								qMaxInclEq: false
							},
							qDimIx: 0
						}]
					},
					{
						Name: "qSoftLock",
						DefaultValue: false,
						Optional: true
					}
				],
				Out: [{ Name: "qSuccess" }]
			},
			GetChild: {
				In: [{
					Name: "qId",
					DefaultValue: ""
				}],
				Out: []
			},
			GetParent: {
				In: [],
				Out: []
			},
			GetChildInfos: {
				In: [],
				Out: [{ Name: "qInfos" }]
			},
			CreateChild: {
				In: [{
					Name: "qProp",
					DefaultValue: {
						qInfo: {
							qId: "",
							qType: ""
						},
						qExtendsId: "",
						qMetaDef: {},
						qStateName: ""
					}
				}, {
					Name: "qPropForThis",
					DefaultValue: null,
					Optional: true
				}],
				Out: [{ Name: "qInfo" }]
			},
			DestroyChild: {
				In: [{
					Name: "qId",
					DefaultValue: ""
				}, {
					Name: "qPropForThis",
					DefaultValue: null,
					Optional: true
				}],
				Out: [{ Name: "qSuccess" }]
			},
			DestroyAllChildren: {
				In: [{
					Name: "qPropForThis",
					DefaultValue: null,
					Optional: true
				}],
				Out: []
			},
			SetChildArrayOrder: {
				In: [{
					Name: "qIds",
					DefaultValue: [""]
				}],
				Out: []
			},
			GetLinkedObjects: {
				In: [],
				Out: [{ Name: "qItems" }]
			},
			CopyFrom: {
				In: [{
					Name: "qFromId",
					DefaultValue: ""
				}],
				Out: []
			},
			BeginSelections: {
				In: [{
					Name: "qPaths",
					DefaultValue: [""]
				}],
				Out: []
			},
			EndSelections: {
				In: [{
					Name: "qAccept",
					DefaultValue: false
				}],
				Out: []
			},
			ResetMadeSelections: {
				In: [],
				Out: []
			},
			EmbedSnapshotObject: {
				In: [{
					Name: "qId",
					DefaultValue: ""
				}],
				Out: []
			},
			GetSnapshotObject: {
				In: [],
				Out: []
			},
			Publish: {
				In: [],
				Out: []
			},
			UnPublish: {
				In: [],
				Out: []
			},
			Approve: {
				In: [],
				Out: []
			},
			UnApprove: {
				In: [],
				Out: []
			},
			CreateGroup: {
				In: [
					{
						Name: "qPath",
						DefaultValue: ""
					},
					{
						Name: "qGroupDef",
						DefaultValue: {
							qClass: 0,
							qObjectType: "",
							qGroupType: "",
							qLabel: "",
							qMemberIds: [{
								qGroupId: "",
								qObjectId: ""
							}]
						}
					},
					{
						Name: "qTargetGroupId",
						DefaultValue: "",
						Optional: true
					}
				],
				Out: [{ Name: "qGroupId" }]
			},
			AddGroupMembers: {
				In: [
					{
						Name: "qPath",
						DefaultValue: ""
					},
					{
						Name: "qMembers",
						DefaultValue: [{
							qGroupId: "",
							qObjectId: ""
						}]
					},
					{
						Name: "qTargetGroupId",
						DefaultValue: "",
						Optional: true
					},
					{
						Name: "qPosId",
						DefaultValue: "",
						Optional: true
					}
				],
				Out: []
			},
			RemoveGroupMembers: {
				In: [
					{
						Name: "qPath",
						DefaultValue: ""
					},
					{
						Name: "qMembers",
						DefaultValue: [""]
					},
					{
						Name: "qTargetGroupId",
						DefaultValue: "",
						Optional: true
					}
				],
				Out: []
			},
			RemoveGroup: {
				In: [{
					Name: "qPath",
					DefaultValue: ""
				}, {
					Name: "qGroupId",
					DefaultValue: ""
				}],
				Out: []
			},
			SetGroupLabel: {
				In: [
					{
						Name: "qPath",
						DefaultValue: ""
					},
					{
						Name: "qNewLabel",
						DefaultValue: ""
					},
					{
						Name: "qTargetGroupId",
						DefaultValue: "",
						Optional: true
					}
				],
				Out: []
			}
		},
		GenericDimension: {
			GetLayout: {
				In: [],
				Out: [{ Name: "qLayout" }]
			},
			ApplyPatches: {
				In: [{
					Name: "qPatches",
					DefaultValue: [{
						qOp: 0,
						qPath: "",
						qValue: ""
					}]
				}],
				Out: []
			},
			SetProperties: {
				In: [{
					Name: "qProp",
					DefaultValue: {
						qInfo: {
							qId: "",
							qType: ""
						},
						qDim: {
							qGrouping: 0,
							qFieldDefs: [""],
							qFieldLabels: [""],
							qLabelExpression: "",
							qAlias: "",
							qScriptGenerated: false
						},
						qMetaDef: {}
					}
				}],
				Out: []
			},
			GetProperties: {
				In: [],
				Out: [{ Name: "qProp" }]
			},
			GetInfo: {
				In: [],
				Out: [{ Name: "qInfo" }]
			},
			GetDimension: {
				In: [],
				Out: [{ Name: "qDim" }]
			},
			GetLinkedObjects: {
				In: [],
				Out: [{ Name: "qItems" }]
			},
			Publish: {
				In: [],
				Out: []
			},
			UnPublish: {
				In: [],
				Out: []
			},
			Approve: {
				In: [],
				Out: []
			},
			UnApprove: {
				In: [],
				Out: []
			},
			StepCycle: {
				In: [{
					Name: "qStep",
					DefaultValue: 0
				}],
				Out: []
			},
			SetActiveField: {
				In: [{
					Name: "qIx",
					DefaultValue: 0
				}],
				Out: []
			},
			GetActiveField: {
				In: [],
				Out: []
			}
		},
		GenericBookmark: {
			GetFieldValues: {
				In: [
					{
						Name: "qField",
						DefaultValue: ""
					},
					{
						Name: "qGetExcludedValues",
						DefaultValue: false
					},
					{
						Name: "qDataPage",
						DefaultValue: {
							qStartIndex: 0,
							qEndIndex: 0
						}
					}
				],
				Out: [{ Name: "qFieldValues" }]
			},
			GetFieldValuesEx: {
				In: [
					{
						Name: "qField",
						DefaultValue: ""
					},
					{
						Name: "qGetExcludedValues",
						DefaultValue: false
					},
					{
						Name: "qDataPages",
						DefaultValue: { qStatePages: [{
							qStateName: "",
							qStartIndex: 0,
							qEndIndex: 0
						}] }
					}
				],
				Out: [{ Name: "qFieldValues" }]
			},
			GetLayout: {
				In: [],
				Out: [{ Name: "qLayout" }]
			},
			ApplyPatches: {
				In: [{
					Name: "qPatches",
					DefaultValue: [{
						qOp: 0,
						qPath: "",
						qValue: ""
					}]
				}],
				Out: []
			},
			SetProperties: {
				In: [{
					Name: "qProp",
					DefaultValue: {
						qInfo: {
							qId: "",
							qType: ""
						},
						qMetaDef: {},
						qIncludeVariables: false,
						qDistinctValues: false
					}
				}],
				Out: []
			},
			GetProperties: {
				In: [],
				Out: [{ Name: "qProp" }]
			},
			GetInfo: {
				In: [],
				Out: [{ Name: "qInfo" }]
			},
			Apply: {
				In: [],
				Out: [{ Name: "qSuccess" }]
			},
			ApplyAndVerify: {
				In: [],
				Out: [{ Name: "qResult" }]
			},
			Publish: {
				In: [],
				Out: []
			},
			UnPublish: {
				In: [],
				Out: []
			},
			Approve: {
				In: [],
				Out: []
			},
			UnApprove: {
				In: [],
				Out: []
			}
		},
		GenericVariable: {
			GetLayout: {
				In: [],
				Out: [{ Name: "qLayout" }]
			},
			ApplyPatches: {
				In: [{
					Name: "qPatches",
					DefaultValue: [{
						qOp: 0,
						qPath: "",
						qValue: ""
					}]
				}],
				Out: []
			},
			SetProperties: {
				In: [{
					Name: "qProp",
					DefaultValue: {
						qInfo: {
							qId: "",
							qType: ""
						},
						qMetaDef: {},
						qName: "",
						qComment: "",
						qNumberPresentation: {
							qType: 0,
							qnDec: 0,
							qUseThou: 0,
							qFmt: "",
							qDec: "",
							qThou: ""
						},
						qIncludeInBookmark: false,
						qDefinition: "",
						qConstraints: null
					}
				}],
				Out: []
			},
			GetProperties: {
				In: [],
				Out: [{ Name: "qProp" }]
			},
			GetInfo: {
				In: [],
				Out: [{ Name: "qInfo" }]
			},
			SetStringValue: {
				In: [{
					Name: "qVal",
					DefaultValue: ""
				}],
				Out: []
			},
			SetNumValue: {
				In: [{
					Name: "qVal",
					DefaultValue: 0
				}],
				Out: []
			},
			SetDualValue: {
				In: [{
					Name: "qText",
					DefaultValue: ""
				}, {
					Name: "qNum",
					DefaultValue: 0
				}],
				Out: []
			},
			GetRawContent: {
				In: [],
				Out: []
			}
		},
		GenericMeasure: {
			GetLayout: {
				In: [],
				Out: [{ Name: "qLayout" }]
			},
			ApplyPatches: {
				In: [{
					Name: "qPatches",
					DefaultValue: [{
						qOp: 0,
						qPath: "",
						qValue: ""
					}]
				}],
				Out: []
			},
			SetProperties: {
				In: [{
					Name: "qProp",
					DefaultValue: {
						qInfo: {
							qId: "",
							qType: ""
						},
						qMeasure: {
							qLabel: "",
							qDef: "",
							qGrouping: 0,
							qExpressions: [""],
							qActiveExpression: 0,
							qLabelExpression: "",
							qNumFormat: {
								qType: 0,
								qnDec: 0,
								qUseThou: 0,
								qFmt: "",
								qDec: "",
								qThou: ""
							},
							qScriptGenerated: false
						},
						qMetaDef: {}
					}
				}],
				Out: []
			},
			GetProperties: {
				In: [],
				Out: [{ Name: "qProp" }]
			},
			GetInfo: {
				In: [],
				Out: [{ Name: "qInfo" }]
			},
			GetMeasure: {
				In: [],
				Out: [{ Name: "qMeasure" }]
			},
			GetLinkedObjects: {
				In: [],
				Out: [{ Name: "qItems" }]
			},
			Publish: {
				In: [],
				Out: []
			},
			UnPublish: {
				In: [],
				Out: []
			},
			Approve: {
				In: [],
				Out: []
			},
			UnApprove: {
				In: [],
				Out: []
			}
		},
		Doc: {
			GetSheetObject: {
				In: [{
					Name: "qObjectId",
					DefaultValue: ""
				}],
				Out: []
			},
			GetField: {
				In: [{
					Name: "qFieldName",
					DefaultValue: ""
				}, {
					Name: "qStateName",
					DefaultValue: "",
					Optional: true
				}],
				Out: []
			},
			GetFieldDescription: {
				In: [{
					Name: "qFieldName",
					DefaultValue: ""
				}],
				Out: []
			},
			GetVariable: {
				In: [{
					Name: "qName",
					DefaultValue: ""
				}],
				Out: []
			},
			GetLooselyCoupledVector: {
				In: [],
				Out: [{ Name: "qv" }]
			},
			SetLooselyCoupledVector: {
				In: [{
					Name: "qv",
					DefaultValue: [0]
				}],
				Out: []
			},
			Evaluate: {
				In: [{
					Name: "qExpression",
					DefaultValue: ""
				}],
				Out: []
			},
			EvaluateEx: {
				In: [{
					Name: "qExpression",
					DefaultValue: ""
				}],
				Out: [{ Name: "qValue" }]
			},
			ClearAll: {
				In: [{
					Name: "qLockedAlso",
					DefaultValue: false,
					Optional: true
				}, {
					Name: "qStateName",
					DefaultValue: "",
					Optional: true
				}],
				Out: []
			},
			LockAll: {
				In: [{
					Name: "qStateName",
					DefaultValue: "",
					Optional: true
				}],
				Out: []
			},
			UnlockAll: {
				In: [{
					Name: "qStateName",
					DefaultValue: "",
					Optional: true
				}],
				Out: []
			},
			Back: {
				In: [],
				Out: []
			},
			Forward: {
				In: [],
				Out: []
			},
			CreateVariable: {
				In: [{
					Name: "qName",
					DefaultValue: ""
				}],
				Out: []
			},
			RemoveVariable: {
				In: [{
					Name: "qName",
					DefaultValue: ""
				}],
				Out: []
			},
			GetLocaleInfo: {
				In: [],
				Out: []
			},
			GetTablesAndKeys: {
				In: [
					{
						Name: "qWindowSize",
						DefaultValue: {
							qcx: 0,
							qcy: 0
						}
					},
					{
						Name: "qNullSize",
						DefaultValue: {
							qcx: 0,
							qcy: 0
						}
					},
					{
						Name: "qCellHeight",
						DefaultValue: 0
					},
					{
						Name: "qSyntheticMode",
						DefaultValue: false
					},
					{
						Name: "qIncludeSysVars",
						DefaultValue: false
					},
					{
						Name: "qIncludeProfiling",
						DefaultValue: false,
						Optional: true
					}
				],
				Out: [{ Name: "qtr" }, { Name: "qk" }]
			},
			GetViewDlgSaveInfo: {
				In: [],
				Out: []
			},
			SetViewDlgSaveInfo: {
				In: [{
					Name: "qInfo",
					DefaultValue: {
						qPos: {
							qLeft: 0,
							qTop: 0,
							qWidth: 0,
							qHeight: 0
						},
						qCtlInfo: {
							qInternalView: {
								qTables: [{
									qPos: {
										qLeft: 0,
										qTop: 0,
										qWidth: 0,
										qHeight: 0
									},
									qCaption: ""
								}],
								qBroomPoints: [{
									qPos: {
										qx: 0,
										qy: 0
									},
									qTable: "",
									qFields: [""]
								}],
								qConnectionPoints: [{
									qPos: {
										qx: 0,
										qy: 0
									},
									qFields: [""]
								}],
								qZoomFactor: 0
							},
							qSourceView: {
								qTables: [{
									qPos: {
										qLeft: 0,
										qTop: 0,
										qWidth: 0,
										qHeight: 0
									},
									qCaption: ""
								}],
								qBroomPoints: [{
									qPos: {
										qx: 0,
										qy: 0
									},
									qTable: "",
									qFields: [""]
								}],
								qConnectionPoints: [{
									qPos: {
										qx: 0,
										qy: 0
									},
									qFields: [""]
								}],
								qZoomFactor: 0
							}
						},
						qMode: 0
					}
				}],
				Out: []
			},
			GetEmptyScript: {
				In: [{
					Name: "qLocalizedMainSection",
					DefaultValue: "",
					Optional: true
				}],
				Out: []
			},
			DoReload: {
				In: [
					{
						Name: "qMode",
						DefaultValue: 0,
						Optional: true
					},
					{
						Name: "qPartial",
						DefaultValue: false,
						Optional: true
					},
					{
						Name: "qDebug",
						DefaultValue: false,
						Optional: true
					}
				],
				Out: []
			},
			GetScriptBreakpoints: {
				In: [],
				Out: [{ Name: "qBreakpoints" }]
			},
			SetScriptBreakpoints: {
				In: [{
					Name: "qBreakpoints",
					DefaultValue: [{
						qbufferName: "",
						qlineIx: 0,
						qEnabled: false
					}]
				}],
				Out: []
			},
			GetScript: {
				In: [],
				Out: [{ Name: "qScript" }]
			},
			GetTextMacros: {
				In: [],
				Out: [{ Name: "qMacros" }]
			},
			SetFetchLimit: {
				In: [{
					Name: "qLimit",
					DefaultValue: 0
				}],
				Out: []
			},
			DoSave: {
				In: [{
					Name: "qFileName",
					DefaultValue: "",
					Optional: true
				}],
				Out: []
			},
			GetTableData: {
				In: [
					{
						Name: "qOffset",
						DefaultValue: 0
					},
					{
						Name: "qRows",
						DefaultValue: 0
					},
					{
						Name: "qSyntheticMode",
						DefaultValue: false
					},
					{
						Name: "qTableName",
						DefaultValue: ""
					}
				],
				Out: [{ Name: "qData" }]
			},
			GetAppLayout: {
				In: [],
				Out: [{ Name: "qLayout" }]
			},
			SetAppProperties: {
				In: [{
					Name: "qProp",
					DefaultValue: {
						qTitle: "",
						qLastReloadTime: "",
						qMigrationHash: "",
						qSavedInProductVersion: "",
						qThumbnail: { qUrl: "" },
						qHasSectionAccess: false,
						qUsage: 0
					}
				}],
				Out: []
			},
			GetAppProperties: {
				In: [],
				Out: [{ Name: "qProp" }]
			},
			GetLineage: {
				In: [],
				Out: [{ Name: "qLineage" }]
			},
			CreateSessionObject: {
				In: [{
					Name: "qProp",
					DefaultValue: {
						qInfo: {
							qId: "",
							qType: ""
						},
						qExtendsId: "",
						qMetaDef: {},
						qStateName: ""
					}
				}],
				Out: []
			},
			DestroySessionObject: {
				In: [{
					Name: "qId",
					DefaultValue: ""
				}],
				Out: [{ Name: "qSuccess" }]
			},
			CreateObject: {
				In: [{
					Name: "qProp",
					DefaultValue: {
						qInfo: {
							qId: "",
							qType: ""
						},
						qExtendsId: "",
						qMetaDef: {},
						qStateName: ""
					}
				}],
				Out: [{ Name: "qInfo" }]
			},
			GetOrCreateObject: {
				In: [{
					Name: "qProp",
					DefaultValue: {
						qInfo: {
							qId: "",
							qType: ""
						},
						qExtendsId: "",
						qMetaDef: {},
						qStateName: ""
					}
				}],
				Out: [{ Name: "qNewObject" }]
			},
			DestroyObject: {
				In: [{
					Name: "qId",
					DefaultValue: ""
				}],
				Out: [{ Name: "qSuccess" }]
			},
			GetObject: {
				In: [{
					Name: "qId",
					DefaultValue: ""
				}],
				Out: []
			},
			GetObjects: {
				In: [{
					Name: "qOptions",
					DefaultValue: {
						qTypes: [""],
						qIncludeSessionObjects: false,
						qData: {}
					}
				}],
				Out: [{ Name: "qList" }]
			},
			GetBookmarks: {
				In: [{
					Name: "qOptions",
					DefaultValue: {
						qTypes: [""],
						qData: {},
						qIncludePatches: false
					}
				}],
				Out: [{ Name: "qList" }]
			},
			CloneObject: {
				In: [{
					Name: "qId",
					DefaultValue: ""
				}],
				Out: [{ Name: "qCloneId" }]
			},
			CreateDraft: {
				In: [{
					Name: "qId",
					DefaultValue: ""
				}],
				Out: [{ Name: "qDraftId" }]
			},
			CommitDraft: {
				In: [{
					Name: "qId",
					DefaultValue: ""
				}],
				Out: []
			},
			DestroyDraft: {
				In: [{
					Name: "qId",
					DefaultValue: ""
				}, {
					Name: "qSourceId",
					DefaultValue: ""
				}],
				Out: [{ Name: "qSuccess" }]
			},
			Undo: {
				In: [],
				Out: [{ Name: "qSuccess" }]
			},
			Redo: {
				In: [],
				Out: [{ Name: "qSuccess" }]
			},
			ClearUndoBuffer: {
				In: [],
				Out: []
			},
			CreateDimension: {
				In: [{
					Name: "qProp",
					DefaultValue: {
						qInfo: {
							qId: "",
							qType: ""
						},
						qDim: {
							qGrouping: 0,
							qFieldDefs: [""],
							qFieldLabels: [""],
							qLabelExpression: "",
							qAlias: "",
							qScriptGenerated: false
						},
						qMetaDef: {}
					}
				}],
				Out: [{ Name: "qInfo" }]
			},
			DestroyDimension: {
				In: [{
					Name: "qId",
					DefaultValue: ""
				}],
				Out: [{ Name: "qSuccess" }]
			},
			GetDimension: {
				In: [{
					Name: "qId",
					DefaultValue: ""
				}],
				Out: []
			},
			CloneDimension: {
				In: [{
					Name: "qId",
					DefaultValue: ""
				}],
				Out: [{ Name: "qCloneId" }]
			},
			CreateMeasure: {
				In: [{
					Name: "qProp",
					DefaultValue: {
						qInfo: {
							qId: "",
							qType: ""
						},
						qMeasure: {
							qLabel: "",
							qDef: "",
							qGrouping: 0,
							qExpressions: [""],
							qActiveExpression: 0,
							qLabelExpression: "",
							qNumFormat: {
								qType: 0,
								qnDec: 0,
								qUseThou: 0,
								qFmt: "",
								qDec: "",
								qThou: ""
							},
							qScriptGenerated: false
						},
						qMetaDef: {}
					}
				}],
				Out: [{ Name: "qInfo" }]
			},
			DestroyMeasure: {
				In: [{
					Name: "qId",
					DefaultValue: ""
				}],
				Out: [{ Name: "qSuccess" }]
			},
			GetMeasure: {
				In: [{
					Name: "qId",
					DefaultValue: ""
				}],
				Out: []
			},
			CloneMeasure: {
				In: [{
					Name: "qId",
					DefaultValue: ""
				}],
				Out: [{ Name: "qCloneId" }]
			},
			CreateSessionVariable: {
				In: [{
					Name: "qProp",
					DefaultValue: {
						qInfo: {
							qId: "",
							qType: ""
						},
						qMetaDef: {},
						qName: "",
						qComment: "",
						qNumberPresentation: {
							qType: 0,
							qnDec: 0,
							qUseThou: 0,
							qFmt: "",
							qDec: "",
							qThou: ""
						},
						qIncludeInBookmark: false,
						qDefinition: "",
						qConstraints: null
					}
				}],
				Out: []
			},
			DestroySessionVariable: {
				In: [{
					Name: "qId",
					DefaultValue: ""
				}],
				Out: [{ Name: "qSuccess" }]
			},
			CreateVariableEx: {
				In: [{
					Name: "qProp",
					DefaultValue: {
						qInfo: {
							qId: "",
							qType: ""
						},
						qMetaDef: {},
						qName: "",
						qComment: "",
						qNumberPresentation: {
							qType: 0,
							qnDec: 0,
							qUseThou: 0,
							qFmt: "",
							qDec: "",
							qThou: ""
						},
						qIncludeInBookmark: false,
						qDefinition: "",
						qConstraints: null
					}
				}],
				Out: [{ Name: "qInfo" }]
			},
			DestroyVariableById: {
				In: [{
					Name: "qId",
					DefaultValue: ""
				}],
				Out: [{ Name: "qSuccess" }]
			},
			DestroyVariableByName: {
				In: [{
					Name: "qName",
					DefaultValue: ""
				}],
				Out: [{ Name: "qSuccess" }]
			},
			GetVariableById: {
				In: [{
					Name: "qId",
					DefaultValue: ""
				}],
				Out: []
			},
			GetVariableByName: {
				In: [{
					Name: "qName",
					DefaultValue: ""
				}],
				Out: []
			},
			MigrateVariables: {
				In: [],
				Out: []
			},
			MigrateDerivedFields: {
				In: [],
				Out: []
			},
			CheckExpression: {
				In: [{
					Name: "qExpr",
					DefaultValue: ""
				}, {
					Name: "qLabels",
					DefaultValue: [""],
					Optional: true
				}],
				Out: [
					{ Name: "qErrorMsg" },
					{ Name: "qBadFieldNames" },
					{ Name: "qDangerousFieldNames" }
				]
			},
			CheckNumberOrExpression: {
				In: [{
					Name: "qExpr",
					DefaultValue: ""
				}],
				Out: [{ Name: "qErrorMsg" }, { Name: "qBadFieldNames" }]
			},
			AddAlternateState: {
				In: [{
					Name: "qStateName",
					DefaultValue: ""
				}],
				Out: []
			},
			RemoveAlternateState: {
				In: [{
					Name: "qStateName",
					DefaultValue: ""
				}],
				Out: []
			},
			AddSessionAlternateState: {
				In: [{
					Name: "qStateName",
					DefaultValue: ""
				}, {
					Name: "qSourceStateName",
					DefaultValue: "",
					Optional: true
				}],
				Out: []
			},
			RemoveSessionAlternateState: {
				In: [{
					Name: "qStateName",
					DefaultValue: ""
				}],
				Out: [{ Name: "qSuccess" }]
			},
			CreateBookmark: {
				In: [{
					Name: "qProp",
					DefaultValue: {
						qInfo: {
							qId: "",
							qType: ""
						},
						qMetaDef: {},
						qIncludeVariables: false,
						qDistinctValues: false
					}
				}],
				Out: [{ Name: "qInfo" }]
			},
			DestroyBookmark: {
				In: [{
					Name: "qId",
					DefaultValue: ""
				}],
				Out: [{ Name: "qSuccess" }]
			},
			GetBookmark: {
				In: [{
					Name: "qId",
					DefaultValue: ""
				}],
				Out: []
			},
			ApplyBookmark: {
				In: [{
					Name: "qId",
					DefaultValue: ""
				}],
				Out: [{ Name: "qSuccess" }]
			},
			ApplyAndVerifyBookmark: {
				In: [{
					Name: "qId",
					DefaultValue: ""
				}],
				Out: [{ Name: "qResult" }]
			},
			CloneBookmark: {
				In: [{
					Name: "qId",
					DefaultValue: ""
				}],
				Out: [{ Name: "qCloneId" }]
			},
			AddFieldFromExpression: {
				In: [{
					Name: "qName",
					DefaultValue: ""
				}, {
					Name: "qExpr",
					DefaultValue: ""
				}],
				Out: [{ Name: "qSuccess" }]
			},
			GetFieldOnTheFlyByName: {
				In: [{
					Name: "qReadableName",
					DefaultValue: ""
				}],
				Out: [{ Name: "qName" }]
			},
			GetAllInfos: {
				In: [],
				Out: [{ Name: "qInfos" }]
			},
			Resume: {
				In: [],
				Out: []
			},
			AbortModal: {
				In: [{
					Name: "qAccept",
					DefaultValue: false
				}],
				Out: []
			},
			Publish: {
				In: [{
					Name: "qStreamId",
					DefaultValue: ""
				}, {
					Name: "qName",
					DefaultValue: "",
					Optional: true
				}],
				Out: []
			},
			UnPublish: {
				In: [],
				Out: []
			},
			GetMatchingFields: {
				In: [{
					Name: "qTags",
					DefaultValue: [""]
				}, {
					Name: "qMatchingFieldMode",
					DefaultValue: 0,
					Optional: true
				}],
				Out: [{ Name: "qFieldNames" }]
			},
			FindMatchingFields: {
				In: [{
					Name: "qFieldName",
					DefaultValue: ""
				}, {
					Name: "qTags",
					DefaultValue: [""]
				}],
				Out: [{ Name: "qFieldNames" }]
			},
			Scramble: {
				In: [{
					Name: "qFieldName",
					DefaultValue: ""
				}],
				Out: []
			},
			SaveObjects: {
				In: [],
				Out: []
			},
			GetAssociationScores: {
				In: [{
					Name: "qTable1",
					DefaultValue: ""
				}, {
					Name: "qTable2",
					DefaultValue: ""
				}],
				Out: [{ Name: "qScore" }]
			},
			GetMediaList: {
				In: [],
				Out: [{ Name: "qList" }]
			},
			GetContentLibraries: {
				In: [],
				Out: [{ Name: "qList" }]
			},
			GetLibraryContent: {
				In: [{
					Name: "qName",
					DefaultValue: ""
				}],
				Out: [{ Name: "qList" }]
			},
			DoReloadEx: {
				In: [{
					Name: "qParams",
					DefaultValue: {
						qMode: 0,
						qPartial: false,
						qDebug: false,
						qReloadId: "",
						qSkipStore: false,
						qRowLimit: 0
					},
					Optional: true
				}],
				Out: [{ Name: "qResult" }]
			},
			BackCount: {
				In: [],
				Out: []
			},
			ForwardCount: {
				In: [],
				Out: []
			},
			ExportReducedData: {
				In: [{
					Name: "qOptions",
					DefaultValue: {
						qBookmarkId: "",
						qExpires: 0,
						qServeOnce: false
					},
					Optional: true
				}],
				Out: [{ Name: "qDownloadInfo" }]
			},
			GetSetAnalysis: {
				In: [{
					Name: "qStateName",
					DefaultValue: "",
					Optional: true
				}, {
					Name: "qBookmarkId",
					DefaultValue: "",
					Optional: true
				}],
				Out: [{ Name: "qSetExpression" }]
			},
			SetScript: {
				In: [{
					Name: "qScript",
					DefaultValue: ""
				}],
				Out: []
			},
			CheckScriptSyntax: {
				In: [],
				Out: [{ Name: "qErrors" }]
			},
			GetFavoriteVariables: {
				In: [],
				Out: [{ Name: "qNames" }]
			},
			SetFavoriteVariables: {
				In: [{
					Name: "qNames",
					DefaultValue: [""]
				}],
				Out: []
			},
			GetIncludeFileContent: {
				In: [{
					Name: "qPath",
					DefaultValue: ""
				}],
				Out: [{ Name: "qContent" }]
			},
			CreateConnection: {
				In: [{
					Name: "qConnection",
					DefaultValue: {
						qId: "",
						qName: "",
						qConnectionString: "",
						qType: "",
						qUserName: "",
						qPassword: "",
						qModifiedDate: "",
						qMeta: { qName: "" },
						qLogOn: 0
					}
				}],
				Out: [{ Name: "qConnectionId" }]
			},
			ModifyConnection: {
				In: [
					{
						Name: "qConnectionId",
						DefaultValue: ""
					},
					{
						Name: "qConnection",
						DefaultValue: {
							qId: "",
							qName: "",
							qConnectionString: "",
							qType: "",
							qUserName: "",
							qPassword: "",
							qModifiedDate: "",
							qMeta: { qName: "" },
							qLogOn: 0
						}
					},
					{
						Name: "qOverrideCredentials",
						DefaultValue: false,
						Optional: true
					}
				],
				Out: []
			},
			DeleteConnection: {
				In: [{
					Name: "qConnectionId",
					DefaultValue: ""
				}],
				Out: []
			},
			GetConnection: {
				In: [{
					Name: "qConnectionId",
					DefaultValue: ""
				}],
				Out: [{ Name: "qConnection" }]
			},
			GetConnections: {
				In: [],
				Out: [{ Name: "qConnections" }]
			},
			GetDatabaseInfo: {
				In: [{
					Name: "qConnectionId",
					DefaultValue: ""
				}],
				Out: [{ Name: "qInfo" }]
			},
			GetDatabases: {
				In: [{
					Name: "qConnectionId",
					DefaultValue: ""
				}],
				Out: [{ Name: "qDatabases" }]
			},
			GetDatabaseOwners: {
				In: [{
					Name: "qConnectionId",
					DefaultValue: ""
				}, {
					Name: "qDatabase",
					DefaultValue: "",
					Optional: true
				}],
				Out: [{ Name: "qOwners" }]
			},
			GetDatabaseTables: {
				In: [
					{
						Name: "qConnectionId",
						DefaultValue: ""
					},
					{
						Name: "qDatabase",
						DefaultValue: "",
						Optional: true
					},
					{
						Name: "qOwner",
						DefaultValue: "",
						Optional: true
					}
				],
				Out: [{ Name: "qTables" }]
			},
			GetDatabaseTableFields: {
				In: [
					{
						Name: "qConnectionId",
						DefaultValue: ""
					},
					{
						Name: "qDatabase",
						DefaultValue: "",
						Optional: true
					},
					{
						Name: "qOwner",
						DefaultValue: "",
						Optional: true
					},
					{
						Name: "qTable",
						DefaultValue: ""
					}
				],
				Out: [{ Name: "qFields" }]
			},
			GetDatabaseTablePreview: {
				In: [
					{
						Name: "qConnectionId",
						DefaultValue: ""
					},
					{
						Name: "qDatabase",
						DefaultValue: "",
						Optional: true
					},
					{
						Name: "qOwner",
						DefaultValue: "",
						Optional: true
					},
					{
						Name: "qTable",
						DefaultValue: ""
					},
					{
						Name: "qConditions",
						DefaultValue: {
							qType: 0,
							qWherePredicate: ""
						},
						Optional: true
					}
				],
				Out: [{ Name: "qPreview" }, { Name: "qRowCount" }]
			},
			GetFolderItemsForConnection: {
				In: [{
					Name: "qConnectionId",
					DefaultValue: ""
				}, {
					Name: "qRelativePath",
					DefaultValue: "",
					Optional: true
				}],
				Out: [{ Name: "qFolderItems" }]
			},
			GuessFileType: {
				In: [{
					Name: "qConnectionId",
					DefaultValue: ""
				}, {
					Name: "qRelativePath",
					DefaultValue: "",
					Optional: true
				}],
				Out: [{ Name: "qDataFormat" }]
			},
			GetFileTables: {
				In: [
					{
						Name: "qConnectionId",
						DefaultValue: ""
					},
					{
						Name: "qRelativePath",
						DefaultValue: "",
						Optional: true
					},
					{
						Name: "qDataFormat",
						DefaultValue: {
							qType: 0,
							qLabel: "",
							qQuote: "",
							qComment: "",
							qDelimiter: {
								qName: "",
								qScriptCode: "",
								qNumber: 0,
								qIsMultiple: false
							},
							qCodePage: 0,
							qHeaderSize: 0,
							qRecordSize: 0,
							qTabSize: 0,
							qIgnoreEOF: false,
							qFixedWidthDelimiters: ""
						}
					}
				],
				Out: [{ Name: "qTables" }]
			},
			GetFileTableFields: {
				In: [
					{
						Name: "qConnectionId",
						DefaultValue: ""
					},
					{
						Name: "qRelativePath",
						DefaultValue: "",
						Optional: true
					},
					{
						Name: "qDataFormat",
						DefaultValue: {
							qType: 0,
							qLabel: "",
							qQuote: "",
							qComment: "",
							qDelimiter: {
								qName: "",
								qScriptCode: "",
								qNumber: 0,
								qIsMultiple: false
							},
							qCodePage: 0,
							qHeaderSize: 0,
							qRecordSize: 0,
							qTabSize: 0,
							qIgnoreEOF: false,
							qFixedWidthDelimiters: ""
						}
					},
					{
						Name: "qTable",
						DefaultValue: ""
					}
				],
				Out: [{ Name: "qFields" }, { Name: "qFormatSpec" }]
			},
			GetFileTablePreview: {
				In: [
					{
						Name: "qConnectionId",
						DefaultValue: ""
					},
					{
						Name: "qRelativePath",
						DefaultValue: "",
						Optional: true
					},
					{
						Name: "qDataFormat",
						DefaultValue: {
							qType: 0,
							qLabel: "",
							qQuote: "",
							qComment: "",
							qDelimiter: {
								qName: "",
								qScriptCode: "",
								qNumber: 0,
								qIsMultiple: false
							},
							qCodePage: 0,
							qHeaderSize: 0,
							qRecordSize: 0,
							qTabSize: 0,
							qIgnoreEOF: false,
							qFixedWidthDelimiters: ""
						}
					},
					{
						Name: "qTable",
						DefaultValue: ""
					}
				],
				Out: [{ Name: "qPreview" }, { Name: "qFormatSpec" }]
			},
			GetFileTablesEx: {
				In: [
					{
						Name: "qConnectionId",
						DefaultValue: ""
					},
					{
						Name: "qRelativePath",
						DefaultValue: "",
						Optional: true
					},
					{
						Name: "qDataFormat",
						DefaultValue: {
							qType: 0,
							qLabel: "",
							qQuote: "",
							qComment: "",
							qDelimiter: {
								qName: "",
								qScriptCode: "",
								qNumber: 0,
								qIsMultiple: false
							},
							qCodePage: 0,
							qHeaderSize: 0,
							qRecordSize: 0,
							qTabSize: 0,
							qIgnoreEOF: false,
							qFixedWidthDelimiters: ""
						}
					}
				],
				Out: [{ Name: "qTables" }]
			},
			SendGenericCommandToCustomConnector: {
				In: [
					{
						Name: "qProvider",
						DefaultValue: ""
					},
					{
						Name: "qCommand",
						DefaultValue: ""
					},
					{
						Name: "qMethod",
						DefaultValue: ""
					},
					{
						Name: "qParameters",
						DefaultValue: [""]
					},
					{
						Name: "qAppendConnection",
						DefaultValue: ""
					}
				],
				Out: [{ Name: "qResult" }]
			},
			SearchSuggest: {
				In: [{
					Name: "qOptions",
					DefaultValue: {
						qSearchFields: [""],
						qContext: 0,
						qCharEncoding: 0,
						qAttributes: [""]
					}
				}, {
					Name: "qTerms",
					DefaultValue: [""]
				}],
				Out: [{ Name: "qResult" }]
			},
			SearchAssociations: {
				In: [
					{
						Name: "qOptions",
						DefaultValue: {
							qSearchFields: [""],
							qContext: 0,
							qCharEncoding: 0,
							qAttributes: [""]
						}
					},
					{
						Name: "qTerms",
						DefaultValue: [""]
					},
					{
						Name: "qPage",
						DefaultValue: {
							qOffset: 0,
							qCount: 0,
							qMaxNbrFieldMatches: 0,
							qGroupOptions: [{
								qGroupType: 0,
								qOffset: 0,
								qCount: 0
							}],
							qGroupItemOptions: [{
								qGroupItemType: 0,
								qOffset: 0,
								qCount: 0
							}]
						}
					}
				],
				Out: [{ Name: "qResults" }]
			},
			SelectAssociations: {
				In: [
					{
						Name: "qOptions",
						DefaultValue: {
							qSearchFields: [""],
							qContext: 0,
							qCharEncoding: 0,
							qAttributes: [""]
						}
					},
					{
						Name: "qTerms",
						DefaultValue: [""]
					},
					{
						Name: "qMatchIx",
						DefaultValue: 0
					},
					{
						Name: "qSoftLock",
						DefaultValue: null,
						Optional: true
					}
				],
				Out: []
			},
			SearchResults: {
				In: [
					{
						Name: "qOptions",
						DefaultValue: {
							qSearchFields: [""],
							qContext: 0,
							qCharEncoding: 0,
							qAttributes: [""]
						}
					},
					{
						Name: "qTerms",
						DefaultValue: [""]
					},
					{
						Name: "qPage",
						DefaultValue: {
							qOffset: 0,
							qCount: 0,
							qMaxNbrFieldMatches: 0,
							qGroupOptions: [{
								qGroupType: 0,
								qOffset: 0,
								qCount: 0
							}],
							qGroupItemOptions: [{
								qGroupItemType: 0,
								qOffset: 0,
								qCount: 0
							}]
						}
					}
				],
				Out: [{ Name: "qResult" }]
			},
			SearchObjects: {
				In: [
					{
						Name: "qOptions",
						DefaultValue: {
							qAttributes: [""],
							qCharEncoding: 0
						}
					},
					{
						Name: "qTerms",
						DefaultValue: [""]
					},
					{
						Name: "qPage",
						DefaultValue: {
							qOffset: 0,
							qCount: 0,
							qMaxNbrFieldMatches: 0,
							qGroupOptions: [{
								qGroupType: 0,
								qOffset: 0,
								qCount: 0
							}],
							qGroupItemOptions: [{
								qGroupItemType: 0,
								qOffset: 0,
								qCount: 0
							}]
						}
					}
				],
				Out: [{ Name: "qResult" }]
			},
			GetFieldAndColumnSamples: {
				In: [
					{
						Name: "qFieldsOrColumnsWithWildcards",
						DefaultValue: [{
							qFieldName: "",
							qTableName: ""
						}]
					},
					{
						Name: "qMaxNumberOfValues",
						DefaultValue: 0
					},
					{
						Name: "qRandSeed",
						DefaultValue: 0,
						Optional: true
					}
				],
				Out: [{ Name: "qResult" }]
			},
			GetScriptEx: {
				In: [],
				Out: [{ Name: "qScript" }]
			},
			GetVariables: {
				In: [{
					Name: "qListDef",
					DefaultValue: {
						qType: "",
						qShowReserved: false,
						qShowConfig: false,
						qData: {},
						qShowSession: false
					}
				}],
				Out: [{ Name: "qList" }]
			},
			ExpandExpression: {
				In: [{
					Name: "qExpression",
					DefaultValue: ""
				}],
				Out: [{ Name: "qExpandedExpression" }]
			},
			DestroySessionVariableById: {
				In: [{
					Name: "qId",
					DefaultValue: ""
				}],
				Out: [{ Name: "qSuccess" }]
			},
			DestroySessionVariableByName: {
				In: [{
					Name: "qName",
					DefaultValue: ""
				}],
				Out: [{ Name: "qSuccess" }]
			},
			SetAppObjectSortingRank: {
				In: [{
					Name: "qId",
					DefaultValue: ""
				}, {
					Name: "qRank",
					DefaultValue: 0
				}],
				Out: []
			},
			GetActiveSheetId: {
				In: [],
				Out: [{ Name: "qId" }]
			},
			GetLayoutProperties: {
				In: [],
				Out: [{ Name: "qLayoutProp" }]
			},
			GetGroupStates: {
				In: [],
				Out: [{ Name: "qGroupStates" }]
			},
			ApplyGroupStates: {
				In: [{
					Name: "qGroupStates",
					DefaultValue: [{
						qInfo: {
							qId: "",
							qType: ""
						},
						qActiveFieldDef: ""
					}]
				}],
				Out: [{ Name: "qResult" }]
			},
			CreateBookmarkEx: {
				In: [{
					Name: "qProp",
					DefaultValue: {
						qInfo: {
							qId: "",
							qType: ""
						},
						qMetaDef: {},
						qIncludeVariables: false,
						qDistinctValues: false
					}
				}, {
					Name: "qObjectIdsToPatch",
					DefaultValue: [""],
					Optional: true
				}],
				Out: [{ Name: "qInfo" }]
			},
			SaveAs: {
				In: [{
					Name: "qNewAppName",
					DefaultValue: ""
				}],
				Out: [{ Name: "qNewAppId" }]
			},
			StoreTempSelectionState: {
				In: [{
					Name: "qTTLOfTempState",
					DefaultValue: 0,
					Optional: true
				}],
				Out: [{ Name: "qId" }]
			},
			RestoreTempSelectionState: {
				In: [{
					Name: "qId",
					DefaultValue: ""
				}],
				Out: []
			},
			ChangeSessionAppOwner: {
				In: [{
					Name: "qNewOwnerId",
					DefaultValue: ""
				}],
				Out: [{ Name: "qSuccess" }]
			},
			ChangeSessionAppSpace: {
				In: [{
					Name: "qSpaceId",
					DefaultValue: ""
				}],
				Out: [{ Name: "qSuccess" }]
			},
			GetTableProfileData: {
				In: [{
					Name: "qTableName",
					DefaultValue: ""
				}],
				Out: [{ Name: "qProfiling" }]
			},
			GetMeasureWithLabel: {
				In: [{
					Name: "qLabel",
					DefaultValue: ""
				}],
				Out: []
			},
			SearchValues: {
				In: [
					{
						Name: "qOptions",
						DefaultValue: { qSearchFields: [""] }
					},
					{
						Name: "qTerms",
						DefaultValue: [""]
					},
					{
						Name: "qPage",
						DefaultValue: {
							qOffset: 0,
							qCount: 0,
							qMaxNbrFieldMatches: 0
						}
					}
				],
				Out: [{ Name: "qResult" }]
			},
			GetFieldsFromExpression: {
				In: [{
					Name: "qExpr",
					DefaultValue: ""
				}],
				Out: [{ Name: "qFieldNames" }]
			},
			GetFieldsResourceIds: {
				In: [{
					Name: "qFieldNames",
					DefaultValue: [""]
				}],
				Out: [{ Name: "qFields" }]
			},
			GetExpressionBNF: {
				In: [],
				Out: [{ Name: "qBnfDefs" }, { Name: "qBnfHash" }]
			},
			GetExpressionBNFHash: {
				In: [],
				Out: [{ Name: "qBnfHash" }]
			},
			SetProhibitBinaryLoad: {
				In: [{
					Name: "qProhibit",
					DefaultValue: false
				}],
				Out: []
			},
			TransformApp: {
				In: [{
					Name: "qDstParameters",
					DefaultValue: {
						qName: "",
						qSpaceId: "",
						qScriptParameterPrefix: ""
					}
				}],
				Out: [{ Name: "qResult" }]
			},
			CreateTemporaryBookmark: {
				In: [{
					Name: "qOptions",
					DefaultValue: {
						qIncludeVariables: false,
						qIncludeAllPatches: false
					}
				}, {
					Name: "qObjectIdsToPatch",
					DefaultValue: [""],
					Optional: true
				}],
				Out: [{ Name: "qId" }]
			},
			ApplyTemporaryBookmark: {
				In: [{
					Name: "qId",
					DefaultValue: ""
				}],
				Out: []
			},
			GetScriptMeta: {
				In: [],
				Out: [{ Name: "qMeta" }]
			},
			ReplaceBookmark: {
				In: [
					{
						Name: "qId",
						DefaultValue: ""
					},
					{
						Name: "qIgnorePatches",
						DefaultValue: false,
						Optional: true
					},
					{
						Name: "qObjectIdsToPatch",
						DefaultValue: [""],
						Optional: true
					}
				],
				Out: [{ Name: "qInfo" }]
			},
			ClearAllSoftPatches: {
				In: [],
				Out: []
			},
			BulkRequest: {
				In: [{
					Name: "qReqs",
					DefaultValue: { qOperations: [{
						qMethod: "",
						qId: "",
						qTarget: 0,
						qArgs: {}
					}] }
				}],
				Out: [{ Name: "qBulkRes" }]
			},
			CommitScript: {
				In: [{
					Name: "qCommitMessage",
					DefaultValue: "",
					Optional: true
				}],
				Out: []
			},
			SetAppObjectSortingRanks: {
				In: [{
					Name: "qObjectRanks",
					DefaultValue: [{
						qId: "",
						qRank: 0
					}]
				}],
				Out: []
			},
			SetObjectOwners: {
				In: [{
					Name: "qOwners",
					DefaultValue: [{
						qObjectId: "",
						qOwnerId: ""
					}]
				}],
				Out: [{ Name: "qErrors" }]
			},
			UndoAll: {
				In: [],
				Out: []
			}
		},
		Global: {
			AbortRequest: {
				In: [{
					Name: "qRequestId",
					DefaultValue: 0
				}],
				Out: []
			},
			AbortAll: {
				In: [],
				Out: []
			},
			GetProgress: {
				In: [{
					Name: "qRequestId",
					DefaultValue: 0
				}],
				Out: [{ Name: "qProgressData" }]
			},
			QvVersion: {
				In: [],
				Out: []
			},
			OSVersion: {
				In: [],
				Out: []
			},
			OSName: {
				In: [],
				Out: []
			},
			QTProduct: {
				In: [],
				Out: []
			},
			GetDocList: {
				In: [],
				Out: [{ Name: "qDocList" }]
			},
			GetInteract: {
				In: [{
					Name: "qRequestId",
					DefaultValue: 0
				}],
				Out: [{ Name: "qDef" }]
			},
			InteractDone: {
				In: [{
					Name: "qRequestId",
					DefaultValue: 0
				}, {
					Name: "qDef",
					DefaultValue: {
						qType: 0,
						qTitle: "",
						qMsg: "",
						qButtons: 0,
						qLine: "",
						qOldLineNr: 0,
						qNewLineNr: 0,
						qPath: "",
						qHidden: false,
						qResult: 0,
						qInput: ""
					}
				}],
				Out: []
			},
			GetAuthenticatedUser: {
				In: [],
				Out: []
			},
			CreateDocEx: {
				In: [
					{
						Name: "qDocName",
						DefaultValue: ""
					},
					{
						Name: "qUserName",
						DefaultValue: "",
						Optional: true
					},
					{
						Name: "qPassword",
						DefaultValue: "",
						Optional: true
					},
					{
						Name: "qSerial",
						DefaultValue: "",
						Optional: true
					},
					{
						Name: "qLocalizedScriptMainSection",
						DefaultValue: "",
						Optional: true
					}
				],
				Out: [{ Name: "qDocId" }]
			},
			GetActiveDoc: {
				In: [],
				Out: []
			},
			AllowCreateApp: {
				In: [],
				Out: []
			},
			CreateApp: {
				In: [
					{
						Name: "qAppName",
						DefaultValue: ""
					},
					{
						Name: "qLocalizedScriptMainSection",
						DefaultValue: "",
						Optional: true
					},
					{
						Name: "qLocale",
						DefaultValue: "",
						Optional: true
					}
				],
				Out: [{ Name: "qSuccess" }, { Name: "qAppId" }]
			},
			DeleteApp: {
				In: [{
					Name: "qAppId",
					DefaultValue: ""
				}],
				Out: [{ Name: "qSuccess" }]
			},
			IsDesktopMode: {
				In: [],
				Out: []
			},
			GetConfiguration: {
				In: [],
				Out: [{ Name: "qConfig" }]
			},
			CancelRequest: {
				In: [{
					Name: "qRequestId",
					DefaultValue: 0
				}],
				Out: []
			},
			ShutdownProcess: {
				In: [],
				Out: []
			},
			ReloadExtensionList: {
				In: [],
				Out: []
			},
			ReplaceAppFromID: {
				In: [
					{
						Name: "qTargetAppId",
						DefaultValue: ""
					},
					{
						Name: "qSrcAppID",
						DefaultValue: ""
					},
					{
						Name: "qIds",
						DefaultValue: [""]
					}
				],
				Out: [{ Name: "qSuccess" }]
			},
			ReplaceAppFromPath: {
				In: [
					{
						Name: "qTargetAppId",
						DefaultValue: ""
					},
					{
						Name: "qSrcPath",
						DefaultValue: ""
					},
					{
						Name: "qIds",
						DefaultValue: [""]
					},
					{
						Name: "qNoData",
						DefaultValue: false
					}
				],
				Out: []
			},
			CopyApp: {
				In: [
					{
						Name: "qTargetAppId",
						DefaultValue: ""
					},
					{
						Name: "qSrcAppId",
						DefaultValue: ""
					},
					{
						Name: "qIds",
						DefaultValue: [""]
					}
				],
				Out: [{ Name: "qSuccess" }]
			},
			ImportApp: {
				In: [
					{
						Name: "qAppId",
						DefaultValue: ""
					},
					{
						Name: "qSrcPath",
						DefaultValue: ""
					},
					{
						Name: "qIds",
						DefaultValue: [""]
					}
				],
				Out: [{ Name: "qSuccess" }]
			},
			ImportAppEx: {
				In: [
					{
						Name: "qAppId",
						DefaultValue: ""
					},
					{
						Name: "qSrcPath",
						DefaultValue: ""
					},
					{
						Name: "qIds",
						DefaultValue: [""]
					},
					{
						Name: "qExcludeConnections",
						DefaultValue: false
					}
				],
				Out: []
			},
			ExportApp: {
				In: [
					{
						Name: "qTargetPath",
						DefaultValue: ""
					},
					{
						Name: "qSrcAppId",
						DefaultValue: ""
					},
					{
						Name: "qIds",
						DefaultValue: [""]
					},
					{
						Name: "qNoData",
						DefaultValue: false,
						Optional: true
					}
				],
				Out: [{ Name: "qSuccess" }]
			},
			PublishApp: {
				In: [
					{
						Name: "qAppId",
						DefaultValue: ""
					},
					{
						Name: "qName",
						DefaultValue: ""
					},
					{
						Name: "qStreamId",
						DefaultValue: ""
					}
				],
				Out: []
			},
			IsPersonalMode: {
				In: [],
				Out: []
			},
			GetUniqueID: {
				In: [],
				Out: [{ Name: "qUniqueID" }]
			},
			OpenDoc: {
				In: [
					{
						Name: "qDocName",
						DefaultValue: ""
					},
					{
						Name: "qUserName",
						DefaultValue: "",
						Optional: true
					},
					{
						Name: "qPassword",
						DefaultValue: "",
						Optional: true
					},
					{
						Name: "qSerial",
						DefaultValue: "",
						Optional: true
					},
					{
						Name: "qNoData",
						DefaultValue: false,
						Optional: true
					}
				],
				Out: []
			},
			CreateSessionApp: {
				In: [],
				Out: [{ Name: "qSessionAppId" }]
			},
			CreateSessionAppFromApp: {
				In: [{
					Name: "qSrcAppId",
					DefaultValue: ""
				}],
				Out: [{ Name: "qSessionAppId" }]
			},
			ProductVersion: {
				In: [],
				Out: []
			},
			GetAppEntry: {
				In: [{
					Name: "qAppID",
					DefaultValue: ""
				}],
				Out: [{ Name: "qEntry" }]
			},
			ConfigureReload: {
				In: [
					{
						Name: "qCancelOnScriptError",
						DefaultValue: false
					},
					{
						Name: "qUseErrorData",
						DefaultValue: false
					},
					{
						Name: "qInteractOnError",
						DefaultValue: false
					}
				],
				Out: []
			},
			CancelReload: {
				In: [{
					Name: "qReason",
					DefaultValue: "",
					Optional: true
				}],
				Out: []
			},
			GetBNF: {
				In: [{
					Name: "qBnfType",
					DefaultValue: 0
				}],
				Out: [{ Name: "qBnfDefs" }]
			},
			GetFunctions: {
				In: [{
					Name: "qGroup",
					DefaultValue: 0,
					Optional: true
				}],
				Out: [{ Name: "qFunctions" }]
			},
			GetOdbcDsns: {
				In: [],
				Out: [{ Name: "qOdbcDsns" }]
			},
			GetOleDbProviders: {
				In: [],
				Out: [{ Name: "qOleDbProviders" }]
			},
			GetDatabasesFromConnectionString: {
				In: [{
					Name: "qConnection",
					DefaultValue: {
						qId: "",
						qName: "",
						qConnectionString: "",
						qType: "",
						qUserName: "",
						qPassword: "",
						qModifiedDate: "",
						qMeta: { qName: "" },
						qLogOn: 0
					}
				}],
				Out: [{ Name: "qDatabases" }]
			},
			IsValidConnectionString: {
				In: [{
					Name: "qConnection",
					DefaultValue: {
						qId: "",
						qName: "",
						qConnectionString: "",
						qType: "",
						qUserName: "",
						qPassword: "",
						qModifiedDate: "",
						qMeta: { qName: "" },
						qLogOn: 0
					}
				}],
				Out: []
			},
			GetDefaultAppFolder: {
				In: [],
				Out: [{ Name: "qPath" }]
			},
			GetMyDocumentsFolder: {
				In: [],
				Out: [{ Name: "qFolder" }]
			},
			GetLogicalDriveStrings: {
				In: [],
				Out: [{ Name: "qDrives" }]
			},
			GetFolderItemsForPath: {
				In: [{
					Name: "qPath",
					DefaultValue: ""
				}],
				Out: [{ Name: "qFolderItems" }]
			},
			GetSupportedCodePages: {
				In: [],
				Out: [{ Name: "qCodePages" }]
			},
			GetCustomConnectors: {
				In: [{
					Name: "qReloadList",
					DefaultValue: false,
					Optional: true
				}],
				Out: [{ Name: "qConnectors" }]
			},
			GetStreamList: {
				In: [],
				Out: [{ Name: "qStreamList" }]
			},
			EngineVersion: {
				In: [],
				Out: [{ Name: "qVersion" }]
			},
			GetBaseBNF: {
				In: [{
					Name: "qBnfType",
					DefaultValue: 0
				}],
				Out: [{ Name: "qBnfDefs" }, { Name: "qBnfHash" }]
			},
			GetBaseBNFHash: {
				In: [{
					Name: "qBnfType",
					DefaultValue: 0
				}],
				Out: [{ Name: "qBnfHash" }]
			},
			GetBaseBNFString: {
				In: [{
					Name: "qBnfType",
					DefaultValue: 0
				}],
				Out: [{ Name: "qBnfStr" }, { Name: "qBnfHash" }]
			},
			SaveAs: {
				In: [{
					Name: "qNewAppName",
					DefaultValue: ""
				}],
				Out: [{ Name: "qNewAppId" }]
			}
		}
	},
	enums: {
		LocalizedMessageCode: {
			LOCMSG_SCRIPTEDITOR_EMPTY_MESSAGE: 0,
			LOCMSG_SCRIPTEDITOR_PROGRESS_SAVING_STARTED: 1,
			LOCMSG_SCRIPTEDITOR_PROGRESS_BYTES_LEFT: 2,
			LOCMSG_SCRIPTEDITOR_PROGRESS_STORING_TABLES: 3,
			LOCMSG_SCRIPTEDITOR_PROGRESS_QVD_ROWS_SO_FAR: 4,
			LOCMSG_SCRIPTEDITOR_PROGRESS_CONNECTED: 5,
			LOCMSG_SCRIPTEDITOR_PROGRESS_CONNECTING_TO: 6,
			LOCMSG_SCRIPTEDITOR_PROGRESS_CONNECT_FAILED: 7,
			LOCMSG_SCRIPTEDITOR_PROGRESS_QVD_ROWISH: 8,
			LOCMSG_SCRIPTEDITOR_PROGRESS_QVD_COLUMNAR: 9,
			LOCMSG_SCRIPTEDITOR_ERROR: 10,
			LOCMSG_SCRIPTEDITOR_DONE: 11,
			LOCMSG_SCRIPTEDITOR_LOAD_EXTERNAL_DATA: 12,
			LOCMSG_SCRIPTEDITOR_PROGRESS_OLD_QVD_ISLOADING: 13,
			LOCMSG_SCRIPTEDITOR_PROGRESS_QVC_LOADING: 14,
			LOCMSG_SCRIPTEDITOR_PROGRESS_QVD_BUFFERED: 15,
			LOCMSG_SCRIPTEDITOR_PROGRESS_QVC_PREPARING: 16,
			LOCMSG_SCRIPTEDITOR_PROGRESS_QVC_APPENDING: 17,
			LOCMSG_SCRIPTEDITOR_REMOVE_SYNTHETIC: 18,
			LOCMSG_SCRIPTEDITOR_PENDING_LINKEDTABLE_FETCHING: 19,
			LOCMSG_SCRIPTEDITOR_RELOAD: 20,
			LOCMSG_SCRIPTEDITOR_LINES_FETCHED: 21,
			LOCMSG_SCRIPTEDITOR_SEARCHINDEX_START: 22,
			LOCMSG_SCRIPTEDITOR_SEARCHINDEX_FIELD: 23,
			LOCMSG_SCRIPTEDITOR_SEARCHINDEX_SUCCESS: 24,
			LOCMSG_SCRIPTEDITOR_SEARCHINDEX_FAILURE: 25,
			LOCMSG_SCRIPTEDITOR_SEARCHINDEX_STARTABORT: 26,
			LOCMSG_SCRIPTEDITOR_SEARCHINDEX_ENDABORT: 27,
			LOCMSG_SCRIPTEDITOR_SEARCHINDEX_TIMEOUT: 28,
			LOCMSG_SCRIPTEDITOR_SEARCHINDEX_OUTOFMEMORY: 29,
			LOCMSG_SCRIPTEDITOR_ACCESS_DENIED_AFTER_RELOAD: 30,
			LOCMSG_SCRIPTEDITOR_MERGED_UPDATES: 31,
			LOCMSG_SCRIPTEDITOR_MERGED_INSERTS: 32,
			LOCMSG_SCRIPTEDITOR_MERGED_DELETES: 33
		},
		LocalizedErrorCode: {
			LOCERR_INTERNAL_ERROR: -128,
			LOCERR_GENERIC_UNKNOWN: -1,
			LOCERR_GENERIC_OK: 0,
			LOCERR_GENERIC_NOT_SET: 1,
			LOCERR_GENERIC_NOT_FOUND: 2,
			LOCERR_GENERIC_ALREADY_EXISTS: 3,
			LOCERR_GENERIC_INVALID_PATH: 4,
			LOCERR_GENERIC_ACCESS_DENIED: 5,
			LOCERR_GENERIC_OUT_OF_MEMORY: 6,
			LOCERR_GENERIC_NOT_INITIALIZED: 7,
			LOCERR_GENERIC_INVALID_PARAMETERS: 8,
			LOCERR_GENERIC_EMPTY_PARAMETERS: 9,
			LOCERR_GENERIC_INTERNAL_ERROR: 10,
			LOCERR_GENERIC_CORRUPT_DATA: 11,
			LOCERR_GENERIC_MEMORY_INCONSISTENCY: 12,
			LOCERR_GENERIC_INVISIBLE_OWNER_ABORT: 13,
			LOCERR_GENERIC_PROHIBIT_VALIDATE: 14,
			LOCERR_GENERIC_ABORTED: 15,
			LOCERR_GENERIC_CONNECTION_LOST: 16,
			LOCERR_GENERIC_UNSUPPORTED_IN_PRODUCT_VERSION: 17,
			LOCERR_GENERIC_REST_CONNECTION_FAILURE: 18,
			LOCERR_GENERIC_MEMORY_LIMIT_REACHED: 19,
			LOCERR_GENERIC_NOT_IMPLEMENTED: 20,
			LOCERR_GENERIC_ENGINE_TERMINATED: 21,
			LOCERR_HTTP_400: 400,
			LOCERR_HTTP_401: 401,
			LOCERR_HTTP_402: 402,
			LOCERR_HTTP_403: 403,
			LOCERR_HTTP_404: 404,
			LOCERR_HTTP_405: 405,
			LOCERR_HTTP_406: 406,
			LOCERR_HTTP_407: 407,
			LOCERR_HTTP_408: 408,
			LOCERR_HTTP_409: 409,
			LOCERR_HTTP_410: 410,
			LOCERR_HTTP_411: 411,
			LOCERR_HTTP_412: 412,
			LOCERR_HTTP_413: 413,
			LOCERR_HTTP_414: 414,
			LOCERR_HTTP_415: 415,
			LOCERR_HTTP_416: 416,
			LOCERR_HTTP_417: 417,
			LOCERR_HTTP_422: 422,
			LOCERR_HTTP_423: 423,
			LOCERR_HTTP_429: 429,
			LOCERR_HTTP_500: 500,
			LOCERR_HTTP_501: 501,
			LOCERR_HTTP_502: 502,
			LOCERR_HTTP_503: 503,
			LOCERR_HTTP_504: 504,
			LOCERR_HTTP_505: 505,
			LOCERR_HTTP_509: 509,
			LOCERR_HTTP_COULD_NOT_RESOLVE_HOST: 700,
			LOCERR_APP_ALREADY_EXISTS: 1e3,
			LOCERR_APP_INVALID_NAME: 1001,
			LOCERR_APP_ALREADY_OPEN: 1002,
			LOCERR_APP_NOT_FOUND: 1003,
			LOCERR_APP_IMPORT_FAILED: 1004,
			LOCERR_APP_SAVE_FAILED: 1005,
			LOCERR_APP_CREATE_FAILED: 1006,
			LOCERR_APP_INVALID: 1007,
			LOCERR_APP_CONNECT_FAILED: 1008,
			LOCERR_APP_ALREADY_OPEN_IN_DIFFERENT_MODE: 1009,
			LOCERR_APP_MIGRATION_COULD_NOT_CONTACT_MIGRATION_SERVICE: 1010,
			LOCERR_APP_MIGRATION_COULD_NOT_START_MIGRATION: 1011,
			LOCERR_APP_MIGRATION_FAILURE: 1012,
			LOCERR_APP_SCRIPT_MISSING: 1013,
			LOCERR_APP_EXPORT_FAILED: 1014,
			LOCERR_APP_SIZE_EXCEEDED: 1015,
			LOCERR_APP_DIRECT_QUERY_WORKLOAD_NOT_SUPPORTED: 1016,
			LOCERR_APP_NOT_OPEN: 1017,
			LOCERR_APP_EVENT_SOURCE_TIMEOUT: 1018,
			LOCERR_CONNECTION_ALREADY_EXISTS: 2e3,
			LOCERR_CONNECTION_NOT_FOUND: 2001,
			LOCERR_CONNECTION_FAILED_TO_LOAD: 2002,
			LOCERR_CONNECTION_FAILED_TO_IMPORT: 2003,
			LOCERR_CONNECTION_NAME_IS_INVALID: 2004,
			LOCERR_CONNECTION_MISSING_CREDENTIALS: 2005,
			LOCERR_CONNECTOR_NO_FILE_STREAMING_SUPPORT: 2300,
			LOCERR_CONNECTOR_FILESIZE_EXCEEDED_BUFFER_SIZE: 2301,
			LOCERR_FILE_ACCESS_DENIED: 3e3,
			LOCERR_FILE_NAME_INVALID: 3001,
			LOCERR_FILE_CORRUPT: 3002,
			LOCERR_FILE_NOT_FOUND: 3003,
			LOCERR_FILE_FORMAT_UNSUPPORTED: 3004,
			LOCERR_FILE_OPENED_IN_UNSUPPORTED_MODE: 3005,
			LOCERR_FILE_TABLE_NOT_FOUND: 3006,
			LOCERR_USER_ACCESS_DENIED: 4e3,
			LOCERR_USER_IMPERSONATION_FAILED: 4001,
			LOCERR_SERVER_OUT_OF_SESSION_AND_USER_CALS: 5e3,
			LOCERR_SERVER_OUT_OF_SESSION_CALS: 5001,
			LOCERR_SERVER_OUT_OF_USAGE_CALS: 5002,
			LOCERR_SERVER_OUT_OF_CALS: 5003,
			LOCERR_SERVER_OUT_OF_NAMED_CALS: 5004,
			LOCERR_SERVER_OFF_DUTY: 5005,
			LOCERR_SERVER_BUSY: 5006,
			LOCERR_SERVER_LICENSE_EXPIRED: 5007,
			LOCERR_SERVER_AJAX_DISABLED: 5008,
			LOCERR_SERVER_NO_TOKEN: 5009,
			LOCERR_HC_INVALID_OBJECT: 6e3,
			LOCERR_HC_RESULT_TOO_LARGE: 6001,
			LOCERR_HC_INVALID_OBJECT_STATE: 6002,
			LOCERR_HC_MODAL_OBJECT_ERROR: 6003,
			LOCERR_CALC_INVALID_DEF: 7e3,
			LOCERR_CALC_NOT_IN_LIB: 7001,
			LOCERR_CALC_HEAP_ERROR: 7002,
			LOCERR_CALC_TOO_LARGE: 7003,
			LOCERR_CALC_TIMEOUT: 7004,
			LOCERR_CALC_EVAL_CONDITION_FAILED: 7005,
			LOCERR_CALC_MIXED_LINKED_AGGREGATION: 7006,
			LOCERR_CALC_MISSING_LINKED: 7007,
			LOCERR_CALC_INVALID_COL_SORT: 7008,
			LOCERR_CALC_PAGES_TOO_LARGE: 7009,
			LOCERR_CALC_SEMANTIC_FIELD_NOT_ALLOWED: 7010,
			LOCERR_CALC_VALIDATION_STATE_INVALID: 7011,
			LOCERR_CALC_PIVOT_DIMENSIONS_ALREADY_EXISTS: 7012,
			LOCERR_CALC_MISSING_LINKED_FIELD: 7013,
			LOCERR_CALC_NOT_CALCULATED: 7014,
			LOCERR_LAYOUT_EXTENDS_INVALID_ID: 8e3,
			LOCERR_LAYOUT_LINKED_OBJECT_NOT_FOUND: 8001,
			LOCERR_LAYOUT_LINKED_OBJECT_INVALID: 8002,
			LOCERR_PERSISTENCE_WRITE_FAILED: 9e3,
			LOCERR_PERSISTENCE_READ_FAILED: 9001,
			LOCERR_PERSISTENCE_DELETE_FAILED: 9002,
			LOCERR_PERSISTENCE_NOT_FOUND: 9003,
			LOCERR_PERSISTENCE_UNSUPPORTED_VERSION: 9004,
			LOCERR_PERSISTENCE_MIGRATION_FAILED_READ_ONLY: 9005,
			LOCERR_PERSISTENCE_MIGRATION_CANCELLED: 9006,
			LOCERR_PERSISTENCE_MIGRATION_BACKUP_FAILED: 9007,
			LOCERR_PERSISTENCE_DISK_FULL: 9008,
			LOCERR_PERSISTENCE_NOT_SUPPORTED_FOR_SESSION_APP: 9009,
			LOCERR_PERSISTENCE_MOVE_FAILED: 9010,
			LOCERR_PERSISTENCE_OBJECT_LOCKED: 9011,
			LOCERR_PERSISTENCE_ENCRYPTION_KEY_MIGRATION_ONGOING: 9012,
			LOCERR_PERSISTENCE_SYNC_SET_CHUNK_INVALID_PARAMETERS: 9510,
			LOCERR_PERSISTENCE_SYNC_GET_CHUNK_INVALID_PARAMETERS: 9511,
			LOCERR_SCRIPT_DATASOURCE_ACCESS_DENIED: 1e4,
			LOCERR_RELOAD_IN_PROGRESS: 11e3,
			LOCERR_RELOAD_TABLE_X_NOT_FOUND: 11001,
			LOCERR_RELOAD_UNKNOWN_STATEMENT: 11002,
			LOCERR_RELOAD_EXPECTED_SOMETHING_FOUND_UNKNOWN: 11003,
			LOCERR_RELOAD_EXPECTED_NOTHING_FOUND_UNKNOWN: 11004,
			LOCERR_RELOAD_EXPECTED_ONE_OF_1_TOKENS_FOUND_UNKNOWN: 11005,
			LOCERR_RELOAD_EXPECTED_ONE_OF_2_TOKENS_FOUND_UNKNOWN: 11006,
			LOCERR_RELOAD_EXPECTED_ONE_OF_3_TOKENS_FOUND_UNKNOWN: 11007,
			LOCERR_RELOAD_EXPECTED_ONE_OF_4_TOKENS_FOUND_UNKNOWN: 11008,
			LOCERR_RELOAD_EXPECTED_ONE_OF_5_TOKENS_FOUND_UNKNOWN: 11009,
			LOCERR_RELOAD_EXPECTED_ONE_OF_6_TOKENS_FOUND_UNKNOWN: 11010,
			LOCERR_RELOAD_EXPECTED_ONE_OF_7_TOKENS_FOUND_UNKNOWN: 11011,
			LOCERR_RELOAD_EXPECTED_ONE_OF_8_OR_MORE_TOKENS_FOUND_UNKNOWN: 11012,
			LOCERR_RELOAD_FIELD_X_NOT_FOUND: 11013,
			LOCERR_RELOAD_MAPPING_TABLE_X_NOT_FOUND: 11014,
			LOCERR_RELOAD_LIB_CONNECTION_X_NOT_FOUND: 11015,
			LOCERR_RELOAD_NAME_ALREADY_TAKEN: 11016,
			LOCERR_RELOAD_WRONG_FILE_FORMAT_DIF: 11017,
			LOCERR_RELOAD_WRONG_FILE_FORMAT_BIFF: 11018,
			LOCERR_RELOAD_WRONG_FILE_FORMAT_ENCRYPTED: 11019,
			LOCERR_RELOAD_OPEN_FILE_ERROR: 11020,
			LOCERR_RELOAD_AUTO_GENERATE_COUNT: 11021,
			LOCERR_RELOAD_PE_ILLEGAL_PREFIX_COMB: 11022,
			LOCERR_RELOAD_MATCHING_CONTROL_STATEMENT_ERROR: 11023,
			LOCERR_RELOAD_MATCHING_LIBPATH_X_NOT_FOUND: 11024,
			LOCERR_RELOAD_MATCHING_LIBPATH_X_INVALID: 11025,
			LOCERR_RELOAD_MATCHING_LIBPATH_X_OUTSIDE: 11026,
			LOCERR_RELOAD_NO_QUALIFIED_PATH_FOR_FILE: 11027,
			LOCERR_RELOAD_MODE_STATEMENT_ONLY_FOR_LIB_PATHS: 11028,
			LOCERR_RELOAD_INCONSISTENT_USE_OF_SEMANTIC_FIELDS: 11029,
			LOCERR_RELOAD_NO_OPEN_DATABASE: 11030,
			LOCERR_RELOAD_AGGREGATION_REQUIRED_BY_GROUP_BY: 11031,
			LOCERR_RELOAD_CONNECT_MUST_USE_LIB_PREFIX_IN_THIS_MODE: 11032,
			LOCERR_RELOAD_ODBC_CONNECT_FAILED: 11033,
			LOCERR_RELOAD_OLEDB_CONNECT_FAILED: 11034,
			LOCERR_RELOAD_CUSTOM_CONNECT_FAILED: 11035,
			LOCERR_RELOAD_ODBC_READ_FAILED: 11036,
			LOCERR_RELOAD_OLEDB_READ_FAILED: 11037,
			LOCERR_RELOAD_CUSTOM_READ_FAILED: 11038,
			LOCERR_RELOAD_BINARY_LOAD_PROHIBITED: 11039,
			LOCERR_RELOAD_CONNECTOR_START_FAILED: 11040,
			LOCERR_RELOAD_CONNECTOR_NOT_RESPONDING: 11041,
			LOCERR_RELOAD_CONNECTOR_REPLY_ERROR: 11042,
			LOCERR_RELOAD_CONNECTOR_CONNECT_ERROR: 11043,
			LOCERR_RELOAD_CONNECTOR_NOT_FOUND_ERROR: 11044,
			LOCERR_RELOAD_INPUT_FIELD_WITH_DUPLICATE_KEYS: 11045,
			LOCERR_RELOAD_CONCATENATE_LOAD_NO_PREVIOUS_TABLE: 11046,
			LOCERR_RELOAD_WRONG_FILE_FORMAT_QVD: 11047,
			LOCERR_RELOAD_ACTION_BLOCKED_ENTITLEMENT: 11048,
			LOCERR_PERSONAL_NEW_VERSION_AVAILABLE: 12e3,
			LOCERR_PERSONAL_VERSION_EXPIRED: 12001,
			LOCERR_PERSONAL_SECTION_ACCESS_DETECTED: 12002,
			LOCERR_PERSONAL_APP_DELETION_FAILED: 12003,
			LOCERR_USER_AUTHENTICATION_FAILURE: 12004,
			LOCERR_EXPORT_OUT_OF_MEMORY: 13e3,
			LOCERR_EXPORT_NO_DATA: 13001,
			LOCERR_SYNC_INVALID_OFFSET: 14e3,
			LOCERR_SEARCH_TIMEOUT: 15e3,
			LOCERR_DIRECT_DISCOVERY_LINKED_EXPRESSION_FAIL: 16e3,
			LOCERR_DIRECT_DISCOVERY_ROWCOUNT_OVERFLOW: 16001,
			LOCERR_DIRECT_DISCOVERY_EMPTY_RESULT: 16002,
			LOCERR_DIRECT_DISCOVERY_DB_CONNECTION_FAILED: 16003,
			LOCERR_DIRECT_DISCOVERY_MEASURE_NOT_ALLOWED: 16004,
			LOCERR_DIRECT_DISCOVERY_DETAIL_NOT_ALLOWED: 16005,
			LOCERR_DIRECT_DISCOVERY_NOT_SYNTH_CIRCULAR_ALLOWED: 16006,
			LOCERR_DIRECT_DISCOVERY_ONLY_ONE_DD_TABLE_ALLOWED: 16007,
			LOCERR_DIRECT_DISCOVERY_DB_AUTHORIZATION_FAILED: 16008,
			LOCERR_SMART_LOAD_TABLE_NOT_FOUND: 17e3,
			LOCERR_SMART_LOAD_TABLE_DUPLICATED: 17001,
			LOCERR_VARIABLE_NO_NAME: 18e3,
			LOCERR_VARIABLE_DUPLICATE_NAME: 18001,
			LOCERR_VARIABLE_INCONSISTENCY: 18002,
			LOCERR_VARIABLE_CONSTRAINT_INCONSISTENCY: 18003,
			LOCERR_VARIABLE_CONSTRAINT_FAILED: 18004,
			LOCERR_MEDIA_LIBRARY_LIST_FAILED: 19e3,
			LOCERR_MEDIA_LIBRARY_CONTENT_FAILED: 19001,
			LOCERR_MEDIA_BUNDLING_FAILED: 19002,
			LOCERR_MEDIA_UNBUNDLING_FAILED: 19003,
			LOCERR_MEDIA_LIBRARY_NOT_FOUND: 19004,
			LOCERR_FEATURE_DISABLED: 2e4,
			LOCERR_LOAD_TOO_MANY_FIELDS: 21e3,
			LOCERR_LOAD_TOO_MANY_TABLES: 21001,
			LOCERR_JSON_RPC_INVALID_REQUEST: -32600,
			LOCERR_JSON_RPC_METHOD_NOT_FOUND: -32601,
			LOCERR_JSON_RPC_INVALID_PARAMETERS: -32602,
			LOCERR_JSON_RPC_INTERNAL_ERROR: -32603,
			LOCERR_JSON_RPC_RESPONSE_TOO_LARGE: -32604,
			LOCERR_JSON_RPC_PARSE_ERROR: -32700,
			LOCERR_MQ_SOCKET_CONNECT_FAILURE: 33e3,
			LOCERR_MQ_SOCKET_OPEN_FAILURE: 33001,
			LOCERR_MQ_PROTOCOL_NO_RESPONE: 33002,
			LOCERR_MQ_PROTOCOL_LIBRARY_EXCEPTION: 33003,
			LOCERR_MQ_PROTOCOL_CONNECTION_CLOSED: 33004,
			LOCERR_MQ_PROTOCOL_CHANNEL_CLOSED: 33005,
			LOCERR_MQ_PROTOCOL_UNKNOWN_ERROR: 33006,
			LOCERR_MQ_PROTOCOL_INVALID_STATUS: 33007,
			LOCERR_EXTENGINE_GRPC_STATUS_OK: 22e3,
			LOCERR_EXTENGINE_GRPC_STATUS_CANCELLED: 22001,
			LOCERR_EXTENGINE_GRPC_STATUS_UNKNOWN: 22002,
			LOCERR_EXTENGINE_GRPC_STATUS_INVALID_ARGUMENT: 22003,
			LOCERR_EXTENGINE_GRPC_STATUS_DEADLINE_EXCEEDED: 22004,
			LOCERR_EXTENGINE_GRPC_STATUS_NOT_FOUND: 22005,
			LOCERR_EXTENGINE_GRPC_STATUS_ALREADY_EXISTS: 22006,
			LOCERR_EXTENGINE_GRPC_STATUS_PERMISSION_DENIED: 22007,
			LOCERR_EXTENGINE_GRPC_STATUS_RESOURCE_EXHAUSTED: 22008,
			LOCERR_EXTENGINE_GRPC_STATUS_FAILED_PRECONDITION: 22009,
			LOCERR_EXTENGINE_GRPC_STATUS_ABORTED: 22010,
			LOCERR_EXTENGINE_GRPC_STATUS_OUT_OF_RANGE: 22011,
			LOCERR_EXTENGINE_GRPC_STATUS_UNIMPLEMENTED: 22012,
			LOCERR_EXTENGINE_GRPC_STATUS_INTERNAL: 22013,
			LOCERR_EXTENGINE_GRPC_STATUS_UNAVAILABLE: 22014,
			LOCERR_EXTENGINE_GRPC_STATUS_DATA_LOSS: 22015,
			LOCERR_EXTENGINE_GRPC_STATUS_UNAUTHENTICATED: 22016,
			LOCERR_LXW_INVALID_OBJ: 23001,
			LOCERR_LXW_INVALID_FILE: 23002,
			LOCERR_LXW_INVALID_SHEET: 23003,
			LOCERR_LXW_INVALID_EXPORT_RANGE: 23004,
			LOCERR_LXW_ERROR: 23005,
			LOCERR_LXW_ERROR_MEMORY_MALLOC_FAILED: 23006,
			LOCERR_LXW_ERROR_CREATING_XLSX_FILE: 23007,
			LOCERR_LXW_ERROR_CREATING_TMPFILE: 23008,
			LOCERR_LXW_ERROR_ZIP_FILE_OPERATION: 23009,
			LOCERR_LXW_ERROR_ZIP_FILE_ADD: 23010,
			LOCERR_LXW_ERROR_ZIP_CLOSE: 23011,
			LOCERR_LXW_ERROR_NULL_PARAMETER_IGNORED: 23012,
			LOCERR_LXW_ERROR_MAX_STRING_LENGTH_EXCEEDED: 23013,
			LOCERR_LXW_ERROR_255_STRING_LENGTH_EXCEEDED: 23014,
			LOCERR_LXW_ERROR_SHARED_STRING_INDEX_NOT_FOUND: 23015,
			LOCERR_LXW_ERROR_WORKSHEET_INDEX_OUT_OF_RANGE: 23016,
			LOCERR_LXW_ERROR_WORKSHEET_MAX_NUMBER_URLS_EXCEEDED: 23017,
			LOCERR_BDI_STATUS_OK: 24e3,
			LOCERR_BDI_GENERIC_ERROR_NOT_TRANSLATED: 24001,
			LOCERR_TRENDLINE_INVALID_DEF: 25e3,
			LOCERR_TRENDLINE_INVALID_MATH_ERROR: 25001,
			LOCERR_CURL_UNSUPPORTED_PROTOCOL: 3e4,
			LOCERR_CURL_COULDNT_RESOLVE_PROXY: 30001,
			LOCERR_CURL_COULDNT_CONNECT: 30002,
			LOCERR_CURL_REMOTE_ACCESS_DENIED: 30003,
			LOCERR_CURL_FTP_ACCEPT_FAILED: 30004,
			LOCERR_CURL_FTP_ACCEPT_TIMEOUT: 30005,
			LOCERR_CURL_FTP_CANT_GET_HOST: 30006,
			LOCERR_CURL_PARTIAL_FILE: 30007,
			LOCERR_CURL_QUOTE_ERROR: 30008,
			LOCERR_CURL_WRITE_ERROR: 30009,
			LOCERR_CURL_UPLOAD_FAILED: 30010,
			LOCERR_CURL_OUT_OF_MEMORY: 30011,
			LOCERR_CURL_OPERATION_TIMEDOUT: 30012,
			LOCERR_CURL_FTP_COULDNT_USE_REST: 30013,
			LOCERR_CURL_HTTP_POST_ERROR: 30014,
			LOCERR_CURL_SSL_CONNECT_ERROR: 30015,
			LOCERR_CURL_FILE_COULDNT_READ_FILE: 30016,
			LOCERR_CURL_LDAP_CANNOT_BIND: 30017,
			LOCERR_CURL_LDAP_SEARCH_FAILED: 30018,
			LOCERR_CURL_TOO_MANY_REDIRECTS: 30019,
			LOCERR_CURL_PEER_FAILED_VERIFICATION: 30020,
			LOCERR_CURL_GOT_NOTHING: 30021,
			LOCERR_CURL_SSL_ENGINE_NOTFOUND: 30022,
			LOCERR_CURL_SSL_ENGINE_SETFAILED: 30023,
			LOCERR_CURL_SSL_CERTPROBLEM: 30024,
			LOCERR_CURL_SSL_CIPHER: 30025,
			LOCERR_CURL_SSL_CACERT: 30026,
			LOCERR_CURL_BAD_CONTENT_ENCODING: 30027,
			LOCERR_CURL_LDAP_INVALID_URL: 30028,
			LOCERR_CURL_USE_SSL_FAILED: 30029,
			LOCERR_CURL_SSL_ENGINE_INITFAILED: 30030,
			LOCERR_CURL_LOGIN_DENIED: 30031,
			LOCERR_CURL_TFTP_NOTFOUND: 30032,
			LOCERR_CURL_TFTP_ILLEGAL: 30033,
			LOCERR_CURL_SSH: 30034,
			LOCERR_SETEXPRESSION_TOO_LARGE: 30100,
			LOCERR_RELOAD_MERGE_LOAD_ERROR: 30101,
			LOCERR_WIN_FTP_DROPPED: 30200,
			LOCERR_WIN_FTP_NO_PASSIVE_MODE: 30201,
			LOCERR_WIN_HTTP_DOWNLEVEL_SERVER: 30210,
			LOCERR_WIN_HTTP_INVALID_SERVER_RESPONSE: 30211,
			LOCERR_WIN_HTTP_REDIRECT_NEEDS_CONFIRMATION: 30212,
			LOCERR_WIN_INTERNET_FORCE_RETRY: 30220,
			LOCERR_WIN_INTERNET_CANNOT_CONNECT: 30221,
			LOCERR_WIN_INTERNET_CONNECTION_ABORTED: 30222,
			LOCERR_WIN_INTERNET_CONNECTION_RESET: 30223,
			LOCERR_WIN_INTERNET_DISCONNECTED: 30224,
			LOCERR_WIN_INTERNET_INCORRECT_FORMAT: 30225,
			LOCERR_WIN_INTERNET_INVALID_CA: 30226,
			LOCERR_WIN_INTERNET_INVALID_OPERATION: 30227,
			LOCERR_WIN_INTERNET_INVALID_URL: 30228,
			LOCERR_WIN_INTERNET_ITEM_NOT_FOUND: 30229,
			LOCERR_WIN_INTERNET_LOGIN_FAILURE: 30230,
			LOCERR_WIN_INTERNET_NAME_NOT_RESOLVED: 30231,
			LOCERR_WIN_INTERNET_NEED_UI: 30232,
			LOCERR_WIN_INTERNET_SEC_CERT_CN_INVALID: 30233,
			LOCERR_WIN_INTERNET_SEC_CERT_DATE_INVALID: 30234,
			LOCERR_WIN_INTERNET_SEC_CERT_ERRORS: 30235,
			LOCERR_WIN_INTERNET_SEC_INVALID_CERT: 30236,
			LOCERR_WIN_INTERNET_SERVER_UNREACHABLE: 30237,
			LOCERR_BM_RESULT_TOO_LARGE: 31e3
		},
		LocalizedWarningCode: {
			LOCWARN_PERSONAL_RELOAD_REQUIRED: 0,
			LOCWARN_PERSONAL_VERSION_EXPIRES_SOON: 1,
			LOCWARN_EXPORT_DATA_TRUNCATED: 1e3,
			LOCWARN_COULD_NOT_OPEN_ALL_OBJECTS: 2e3,
			LOCWARN_SEARCH_INVALID_SEARCHFIELD_DETECTED: 3e3
		},
		GrpType: {
			GRP_NX_NONE: 0,
			GRP_NX_HIEARCHY: 1,
			GRP_NX_COLLECTION: 2
		},
		ExportFileType: {
			EXPORT_CSV_C: 0,
			EXPORT_CSV_T: 1,
			EXPORT_OOXML: 2,
			EXPORT_PARQUET: 3
		},
		ExportState: {
			EXPORT_POSSIBLE: 0,
			EXPORT_ALL: 1
		},
		ParquetCompression: {
			PARQUET_UNCOMPRESSED: 1,
			PARQUET_SNAPPY: 2,
			PARQUET_GZIP: 3,
			PARQUET_BROTLI: 4,
			PARQUET_ZSTD: 5,
			PARQUET_LZ4: 6,
			PARQUET_LZ4_HADOOP: 10
		},
		Feature: {
			FEATURE_BINNING_DATA: 0,
			FEATURE_BOOKMARKS: 1,
			FEATURE_CALCULATED_FIELDS: 2,
			FEATURE_CONTINUOUS_DATA: 3,
			FEATURE_INVERTED_SELECTIONS: 4,
			FEATURE_RANGE_SELECTIONS: 5,
			FEATURE_REDUCING_DATA: 6,
			FEATURE_SEARCH: 7,
			FEATURE_SELECTION_COUNT: 8,
			FEATURE_SELECTION_INSIGHTS: 9,
			FEATURE_TABLE_MINI_CHART: 10,
			FEATURE_TRENDLINES: 11,
			FEATURE_CALCULATED_DIMENSIONS: 12,
			FEATURE_INCLUDE_ZERO_VALUES: 13,
			FEATURE_INCLUDE_NULL_VALUES: 14,
			FEATURE_FILTER_PANE_PAGING: 15,
			FEATURE_FILTER_PANE_CUSTOM_SORTING: 16,
			FEATURE_SHOW_FREQUENCY: 17,
			FEATURE_LIMITATION: 18,
			FEATURE_TOTALS: 19
		},
		LTrendlineType: {
			Average: 0,
			Linear: 1,
			Polynomial2: 2,
			Polynomial3: 3,
			Polynomial4: 4,
			Exponential: 5,
			Power: 6,
			Logarithmic: 7
		},
		ContinuousMode: {
			CONTINUOUS_NEVER: 0,
			CONTINUOUS_IF_POSSIBLE: 1,
			CONTINUOUS_IF_TIME: 2
		},
		TrendlineMode: {
			TRENDLINE_MULTILINE: 0,
			TRENDLINE_SUM: 1
		},
		DimCellType: {
			NX_DIM_CELL_VALUE: 0,
			NX_DIM_CELL_EMPTY: 1,
			NX_DIM_CELL_NORMAL: 2,
			NX_DIM_CELL_TOTAL: 3,
			NX_DIM_CELL_OTHER: 4,
			NX_DIM_CELL_AGGR: 5,
			NX_DIM_CELL_PSEUDO: 6,
			NX_DIM_CELL_ROOT: 7,
			NX_DIM_CELL_NULL: 8,
			NX_DIM_CELL_GENERATED: 9
		},
		StackElemType: {
			NX_STACK_CELL_NORMAL: 0,
			NX_STACK_CELL_TOTAL: 1,
			NX_STACK_CELL_OTHER: 2,
			NX_STACK_CELL_SUM: 3,
			NX_STACK_CELL_VALUE: 4,
			NX_STACK_CELL_PSEUDO: 5
		},
		SortIndicatorType: {
			NX_SORT_INDICATE_NONE: 0,
			NX_SORT_INDICATE_ASC: 1,
			NX_SORT_INDICATE_DESC: 2
		},
		DimensionType: {
			NX_DIMENSION_TYPE_DISCRETE: 0,
			NX_DIMENSION_TYPE_NUMERIC: 1,
			NX_DIMENSION_TYPE_TIME: 2
		},
		FieldSelectionMode: {
			SELECTION_MODE_NORMAL: 0,
			SELECTION_MODE_AND: 1,
			SELECTION_MODE_NOT: 2
		},
		FrequencyMode: {
			NX_FREQUENCY_NONE: 0,
			NX_FREQUENCY_VALUE: 1,
			NX_FREQUENCY_PERCENT: 2,
			NX_FREQUENCY_RELATIVE: 3
		},
		DataReductionMode: {
			DATA_REDUCTION_NONE: 0,
			DATA_REDUCTION_ONEDIM: 1,
			DATA_REDUCTION_SCATTERED: 2,
			DATA_REDUCTION_CLUSTERED: 3,
			DATA_REDUCTION_STACKED: 4
		},
		HypercubeMode: {
			DATA_MODE_STRAIGHT: 0,
			DATA_MODE_PIVOT: 1,
			DATA_MODE_PIVOT_STACK: 2,
			DATA_MODE_TREE: 3,
			DATA_MODE_DYNAMIC: 4
		},
		GroupMemberClass: {
			MEMBER_BOOKMARK: 0,
			MEMBER_OBJECT: 1
		},
		PatchOperationType: {
			Add: 0,
			Remove: 1,
			Replace: 2
		},
		SelectionCellType: {
			NX_CELL_DATA: 0,
			NX_CELL_TOP: 1,
			NX_CELL_LEFT: 2
		},
		MatchingFieldMode: {
			MATCHINGFIELDMODE_MATCH_ALL: 0,
			MATCHINGFIELDMODE_MATCH_ONE: 1
		},
		SessionState: {
			SESSION_CREATED: 0,
			SESSION_ATTACHED: 1,
			SESSION_ERROR_NO_LICENSE: 2,
			SESSION_ERROR_LICENSE_RENEW: 3,
			SESSION_ERROR_LIMIT_EXCEEDED: 4,
			SESSION_ERROR_SECURITY_HEADER_CHANGED: 5,
			SESSION_ACCESS_CONTROL_SETUP_FAILURE: 6,
			SESSION_ERROR_APP_ACCESS_DENIED: 7,
			SESSION_ERROR_APP_FAILURE: 8
		},
		ReloadState: {
			RELOAD_PAUSED: 0,
			RELOAD_STARTED: 1,
			RELOAD_ABORTED: 2
		},
		OpenApiVersion: {
			V2: 0,
			V3: 1
		},
		QrsChangeType: {
			QRS_CHANGE_UNDEFINED: 0,
			QRS_CHANGE_ADD: 1,
			QRS_CHANGE_UPDATE: 2,
			QRS_CHANGE_DELETE: 3
		},
		ExtEngineDataType: {
			NX_EXT_DATATYPE_STRING: 0,
			NX_EXT_DATATYPE_DOUBLE: 1,
			NX_EXT_DATATYPE_BOTH: 2
		},
		ExtEngineFunctionType: {
			NX_EXT_FUNCTIONTYPE_SCALAR: 0,
			NX_EXT_FUNCTIONTYPE_AGGR: 1,
			NX_EXT_FUNCTIONTYPE_TENSOR: 2
		},
		ExtEngineMsgType: {
			NX_EXT_MSGTYPE_FUNCTION_CALL: 1,
			NX_EXT_MSGTYPE_SCRIPT_CALL: 2,
			NX_EXT_MSGTYPE_RETURN_VALUE: 3,
			NX_EXT_MSGTYPE_RETURN_MULTIPLE: 4,
			NX_EXT_MSGTYPE_RETURN_ERROR: 5
		}
	}
};

//#endregion
//#region src/qix/session/schema/engine-enums.js
const { enums } = engine_api_default;
for (const key in enums) enums[`Nx${key}`] = enums[key];
var engine_enums_default = enums;

//#endregion
//#region src/qix/session/interceptors.ts
const RETURN_EMPTY_METHODS = ["GetProperties", "GetFullPropertyTree"];
const retryRegexpFilter$1 = /(?!^GetHyperCube|^GetListObject)(^Get|^Create|^OpenDoc$)/i;
/** @private */
const somethingWithEmptyMethodsRequestInterceptor = { onFulfilled(sessionReference, request) {
	if (RETURN_EMPTY_METHODS.indexOf(request.method) !== -1) {
		request.return_empty = true;
		request.delta = false;
	}
	return request;
} };
/** @private */
const retryAbortedErrorResponseInterceptor = { onRejected(session, request, error) {
	const api = request.handle ? session.apis.getApi(request.handle) : void 0;
	if (api && !api.isCancelled && error.code === engine_enums_default.LocalizedErrorCode.LOCERR_GENERIC_ABORTED && retryRegexpFilter$1.test(request.method)) {
		error.isHandled = true;
		return request.retry();
	}
	return Promise.reject(error);
} };
/** @private */
const retryModalObjectError = { onRejected(session, request, error) {
	if (error.code === engine_api_default.enums.LocalizedErrorCode.LOCERR_HC_MODAL_OBJECT_ERROR) {
		error.isHandled = true;
		return session.app.abortModalSelection().then(() => request.retry());
	}
	return Promise.reject(error);
} };
/** @private */
const somethingWithErrorPopupsResponnseInterceptor = { onRejected(session, request, error) {
	return Promise.reject(error);
} };

//#endregion
//#region src/qix/session/mixins/all/base.ts
var base_default$1 = {
	types: [
		"Doc",
		"GenericObject",
		"GenericDimension",
		"GenericMeasure",
		"GenericBookmark",
		"GenericVariable",
		"Field"
	],
	init(args) {
		const { api } = args;
		if (api.Promise) return;
		if (api.getAppLayout) api.session.app = api;
		api.app = api.session.app;
		api.enigmaModel = args.api;
		api.Promise = args.config.Promise;
	}
};

//#endregion
//#region src/qix/session/mixins/all/get-object-cache.js
function createGetMethod(cacheKey) {
	return function get() {
		const params = [].slice.call(arguments);
		const apiCache = this._getCache;
		const _get = params.splice(0, 1)[0];
		const id = cacheKey + params.join("");
		if (apiCache[id]) return apiCache[id];
		const promise = _get.apply(this, params).then((api) => {
			api.on("closed", () => {
				delete apiCache[id];
			});
			if (api.migrate && api.migrate.object) return api.migrate.object(api).then(() => api);
			return api;
		}).catch((err) => {
			delete apiCache[id];
			return Promise.reject({
				code: engine_enums_default.NxLocalizedErrorCode.LOCERR_GENERIC_NOT_FOUND,
				message: "Object not found",
				error: { code: engine_enums_default.NxLocalizedErrorCode.LOCERR_GENERIC_NOT_FOUND }
			});
		});
		apiCache[id] = promise;
		return promise;
	};
}
const genericGet = createGetMethod("generic-get-");
const variableGet = createGetMethod("variable-get-");
const fieldGet = createGetMethod("field-get-");
const mixin$20 = {
	types: "Doc",
	override: {},
	init(args) {
		args.api._getCache = {};
	}
};
[
	"getObject",
	"getBookmark",
	"getDimension",
	"getMeasure",
	"getVariableById"
].forEach((method) => {
	mixin$20.override[method] = genericGet;
});
["getVariable", "getVariableByName"].forEach((method) => {
	mixin$20.override[method] = variableGet;
});
mixin$20.override.getField = fieldGet;
var get_object_cache_default = mixin$20;

//#endregion
//#region src/qix/session/mixins/all/layout-observable.js
function Observable(api) {
	this.getLayout = function(api$1) {
		this.requestPromise = api$1.getLayout().then((layout) => {
			this.requestPromise = null;
			if (api$1.isCancelled) return;
			this.fn(layout);
		}).catch((err) => {
			if (process.env.NODE_ENV === "development") {
				if (typeof err !== "undefined") console.error(err);
			}
		});
	}.bind(this, api);
	this.onInvalidated = function() {
		this.getLayout();
	}.bind(this);
	this.api = api;
	this.fn = null;
}
Observable.prototype.subscribe = function(fn) {
	if (typeof fn !== "function") throw new Error("Observer must be a function");
	if (typeof this.fn === "function") return;
	this.fn = fn;
	this.api.Invalidated.bind(this.onInvalidated);
	this.getLayout();
};
Observable.prototype.dispose = function() {
	this.api.Invalidated.unbind(this.onInvalidated);
};
Observable.prototype.cancel = function() {
	if (this.requestPromise) {
		this.api.app.global.cancelRequest(this.requestPromise.requestId);
		this.api.markAsCancelled();
		this.requestPromise = null;
		return true;
	}
	return false;
};
Observable.prototype.retry = function() {
	if (this.api.isCancelled) this.getLayout();
};
var layout_observable_default = {
	types: [
		"Doc",
		"GenericObject",
		"GenericDimension",
		"GenericMeasure",
		"GenericBookmark",
		"GenericVariable"
	],
	extend: { layoutSubscribe(fn) {
		const observable = new Observable(this);
		observable.subscribe(fn);
		return observable;
	} }
};

//#endregion
//#region src/qix/session/mixins/all/migration.ts
function isSnapshotData(data) {
	return data && !!data.sourceObjectId;
}
function migrate(model, data) {
	const migrateFn = isSnapshotData(data) ? model.migrate.snapshot : model.migrate.properties;
	if (typeof migrateFn !== "function") throw new Error(`migration function not a function: expected function, got ${typeof migrateFn}`);
	return migrateFn(data);
}
var migration_default = {
	types: [
		"Doc",
		"GenericObject",
		"GenericDimension",
		"GenericMeasure",
		"GenericBookmark",
		"GenericVariable"
	],
	extend: { migrate: {
		properties(properties) {
			return properties;
		},
		snapshot(layout) {
			return layout;
		}
	} },
	override: {
		getProperties(_getProperties) {
			const model = this;
			return _getProperties().then((properties) => migrate(model, properties));
		},
		setProperties(_setProperties, properties) {
			return _setProperties(migrate(this, properties));
		}
	}
};

//#endregion
//#region src/qix/session/mixins/utils/json-patch.js
const JSONPatch$1 = {};
const extend$1 = merge;
const isObject$1 = isPlainObject;
const isArray$1 = Array.isArray;
const isUndef$1 = function(v) {
	return typeof v === "undefined";
};
const isFunction$1 = function(v) {
	return typeof v === "function";
};
/**
* Generate an exact duplicate (with no references) of a specific value.
*
* @private
* @param {Object} The value to duplicate
* @returns {Object} a unique, duplicated value
*/
function generateValue$1(val) {
	if (val) val = extend$1({}, { val }).val;
	return val;
}
/**
* An additional type checker used to determine if the property is of internal
* use or not a type that can be translated into JSON (like functions).
*
* @private
* @param {Object} obj The object which has the property to check
* @param {String} The property name to check
* @returns {Boolean} Whether the property is deemed special or not
*/
function isSpecialProperty$1(obj, key) {
	return isFunction$1(obj[key]) || key.substring(0, 2) === "$$" || key.substring(0, 1) === "_";
}
/**
* Finds the parent object from a JSON-Pointer ("/foo/bar/baz" = "bar" is "baz" parent),
* also creates the object structure needed.
*
* @private
* @param {Object} data The root object to traverse through
* @param {String} The JSON-Pointer string to use when traversing
* @returns {Object} The parent object
*/
function getParent$1(data, str) {
	const parts = str.substring(1).split("/").slice(0, -1);
	let numPart;
	parts.forEach((part, i) => {
		if (i === parts.length) return;
		numPart = +part;
		data[numPart || part] = isUndef$1(data[numPart || part]) ? !Number.isNaN(+numPart) ? [] : {} : data[part];
		data = data[numPart || part];
	});
	return data;
}
/**
* Cleans an object of all its properties, unless they're deemed special or
* cannot be removed by configuration.
*
* @private
* @param {Object} obj The object to clean
*/
function emptyObject$1(obj) {
	Object.keys(obj).forEach((key) => {
		if (Object.getOwnPropertyDescriptor(obj, key).configurable && !isSpecialProperty$1(obj, key)) delete obj[key];
	});
}
/**
* Compare an object with another, could be object, array, number, string, bool.
*
* @param {Object} a The first object to compare
* @param {Object} b The second object to compare
* @returns {Boolean} Whether the objects are identical
*/
function compare$1(a, b) {
	if (isObject$1(a) && isObject$1(b)) {
		if (Object.keys(a).length !== Object.keys(b).length) return false;
		for (const key of Object.keys(a)) if (!compare$1(a[key], b[key])) return false;
		return true;
	}
	if (isArray$1(a) && isArray$1(b)) {
		if (a.length !== b.length) return false;
		for (let i = 0, l = a.length; i < l; i++) if (!compare$1(a[i], b[i])) return false;
		return true;
	}
	return a === b;
}
/**
* Generates patches by comparing two arrays.
*
* @private
* @param {Array} oldA The old (original) array, which will be patched
* @param {Array} newA The new array, which will be used to compare against
* @returns {Array} An array of patches (if any)
*/
function patchArray$1(original, newA, basePath) {
	let patches = [];
	const oldA = original.slice();
	let i;
	let l;
	let tmpIdx = -1;
	function findIndex(a, id, idx) {
		if (a[idx] && isUndef$1(a[idx].qInfo)) return null;
		if (a[idx] && a[idx].qInfo.qId === id) return idx;
		for (let i$1 = 0, l$1 = a.length; i$1 < l$1; i$1++) if (a[i$1] && a[i$1].qInfo.qId === id) return i$1;
		return -1;
	}
	if (compare$1(newA, oldA)) return patches;
	if (newA[0] === null || !isUndef$1(newA[0]) && isUndef$1(newA[0].qInfo)) {
		patches.push({
			op: "replace",
			path: basePath,
			value: newA
		});
		return patches;
	}
	for (i = oldA.length - 1; i >= 0; --i) {
		tmpIdx = findIndex(newA, oldA[i] && oldA[i].qInfo && oldA[i].qInfo.qId, i);
		if (tmpIdx === -1) {
			patches.push({
				op: "remove",
				path: `${basePath}/${i}`
			});
			oldA.splice(i, 1);
		} else patches = patches.concat(JSONPatch$1.generate(oldA[i], newA[tmpIdx], `${basePath}/${i}`));
	}
	for (i = 0, l = newA.length; i < l; ++i) {
		tmpIdx = findIndex(oldA, newA[i] && newA[i].qInfo && newA[i].qInfo.qId);
		if (tmpIdx === -1) {
			patches.push({
				op: "add",
				path: `${basePath}/${i}`,
				value: newA[i]
			});
			oldA.splice(i, 0, newA[i]);
		} else if (tmpIdx !== i) {
			patches.push({
				op: "move",
				path: `${basePath}/${i}`,
				from: `${basePath}/${tmpIdx}`
			});
			oldA.splice(i, 0, oldA.splice(tmpIdx, 1)[0]);
		}
	}
	return patches;
}
/**
* Generate an array of JSON-Patch:es following the JSON-Patch Specification Draft.
*
* See [specification draft](http://tools.ietf.org/html/draft-ietf-appsawg-json-patch-10)
*
* Does NOT currently generate patches for arrays (will replace them)
*
* @param {Object} original The object to patch to
* @param {Object} newData The object to patch from
* @param {String} [basePath] The base path to use when generating the paths for the patches (normally not used)
* @returns {Array} An array of patches
*/
JSONPatch$1.generate = function(original, newData, basePath) {
	basePath = basePath || "";
	let patches = [];
	Object.keys(newData).forEach((key) => {
		const val = generateValue$1(newData[key]);
		const oldVal = original[key];
		const tmpPath = `${basePath}/${key}`;
		if (compare$1(val, oldVal) || isSpecialProperty$1(newData, key)) return;
		if (isUndef$1(oldVal)) patches.push({
			op: "add",
			path: tmpPath,
			value: val
		});
		else if (isObject$1(val) && isObject$1(oldVal)) patches = patches.concat(JSONPatch$1.generate(oldVal, val, tmpPath));
		else if (isArray$1(val) && isArray$1(oldVal)) patches = patches.concat(patchArray$1(oldVal, val, tmpPath));
		else patches.push({
			op: "replace",
			path: `${basePath}/${key}`,
			value: val
		});
	});
	Object.keys(original).forEach((key) => {
		if (isUndef$1(newData[key]) && !isSpecialProperty$1(original, key)) patches.push({
			op: "remove",
			path: `${basePath}/${key}`
		});
	});
	return patches;
};
/**
* Apply a list of patches to an object.
*
* @param {Object} original The object to patch
* @param {Array} patches The list of patches to apply
*/
JSONPatch$1.apply = function(original, patches) {
	patches.forEach((patch) => {
		const parent = getParent$1(original, patch.path);
		let key = patch.path.split("/").splice(-1)[0];
		const target = key && Number.isNaN(+key) ? parent[key] : parent[+key] || parent;
		const from = patch.from ? patch.from.split("/").splice(-1)[0] : null;
		if (patch.op === "add" || patch.op === "replace") if (isArray$1(parent)) {
			if (key === "-") key = parent.length;
			parent.splice(+key, patch.op === "add" ? 0 : 1, patch.value);
		} else if (isArray$1(target) && isArray$1(patch.value)) {
			const newValues = patch.value.slice();
			target.length = 0;
			target.push.apply(target, newValues);
		} else if (isObject$1(target) && isObject$1(patch.value)) {
			emptyObject$1(target);
			extend$1(target, patch.value);
		} else parent[key] = patch.value;
		else if (patch.op === "move") {
			const oldParent = getParent$1(original, patch.from);
			if (isArray$1(parent)) parent.splice(+key, 0, oldParent.splice(+from, 1)[0]);
			else {
				parent[key] = oldParent[from];
				delete oldParent[from];
			}
		} else if (patch.op === "remove") if (isArray$1(parent)) parent.splice(+key, 1);
		else delete parent[key];
	});
};
/**
* Deep clone an object.
*
* @param {Object} obj The object to clone
* @returns {Object} A new object identical to the `obj`
*/
JSONPatch$1.clone = function(obj) {
	return extend$1({}, obj);
};
/**
* Creates a JSON-patch.
*
* @param {String} op The operation of the patch. Available values: "add", "remove", "move"
* @param {Object} [val] The value to set the `path` to. If `op` is `move`, `val` is the "from JSON-path" path
* @param {String} path The JSON-path for the property to change (e.g. "/qHyperCubeDef/columnOrder")
* @returns {Object} A patch following the JSON-patch specification
*/
JSONPatch$1.createPatch = function(op, val, path) {
	const patch = {
		op: op.toLowerCase(),
		path
	};
	if (patch.op === "move") patch.from = val;
	else if (typeof val !== "undefined") patch.value = val;
	return patch;
};
/**
* Apply the differences of two objects (keeping references if possible).
* Identical to running `JSONPatch.apply(original, JSONPatch.generate(original, newData));`
*
* @param {Object} original The object to update/patch
* @param {Object} newData the object to diff against
*
* @example
* var obj1 = { foo: [1,2,3], bar: { baz: true, qux: 1 } };
* var obj2 = { foo: [4,5,6], bar: { baz: false } };
* JSONPatch.updateObject(obj1, obj2);
* // => { foo: [4,5,6], bar: { baz: false } };
*/
JSONPatch$1.updateObject = function(original, newData) {
	if (!Object.keys(original).length) {
		extend$1(original, newData);
		return;
	}
	JSONPatch$1.apply(original, JSONPatch$1.generate(original, newData));
};
var json_patch_default$1 = JSONPatch$1;

//#endregion
//#region src/qix/session/mixins/utils/notification.js
let trackNotifications = false;
const notifications = [];
let INSTANTIATING = false;
let NotificationMixin;
/**
* @class
* @classdesc
*
* This is a class to expose an observable notification. It's an implementation
* of the [Observer pattern](http://en.wikipedia.org/wiki/Observer_pattern).
*
* @throws {Error} Always.
* @abstract
* @alias Notification
* @param {Object|Function} receiver The object to define the notification on.
* @param {String} name PascalCased name of the notification.
* @type class
*/
const Notification = function Notification$1(receiver, name) {
	if (INSTANTIATING !== true) throw new Error("This class can't be instantiated directly.");
	this.observers = [];
	this.receiver = receiver;
	Object.defineProperty(this, "name", { get() {
		return name;
	} });
	if (trackNotifications) notifications.push(this);
};
/**
* Observe a Notification by sending in an observer function.
* Whenever {@link module:assets/core/utils/notification~Notification#emit}
* is invoked on this instance, the observer will be notified or invoked about it.
*
* Please note that if you want to proxy an notification to another object, for now
* it's not possible to do:
*
* ```obj1.EventName.bind( obj2.OtherEvent.emit );```
*
* You have to do:
*
* ```obj1.EventName.bind( function() { obj2.OtherEvent.emit } );```
*
* @param {Function} observer The observer function to handle to notification.
* @throws {Error} When the observer is not a {@link Function}.
* @throws {Error} When the observer is the {@link module:assets/core/utils/notification~Notification#emit} function.
*/
Notification.prototype.bind = function observe(observer) {
	if (typeof observer !== "function") throw new Error("Observer must be a function.");
	if (observer === Notification.prototype.emit) throw new Error("Observer cannot be proxied this way. Use a wrapper function.");
	this.observers.push(observer);
};
/**
* Observe a Notification only once and then unbind automatically from any future notifications.
*
* @param {Function} observer The observer function to handle to notification.
*/
Notification.prototype.once = function observeOnce(observer) {
	const self = this;
	function f() {
		self.unbind(f);
		observer.apply(self.receiver, arguments);
	}
	f.onceObserver = observer;
	self.bind(f);
};
/**
* Stop observing a notification.
*
* @param {Function} observer The observer function that now should ignore any future notifications.
*/
Notification.prototype.unbind = function observeOnce(observer) {
	const index = this.observers.reduce((foundIndex, o, currIndex) => {
		if (foundIndex !== -1) return foundIndex;
		if (o === observer || o.onceObserver === observer) return currIndex;
		return -1;
	}, -1);
	if (index !== -1) this.observers.splice(index, 1);
};
/**
* Notify all observers of this notification.
*
* Please note that this method should ONLY be invoked from the class or
* module defining this notification. Otherwise we get a spaghetti monster
* on our hands.
*/
Notification.prototype.emit = function emit() {
	const { receiver } = this;
	const args = Array.prototype.slice.call(arguments);
	this.observers.slice().forEach((observer) => {
		observer.apply(receiver, args);
	});
};
/**
* Release all stored data of a notification to free up memory.
*/
Notification.prototype.release = function() {
	const { receiver } = this;
	delete receiver[this.name];
	Object.keys(NotificationMixin.prototype).forEach((key) => {
		delete receiver[key];
	});
	this.receiver = null;
	this.observers = null;
};
/**
* Create a new observable {@link module:assets/core/utils/notification~Notification} on an object.
*
* @param {Object|Function} receiver The object that should now be able to notify observers.
* @param {String} name The name of the event. This name must be PascalCased to be valid.
* @throws {Error} When the receiver is not a valid object or function.
* @throws {Error} When the name is not a PascalCased String.
* @throws {Error} When there is already a property with the specified name on the receiver.
*/
Notification.create = function create(receiver, name) {
	if (!receiver) throw new Error("Not a valid receiver.");
	if (typeof name !== "string") throw new Error("Nofification name not optional.");
	if (!/^([A-Z][a-z]+)+$/.test(name)) throw new Error("The notification name must be PascalCased.");
	if (name in receiver) throw new Error(`A property named '${name}' is already present on the receiver.`);
	INSTANTIATING = true;
	receiver[name] = new Notification(receiver, name);
	INSTANTIATING = false;
	return receiver[name];
};
/**
* This mixes in {@link module:assets/core/utils/notification~NotificationMixin} into the receiver, and add functionality
* to more easy add a new {@link module:assets/core/utils/notification~Notification} to the receiver.
*/
Notification.mixin = function(receiver) {
	if (!receiver) throw new Error("Not a valid receiver.");
	Object.keys(NotificationMixin.prototype).forEach((property) => {
		if (property in receiver) throw new Error(`A property named '${property}' is already present on the receiver.`);
		receiver[property] = NotificationMixin.prototype[property];
	});
};
/**
* Release all notification instances on a specified object.
*
* @param {Object} mixinedObject The object to release notifications on
*/
Notification.release = function(mixinedObject) {
	Object.keys(mixinedObject).forEach((key) => {
		const prop = mixinedObject[key];
		if (prop instanceof Notification) prop.release();
	});
};
/**
* This object is mixed in to the receiver when using {@link module:assets/core/utils/notification~Notification.mixin}.
* It adds functionality to define {@link module:assets/core/utils/notification~Notification}s.
*
* @mixin
*/
NotificationMixin = { prototype: { notification(name) {
	return Notification.create(this, name);
} } };
if (process.env.NODE_ENV === "development") {
	globalThis.getNotifications = function() {
		return notifications.filter((notification) => notification.observers && notification.observers.length);
	};
	globalThis.trackNotifications = function() {
		trackNotifications = true;
	};
}
var notification_default = Notification;

//#endregion
//#region src/qix/session/mixins/utils/permissions.js
/**
* @exports assets/core/utils/permissions
*/
const CREATABLE_RESOURCES = [
	{
		resource: "sheet",
		canCreate: true
	},
	{
		resource: "bookmark",
		canCreate: true
	},
	{
		resource: "story",
		canCreate: true
	},
	{
		resource: "searchhistory",
		canCreate: true
	},
	{
		resource: "dimension",
		canCreate: true
	},
	{
		resource: "measure",
		canCreate: true
	},
	{
		resource: "masterobject",
		canCreate: true
	},
	{
		resource: "snapshot",
		canCreate: true
	}
];
let forceReadOnly = false;
/**
* Maps app object permission bit values to readable keys.
*
* @param {Array} privileges The array of privilieges to parse data from
* @param {Object} [mapToObj] An optional object that'll be used to set the permissions on
* @returns {Object} An object containing readable permissions
*/
function parse(privileges, mapToObj) {
	if (!privileges.length) privileges = [
		"update",
		"publish",
		"export",
		"exportdata",
		"changeowner",
		"delete"
	];
	if (forceReadOnly) privileges = [];
	mapToObj = mapToObj || {};
	mapToObj.update = privileges.indexOf("update") !== -1;
	mapToObj.publish = privileges.indexOf("publish") !== -1;
	mapToObj.export = privileges.indexOf("export") !== -1;
	mapToObj.exportData = privileges.indexOf("exportdata") !== -1;
	mapToObj.changeOwner = privileges.indexOf("changeowner") !== -1;
	mapToObj.remove = privileges.indexOf("delete") !== -1;
	return mapToObj;
}
/**
* Maps create permission bit values to readable keys.
*
* @param {Array} creatables An array containing string names for the creatable types
* @param {Object} [mapToObj] An optional object that'll be used to set the permissions on
* @returns {Object} An object containing readable permissions
*/
function parseCreate(creatables, mapToObj) {
	mapToObj = mapToObj || {};
	for (const key in mapToObj) delete mapToObj[key];
	if (forceReadOnly) return mapToObj;
	creatables.forEach((creatable) => {
		if (creatable.canCreate) mapToObj[`create${creatable.resource[0].toUpperCase()}${creatable.resource.substring(1)}`] = true;
	});
	return mapToObj;
}
/**
* Maps permissions onto a layout. It's exposed by `layout.permissions`.
*
* @param {Object} layout The layout to create readable permissions on
* @returns {Object} The modified layout
*/
function mapToLayout(layout, isApp) {
	const permissions = {};
	if (!layout.permissions) Object.defineProperty(layout, "permissions", {
		configurable: false,
		enumerable: false,
		get() {
			if (layout) {
				if (isApp) {
					forceReadOnly = layout.qReadOnly;
					parseCreate(layout.create || CREATABLE_RESOURCES, permissions);
				}
				parse(layout.privileges || layout.qMeta && layout.qMeta.privileges || [], permissions);
			}
			return permissions;
		}
	});
	return layout;
}

//#endregion
//#region src/qix/session/mixins/all/state.js
const RPCStates = {
	VALID: 1,
	INVALID: 2,
	VALIDATING: 3,
	CLOSED: 5,
	CLOSING: 6,
	CANCELLED: 7
};
var state_default = {
	types: [
		"Doc",
		"GenericObject",
		"GenericDimension",
		"GenericMeasure",
		"GenericBookmark",
		"GenericVariable"
	],
	extend: {
		setState(state) {
			const oldState = this.state;
			this.state = state;
			if (oldState === this.state) {} else if (state === RPCStates.INVALID) this.Invalidated.emit();
			else if (state === RPCStates.VALID) this.Validated.emit();
			else if (state === RPCStates.VALIDATING) this.Validating.emit();
			else if (state === RPCStates.CLOSED) this.Closed.emit();
			else if (state === RPCStates.CLOSING) this.Closing.emit();
			else if (state === RPCStates.CANCELLED) this.Cancelled.emit();
		},
		markAsInvalid() {
			this.state = -99;
			this.setState(RPCStates.INVALID);
		},
		markAsCancelled() {
			this.setState(RPCStates.CANCELLED);
		},
		clearPending() {
			const api = this;
			for (const key in api.ongoingRequests) delete api.ongoingRequests[key];
		},
		getLayoutAndPatchLastResult() {
			return this.getLayout(false);
		}
	},
	override: {
		getLayout(_getLayout, pure) {
			const CACHE_KEY = `GetLayout${this.delta}`;
			const RELOAD_IN_PROGRESS_ERROR = 11e3;
			const self = this;
			const getPureLayout = pure !== false;
			if (self.isValid && self.layout) return self.Promise.resolve(getPureLayout ? self.pureLayout : self.layout);
			if (!self.isValidating) self.setState(RPCStates.VALIDATING);
			if (self.ongoingRequests[CACHE_KEY]) {
				const ongoingRequests$1 = self.ongoingRequests[CACHE_KEY];
				if (pure)
 /**
				* Since we are using a cache we have to make sure to return
				* the pure layout when we request using pure.
				*/
				return ongoingRequests$1.then(() => {
					if (!self.pureLayout.permissions) self.pureLayout.permissions = self.layout.permissions;
					return self.pureLayout;
				});
				return ongoingRequests$1;
			}
			const request = _getLayout().then((layout) => {
				if (!self.isValid) json_patch_default$1.updateObject(self.layout, layout);
				if (self.ongoingRequests[CACHE_KEY] === request) {
					self.setState(RPCStates.VALID);
					delete self.ongoingRequests[CACHE_KEY];
				}
				self.pureLayout = layout;
				self.pureLayout.permissions = self.layout.permissions;
				return getPureLayout ? self.pureLayout : self.layout;
			}).catch((err) => {
				delete self.ongoingRequests[CACHE_KEY];
				if (err.code === RELOAD_IN_PROGRESS_ERROR) err.isHandled = true;
				return self.Promise.reject(err);
			});
			self.ongoingRequests[CACHE_KEY] = request;
			return request;
		},
		getProperties(_getProperties) {
			const CACHE_KEY = "GetPropertiesfalse";
			const self = this;
			if (self.isValid && !self.needCacheProperties) return self.Promise.resolve(self.properties);
			if (self.ongoingRequests[CACHE_KEY]) return self.ongoingRequests[CACHE_KEY];
			const request = _getProperties().then((properties) => {
				const patches = json_patch_default$1.generate(self._properties, properties);
				self._properties = properties;
				json_patch_default$1.apply(self.properties, patches);
				if (self.isValid) self.needCacheProperties = false;
				return self.properties;
			});
			self.ongoingRequests[CACHE_KEY] = request;
			request.catch(() => {}).finally(() => {
				delete self.ongoingRequests[CACHE_KEY];
			});
			return request;
		},
		setProperties(_setProperties, properties) {
			const self = this;
			return _setProperties(properties).then(() => {
				json_patch_default$1.updateObject(self._properties, self.properties);
			});
		}
	},
	init(args) {
		const { api } = args;
		notification_default.mixin(api);
		api.notification("Validated");
		api.notification("Invalidated");
		api.notification("Validating");
		api.notification("Closed");
		api.notification("Closing");
		api.notification("Cancelled");
		api.setState(RPCStates.INVALID);
		api.layout = {};
		api.pureLayout = null;
		api.properties = {};
		api._properties = {};
		api.needCacheProperties = true;
		api.ongoingRequests = {};
		mapToLayout(api.layout, !!api.getAppLayout);
		api.on("changed", () => {
			api.clearPending();
			api.needCacheProperties = true;
			api.setState(RPCStates.INVALID);
		});
		api.on("closed", () => {
			for (const key in api.ongoingRequests) if (api.ongoingRequests[key].then) api.ongoingRequests[key].then(null, (error) => {
				error.isHandled = true;
			});
			api.setState(RPCStates.CLOSED);
		});
		api.Cancelled.bind(() => {
			api.clearPending();
		});
		Object.defineProperties(api, {
			isValid: { get() {
				return this.state === RPCStates.VALID;
			} },
			isValidating: { get() {
				return this.state === RPCStates.VALIDATING;
			} },
			isInvalid: { get() {
				return this.state === RPCStates.INVALID;
			} },
			isClosed: { get() {
				return this.state === RPCStates.CLOSED;
			} },
			isClosing: { get() {
				return this.state === RPCStates.CLOSING;
			} },
			isCancelled: { get() {
				return this.state === RPCStates.CANCELLED;
			} }
		});
	}
};

//#endregion
//#region src/qix/session/mixins/all/index.ts
const mixins$1 = [
	base_default$1,
	get_object_cache_default,
	migration_default,
	state_default,
	layout_observable_default
];

//#endregion
//#region src/qix/session/mixins/custom/currentselections/current-selections-mixins.ts
const mixin$18 = {
	types: ["CurrentSelection"],
	extend: {
		async clearField(fieldName, state) {
			return (await this.app.getField(fieldName, state)).clear();
		},
		async lockField(fieldName) {
			return (await this.app.getField(fieldName, void 0)).lock();
		},
		async unlockField(fieldName) {
			return (await this.app.getField(fieldName, void 0)).unlock();
		},
		clearAll() {
			return this.app.clearAll();
		},
		back() {
			return this.app.back();
		},
		forward() {
			return this.app.forward();
		}
	}
};

//#endregion
//#region src/qix/session/mixins/custom/fieldlist/fields-mixins.js
const mixin$19 = {
	types: ["FieldList"],
	extend: { expand() {
		return this.getLayout().then((list) => {
			const result = [];
			for (let i = 0; i < list.length; ++i) {
				const field = list[i];
				result.push(field);
				if (field.qDerivedFieldData) for (let j = 0; j < field.qDerivedFieldData.qDerivedFieldLists.length; ++j) {
					const derived = field.qDerivedFieldData.qDerivedFieldLists[j];
					for (let k = 0; k < derived.qFieldDefs.length; ++k) {
						const derived_field = derived.qFieldDefs[k];
						result.push({
							qName: derived_field.qName,
							qSrcTables: field.qSrcTables,
							qTags: derived_field.qTags,
							isDerived: true,
							sourceField: field.qName,
							derivedDefinitionName: derived.qDerivedDefinitionName
						});
					}
				}
			}
			return result;
		});
	} }
};
var fields_mixins_default = mixin$19;

//#endregion
//#region src/qix/session/mixins/custom/undoinfo/undo-info-mixins.js
let evenMarkers = true;
const queue = [];
let currentGroupId = null;
let isUndoLimitReached = false;
function awaitQueue(proceedCallback) {
	const aheadInQueue = queue[queue.length - 1];
	let promise;
	if (aheadInQueue) promise = proceedCallback(aheadInQueue);
	else promise = proceedCallback(Promise.resolve());
	queue.push(promise);
	return promise;
}
function resetMarkersIfLimitReached(properties) {
	if (isUndoLimitReached) {
		properties.markers.length = 0;
		isUndoLimitReached = false;
	}
}
var undo_info_mixins_default = {
	types: ["UndoInfo"],
	extend: {
		undo() {
			const model = this;
			function proceed(waitForPromise) {
				return waitForPromise.then(() => model.getLayout().then((layout) => {
					if (layout.qUndoInfo.qUndoCount > 0) return model.app.undo().then(() => model.getLayout().then((layout$1) => {
						evenMarkers = layout$1.markers.length % 2 === 0;
						if (!evenMarkers) return proceed(Promise.resolve());
						queue.splice(0, 1);
					}));
					evenMarkers = layout.markers.length % 2 === 0;
					if (!evenMarkers) isUndoLimitReached = true;
					queue.splice(0, 1);
				}));
			}
			return awaitQueue(proceed);
		},
		redo() {
			const model = this;
			function proceed(waitForPromise) {
				return waitForPromise.then(() => model.getLayout().then((layout) => {
					if (layout.qUndoInfo.qRedoCount > 0) {
						isUndoLimitReached = false;
						return model.app.redo().then(() => model.getLayout().then(() => {
							evenMarkers = layout.markers.length % 2 === 0;
							if (!evenMarkers) return proceed(Promise.resolve());
							queue.splice(0, 1);
						}));
					}
					queue.splice(0, 1);
				}));
			}
			return awaitQueue(proceed);
		},
		reset() {
			const model = this;
			return model.getLayout().then((layout) => {
				if (!layout.qUndoInfo.qUndoCount && !layout.qUndoInfo.qRedoCount) return;
				if (layout.markers.length) return model.getProperties().then((props) => {
					props.markers.length = 0;
					return model.setProperties(props).then(() => model.app.clearUndoBuffer());
				});
				return model.app.clearUndoBuffer();
			});
		},
		startGroup() {
			const model = this;
			return model.getLayout().then((layout) => model.getProperties().then((props) => {
				evenMarkers = props.markers.length % 2 === 0;
				if (evenMarkers || isUndoLimitReached) {
					currentGroupId = Date.now();
					resetMarkersIfLimitReached(props);
					props.markers.push(layout.qUndoInfo.qUndoCount + 1);
					return model.setProperties(props).then(() => Promise.resolve(currentGroupId));
				}
				return Promise.resolve(currentGroupId);
			}));
		},
		endGroup(groupId) {
			if (!groupId) throw new Error("Must provide groupId to stop group.");
			const model = this;
			return model.getLayout().then((layout) => model.getProperties().then((props) => {
				evenMarkers = props.markers.length % 2 === 0;
				if (!evenMarkers && groupId === currentGroupId) {
					currentGroupId = null;
					props.markers.push(layout.qUndoInfo.qUndoCount + 1);
					return model.setProperties(props);
				}
				return Promise.resolve();
			}));
		}
	}
};

//#endregion
//#region src/qix/session/mixins/custom/index.ts
const mixins$2 = [
	mixin$18,
	fields_mixins_default,
	undo_info_mixins_default
];

//#endregion
//#region src/qix/session/mixins/doc/base.ts
const mixin$17 = {
	types: "Doc",
	extend: {
		getOrCreateSessionObject(props) {
			const app = this;
			const id = props.qInfo?.qId;
			if (!id) throw new Error("Invalid list definition. No qId defined");
			if (!app._listCache[id]) if (app.session.sessionState === "SESSION_ATTACHED") app._listCache[id] = app.getObject(id).catch(() => app.createSessionObject(props));
			else app._listCache[id] = app.createSessionObject(props);
			return app._listCache[id];
		},
		getListObject(listDef) {
			const app = this;
			let outKey = Object.keys(listDef).filter((key) => key.indexOf("ListDef") !== -1)[0];
			if (!outKey) throw new Error("Invalid list definition");
			if (outKey) outKey = outKey.replace(/Def$/g, "");
			const id = listDef.qInfo?.qId;
			if (!id) throw new Error("Invalid list definition. No qId defined");
			if (!app._listCache[id]) app.getOrCreateSessionObject(listDef).then((obj) => {
				const getLayout = obj.getLayout.bind(obj);
				obj.getLayout = function() {
					return getLayout().then((layout) => {
						layout[outKey].qItems.forEach((item) => {
							if (typeof item === "object") mapToLayout(item, false);
						});
						return layout[outKey].qItems;
					});
				};
				return obj;
			});
			return app._listCache[id];
		},
		getListData(listDef) {
			return this.getListObject(listDef).then((list) => list.getLayout());
		}
	},
	init(args) {
		args.api._listCache = {};
	}
};
var base_default = mixin$17;

//#endregion
//#region src/qix/session/mixins/doc/modal.js
var modal_default = {
	types: "Doc",
	extend: {
		abortModalSelection(accept) {
			accept = accept !== void 0 ? accept : true;
			this.setModalSelection(null);
			return this.abortModal(accept);
		},
		switchModalSelection(object, path, accept) {
			object = object || null;
			path = path || "";
			accept = accept !== void 0 ? accept : true;
			const pathArray = Array.isArray(path) ? path : [path];
			if (this.isInModalSelection() && object !== this.modalSelectionObject) this.modalSelectionObject.endSelections(accept);
			if (!object || object.isClosed) this.setModalSelection(null);
			else if (object !== this.modalSelectionObject) {
				this.setModalSelection(object);
				return object.beginSelections(pathArray);
			}
			return Promise.resolve();
		},
		setModalSelection(obj) {
			this.modalSelectionObject = obj;
		},
		isInModalSelection() {
			return this.modalSelectionObject && !this.modalSelectionObject.isClosed;
		}
	}
};

//#endregion
//#region src/qix/session/mixins/doc/normalize.js
var normalize_default = {
	types: "Doc",
	extend: {
		getProperties() {
			return this.getAppProperties();
		},
		setProperties(props) {
			return this.setAppProperties(props);
		},
		getLayout() {
			return this.getAppLayout();
		}
	},
	init(args) {
		this.Promise = args.config.Promise;
		const { api } = args;
		api.waitForOpen = { promise: Promise.resolve() };
	}
};

//#endregion
//#region src/qix/session/mixins/doc/bookmarks.js
const bookmarkListProps = {
	qInfo: {
		qId: "BookmarkList",
		qType: "BookmarkList"
	},
	qBookmarkListDef: {
		qType: "bookmark",
		qData: {
			title: "/qMetaDef/title",
			description: "/qMetaDef/description",
			sheetId: "/sheetId",
			selectionFields: "/selectionFields",
			creationDate: "/creationDate",
			groupId: "/groupId"
		}
	}
};
const mixin$3 = {
	types: "Doc",
	extend: {
		getBookmarkList() {
			return this.getListData(bookmarkListProps);
		},
		getBookmarkListObject() {
			return this.getListObject(bookmarkListProps);
		}
	}
};

//#endregion
//#region src/qix/session/mixins/doc/create-client-objects.js
const mixin$4 = {
	types: "Doc",
	override: {
		createBookmark(_createBookmark, props) {
			return _createBookmark(merge({
				qInfo: { qType: "bookmark" },
				qMetaDef: {
					title: "",
					description: ""
				},
				creationDate: (/* @__PURE__ */ new Date()).toISOString()
			}, props));
		},
		createBookmarkEx(_createBookmarkEx, props, patchObjs) {
			return _createBookmarkEx(merge({
				qInfo: { qType: "bookmark" },
				qMetaDef: {
					title: "",
					description: ""
				},
				creationDate: (/* @__PURE__ */ new Date()).toISOString()
			}, props), patchObjs);
		}
	},
	extend: {
		async createSheet(props) {
			return this.createObject({
				qInfo: {
					qId: generateRandomString(43),
					qType: "sheet"
				},
				qMetaDef: {
					title: props.title || "",
					description: props.description || ""
				},
				rank: typeof props.rank !== "undefined" ? props.rank : -1,
				thumbnail: { qStaticContentUrlDef: props.thumbnail || null },
				columns: props.columns || 24,
				rows: props.rows || 12,
				cells: [],
				customRowBase: props.rows || void 0,
				gridResolution: props.gridResolution || void 0,
				layoutOptions: props.layoutOptions || void 0,
				qChildListDef: { qData: { title: "/title" } }
			});
		},
		async createStory(props) {
			return this.createObject({
				qInfo: {
					qId: generateRandomString(43),
					qType: "story"
				},
				qMetaDef: {
					title: props.title || "",
					description: ""
				},
				rank: typeof props.rank !== "undefined" ? props.rank : -1,
				thumbnail: { qStaticContentUrlDef: props.thumbnail || null },
				qChildListDef: { qData: {
					title: "/title",
					rank: "/rank"
				} }
			});
		},
		createMasterObject(props) {
			props = props || {};
			return this.createObject({
				qInfo: { qType: "masterobject" },
				qMetaDef: {
					title: props.title || "",
					description: props.description || "",
					tags: props.tags || ""
				}
			});
		}
	}
};

//#endregion
//#region src/qix/session/mixins/doc/current-selections.ts
const currentSelectionProps = {
	qInfo: {
		qId: "CurrentSelection",
		qType: "CurrentSelection"
	},
	qSelectionObjectDef: {}
};
const mixin$5 = {
	types: ["Doc"],
	extend: { getCurrentSelectionObject() {
		return this.getOrCreateSessionObject(currentSelectionProps);
	} }
};

//#endregion
//#region src/qix/session/mixins/doc/dimensions.js
const dimensionListProps = {
	qInfo: {
		qId: "DimensionList",
		qType: "DimensionList"
	},
	qDimensionListDef: {
		qType: "dimension",
		qData: {
			title: "/qMetaDef/title",
			tags: "/qMetaDef/tags",
			grouping: "/qDim/qGrouping",
			info: "/qDimInfos",
			labelExpression: "/qDim/qLabelExpression"
		}
	}
};
const mixin$6 = {
	types: "Doc",
	extend: {
		getDimensionList() {
			return this.getListData(dimensionListProps);
		},
		getDimensionListObject() {
			return this.getListObject(dimensionListProps);
		}
	}
};

//#endregion
//#region src/qix/session/mixins/doc/dynamic-app-views.js
const listProps = {
	qInfo: {
		qId: "DynamicAppViewList",
		qType: "DynamicAppViewList"
	},
	qAppObjectListDef: {
		qType: "dynamicappview",
		qData: {
			odagLinkRef: "/qMetaDef/odagLinkRef",
			timestamp: "/qMetaDef/timestamp"
		}
	}
};
const mixin$7 = {
	types: "Doc",
	extend: {
		getDynamicAppViewList() {
			return this.getListData(listProps);
		},
		getDynamicAppViewObject() {
			return this.getListObject(listProps);
		}
	}
};

//#endregion
//#region src/qix/session/mixins/doc/fields.js
const fieldListProps = {
	qInfo: {
		qId: "FieldList",
		qType: "FieldList"
	},
	qFieldListDef: {
		qShowSystem: false,
		qShowHidden: false,
		qShowSrcTables: true,
		qShowSemantic: true,
		qShowDerivedFields: true
	}
};
const onTheFlyListProps = {
	qInfo: {
		qId: "FieldOnTheFlyList",
		qType: "FieldOnTheFlyList"
	},
	qFieldListDef: {
		qShowSystem: false,
		qShowHidden: false,
		qShowSrcTables: true,
		qShowSemantic: true,
		qShowDerivedFields: true,
		qShowDefinitionOnly: true
	}
};
const onTheFlyWithHiddenListProps = {
	qInfo: {
		qId: "FieldOnTheFlyWithHiddenList",
		qType: "FieldOnTheFlyWithHiddenList"
	},
	qFieldListDef: {
		qShowSystem: false,
		qShowHidden: true,
		qShowSrcTables: true,
		qShowSemantic: true,
		qShowDerivedFields: true,
		qShowDefinitionOnly: true
	}
};
const mixin$8 = {
	types: "Doc",
	extend: {
		getFieldList() {
			return this.getListData(fieldListProps);
		},
		getFieldListObject() {
			return this.getListObject(fieldListProps);
		},
		getOnTheFlyListObject() {
			return this.getListObject(onTheFlyListProps);
		},
		getOnTheFlyWithHiddenListObject() {
			return this.getListObject(onTheFlyWithHiddenListProps);
		}
	}
};

//#endregion
//#region src/qix/session/mixins/doc/master-objects.js
const masterObjectListProps = {
	qInfo: {
		qId: "MasterObjectList",
		qType: "MasterObjectList"
	},
	qAppObjectListDef: {
		qType: "masterobject",
		qData: {
			name: "/qMetaDef/title",
			labelExpression: "/labelExpression",
			visualization: "/visualization",
			tags: "/qMetaDef/tags"
		}
	}
};
const mixin$9 = {
	types: "Doc",
	extend: {
		getMasterObjectList() {
			return this.getListData(masterObjectListProps);
		},
		getMasterObjectListObject() {
			return this.getListObject(masterObjectListProps);
		}
	}
};

//#endregion
//#region src/qix/session/mixins/doc/measures.js
const measureListProps = {
	qInfo: {
		qId: "MeasureList",
		qType: "MeasureList"
	},
	qMeasureListDef: {
		qType: "measure",
		qData: {
			title: "/qMetaDef/title",
			tags: "/qMetaDef/tags",
			labelExpression: "/qMeasure/qLabelExpression"
		}
	}
};
const mixin$10 = {
	types: "Doc",
	extend: {
		getMeasureList() {
			return this.getListData(measureListProps);
		},
		getMeasureListObject() {
			return this.getListObject(measureListProps);
		}
	}
};

//#endregion
//#region src/qix/session/mixins/doc/odag-app-links.js
const sheetListProps$1 = {
	qInfo: {
		qId: "ODAGAppLinkList",
		qType: "ODAGAppLinkList"
	},
	qAppObjectListDef: {
		qType: "odagapplink",
		qData: {
			odagLinkRef: "/qMetaDef/odagLinkRef",
			timestamp: "/qMetaDef/timestamp"
		}
	}
};
const mixin$11 = {
	types: "Doc",
	extend: {
		getODAGAppLinkList() {
			return this.getListData(sheetListProps$1);
		},
		getODAGAppLinkObject() {
			return this.getListObject(sheetListProps$1);
		},
		getODAGAppLinkListObject() {
			return this.getListObject(sheetListProps$1);
		}
	}
};

//#endregion
//#region src/qix/session/mixins/doc/sheets.ts
const sheetListProps = {
	qInfo: {
		qId: "SheetList",
		qType: "SheetList"
	},
	qAppObjectListDef: {
		qType: "sheet",
		qData: {
			title: "/qMetaDef/title",
			labelExpression: "/labelExpression",
			showCondition: "/showCondition",
			description: "/qMetaDef/description",
			descriptionExpression: "/descriptionExpression",
			thumbnail: "/thumbnail",
			cells: "/cells",
			rank: "/rank",
			columns: "/columns",
			rows: "/rows",
			groupId: "/groupId"
		}
	}
};
const mixin$12 = {
	types: "Doc",
	extend: {
		getSheetList() {
			return this.getListData(sheetListProps);
		},
		getSheetListObject() {
			return this.getListObject(sheetListProps);
		}
	}
};

//#endregion
//#region src/qix/session/mixins/doc/snapshots.js
const snapshotListProps = {
	qInfo: {
		qId: "SnapshotList",
		qType: "SnapshotList"
	},
	qBookmarkListDef: {
		qType: "snapshot",
		qData: {
			title: "/title",
			libraryTitle: "/qMetaDef/title",
			description: "/qMetaDef/description",
			sourceObjectId: "/sourceObjectId",
			visualizationType: "/visualizationType",
			timestamp: "/timestamp",
			snapshotData: "/snapshotData",
			isClone: "/isClone"
		}
	}
};
const mixin$13 = {
	types: "Doc",
	extend: {
		getSnapshotListObject() {
			return this.getListObject(snapshotListProps);
		},
		getSnapshotList() {
			return this.getListData(snapshotListProps);
		}
	}
};

//#endregion
//#region src/qix/session/mixins/doc/stories.js
const storyListProps = {
	qInfo: {
		qId: "StoryList",
		qType: "StoryList"
	},
	qAppObjectListDef: {
		qType: "story",
		qData: {
			title: "/qMetaDef/title",
			description: "/qMetaDef/description",
			thumbnail: "/thumbnail",
			rank: "/rank"
		}
	}
};
const mixin$14 = {
	types: "Doc",
	extend: {
		getStoryList() {
			return this.getListData(storyListProps);
		},
		getStoryListObject() {
			return this.getListObject(storyListProps);
		}
	}
};

//#endregion
//#region src/qix/session/mixins/doc/undo-info.ts
const undoInfoProps = {
	qInfo: {
		qId: "UndoInfo",
		qType: "UndoInfo"
	},
	qUndoInfoDef: {},
	markers: []
};
const mixin$15 = {
	types: ["Doc"],
	extend: { getUndoInfoObject() {
		return this.getOrCreateSessionObject(undoInfoProps);
	} }
};

//#endregion
//#region src/qix/session/mixins/doc/variables.js
const variableListProps = {
	qInfo: {
		qId: "VariableList",
		qType: "VariableList"
	},
	qVariableListDef: {
		qType: "variable",
		qShowReserved: true,
		qShowConfig: true,
		qData: { tags: "/tags" }
	}
};
const mixin$16 = {
	types: "Doc",
	extend: {
		getVariableList() {
			return this.getListData(variableListProps);
		},
		getVariableListObject() {
			return this.getListObject(variableListProps);
		}
	}
};

//#endregion
//#region src/qix/session/mixins/doc/index.ts
const mixins$3 = [
	base_default,
	normalize_default,
	modal_default,
	mixin$3,
	mixin$4,
	mixin$5,
	mixin$6,
	mixin$8,
	mixin$9,
	mixin$10,
	mixin$11,
	mixin$7,
	mixin$12,
	mixin$13,
	mixin$14,
	mixin$15,
	mixin$16
];

//#endregion
//#region src/qix/session/mixins/genericobject/effective-properties.js
function updateQAttribute(properties) {
	const { qHyperCubeDef } = properties;
	if (qHyperCubeDef && qHyperCubeDef.qMeasures && qHyperCubeDef.qDimensions) qHyperCubeDef.qDimensions.concat(qHyperCubeDef.qMeasures).forEach((column) => {
		if (column.qAttributeExpressions) column.qAttributeExpressions.forEach((attributeExpression) => {
			attributeExpression.qAttribute = true;
		});
	});
}
const mixin = {
	types: ["GenericObject"],
	override: {
		setProperties(_setProperties, properties) {
			updateQAttribute(properties);
			return _setProperties(properties);
		},
		getEffectiveProperties(_getEffectiveProperties) {
			const self = this;
			return _getEffectiveProperties().then((effectiveProperties) => {
				self.effectiveProperties = self.effectiveProperties || effectiveProperties;
				json_patch_default$1.updateObject(self.effectiveProperties, effectiveProperties);
				return self.effectiveProperties;
			});
		}
	}
};

//#endregion
//#region src/qix/session/mixins/genericobject/export-data.js
const mixin$1 = {
	types: "GenericObject",
	override: { exportData(_exportData, fileType, path, filename, exportState) {
		fileType = fileType || "OOXML";
		path = path || "";
		filename = filename || "";
		exportState = exportState || "P";
		return _exportData(fileType, path, filename, exportState);
	} }
};

//#endregion
//#region src/qix/session/mixins/genericobject/publishing.js
const mixin$2 = {
	types: ["GenericObject"],
	override: {
		publish(_publish) {
			return this.getLayout().then((layout) => {
				if (layout.permissions.publish) return _publish();
				return Promise.reject("Permission denied");
			});
		},
		unPublish(_unPublish) {
			return this.getLayout().then((layout) => {
				const meta = layout.qMeta;
				if (meta.published && !meta.approved) return _unPublish();
				return Promise.reject("Permission denied");
			});
		}
	}
};

//#endregion
//#region src/qix/session/mixins/genericobject/index.ts
const mixins$4 = [
	mixin$1,
	mixin,
	mixin$2
];

//#endregion
//#region src/qix/session/mixins/index.ts
const mixins = [
	...mixins$3,
	...mixins$1,
	...mixins$4,
	...mixins$2
];

//#endregion
//#region src/qix/session/enigma-session.ts
/** @internal */
async function createEnigmaSession({ appId, identity, hostConfig, useReloadEngine = false, ttlSeconds, workloadType }) {
	if (hostConfig?.authType === "noauth") throw new Error("WebSocket connections are not allowed with noauth auth module");
	const isNodeEnvironment = isNode();
	const locationUrl = toValidWebsocketLocationUrl(hostConfig);
	const reloadUri = encodeURIComponent(`${locationUrl}/sense/app/${appId}`);
	const ttlPart = ttlSeconds !== void 0 && ttlSeconds >= 0 ? `/ttl/${ttlSeconds}` : "";
	const identityPart = identity ? `/identity/${identity}` : "";
	const workloadTypePart = useReloadEngine ? "&workloadType=interactive-reload" : workloadType ? `&workloadType=${workloadType}` : "";
	const baseUrl = `${locationUrl}/app/${appId}${identityPart}${ttlPart}?reloadUri=${reloadUri}${workloadTypePart}`.replace(/^http/, "ws");
	const unitTestCreateWebSocket = hostConfig?.createWebSocket;
	let createSocketBuilder;
	if (isNodeEnvironment && !unitTestCreateWebSocket) {
		const WS = (await import("ws")).default;
		createSocketBuilder = async () => {
			let url = baseUrl;
			const { headers, queryParams } = await getRestCallAuthParams({
				hostConfig,
				method: "POST"
			});
			Object.entries(queryParams).forEach(([key, value]) => {
				url = `${url}&${key}=${value}`;
			});
			return (socketUrl) => new WS(url, void 0, { headers });
		};
	} else createSocketBuilder = async () => {
		let url = baseUrl;
		const { queryParams } = await getWebSocketAuthParams({ hostConfig });
		Object.entries(queryParams).forEach(([key, value]) => {
			url = `${url}&${key}=${value}`;
		});
		return (socketUrl) => {
			const socket = unitTestCreateWebSocket ? unitTestCreateWebSocket(url) : new WebSocket(url);
			exposeInternalApiOnWindow("closeLastWebSocket", (code) => {
				console.log("Closing websocket with code", code, socket);
				socket.close(code);
			});
			return socket;
		};
	};
	const { default: enigma } = await import("enigma.js");
	const session = enigma.create({
		schema: engine_api_default,
		mixins,
		url: baseUrl,
		suspendOnClose: !useReloadEngine,
		createSocket: await createSocketBuilder(),
		requestInterceptors: [somethingWithEmptyMethodsRequestInterceptor],
		responseInterceptors: [
			retryAbortedErrorResponseInterceptor,
			retryModalObjectError,
			somethingWithErrorPopupsResponnseInterceptor
		]
	});
	const originalResume = session.resume.bind(session);
	const resume = async (onlyIfAttached) => {
		session.rpc.createSocket = await createSocketBuilder();
		await originalResume(onlyIfAttached);
	};
	session.resume = resume;
	return session;
}

//#endregion
//#region src/qix/session/phoenix/logger.ts
const ongoingRequests = /* @__PURE__ */ new Set();
const requestDepths = /* @__PURE__ */ new Map();
const startIntent = 0;
const baseIndent = "      ";
let logEnabled = false;
try {
	logEnabled = globalThis.qlikQixWebSocketLogEnabled || localStorage?.getItem("qlik-qix-websocket-log") === "true";
} catch {}
function logRequest(handleOrObject, websocketRequest, request) {
	if (logEnabled) {
		const preThing = `${startIndent(websocketRequest)} ===> ${websocketRequest.id} call `;
		console.log(`${preThing}${toLogName(handleOrObject)}.${request.method}`, ...formatParams(request.params));
	}
}
function logResponse(handleOrObject, websocketRequest, sendResponse) {
	if (logEnabled) {
		const indent = endIndent(websocketRequest);
		if (sendResponse?.change) console.log(`${indent} <--- ${websocketRequest.id} Changed: ${sendResponse.change.join(", ")}`);
		if (sendResponse?.close) console.log(`${indent} <--- ${websocketRequest.id} Closed:  ${sendResponse.close.join(", ")}`);
		const preThing = `${indent} <=== ${websocketRequest.id} return`;
		if (sendResponse.error) console.log(preThing, JSON.stringify(sendResponse.error));
		else console.log(preThing, sendResponse.result);
	}
}
function logJsonRpcChannelError(handleOrObject, websocketRequest, error) {
	if (logEnabled) {
		const preThing = `${endIndent(websocketRequest)} <=== ${websocketRequest.id} throw`;
		console.log(preThing, JSON.stringify(error));
	}
}
function logEvent(message, ...optionalParams) {
	if (logEnabled) console.log("QIX", message, ...optionalParams);
}
function startIndent(websocketRequest) {
	ongoingRequests.add(websocketRequest.id);
	requestDepths.set(websocketRequest.id, ongoingRequests.size);
	return baseIndent.repeat(startIntent + ongoingRequests.size);
}
function endIndent(websocketRequest) {
	const indent = baseIndent.repeat(startIntent + (requestDepths.get(websocketRequest.id) || 0));
	ongoingRequests.delete(websocketRequest.id);
	requestDepths.delete(websocketRequest.id);
	return indent;
}
function toLogName(handleOrObject) {
	if (handleOrObject === 1) return "Doc";
	else if (handleOrObject === -1) return "Global";
	else if (typeof handleOrObject === "undefined") return "(undefined handle)";
	else if (typeof handleOrObject === "object") {
		const obj = handleOrObject;
		if (!obj.id) {
			const params = obj.respawnInfo.creatingRequest?.params;
			if (Array.isArray(params)) return params?.filter((arg) => typeof arg === "string").join("/");
		}
		return `${obj.id}/${obj.getHandle()}`;
	} else return handleOrObject;
}
function formatParams(params) {
	if (Array.isArray(params)) {
		const result = ["("];
		for (let i = 0; i < params.length; i++) {
			result.push(params[i]);
			if (i < params.length - 1) result.push(",");
		}
		result.push(")");
		return result;
	} else return [params];
}

//#endregion
//#region src/qix/session/phoenix/interest-monitor.ts
/**
* Sets up listeners for user activity (mouse movement, document visibility, and window focus) and supplies an api that can be used to know
* when to resume a session
*/
function createInterestMonitor() {
	let activity = createPromiseAndResolveFunc();
	let listening = false;
	let onUserActivityDetectedCallback;
	function signalInterest() {
		stopListeningForActivity();
		logEvent("Someone is interested in this");
		onUserActivityDetectedCallback?.();
		activity.resolve();
	}
	function waitUntilSomeoneIsInterestedInThis() {
		logEvent("Waiting for someone to be interested in this");
		startListeningForActivity();
		const result = activity.promise;
		activity = createPromiseAndResolveFunc();
		return result;
	}
	function resetAnyInterestSignalledBeforeNow() {
		logEvent("stop waiting for someone to be interested in this");
		stopListeningForActivity();
		activity = createPromiseAndResolveFunc();
	}
	function onUserActivityDetected(activityCallback) {
		onUserActivityDetectedCallback = activityCallback;
	}
	function mouseListener() {
		signalInterest();
	}
	function visibilityChangeListener() {
		if (globalThis.document?.visibilityState === "visible") {
			logEvent("Document is visible");
			signalInterest();
		}
	}
	function focusListener() {
		logEvent("Document has focus");
		signalInterest();
	}
	function startListeningForActivity() {
		if (!listening) {
			listening = true;
			globalThis.window?.document.addEventListener("visibilitychange", visibilityChangeListener);
			globalThis.window?.addEventListener("focus", focusListener);
			globalThis.window?.addEventListener("mousemove", mouseListener);
		}
	}
	function stopListeningForActivity() {
		if (listening) {
			listening = false;
			globalThis.window?.document.removeEventListener("visibilitychange", visibilityChangeListener);
			globalThis.window?.removeEventListener("focus", focusListener);
			globalThis.window?.removeEventListener("mousemove", mouseListener);
		}
	}
	return {
		startListeningForActivity,
		stopListeningForActivity,
		waitUntilSomeoneIsInterestedInThis,
		resetAnyInterestSignalledBeforeNow,
		onUserActivityDetected,
		signalInterest
	};
}
function createPromiseAndResolveFunc() {
	let resolve = () => {};
	return {
		promise: new Promise((res) => {
			resolve = res;
		}),
		resolve
	};
}

//#endregion
//#region src/qix/session/phoenix/rpc-object-ref.ts
function normalizeObjectRef(response) {
	if (response.qHandle) return {
		handle: response.qHandle,
		type: response.qType,
		id: response.qGenericId,
		genericType: response.qGenericType
	};
	else return {
		handle: response.handle,
		type: response.type,
		id: response.id,
		genericType: response.genericType
	};
}
/**
* Returns true if the supplied parameter identifies a servervside object
*/
function isQixObjectRef(ref) {
	return typeof ref === "object" && ref.qHandle && ref.qType;
}
function getHandleOfRef(response) {
	return response.qHandle ?? response.handle;
}

//#endregion
//#region src/qix/session/phoenix/phoenix-session-state.ts
function createPhoenixSessionState({ doc, global, executedAppActions }) {
	const objects = {};
	return {
		getObjects() {
			return objects;
		},
		getObject(ref) {
			if (typeof ref === "object") {
				const handle = getHandleOfRef(ref);
				if (handle === global.getHandle()) return global;
				if (handle === doc.getHandle()) return doc;
				if (handle) return objects[handle];
				return;
			}
			return objects[ref];
		},
		removeObject(handle) {
			delete objects[handle];
		},
		setObject(handle, object) {
			objects[handle] = object;
		},
		getDoc() {
			return doc;
		},
		getGlobal() {
			return global;
		},
		addExecutedInitialAppAction(initialAppAction) {
			executedAppActions.push(initialAppAction);
		},
		isAppActionExecuted(initialAppAction) {
			return executedAppActions.indexOf(initialAppAction) >= 0;
		},
		getExecutedAppActions() {
			return executedAppActions;
		}
	};
}

//#endregion
//#region src/qix/session/phoenix/json-patch.js
const extend = originalExtend.bind(null, true);
const JSONPatch = {};
const { isArray } = Array;
function isObject(v) {
	return v != null && !Array.isArray(v) && typeof v === "object";
}
function isUndef(v) {
	return typeof v === "undefined";
}
function isFunction(v) {
	return typeof v === "function";
}
/**
* Generate an exact duplicate (with no references) of a specific value.
*
* @private
* @param {Object} The value to duplicate
* @returns {Object} a unique, duplicated value
*/
function generateValue(val) {
	if (val) return extend({}, { val }).val;
	return val;
}
/**
* An additional type checker used to determine if the property is of internal
* use or not a type that can be translated into JSON (like functions).
*
* @private
* @param {Object} obj The object which has the property to check
* @param {String} The property name to check
* @returns {Boolean} Whether the property is deemed special or not
*/
function isSpecialProperty(obj, key) {
	return isFunction(obj[key]) || key.substring(0, 2) === "$$" || key.substring(0, 1) === "_";
}
/**
* Finds the parent object from a JSON-Pointer ("/foo/bar/baz" = "bar" is "baz" parent),
* also creates the object structure needed.
*
* @private
* @param {Object} data The root object to traverse through
* @param {String} The JSON-Pointer string to use when traversing
* @returns {Object} The parent object
*/
function getParent(data, str) {
	const parts = str.substring(1).split("/").slice(0, -1);
	let numPart;
	parts.forEach((part, i) => {
		if (i === parts.length) return;
		numPart = +part;
		const newPart = !isNaN(numPart) ? [] : {};
		data[numPart || part] = isUndef(data[numPart || part]) ? newPart : data[part];
		data = data[numPart || part];
	});
	return data;
}
/**
* Cleans an object of all its properties, unless they're deemed special or
* cannot be removed by configuration.
*
* @private
* @param {Object} obj The object to clean
*/
function emptyObject(obj) {
	Object.keys(obj).forEach((key) => {
		if (Object.getOwnPropertyDescriptor(obj, key).configurable && !isSpecialProperty(obj, key)) delete obj[key];
	});
}
/**
* Compare an object with another, could be object, array, number, string, bool.
* @private
* @param {Object} a The first object to compare
* @param {Object} a The second object to compare
* @returns {Boolean} Whether the objects are identical
*/
function compare(a, b) {
	let isIdentical = true;
	if (isObject(a) && isObject(b)) {
		if (Object.keys(a).length !== Object.keys(b).length) return false;
		Object.keys(a).forEach((key) => {
			if (!compare(a[key], b[key])) isIdentical = false;
		});
		return isIdentical;
	}
	if (isArray(a) && isArray(b)) {
		if (a.length !== b.length) return false;
		for (let i = 0, l = a.length; i < l; i += 1) if (!compare(a[i], b[i])) return false;
		return true;
	}
	return a === b;
}
/**
* Generates patches by comparing two arrays.
*
* @private
* @param {Array} oldA The old (original) array, which will be patched
* @param {Array} newA The new array, which will be used to compare against
* @returns {Array} An array of patches (if any)
*/
function patchArray(original, newA, basePath) {
	let patches = [];
	const oldA = original.slice();
	let tmpIdx = -1;
	function findIndex(a, id, idx) {
		if (a[idx] && isUndef(a[idx].qInfo)) return null;
		if (a[idx] && a[idx].qInfo.qId === id) return idx;
		for (let ii = 0, ll = a.length; ii < ll; ii += 1) if (a[ii] && a[ii].qInfo.qId === id) return ii;
		return -1;
	}
	if (compare(newA, oldA)) return patches;
	if (!isUndef(newA[0]) && isUndef(newA[0].qInfo)) {
		patches.push({
			op: "replace",
			path: basePath,
			value: newA
		});
		return patches;
	}
	for (let i = oldA.length - 1; i >= 0; i -= 1) {
		tmpIdx = findIndex(newA, oldA[i].qInfo && oldA[i].qInfo.qId, i);
		if (tmpIdx === -1) {
			patches.push({
				op: "remove",
				path: `${basePath}/${i}`
			});
			oldA.splice(i, 1);
		} else patches = patches.concat(JSONPatch.generate(oldA[i], newA[tmpIdx], `${basePath}/${i}`));
	}
	for (let i = 0, l = newA.length; i < l; i += 1) {
		tmpIdx = findIndex(oldA, newA[i].qInfo && newA[i].qInfo.qId);
		if (tmpIdx === -1) {
			patches.push({
				op: "add",
				path: `${basePath}/${i}`,
				value: newA[i]
			});
			oldA.splice(i, 0, newA[i]);
		} else if (tmpIdx !== i) {
			patches.push({
				op: "move",
				path: `${basePath}/${i}`,
				from: `${basePath}/${tmpIdx}`
			});
			oldA.splice(i, 0, oldA.splice(tmpIdx, 1)[0]);
		}
	}
	return patches;
}
/**
* Generate an array of JSON-Patch:es following the JSON-Patch Specification Draft.
*
* See [specification draft](http://tools.ietf.org/html/draft-ietf-appsawg-json-patch-10)
*
* Does NOT currently generate patches for arrays (will replace them)
* @private
* @param {Object} original The object to patch to
* @param {Object} newData The object to patch from
* @param {String} [basePath] The base path to use when generating the paths for
*                            the patches (normally not used)
* @returns {Array} An array of patches
*/
JSONPatch.generate = function generate(original, newData, basePath) {
	basePath = basePath || "";
	let patches = [];
	Object.keys(newData).forEach((key) => {
		const val = generateValue(newData[key]);
		const oldVal = original[key];
		const tmpPath = `${basePath}/${key}`;
		if (compare(val, oldVal) || isSpecialProperty(newData, key)) return;
		if (isUndef(oldVal)) patches.push({
			op: "add",
			path: tmpPath,
			value: val
		});
		else if (isObject(val) && isObject(oldVal)) patches = patches.concat(JSONPatch.generate(oldVal, val, tmpPath));
		else if (isArray(val) && isArray(oldVal)) patches = patches.concat(patchArray(oldVal, val, tmpPath));
		else patches.push({
			op: "replace",
			path: `${basePath}/${key}`,
			value: val
		});
	});
	Object.keys(original).forEach((key) => {
		if (isUndef(newData[key]) && !isSpecialProperty(original, key)) patches.push({
			op: "remove",
			path: `${basePath}/${key}`
		});
	});
	return patches;
};
/**
* Apply a list of patches to an object.
* @private
* @param {Object} original The object to patch
* @param {Array} patches The list of patches to apply
*/
JSONPatch.apply = function apply(original, patches) {
	patches.forEach((patch) => {
		let parent = getParent(original, patch.path);
		let key = patch.path.split("/").splice(-1)[0];
		let target = key && isNaN(+key) ? parent[key] : parent[+key] || parent;
		const from = patch.from ? patch.from.split("/").splice(-1)[0] : null;
		if (patch.path === "/") {
			parent = null;
			target = original;
		}
		if (patch.op === "add" || patch.op === "replace") if (isArray(parent)) {
			if (key === "-") key = parent.length;
			parent.splice(+key, patch.op === "add" ? 0 : 1, patch.value);
		} else if (isArray(target) && isArray(patch.value)) {
			target.length = 0;
			const chunkSize = 1e3;
			for (let i = 0; i < patch.value.length; i += chunkSize) {
				const chunk = patch.value.slice(i, i + chunkSize);
				target.push(...chunk);
			}
		} else if (isObject(target) && isObject(patch.value)) {
			emptyObject(target);
			extend(target, patch.value);
		} else if (!parent) throw new Error("Patchee is not an object we can patch");
		else parent[key] = patch.value;
		else if (patch.op === "move") {
			const oldParent = getParent(original, patch.from);
			if (isArray(parent)) parent.splice(+key, 0, oldParent.splice(+from, 1)[0]);
			else {
				parent[key] = oldParent[from];
				delete oldParent[from];
			}
		} else if (patch.op === "remove") if (isArray(parent)) parent.splice(+key, 1);
		else delete parent[key];
	});
};
/**
* Deep clone an object.
* @private
* @param {Object} obj The object to clone
* @returns {Object} A new object identical to the `obj`
*/
JSONPatch.clone = function clone(obj) {
	return extend({}, obj);
};
/**
* Creates a JSON-patch.
* @private
* @param {String} op The operation of the patch. Available values: "add", "remove", "move"
* @param {Object} [val] The value to set the `path` to. If `op` is `move`, `val`
*                       is the "from JSON-path" path
* @param {String} path The JSON-path for the property to change (e.g. "/qHyperCubeDef/columnOrder")
* @returns {Object} A patch following the JSON-patch specification
*/
JSONPatch.createPatch = function createPatch(op, val, path) {
	const patch = {
		op: op.toLowerCase(),
		path
	};
	if (patch.op === "move") patch.from = val;
	else if (typeof val !== "undefined") patch.value = val;
	return patch;
};
/**
* Apply the differences of two objects (keeping references if possible).
* Identical to running `JSONPatch.apply(original, JSONPatch.generate(original, newData));`
* @private
* @param {Object} original The object to update/patch
* @param {Object} newData the object to diff against
*
* @example
* var obj1 = { foo: [1,2,3], bar: { baz: true, qux: 1 } };
* var obj2 = { foo: [4,5,6], bar: { baz: false } };
* JSONPatch.updateObject(obj1, obj2);
* // => { foo: [4,5,6], bar: { baz: false } };
*/
JSONPatch.updateObject = function updateObject(original, newData) {
	if (!Object.keys(original).length) {
		extend(original, newData);
		return;
	}
	JSONPatch.apply(original, JSONPatch.generate(original, newData));
};
var json_patch_default = JSONPatch;

//#endregion
//#region src/qix/session/phoenix/delta-compression.ts
/**
* Unwraps a delta response from the QIX Engine and stores the new state of the object for the next response.
*/
function unwrapDeltas(result, state, handle, method) {
	const newResult = {};
	Object.entries(result).forEach(([outKey, patches]) => {
		if (!Array.isArray(patches)) throw new Error("Unexpected RPC response, expected array of patches");
		let entry = state[handle]?.[method]?.[outKey];
		if (typeof entry === "undefined") entry = patches[0] && Array.isArray(patches[0].value) ? [] : {};
		if (patches.length) {
			if (patches[0].path === "/" && typeof patches[0].value !== "object") entry = patches[0].value;
			else json_patch_default.apply(entry, patches);
			if (!state[handle]) state[handle] = {};
			if (!state[handle][method]) state[handle][method] = {};
			state[handle][method][outKey] = entry;
		}
		newResult[outKey] = entry;
	});
	return JSON.parse(JSON.stringify(newResult));
}

//#endregion
//#region src/qix/session/phoenix/websocket-closed-error.ts
/**
* WebsocketClosedError is thrown when the websocket connection is closed.
*/
var WebsocketClosedError = class extends Error {};

//#endregion
//#region src/qix/session/phoenix/protocol-helpers.ts
function getDeltaAndReturnEmptyProps(request) {
	if (request.method === "GetProperties" || request.method === "GetFullPropertyTree") return {
		return_empty: true,
		delta: false
	};
	else return { delta: request.outKey !== -1 && request.outKey !== "qSuccess" };
}
function extractResult(request, resultObject) {
	if (typeof resultObject !== "object") return resultObject;
	if (request.method === "CreateSessionApp" || request.method === "CreateSessionAppFromApp") resultObject.qReturn.qGenericId = resultObject.qSessionAppId || resultObject.qReturn.qGenericId;
	else if (request.method === "GetInteract" || request.method === "StoreTempSelectionState" || request.method === "CreateTemporaryBookmark") delete resultObject.qReturn;
	if (typeof resultObject.qReturn !== "undefined") return resultObject.qReturn;
	if (request.outKey !== -1) return resultObject[request.outKey || "qReturn"];
	return resultObject;
}
function createResolvablePromise() {
	let resolve;
	let reject;
	return [
		new Promise((res, rej) => {
			resolve = res;
			reject = rej;
		}),
		resolve,
		reject
	];
}

//#endregion
//#region src/web-socket/web-socket-errors.ts
const closeCodeMessages = {
	1e3: "Connection closed normally.",
	1001: "Going away.",
	1002: "Protocol error.",
	1003: "Unsupported data.",
	1005: "No status received.",
	1006: "Abnormal closure.",
	1007: "Invalid frame payload data.",
	1008: "Policy violation.",
	1009: "Message too big.",
	1010: "Mandatory extension missing.",
	1011: "Server internal error.",
	1012: "Service restart.",
	1013: "Try again later.",
	1014: "Bad gateway.",
	1015: "TLS handshake failure."
};
const uknownCloseErrorMessage = "websocket closed for unknown reason";
var WebSocketError = class extends Error {
	code;
	reason;
	constructor({ code = 0, reason = "", host }) {
		super(getHumanReadableSocketClosedErrorMessage$1({
			code,
			reason,
			host
		}));
		this.code = code;
		this.reason = reason;
	}
};
/** Returns a human readable error message for the supplied close code */
function getHumanReadableSocketClosedErrorMessage$1(err) {
	const { code, reason, host } = err;
	const closeMessage = code && closeCodeMessages[code] || reason || uknownCloseErrorMessage;
	if (host) return `Failed to open web-socket on ${host}: ${closeMessage}`;
	else return `Failed to open web-socket: ${closeMessage}`;
}

//#endregion
//#region src/web-socket/web-socket-functions.ts
/**
* Establishes a new web-socket connection towards the provided relative path
* using the authorization and host provided through hostConfig and sets up the
* listeners. Handles auth-related retries.
* @param webSocketProps WebSocketProperties
* @returns a WebSocket promise
*/
async function createWebSocket(webSocketProps) {
	if (webSocketProps.hostConfig?.authType === "noauth") throw new Error("WebSocket connections are not allowed with noauth auth module");
	try {
		return await createWebSocketInternal(webSocketProps);
	} catch (error) {
		const err = error;
		const errorBody = err.data;
		const { status } = err;
		if (status === 401 || status === 403 && errorBody?.code === "CSRF-TOKEN-2") {
			const action = await handleAuthenticationError({
				headers: new Headers(),
				status,
				canRetry: true,
				hostConfig: webSocketProps.hostConfig
			});
			if (action.retry) return createWebSocketInternal(webSocketProps);
			if (action.preventDefault) return new Promise(() => {});
		}
		throw err;
	}
}
/**
* @private
* Establishes a new web-socket connection based on the passed in properties.
* @param webSocketProps WebSocketProperties
* @returns a WebSocket promise
*/
async function createWebSocketInternal(webSocketProps) {
	const { relativePath, queryParams, hostConfig, listeners } = webSocketProps;
	const isNodeEnvironment = isNode();
	const unitTestCreateWebSocket = hostConfig?.createWebSocket;
	const [socketOpenPromise, resolveSocketOpenPromise, rejectSocketOpenPromise] = createResolvablePromise$1();
	const baseUrl = queryParams ? appendQueryToUrl(`${toValidWebsocketLocationUrl(hostConfig)}${relativePath}`, queryParams) : `${toValidWebsocketLocationUrl(hostConfig)}${relativePath}`;
	let socket;
	let url;
	if (isNodeEnvironment && !unitTestCreateWebSocket) {
		const { headers, queryParams: authQueryParams } = await getRestCallAuthParams({
			hostConfig,
			method: "POST"
		});
		const WS = (await import("ws")).default;
		url = appendQueryToUrl(baseUrl, authQueryParams);
		socket = new WS(url, void 0, { headers });
	} else {
		const { queryParams: authQueryParams } = await getWebSocketAuthParams({ hostConfig });
		url = appendQueryToUrl(baseUrl, authQueryParams);
		socket = unitTestCreateWebSocket ? unitTestCreateWebSocket(url) : new WebSocket(url);
		exposeInternalApiOnWindow("closeLastWebSocket", (code) => {
			console.log("Closing websocket with code", code, socket);
			socket.close(code);
		});
	}
	let opened = false;
	socket.onopen = () => {
		socket.onopen = null;
		socket.onerror = null;
		opened = true;
		resolveSocketOpenPromise(socket);
	};
	socket.onerror = () => {
		socket.onopen = null;
		socket.onerror = null;
	};
	socket.onmessage = (message) => {
		listeners.onMessage(message);
	};
	socket.onclose = (ev) => {
		if (!opened) {
			const { code, reason } = ev;
			rejectSocketOpenPromise(new WebSocketError({
				code,
				reason,
				host: hostConfig?.host || ""
			}));
		} else listeners.onClose(ev);
	};
	return socketOpenPromise;
}

//#endregion
//#region src/qix/session/phoenix/websocket.ts
let forceUniqueSessionForTestPurposes = false;
exposeInternalApiOnWindow("makeNextWebsocketGetNewEngineSession", () => {
	forceUniqueSessionForTestPurposes = true;
});
var QixWebSocketError = class extends Error {
	code;
	reason;
	constructor({ code = 0, reason = "" }, { appId, hostConfig }) {
		super(getHumanReadableSocketClosedErrorMessage({
			code,
			reason
		}, {
			appId,
			hostConfig
		}));
		this.code = code;
		this.reason = reason;
	}
};
/**
* Creates a websocket using the appropriate authentication mechanism. Retries once if the attempt fails.
* Resolves once
*/
async function createQixWebSocket(props, listeners) {
	const { relativePath, queryParams } = buildQixPathAndQuery(props);
	const { appId, hostConfig } = props;
	try {
		logEvent("Creating web-socket", relativePath);
		const socketPromise = createWebSocket({
			relativePath,
			queryParams,
			hostConfig,
			listeners
		});
		logEvent("Created web-socket", relativePath);
		const socket = await socketPromise;
		logEvent("Opened web-socket", relativePath);
		return socket;
	} catch (err) {
		if (err instanceof WebSocketError) {
			const { code, reason } = err;
			throw new QixWebSocketError({
				code,
				reason
			}, {
				appId,
				hostConfig
			});
		}
		throw err;
	}
}
/**
* Creates the path and the query-parameters, based on the OpenAppSessionProps,
* that should be added to the host to build the full URL for the (QIX)
* web-socket connection.
*/
function buildQixPathAndQuery({ appId, identity, hostConfig, useReloadEngine = false, workloadType, ttlSeconds }) {
	const identityToUse = forceUniqueSessionForTestPurposes ? generateRandomString(16) : identity;
	if (forceUniqueSessionForTestPurposes) {
		logEvent("Forcing a new session for testing purposes");
		forceUniqueSessionForTestPurposes = false;
	}
	const ttlPart = ttlSeconds !== void 0 && ttlSeconds >= 0 ? `/ttl/${ttlSeconds}` : "";
	const identityPart = identityToUse ? `/identity/${identityToUse}` : "";
	const path = `/app/${appId}${identityPart}${ttlPart}`;
	const locationUrl = toValidWebsocketLocationUrl(hostConfig);
	const query = { reloadUri: encodeURIComponent(`${locationUrl}/sense/app/${appId}`) };
	if (useReloadEngine) query["workloadType"] = "interactive-reload";
	else if (workloadType) query["workloadType"] = workloadType;
	return {
		relativePath: path,
		queryParams: query
	};
}

//#endregion
//#region src/qix/session/phoenix/json-rpc-channel.ts
const RPC_CLOSE_NORMAL = 1e3;
const RPC_CLOSE_MANUAL_SUSPEND = 4e3;
/**
* Creates a new Json Rpc channel that listens for startup notifications, auth errors on windows etc and provides
* the basic mechanism to make and wait for invocations and receive push messages.
*/
async function createJsonRpcChannel(props, listener) {
	const { hostConfig } = props;
	const [connectionInfoPromise, resolveConnectionInfo] = createResolvablePromise();
	const [authenticationInfoPromise, resolveAuthenticationInfo] = createResolvablePromise();
	let pendingInvocations = {};
	let initiator = "network";
	let closed = false;
	const socket = await createQixWebSocket(props, {
		onMessage: (event) => {
			const data = JSON.parse(event.data);
			if (isInvocationResponse(data)) {
				const pendingInvocation = pendingInvocations[data.id];
				listener.onMessage(data, pendingInvocation?.handle);
				pendingInvocation?.resolve(data);
			} else {
				listener.onMessage(data, void 0);
				if (data.method === "OnConnected") resolveConnectionInfo(data.params?.qSessionState);
				else if (data.method === "OnAuthenticationInformation") if (data.mustAuthenticate) handleAuthenticationError({
					headers: new Headers(),
					status: 101,
					canRetry: true,
					hostConfig
				}).then(() => {
					socket.close();
				});
				else resolveAuthenticationInfo(data);
			}
		},
		onClose: ({ code, reason }) => {
			logEvent("Websocket closed", code, reason);
			closed = true;
			listener.onConnectionClosed({
				code,
				reason,
				initiator
			});
			const pendingInvocationsAtCloseTime = Object.values(pendingInvocations);
			pendingInvocations = {};
			pendingInvocationsAtCloseTime.forEach((pendingInvocation) => pendingInvocation.reject(new WebsocketClosedError()));
		}
	});
	const sessionState = await connectionInfoPromise;
	const reattached = sessionState === "SESSION_ATTACHED";
	if (await isWindows(hostConfig)) {
		if ((await authenticationInfoPromise).mustAuthenticate) throw new Error("Windows authentication needed");
	}
	function send(request) {
		if (closed) throw new WebsocketClosedError();
		return new Promise((resolve, reject) => {
			pendingInvocations[request.id] = {
				handle: request.handle,
				resolve,
				reject
			};
			socket.send(JSON.stringify(request));
		});
	}
	return {
		send,
		isClosed: () => !!closed,
		isReattached: () => !!reattached,
		getSessionState: () => sessionState,
		closeNormal: () => {
			logEvent("Closing websocket!");
			initiator = "manual";
			closed = true;
			socket.close(RPC_CLOSE_NORMAL, "Websocket closed from client side");
		},
		closeSuspend: () => {
			logEvent("Suspending websocket!");
			initiator = "manual";
			closed = true;
			socket.close(RPC_CLOSE_MANUAL_SUSPEND, "Websocket suspended from client side");
		}
	};
}
function isInvocationResponse(data) {
	return data.id;
}

//#endregion
//#region src/qix/session/phoenix/qix-connection.ts
var QixError = class extends Error {
	code;
	parameter;
	enigmaError = true;
	isCancelled;
	constructor({ message, code, parameter }, isCancelled) {
		super(message);
		this.code = code;
		this.parameter = parameter;
		this.isCancelled = isCancelled || false;
	}
};
function isCancelRequest(handleOrObject, method) {
	return (typeof handleOrObject === "object" ? handleOrObject.getHandle() : handleOrObject) === 1 && method === "CancelRequest";
}
/**
* Creates a connection that can be used to invoke QIX objects on the backend. Takes care of protocol stuff like request ids, delta etc.
* Does NOT resolve object references into objects.
*/
async function createQixConnection(props, listener) {
	let requestCounter = 1;
	const canceledRequests = {};
	function storeCanceledRequestId(request) {
		if (Array.isArray(request.params) && request.params.length > 0) {
			const cancelledRequestId = request.params[0];
			canceledRequests[cancelledRequestId] = true;
		}
	}
	function requestWasCanceled(requestId) {
		if (canceledRequests[requestId]) {
			delete canceledRequests[requestId];
			return true;
		}
		return false;
	}
	function onMessage(message, handle) {
		listener.onMessageReceived(message, handle);
		if (message.change) message.change.forEach((changedHandle) => listener.onObjectChanged(changedHandle));
		if (message.close) message.close.forEach((closedHandle) => listener.onObjectClosed(closedHandle));
		if (message.params) listener.onNotification(message);
	}
	function onConnectionClosed(closeEvent) {
		listener.onConnectionClosed(closeEvent);
	}
	const lowLevelConnection = await createJsonRpcChannel(props, {
		onMessage,
		onConnectionClosed
	});
	const deltaState = {};
	/**
	* Basically performs the following tasks:
	* * Builds the actual request to send to the backend
	* * Reports the request id to the reportRequestId listener so it can be used to cancel the request
	* * Stores information about the request in the canceledRequests object if it was a cancel request
	* * Logs the request
	* * Sends the request to the backend
	* * Listens for the response from the backend
	* * If the response is an error, throws a QixError. Also add isCanceled to true if it was canceled
	* * If the response is a delta, unwraps the delta and stores the new state of the object for the next response
	* * If the response is a success, extracts the result and returns it
	* * Logs the response
	* * Returns the response
	* * Sends the request to the backend
	*/
	async function invoke(handleOrObject, request, reportRequestId) {
		const { outKey,...requestWithoutOutKey } = request;
		const handle = typeof handleOrObject === "object" ? handleOrObject.getHandle() : handleOrObject;
		const websocketRequest = {
			jsonrpc: "2.0",
			handle,
			id: requestCounter++,
			...getDeltaAndReturnEmptyProps({
				method: request.method,
				outKey: outKey || -1
			}),
			...requestWithoutOutKey
		};
		reportRequestId?.(websocketRequest.id);
		if (isCancelRequest(handleOrObject, request.method)) storeCanceledRequestId(request);
		logRequest(handleOrObject, websocketRequest, request);
		listener.onMessageSent(websocketRequest, websocketRequest.handle);
		let response;
		try {
			response = await lowLevelConnection.send(websocketRequest);
		} catch (error) {
			logJsonRpcChannelError(handleOrObject, websocketRequest, error);
			throw error;
		}
		if (response.error) {
			const isCancelled = requestWasCanceled(websocketRequest.id);
			const { jsonrpc: jsonrpc$1, delta: delta$1, id: id$1,...errorResponse } = response;
			logResponse(handleOrObject, websocketRequest, errorResponse);
			throw new QixError(response.error, isCancelled);
		}
		let resultObject = response.result || {};
		if (response.delta) resultObject = unwrapDeltas(resultObject, deltaState, handle, request.method);
		const result = extractResult({
			method: request.method,
			outKey: outKey || -1
		}, resultObject);
		const { jsonrpc, delta, id,...sendResponse } = {
			...response,
			result
		};
		logResponse(handleOrObject, websocketRequest, sendResponse);
		return result;
	}
	return {
		invoke,
		isReattached: lowLevelConnection.isReattached,
		getSessionState: lowLevelConnection.getSessionState,
		isClosed: lowLevelConnection.isClosed,
		closeNormal: lowLevelConnection.closeNormal,
		closeSuspend: lowLevelConnection.closeSuspend
	};
}

//#endregion
//#region src/qix/session/phoenix/retry-logic.ts
const retryRegexpFilter = /(?!^GetHyperCube|^GetListObject)(^Get|^Create|^OpenDoc$)/i;
function shouldRetryRequest(request, error) {
	if (error instanceof QixError) {
		if (error.isCancelled) return { retry: false };
		if (!retryRegexpFilter.test(request.method)) return { retry: false };
		if (error.code === engine_api_default.enums.LocalizedErrorCode.LOCERR_GENERIC_ABORTED) return { retry: true };
		if (error.code === engine_api_default.enums.LocalizedErrorCode.LOCERR_HC_MODAL_OBJECT_ERROR) return {
			retry: true,
			retryPrepAction: async ({ connection, appHandle }) => {
				return connection.invoke(appHandle, {
					method: "abortModalSelection",
					params: []
				});
			}
		};
		return { retry: false };
	}
	return { retry: true };
}

//#endregion
//#region src/qix/session/phoenix/event-emitter.js
/**
* Utility functions
*/
var util = {};
util.isObject = function isObject$2(arg) {
	return typeof arg === "object" && arg !== null;
};
util.isNumber = function isNumber(arg) {
	return typeof arg === "number";
};
util.isUndefined = function isUndefined(arg) {
	return arg === void 0;
};
util.isFunction = function isFunction$2(arg) {
	return typeof arg === "function";
};
/**
* EventEmitter class
*/
function EventEmitter() {
	EventEmitter.init.call(this);
}
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = void 0;
EventEmitter.prototype._maxListeners = void 0;
EventEmitter.defaultMaxListeners = 10;
EventEmitter.init = function() {
	this._events = this._events || {};
	this._maxListeners = this._maxListeners || void 0;
};
EventEmitter.prototype.setMaxListeners = function(n) {
	if (!util.isNumber(n) || n < 0 || isNaN(n)) throw TypeError("n must be a positive number");
	this._maxListeners = n;
	return this;
};
EventEmitter.prototype.emit = function(type) {
	var er, handler, len, args, i, listeners;
	if (!this._events) this._events = {};
	if (type === "error" && !this._events.error) {
		er = arguments[1];
		if (er instanceof Error) throw er;
		else throw Error("Uncaught, unspecified \"error\" event.");
		return false;
	}
	handler = this._events[type];
	if (util.isUndefined(handler)) return false;
	if (util.isFunction(handler)) switch (arguments.length) {
		case 1:
			handler.call(this);
			break;
		case 2:
			handler.call(this, arguments[1]);
			break;
		case 3:
			handler.call(this, arguments[1], arguments[2]);
			break;
		default:
			len = arguments.length;
			args = new Array(len - 1);
			for (i = 1; i < len; i++) args[i - 1] = arguments[i];
			handler.apply(this, args);
	}
	else if (util.isObject(handler)) {
		len = arguments.length;
		args = new Array(len - 1);
		for (i = 1; i < len; i++) args[i - 1] = arguments[i];
		listeners = handler.slice();
		len = listeners.length;
		for (i = 0; i < len; i++) listeners[i].apply(this, args);
	}
	return true;
};
EventEmitter.prototype.addListener = function(type, listener) {
	var m;
	if (!util.isFunction(listener)) throw TypeError("listener must be a function");
	if (!this._events) this._events = {};
	if (this._events.newListener) this.emit("newListener", type, util.isFunction(listener.listener) ? listener.listener : listener);
	if (!this._events[type]) this._events[type] = listener;
	else if (util.isObject(this._events[type])) this._events[type].push(listener);
	else this._events[type] = [this._events[type], listener];
	if (util.isObject(this._events[type]) && !this._events[type].warned) {
		var m;
		if (!util.isUndefined(this._maxListeners)) m = this._maxListeners;
		else m = EventEmitter.defaultMaxListeners;
		if (m && m > 0 && this._events[type].length > m) {
			this._events[type].warned = true;
			if (util.isFunction(console.error)) console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[type].length);
			if (util.isFunction(console.trace)) console.trace();
		}
	}
	return this;
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.once = function(type, listener) {
	if (!util.isFunction(listener)) throw TypeError("listener must be a function");
	var fired = false;
	function g() {
		this.removeListener(type, g);
		if (!fired) {
			fired = true;
			listener.apply(this, arguments);
		}
	}
	g.listener = listener;
	this.on(type, g);
	return this;
};
EventEmitter.prototype.removeListener = function(type, listener) {
	var list, position, length, i;
	if (!util.isFunction(listener)) throw TypeError("listener must be a function");
	if (!this._events || !this._events[type]) return this;
	list = this._events[type];
	length = list.length;
	position = -1;
	if (list === listener || util.isFunction(list.listener) && list.listener === listener) {
		delete this._events[type];
		if (this._events.removeListener) this.emit("removeListener", type, listener);
	} else if (util.isObject(list)) {
		for (i = length; i-- > 0;) if (list[i] === listener || list[i].listener && list[i].listener === listener) {
			position = i;
			break;
		}
		if (position < 0) return this;
		if (list.length === 1) {
			list.length = 0;
			delete this._events[type];
		} else list.splice(position, 1);
		if (this._events.removeListener) this.emit("removeListener", type, listener);
	}
	return this;
};
EventEmitter.prototype.removeAllListeners = function(type) {
	var key, listeners;
	if (!this._events) return this;
	if (!this._events.removeListener) {
		if (arguments.length === 0) this._events = {};
		else if (this._events[type]) delete this._events[type];
		return this;
	}
	if (arguments.length === 0) {
		for (key in this._events) {
			if (key === "removeListener") continue;
			this.removeAllListeners(key);
		}
		this.removeAllListeners("removeListener");
		this._events = {};
		return this;
	}
	listeners = this._events[type];
	if (util.isFunction(listeners)) this.removeListener(type, listeners);
	else if (Array.isArray(listeners)) while (listeners.length) this.removeListener(type, listeners[listeners.length - 1]);
	delete this._events[type];
	return this;
};
EventEmitter.prototype.listeners = function(type) {
	var ret;
	if (!this._events || !this._events[type]) ret = [];
	else if (util.isFunction(this._events[type])) ret = [this._events[type]];
	else ret = this._events[type].slice();
	return ret;
};
EventEmitter.listenerCount = function(emitter, type) {
	var ret;
	if (!emitter._events || !emitter._events[type]) ret = 0;
	else if (util.isFunction(emitter._events[type])) ret = 1;
	else ret = emitter._events[type].length;
	return ret;
};

//#endregion
//#region src/qix/session/phoenix/rpc-object-session.ts
/**
* Implements the classic enigma.js session interface plus some new functions like invoke.
*/
let counter = 0;
var SuspendResumeImpl = class {
	Promise;
	#connection;
	constructor(connection) {
		this.Promise = Promise;
		this.#connection = connection;
	}
	resume() {
		return this.#connection.resume();
	}
	suspend() {
		return this.#connection.suspend();
	}
	get isSuspended() {
		return this.#connection.isSuspended;
	}
};
var ConfigImpl = class {
	Promise;
	constructor() {
		this.Promise = Promise;
	}
};
var RpcImpl = class extends EventEmitter {
	Promise;
	#connection;
	constructor(connection) {
		super();
		this.#connection = connection;
		this.Promise = Promise;
	}
	/**
	* @deprecated
	* For backwards compatibility, this function is deprecated.
	*/
	send(requestWithHandle) {
		const object = { getHandle: () => requestWithHandle.handle };
		const { handle,...request } = requestWithHandle;
		return this.#connection.invoke(object, request, () => {});
	}
	close() {}
};
var RpcObjectSessionImpl = class extends EventEmitter {
	rpc;
	suspendResume;
	config;
	id = counter++;
	#connection;
	/**
	*
	* @internal
	*/
	constructor(connection) {
		super();
		this.#connection = connection;
		this.rpc = new RpcImpl(connection);
		this.suspendResume = new SuspendResumeImpl(connection);
		this.config = new ConfigImpl();
	}
	/**
	* @deprecated
	* For backwards compatibility, this function is deprecated.
	*/
	send(requestWithHandle) {
		return this.rpc.send(requestWithHandle);
	}
	getObjectApi(ref) {
		return this.#connection.getObjectApi(ref);
	}
	/**
	* Returns the app object for the session.
	*/
	get global() {
		return this.#connection.global;
	}
	/**
	* Returns the app object for the session.
	*/
	get app() {
		return this.#connection.doc;
	}
	get sessionState() {
		return this.#connection.sessionState;
	}
	get Promise() {
		return Promise;
	}
	resume() {
		return this.#connection.resume();
	}
	suspend() {
		return this.#connection.suspend();
	}
	get createdAt() {
		return this.#connection.createdAt;
	}
	get lastTrafficAt() {
		return this.#connection.lastTrafficAt;
	}
	get globalPromise() {
		return Promise.resolve(this.#connection.global);
	}
	get openDocPromise() {
		return Promise.resolve(this.#connection.doc);
	}
	open() {
		return this.globalPromise;
	}
	close() {
		return Promise.resolve();
	}
};

//#endregion
//#region src/qix/session/phoenix/phoenix-connection.ts
/**
* Creates a QIX session that adds the concept of Rpc objects on top of the QixConnection which is only Json.
* Reopens a new QixConnection if the existing one goes down and recreates the serverside state of objects using the new connection.
*/
async function createPhoenixConnection(openProps, objectFactory$1, { onWebSocketEvent, getInitialAppActions }) {
	const phoenixConnection = new PhoenixConnectionImpl(openProps, objectFactory$1, {
		onWebSocketEvent,
		getInitialAppActions
	});
	await phoenixConnection.waitForConnection();
	return phoenixConnection;
}
var PhoenixConnectionImpl = class {
	#interestMonitor = createInterestMonitor();
	#sessionIsNotInUseAnymore = false;
	#openProps;
	#objectFactory;
	#rpcObjectSession;
	#owner;
	#globalRpcObject;
	#docRpcObject;
	#state = "opening";
	#currentReincarnationPromise = Promise.resolve(void 0);
	#currentReincarnation;
	#lastTrafficAt = Date.now();
	#createdAt = Date.now();
	/** @internal */
	constructor(openProps, objectFactory$1, owner) {
		this.#openProps = openProps;
		this.#objectFactory = objectFactory$1;
		this.#owner = owner;
		this.#rpcObjectSession = new RpcObjectSessionImpl(this);
		logEvent("Creating phoenix session", openProps);
		/**
		* The root objects
		*/
		this.#globalRpcObject = objectFactory$1.createObject({
			qHandle: -1,
			qType: "Global",
			qGenericId: "Global"
		}, this, void 0);
		this.#docRpcObject = objectFactory$1.createObject({
			qHandle: 1,
			qGenericId: openProps.appId,
			qType: "Doc"
		}, this, void 0);
		this.#interestMonitor.onUserActivityDetected(() => {
			this.#getCurrentOrAcquireNewReincarnation();
		});
	}
	get classicEnigmaSessionApi() {
		return this.#rpcObjectSession;
	}
	get createdAt() {
		return this.#createdAt;
	}
	get lastTrafficAt() {
		return this.#lastTrafficAt;
	}
	async waitForConnection() {
		await this.#getCurrentOrAcquireNewReincarnation();
	}
	/**
	* Invokes a method on the engine and returns the result.
	* If the result is an object reference, it will be resolved to a PhoenixRpcObject.
	* If the request fails, it will be retried if the error is retryable.
	* If the websocket is down or goes down during the request a new connection will be opened and reestablished and the request retried.
	*
	*
	* @param object An rpc object (or at least something that can provide a handle)
	* @param request a high level qix request (method, params and outKey)
	* @param reportRequestId
	* @returns Either the Json response or a PhoenixRpcObject
	* @throws QixError if the request fails and is not retryable
	*/
	async invoke(object, request, reportRequestId) {
		try {
			return await this.#sendAndResolveRpcObjects(object, request, reportRequestId);
		} catch (err) {
			const { retry, retryPrepAction } = shouldRetryRequest(request, err);
			if (retry) {
				if (retryPrepAction) await retryPrepAction({
					connection: this.#currentReincarnation.connection,
					appHandle: this.#currentReincarnation.state.getDoc().getHandle()
				});
				return this.#sendAndResolveRpcObjects(object, request, reportRequestId);
			}
			throw err;
		}
	}
	/**
	* Returns an RPC object for the given reference. If the object already exists, it will be returned.
	*/
	getObjectApi(ref) {
		if (!this.#currentReincarnation) throw new Error("Not yet connected!");
		const existingObject = this.#currentReincarnation.state.getObject(ref);
		if (existingObject) return existingObject;
		const newObject = this.#objectFactory.createObject(ref, this, void 0);
		this.#currentReincarnation.state.setObject(newObject.getHandle(), newObject);
		return newObject;
	}
	/**
	* The main Doc/App rpc object
	*/
	get doc() {
		return this.#docRpcObject;
	}
	/**
	* The Global rpc object
	*/
	get global() {
		return this.#globalRpcObject;
	}
	/**
	* A string representing if the session was newly established or reonnected
	*/
	get sessionState() {
		return this.#currentReincarnation?.connection.getSessionState() ?? "";
	}
	/**
	* Signals from outside that the session is not in use (maybe will be in a few seconds!)
	*/
	stopActivityMonitoring() {
		this.#interestMonitor.stopListeningForActivity();
	}
	close() {
		this.#interestMonitor.stopListeningForActivity();
		this.#sessionIsNotInUseAnymore = true;
		if (this.#currentReincarnation && !this.#currentReincarnation.connection.isClosed()) this.#currentReincarnation.connection.closeNormal();
	}
	async resume() {
		this.#interestMonitor.signalInterest();
		await this.#getCurrentOrAcquireNewReincarnation();
	}
	async suspend() {
		if (this.#currentReincarnation && !this.#currentReincarnation.connection.isClosed()) this.#currentReincarnation.connection.closeSuspend();
	}
	get isSuspended() {
		return this.#currentReincarnation && this.#currentReincarnation.connection.isClosed() || false;
	}
	initialAppActionsUpdated() {
		(async () => {
			await this.#runPendingInitialAppActions(await this.#getCurrentOrAcquireNewReincarnation());
		})();
	}
	/**
	* Makes a single attempt at calling the backend
	* * Acquires a working connection
	* * Invokes the backend using thta connection
	* * If the result is an object reference, it will be resolved to a PhoenixRpcObject
	*/
	async #sendAndResolveRpcObjects(object, request, reportRequestId) {
		const { connection, state } = await this.#getCurrentOrAcquireNewReincarnation();
		const result = await connection.invoke(object, request, reportRequestId);
		if (isQixObjectRef(result)) {
			const objectRef = result;
			let objectResult = state.getObject(objectRef.qHandle);
			if (!objectResult) {
				objectResult = this.#objectFactory.createObject(objectRef, this, request);
				state.setObject(objectRef.qHandle, objectResult);
			}
			return objectResult;
		}
		return result;
	}
	/**
	* This function will acquire a new reincarnation (connection + session state) if the current one is closed
	* It will also update the traffic timestamp
	*/
	async #getCurrentOrAcquireNewReincarnation() {
		this.#lastTrafficAt = Date.now();
		const result = this.#currentReincarnationPromise.then(async (lastReincarnation) => {
			while (lastReincarnation?.next !== void 0) lastReincarnation = await lastReincarnation.next;
			if (lastReincarnation && !lastReincarnation.connection.isClosed()) return lastReincarnation;
			const isResume = !!lastReincarnation;
			if (isResume) {
				this.#state = "resuming";
				this.#onResuming();
			}
			const newReincarnation = await this.#openNewQixConnectionAndPrepareSessionStateWithRetry(lastReincarnation, isResume);
			this.#state = "open";
			if (isResume) this.#onResume();
			else this.#onOpen();
			this.#currentReincarnation = newReincarnation;
			await this.#runPendingInitialAppActions(newReincarnation);
			return newReincarnation;
		});
		this.#currentReincarnationPromise = result;
		return result;
	}
	/**
	* Really tries and retries to successfully open a new Qix connection and prepares the session state for the new connection.
	* If a few attempts of reopening fails, it will wait for activity on the session before trying again.
	* This means that this function will not return until a new reincarnation is acquired.
	*
	*/
	async #openNewQixConnectionAndPrepareSessionStateWithRetry(lastReincarnation, isResume) {
		return new Promise((resolve, reject) => {
			let retryCount = 0;
			const INITIAL_RETRY_TIME = 2e3;
			let retryWaitTime = INITIAL_RETRY_TIME;
			const oneTry = async () => {
				logEvent("Trying to acquire new reincarnation", this.#openProps);
				try {
					resolve(await this.#openNewQixConnectionAndPrepareSessionState(lastReincarnation?.state));
				} catch (err) {
					if (isResume) {
						this.#interestMonitor.resetAnyInterestSignalledBeforeNow();
						if (retryCount < 5) {
							retryCount++;
							retryWaitTime *= 1.5;
							logEvent("Failed to acquire new reincarnation, retrying in ", retryWaitTime, err);
							setTimeout(() => {
								oneTry();
							}, retryWaitTime);
						} else {
							await this.#interestMonitor.waitUntilSomeoneIsInterestedInThis();
							logEvent("Activity detected, retrying to acquire new reincarnation", this.#openProps);
							retryCount = 0;
							retryWaitTime = INITIAL_RETRY_TIME;
							setTimeout(() => {
								oneTry();
							}, retryWaitTime);
						}
					} else {
						logEvent("Failed to open app", err);
						reject(err);
					}
				}
			};
			oneTry();
		});
	}
	async #openNewQixConnectionAndPrepareSessionState(lastState) {
		let stateForNewConnection = void 0;
		logEvent("-------- Opening new Qix Connection ---------");
		const newConnection = await createQixConnection(this.#openProps, {
			onMessageSent: (message, handle) => {
				this.#onMessageSent(message, stateForNewConnection?.getObject(handle));
			},
			onMessageReceived: (message, handle) => {
				const object = handle ? stateForNewConnection?.getObject(handle) : void 0;
				this.#onMessageReceived(message, object);
			},
			onNotification: (message) => {
				this.#onNotification(message);
			},
			onObjectChanged: (handle) => {
				stateForNewConnection?.getObject(handle)?.emit("changed");
			},
			onObjectClosed: (handle) => {
				stateForNewConnection?.getObject(handle)?.emit("closed");
				stateForNewConnection?.removeObject(handle);
			},
			onConnectionClosed: (error) => {
				this.#onConnectionClosed(error);
			}
		});
		const appRef = await newConnection.invoke(-1, {
			method: "OpenDoc",
			params: [
				this.#openProps.appId,
				"",
				"",
				"",
				!!this.#openProps.withoutData
			],
			outKey: -1
		});
		this.#docRpcObject.setHandle(appRef.qHandle);
		const newState = createPhoenixSessionState({
			global: this.#globalRpcObject,
			doc: this.#docRpcObject,
			executedAppActions: lastState?.getExecutedAppActions() ?? []
		});
		if (lastState) {
			await Promise.all(Object.values(lastState.getObjects()).map(async (object) => {
				await object.respawn(newConnection);
				newState.setObject(object.getHandle(), object);
			}));
			logEvent("-------- Respawned objects ---------");
			logEvent(Object.entries(lastState.getObjects()).map(([key, value]) => `${value.id}: ${key} => ${value.getHandle()}`));
		}
		stateForNewConnection = newState;
		if (lastState) Object.values(lastState.getObjects()).forEach((object) => {
			object.emit("changed");
		});
		logEvent("-------- Opening done ---------");
		return {
			connection: newConnection,
			state: newState
		};
	}
	#onOpen() {
		this.#owner.onWebSocketEvent({
			eventType: "opened",
			...this.#openProps
		});
		this.#rpcObjectSession.emit("opened");
	}
	#onResuming() {
		this.#owner.onWebSocketEvent({
			eventType: "resuming",
			...this.#openProps
		});
		this.#rpcObjectSession.emit("resuming");
	}
	#onResume() {
		this.#createdAt = Date.now();
		this.#owner.onWebSocketEvent({
			eventType: "resumed",
			...this.#openProps
		});
		this.#rpcObjectSession.emit("resumed");
	}
	#onMessageSent(message, object) {
		this.#rpcObjectSession.rpc.emit("traffic", "sent", message, object?.handle);
		this.#rpcObjectSession.emit("traffic:*", "sent", message);
		this.#rpcObjectSession.emit(`traffic:sent`, message);
		object?.emit("traffic:*", "sent", message);
		object?.emit("traffic:sent", message);
	}
	#onMessageReceived(message, object) {
		this.#rpcObjectSession.rpc.emit("traffic", "received", message, object?.handle);
		this.#rpcObjectSession.emit("traffic:*", message);
		this.#rpcObjectSession.emit(`traffic:received`, message);
		object?.emit("traffic:*", "received", message);
		object?.emit("traffic:received", message);
	}
	#onNotification(message) {
		this.#rpcObjectSession.emit("notification:*", message.method, message.params);
		this.#rpcObjectSession.emit(`notification:${message.method}`, message.params);
		this.#rpcObjectSession.rpc.emit("notification", message);
	}
	#onConnectionClosed(closeEvent) {
		const { code, reason, initiator } = closeEvent || {
			code: 0,
			reason: "unknown",
			initiator: "network"
		};
		if (this.#sessionIsNotInUseAnymore) {
			logEvent("Connection closed, session is not in use anymore", this.#openProps);
			this.#owner.onWebSocketEvent({
				eventType: "closed",
				code,
				reason,
				...this.#openProps
			});
			this.#rpcObjectSession.emit("closed", {
				code,
				reason,
				initiator
			});
		} else if (this.#state === "open") {
			logEvent("Connection closed, session is still in use", this.#openProps, code, reason);
			this.#owner.onWebSocketEvent({
				eventType: "suspended",
				code,
				reason,
				initiator,
				...this.#openProps
			});
			this.#rpcObjectSession.emit("suspended", {
				code,
				reason,
				initiator
			});
			if (shouldResumeImmediately(code)) this.#getCurrentOrAcquireNewReincarnation();
			else this.#interestMonitor.startListeningForActivity();
		}
	}
	async #runPendingInitialAppActions(newReincarnation) {
		for (const action of this.#owner.getInitialAppActions()) if (!newReincarnation.state.isAppActionExecuted(action)) {
			await action(newReincarnation.state.getDoc());
			newReincarnation.state.addExecutedInitialAppAction(action);
		}
	}
};
function shouldResumeImmediately(code) {
	const IMMEDIATE_RESUME_CDDES = {
		ENGINE_TERMINATING: 4003,
		APP_DELETED: 4004,
		APP_MODE_CHANGED: 4007
	};
	switch (code) {
		case IMMEDIATE_RESUME_CDDES.ENGINE_TERMINATING:
		case IMMEDIATE_RESUME_CDDES.APP_DELETED:
		case IMMEDIATE_RESUME_CDDES.APP_MODE_CHANGED: return true;
		default: return false;
	}
}

//#endregion
//#region src/qix/session/phoenix/remote-object.ts
var RemoteObjectImpl = class {
	#connection;
	#handle;
	#id;
	#type;
	#genericType;
	#respawnInfo;
	constructor({ connection, handle, id, type, genericType, respawnInfo }) {
		this.#connection = connection;
		this.#handle = handle;
		this.#id = id;
		this.#type = type;
		this.#genericType = genericType;
		this.#respawnInfo = respawnInfo;
	}
	invoke(req) {
		let lastRequestId = 0;
		const promise = this.#connection.invoke(this, req, (requestId) => {
			lastRequestId = requestId;
		});
		addToPromiseChain(promise, "requestId", () => lastRequestId);
		return promise;
	}
	getHandle() {
		return this.#handle;
	}
	get handle() {
		return this.#handle;
	}
	set handle(newHandle) {
		this.#handle = newHandle;
	}
	get id() {
		return this.#id;
	}
	get type() {
		return this.#type;
	}
	get genericType() {
		return this.#genericType;
	}
	get session() {
		return this.#connection.classicEnigmaSessionApi;
	}
	get respawnInfo() {
		return this.#respawnInfo;
	}
};
/**
* Function used to add info on the promise chain.
* @param promise The promise to add info on.
* @param name The property to add info on.
* @param getValue The info to add.
*/
function addToPromiseChain(promise, name, getValue) {
	Object.defineProperty(promise, name, {
		get() {
			return getValue();
		},
		enumerable: true,
		configurable: true
	});
	const { then } = promise;
	promise.then = function patchedThen(...params) {
		const chain = then.apply(this, params);
		addToPromiseChain(chain, name, getValue);
		return chain;
	};
}

//#endregion
//#region src/qix/session/phoenix/rpc-object.ts
var PhoenixRpcObjectImpl = class extends EventEmitter {
	/** @internal */
	#remoteObject;
	/** @deprecated */
	Promise;
	/**
	* @internal
	*/
	constructor(rpcObjectCore) {
		super();
		this.#remoteObject = rpcObjectCore;
		this.Promise = Promise;
	}
	get __remote__() {
		return this.#remoteObject;
	}
	get handle() {
		return this.#remoteObject.handle;
	}
	set handle(handle) {
		this.#remoteObject.handle = handle;
	}
	get app() {
		return this.#remoteObject.session.app;
	}
	get global() {
		return this.#remoteObject.session.global;
	}
	set global(newGlobal) {
		if (newGlobal !== this.#remoteObject.session.global) console.warn("Changing the global object on a qix object is not allowed");
	}
	get id() {
		return this.#remoteObject.id;
	}
	get type() {
		return this.#remoteObject.type;
	}
	get genericType() {
		return this.#remoteObject.genericType;
	}
	get session() {
		return this.#remoteObject.session;
	}
	getHandle() {
		return this.#remoteObject.handle;
	}
	setHandle(handle) {
		const oldHandle = this.#remoteObject.handle;
		this.#remoteObject.handle = handle;
		if (oldHandle !== handle) logEvent("Change handle for ", this.#remoteObject.id, "from", oldHandle, "to", handle);
	}
	/** @deprecated */
	get enigmaModel() {
		return this;
	}
	/**
	* @internal
	*/
	async respawn(newConnection) {
		if (this.#remoteObject.type !== "Doc" && this.#remoteObject.type !== "Global") console.error("No respawn mixin found for object ", this.#remoteObject.type, this.#remoteObject.genericType);
	}
};

//#endregion
//#region src/qix/session/phoenix/rpc-object-respawn-mixins.ts
/**
* The respawn functions are called when a session is reattached and the objects need to get their new handles and potentially even be recreated from scratch
* if the session has dissapeared from the server. since the ordinary invoke function on the object and object.session will retrigger the respawning process when already inside t
* the respawning process we have to use the connection.invoke function instead. which simple takes the handle and the request as arguments and sends it to the server.
*/
const refetch1 = {
	types: ["GenericObject"],
	override: {
		async respawn(original, connection) {
			if (this.__remote__.respawnInfo.isSessionObject) {
				let objectFoundInEngine = false;
				if (connection.isReattached()) try {
					this.setHandle(await connection.invoke(this.app.handle, {
						method: "GetObject",
						params: [this.id],
						outKey: -1
					}).then((res) => res.qHandle));
					objectFoundInEngine = true;
				} catch (err) {
					console.warn("Session object not found in reattached session", err);
					objectFoundInEngine = false;
				}
				if (!objectFoundInEngine) {
					const props = JSON.parse(JSON.stringify(this.__remote__.respawnInfo.properties));
					props.qInfo = props.qInfo || {};
					props.qInfo.qId = this.id;
					logEvent("Respawning session object using", this.__remote__.respawnInfo.properties);
					this.setHandle(await connection.invoke(this.app.handle, {
						method: "CreateSessionObject",
						params: [props],
						outKey: -1
					}).then((res) => res.qHandle));
				}
			} else this.setHandle(await connection.invoke(this.app.handle, {
				method: "GetObject",
				params: [this.id],
				outKey: -1
			}).then((res) => res.qHandle));
			if (this.__remote__.respawnInfo.activeModalSelectionPaths && !connection.isReattached()) try {
				logEvent("########### BeginSelections ###################################", this.__remote__.respawnInfo.activeModalSelectionPaths);
				await connection.invoke(this.handle, {
					method: "BeginSelections",
					params: [this.__remote__.respawnInfo.activeModalSelectionPaths],
					outKey: -1
				});
			} catch (err) {
				console.warn("Could not reapply modal selection state", err);
			}
		},
		async beginSelections(original, paths) {
			logEvent("Storing modal selections", this.handle, this.__remote__.respawnInfo.activeModalSelectionPaths);
			this.__remote__.respawnInfo.activeModalSelectionPaths = paths;
			return original(paths);
		},
		async endSelections(original, accept) {
			this.__remote__.respawnInfo.activeModalSelectionPaths = void 0;
			logEvent("Removing modal selections", this.handle, this.__remote__.respawnInfo.activeModalSelectionPaths);
			return original(accept);
		},
		async setProperties(original, props) {
			this.__remote__.respawnInfo.properties = props;
			return original(props);
		}
	}
};
const variableRespawnMixin = {
	types: ["GenericVariable"],
	override: {
		async respawn(original, connection) {
			logEvent("Respawning variable ", this.id);
			if (this.__remote__.respawnInfo.isSessionObject) {
				let objectFoundInEngine = false;
				if (connection.isReattached()) try {
					this.setHandle(await connection.invoke(this.app.handle, {
						method: "GetObject",
						params: [this.id],
						outKey: -1
					}).then((res) => res.qHandle));
					objectFoundInEngine = true;
				} catch (err) {
					console.warn("Session variable not found in reattached session", err);
					objectFoundInEngine = false;
				}
				if (!objectFoundInEngine) this.setHandle(await connection.invoke(this.app.handle, {
					method: "CreateSessionVariable",
					params: [this.__remote__.respawnInfo.properties],
					outKey: -1
				}).then((res) => res.qHandle));
			} else this.setHandle(await connection.invoke(this.app.handle, {
				method: "GetObject",
				params: [this.id],
				outKey: -1
			}).then((res) => res.qHandle));
		},
		async setProperties(original, props) {
			this.__remote__.respawnInfo.properties = props;
			return original(props);
		}
	}
};
const variarbleMeasureAndBookmarkRespawnMixin = {
	types: [
		"GenericDimension",
		"GenericMeasure",
		"GenericBookmark"
	],
	override: { async respawn(original, connection) {
		logEvent("Respawning field dimension, measure or bookmark", this.id);
		this.setHandle(await connection.invoke(this.app.handle, {
			method: "GetObject",
			params: [this.id],
			outKey: -1
		}).then((res) => res.qHandle));
	} }
};
const fieldRespawningMixin = {
	types: ["Field"],
	override: { async respawn(original, connection) {
		logEvent("Respawning field object ", this.id);
		if (this.__remote__.respawnInfo.creatingRequest && this.__remote__.respawnInfo.creatingRequest.method.startsWith("Get")) {
			this.setHandle(await connection.invoke(1, this.__remote__.respawnInfo.creatingRequest).then((res) => res.qHandle));
			logEvent("Respawned field object using creating request ", this.id, this.handle);
		} else {
			this.setHandle(0);
			logEvent("No idea how to respawn", this.id);
		}
	} }
};
const rememberCreatePropsMixin = {
	types: ["Doc"],
	override: {
		async createSessionObject(original, properties) {
			const phoenixObject = await original(properties);
			phoenixObject.__remote__.respawnInfo.isSessionObject = true;
			phoenixObject.__remote__.respawnInfo.properties = properties;
			return phoenixObject;
		},
		async createSessionVariable(original, properties) {
			const object = await original(properties);
			const phoenixObject = object;
			phoenixObject.__remote__.respawnInfo.isSessionObject = true;
			phoenixObject.__remote__.respawnInfo.properties = properties;
			return object;
		}
	}
};
var rpc_object_respawn_mixins_default = [
	refetch1,
	variableRespawnMixin,
	variarbleMeasureAndBookmarkRespawnMixin,
	fieldRespawningMixin,
	rememberCreatePropsMixin
];

//#endregion
//#region src/qix/session/phoenix/rpc-object-mixins.ts
function toMixinMap(mixinsArray) {
	const mixins$5 = {};
	rpc_object_respawn_mixins_default.concat(mixinsArray).forEach((mixin$21) => {
		(Array.isArray(mixin$21.types) ? mixin$21.types : [mixin$21.types]).forEach((type) => {
			mixins$5[type] = mixins$5[type] || [];
			mixins$5[type].push(mixin$21);
		});
	});
	return mixins$5;
}
function applyMixins(classPrototype, mixinList) {
	mixinList.forEach(({ extend: extend$2 = {}, override = {} }) => {
		Object.keys(override).forEach((key) => {
			if (typeof classPrototype[key] === "function" && typeof override[key] === "function") {
				const baseFn = classPrototype[key];
				classPrototype[key] = function wrappedFn(...args) {
					return override[key].apply(this, [baseFn.bind(this), ...args]);
				};
			} else throw new Error(`Tring to override non-existing function in ${classPrototype.type}/${classPrototype.genericType}: ${key}`);
		});
		Object.keys(extend$2).forEach((key) => {
			if (typeof classPrototype[key] === "function" && typeof extend$2[key] === "function") throw new Error(`Extend is not allowed. Function already exists in  ${classPrototype.type}/${classPrototype.genericType}: ${key}`);
			else classPrototype[key] = extend$2[key];
		});
	});
}
function initMixins(rpcObject, mixinList) {
	mixinList.forEach(({ init }) => {
		if (init) init.bind(rpcObject)({
			api: rpcObject,
			config: { Promise }
		});
	});
}

//#endregion
//#region src/qix/session/phoenix/rpc-object-schema.ts
function schemaToStructureOfUnboundFunctions(schema) {
	const result = {};
	Object.entries(schema.structs).forEach(([type, objectSchema]) => {
		result[type] = schemaToFunctionsEntries(objectSchema);
	});
	function schemaToFunctionsEntries(objectSchema) {
		return Object.entries(objectSchema).map(([pascalName, methodSchema]) => {
			return {
				methodName: toCamelCase(pascalName),
				fn: generateUnboundMethod(pascalName, methodSchema)
			};
		});
	}
	return result;
}
function generateUnboundMethod(pascalMethodName, methodSchema) {
	const out = methodSchema.Out;
	const outKey = out.length === 1 ? out[0].Name : -1;
	return function generatedMethod(...params) {
		return this.__remote__.invoke({
			method: pascalMethodName,
			params,
			outKey
		});
	};
}
/**
* Returns the camelCase counterpart of a symbol.
* @private
* @param {String} symbol The symbol.
* @return the camelCase counterpart.
*/
function toCamelCase(symbol) {
	return symbol.substring(0, 1).toLowerCase() + symbol.substring(1);
}

//#endregion
//#region src/qix/session/phoenix/rpc-object-factory.ts
function createRpcObjectFactory(schema, mixinsArray) {
	return new RpcObjectFactoryImpl(schema, mixinsArray);
}
var RpcObjectFactoryImpl = class {
	/**
	* Map from type to mixin
	*/
	#mixinsByType;
	/**
	* Map from type to array of native qix functions
	*/
	#nativeFunctionsByType;
	/**
	* All generated rpc object classes with mixins and native functions
	*/
	#generatedClasses = {};
	constructor(schema, mixinsArray) {
		this.#mixinsByType = toMixinMap(mixinsArray);
		this.#nativeFunctionsByType = schemaToStructureOfUnboundFunctions(schema);
	}
	/**
	* Creates a new RPC Object with mixins et'al
	*/
	createObject(refMultipleFormats, connection, creatingRequest) {
		const { handle, id, type, genericType } = normalizeObjectRef(refMultipleFormats);
		if (!type) throw new Error(`Trying to create object without type: ${type}`);
		const coreRpcObject = new RemoteObjectImpl({
			connection,
			handle,
			respawnInfo: { creatingRequest },
			id,
			type,
			genericType
		});
		return new (this.#getClass(type, genericType))(coreRpcObject);
	}
	#getClass(type, genericType) {
		const key = `${type}:${genericType}`;
		if (!this.#generatedClasses[key]) {
			const rpcFunctions = this.#getRpcFunctionsForType(type);
			const mixins$5 = this.#getMixinsForType(type).concat(this.#getMixinsForType(genericType));
			this.#generatedClasses[type] = class GeneratedBaseQixRpxObject extends PhoenixRpcObjectImpl {
				constructor(createProps) {
					super(createProps);
					initMixins(this, mixins$5);
				}
			};
			const classPrototype = this.#generatedClasses[type].prototype;
			rpcFunctions.forEach(({ methodName, fn }) => {
				classPrototype[methodName] = fn;
			});
			applyMixins(classPrototype, mixins$5);
		}
		return this.#generatedClasses[type];
	}
	#getMixinsForType(type) {
		return (type ? this.#mixinsByType[type] : []) || [];
	}
	#getRpcFunctionsForType(type) {
		return this.#nativeFunctionsByType[type];
	}
};

//#endregion
//#region src/qix/session/qix-chunk-entrypoint.ts
let objectFactory;
async function createPhoenixConnectionEntrypoint(openProps, connectionwOwner) {
	objectFactory = objectFactory || createRpcObjectFactory(engine_api_default, mixins);
	return createPhoenixConnection(openProps, objectFactory, connectionwOwner);
}
async function createEnigmaSessionEntrypoint(openProps) {
	return createEnigmaSession(openProps);
}

//#endregion
export { createEnigmaSessionEntrypoint, createPhoenixConnectionEntrypoint };