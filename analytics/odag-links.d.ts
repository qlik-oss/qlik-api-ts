import { x as ApiCallOptions } from "../chunks/auth-types-BAiSvIRn.js";
declare namespace odag_links_d_exports {
  export { AppIdV2, AppNameParameterV2, AppNameV2, AppStateCondensedV2, BindFormattingV2, BindingArrayV2, BindingV2, CanCreateLinks, CreateOdagLinkHttpError, CreateOdagLinkHttpResponse, CreateOdagLinkRequestHttpError, CreateOdagLinkRequestHttpResponse, CreateOdagLinksSelectionAppLinkUsage_FIX_THIS_QUIRKY_NAMEHttpError, CreateOdagLinksSelectionAppLinkUsage_FIX_THIS_QUIRKY_NAMEHttpResponse, DataLoadStatus, ErrorDetailsV2, ErrorV2, FieldSelectionStateV2, FieldValueV2, GetOdagLinkHttpError, GetOdagLinkHttpResponse, GetOdagLinkRequestsHttpError, GetOdagLinkRequestsHttpResponse, GetOdagLinksCancreate_FIX_THIS_QUIRKY_NAMEHttpError, GetOdagLinksCancreate_FIX_THIS_QUIRKY_NAMEHttpResponse, GetOdagLinksHttpError, GetOdagLinksHttpResponse, LinkAddPayloadV2, LinkId, LinkNameV2, LinkPropAppOpenMethodV2, LinkPropAppRetentionTimeV2, LinkPropDisableV2, LinkPropGenAppLimitV2, LinkPropGenAppNameV2, LinkPropLimitPolicyV2, LinkPropMenuLabelV2, LinkPropOverrideGenAppLimitV2, LinkPropRowEstRangeV2, LinkPropTargetSheetV2, LinkPropertiesV2, LinkPutPayloadV2, LinkRowEstExprV2, LinkStateFullV2, LinkStateRefV2, LinkStatusSettingV2, LinkStatusV2, LinkTypeV2, LinkUsageContextV2, MetaV2, NumericOnlyV2, OdagLinksAPI, RequestArrayV2, RequestIdV2, RequestKindV2, RequestLoadInfoV2, RequestObjectV2, RequestPostPayloadV2, RequestStateV2, SelAppLinkUsagePayload, SelectAppParamTypeV2, SelectStatusV2, SelectionStateDescrV2, SelectionStateV2, UpdateOdagLinkHttpError, UpdateOdagLinkHttpResponse, UserIdV2, UserStateCondensedV2, ValueCountRangeV2, clearCache, createOdagLink, createOdagLinkRequest, createOdagLinksSelectionAppLinkUsage_FIX_THIS_QUIRKY_NAME, odagLinksExport as default, getOdagLink, getOdagLinkRequests, getOdagLinks, getOdagLinksCancreate_FIX_THIS_QUIRKY_NAME, updateOdagLink };
}
/**
 * The system-assigned ID for an Analytics Application.
 */
type AppIdV2 = string;
/**
 * One of the allowed variables that, when evaluated at ODAG Request execution time, can be used to compute a part of a generated Analytics Application's name.
 */
type AppNameParameterV2 = "templateAppName" | "userId" | "curYear" | "curMonth" | "curDay" | "curHr" | "curMin" | "curSec";
/**
 * The name of an Analytics Application.
 * @example
 * "appname"
 */
type AppNameV2 = string;
/**
 * Condensed state of an Analytics Application returned in `state` for Link, LinkUsage, Request, and ODAG Apps GET calls.
 */
type AppStateCondensedV2 = {
  /** The system-assigned ID for an Analytics Application. */id: AppIdV2; /** The name of an Analytics Application. */
  name: AppNameV2;
};
/**
 * A property value that describes the formatting of field values in a Binding. This is currently only settable in the template Analytics Application script and not when creating or updating a Link.
 */
type BindFormattingV2 = {
  /** The character to use as a separator between two (or more) bound values when formatting the source values associated with this binding.  If this property is not supplied, a comma character will be used by default.  Use an empty string to indicate that no separator character should be used. */delimiter?: string; /** The character to use for quote wrapping each of the bound values when formatting the source values associated with this binding.  If this property is not supplied, a single quote character (`'`) will be used by default.  Use an empty string to suppress quote wrapping the values. */
  quote?: string;
};
/**
 * A collection of Bindings.  Note that there can be multiple bindings having the same `templateAppFieldName` in a binding collection to denote different usages of the field's selection state in the context of the data prep logic but they all must have the same value for their `range` property.
 */
type BindingArrayV2 = BindingV2[];
/**
 * An object that defines how values accessible in the selection Analytics Application are to be harvested and injected into the data prep phase of the template Analytics Application at Analytics Application generation time.
 */
type BindingV2 = {
  /** A property value that describes the formatting of field values in a Binding. This is currently only settable in the template Analytics Application script and not when creating or updating a Link. */formatting?: BindFormattingV2; /** Set to `true` to indicate that only numeric values from the selection Analytics Application source parameter should be used. The default value for this property, if left unspecified, is `false`. This is currently only settable in the template Analytics Application script and not when creating or updating a Link. */
  numericOnly?: NumericOnlyV2; /** The lower and upper bound for the permitted number of values that must exist in the selection Analytics Application's source parameter in order for this binding to be valid (and permit an ODAG Request to be submitted. If this property is not supplied, there is no constraint on either the lower or upper bound. To indicate that an exact number of selections are required, use the same number for both the lower and upper bound. */
  range?: ValueCountRangeV2; /** The path (or name) of the selection Analytics Application field, variable, or property to obtain the list of values for this binding. */
  selectAppParamName?: string; /** The different kinds of selection Analytics Application parameters whose values can be bound to the script of template Analytics Applications when generating new Analytics Applications. Note that `Exclude` is used to specifically prevent fields defined as optional bind parameters in the template Analytics Application script from being bound (these must either not have the optional quantity constraint specifiers or have a minimum quantity of 0). */
  selectAppParamType: SelectAppParamTypeV2; /** A combination of the letters `S` and/or `O` to indicate which values from the selection states `selected` or `optional` in the hypercube of the selection Analytics Application to harvest as bind values to inject into the script of the template Analytics Application at ODAG request submission time. This is currently only settable in the template Analytics Application script and not when creating or updating a Link. */
  selectionStates?: SelectionStateDescrV2;
  templateAppVarName: string;
};
/**
 * An object used to inform the caller whether the current user has privilege to create new Links.
 */
type CanCreateLinks = {
  canCreateLinks?: boolean;
};
/**
 * The completion status of a completed Request.
 */
type DataLoadStatus = "pending" | "success" | "warnings" | "failed";
/**
 * A single error entry within an error response.
 */
type ErrorDetailsV2 = {
  /** A unique code used to identify the template form of the message in i18n tables (language independent). */code?: string; /** The message describing the error. */
  detail?: string; /** Additional metadata associated with an error. */
  meta?: MetaV2;
  title?: string;
};
/**
 * A standard error response containing a list of one or more errors.
 */
type ErrorV2 = {
  errors?: ErrorDetailsV2[]; /** A unique ID of the trace which the error occurred in. Makes it possible to locate involved services and find log messages from the time of the error. */
  traceId?: string;
};
/**
 * The set of values used by link bindings to generate an Analytics Application.
 */
type FieldSelectionStateV2 = {
  /** The actual number of selected values. Not used for `bindSelectionState`. */selectedSize?: number; /** The name of a variable or field that corresponds to one or more bindings having a matching `selectAppParamName` used to generate Analytics Applications. */
  selectionAppParamName: string; /** The different kinds of selection Analytics Application parameters whose values can be bound to the script of template Analytics Applications when generating new Analytics Applications. Note that `Exclude` is used to specifically prevent fields defined as optional bind parameters in the template Analytics Application script from being bound (these must either not have the optional quantity constraint specifiers or have a minimum quantity of 0). */
  selectionAppParamType: SelectAppParamTypeV2; /** The list of values in the selection state for this field. */
  values: FieldValueV2[];
};
/**
 * A single field value with its selection status.
 */
type FieldValueV2 = {
  numValue?: string; /** The valid set of selection states that a specific field value can be in. One of: `S` (selected), `O` (optional), or `X` (excluded). */
  selStatus: SelectStatusV2;
  strValue: string;
};
/**
 * An object that defines the properties of a Link to be created.
 */
type LinkAddPayloadV2 = {
  /** A collection of Bindings.  Note that there can be multiple bindings having the same `templateAppFieldName` in a binding collection to denote different usages of the field's selection state in the context of the data prep logic but they all must have the same value for their `range` property. */bindings?: BindingArrayV2; /** When `true`, the ODAG link is treated as a dynamic view. Analytics Application retention time is overridden to `24 hours` and the maximum number of generated Analytics Applications is set to `1`. */
  dynamicView?: boolean; /** Set to `true` to include the generated Analytics Application load script in the generated Analytics Application. The default value is `false`. */
  includeScript?: boolean; /** The name of a link. */
  name: LinkNameV2; /** The complete set of possible properties for a link and their associated user context/value pairings. */
  properties?: LinkPropertiesV2; /** The measure expression to be evaluated in the context of the selection Analytics Application for the link that estimates the number of records that will be qualified by the primary load query of the template Analytics Application. This expression must be valid in the context of the selection Analytics Application fields and update whenever the selection state of the selection Analytics Application changes. */
  rowEstExpr?: LinkRowEstExprV2; /** The system-assigned ID for an Analytics Application. */
  selectionApp: AppIdV2;
  /** The requested status transition to apply to a Link.
   * New links are always created with status `active`; `statusSetting` is ignored.
   * When updating a Link, if `statusSetting` is provided, the request updates the Link's `status` only (other fields in the payload are not applied). If omitted, the Link's status is not changed.
   * `statusSetting` is an action, and it maps to the resulting `status`: - `activate` sets `status` to `active`. - `disable` sets `status` to `disabled`. - `decommission` sets `status` to `decommissioned`.
   * If `statusSetting` has an unsupported value, the request returns an error and the Link is not updated.
   * Links with status `decommissioned` cannot change status. */
  statusSetting?: LinkStatusSettingV2; /** The system-assigned ID for an Analytics Application. */
  templateApp?: AppIdV2;
};
/**
 * The system-assigned ID for a link.
 */
type LinkId = string;
/**
 * The name of a link.
 * @example
 * "ODAG Link name"
 */
type LinkNameV2 = string;
/**
 * Sets the default method by which the newly generated Analytics Application is displayed when opened. The default is `Tab` to open a new tab in the same browser.  Note that not all devices permit both methods so the chosen behavior may not apply if it is not supported on the user's device or browser.
 */
type LinkPropAppOpenMethodV2 = {
  /** An expression based on the usage environment of a Link typically including predicates that test the current user's membership in a group or possession of a user role that when evaluated truthfully enables an applicable value for a Link property. For example, `User_*` indicates that the link property setting applies to all users while `User.name = joe` indicates the rule applies only to a specific user named `joe`. */context: LinkUsageContextV2;
  openMethod: "Tab" | "Window";
};
/**
 * A string that defines the length of time that a generated Analytics Application should be allowed to exist before it is automatically purged.  The format must be in either ISO 8601 duration format or the text `unlimited`.
 */
type LinkPropAppRetentionTimeV2 = {
  /** An expression based on the usage environment of a Link typically including predicates that test the current user's membership in a group or possession of a user role that when evaluated truthfully enables an applicable value for a Link property. For example, `User_*` indicates that the link property setting applies to all users while `User.name = joe` indicates the rule applies only to a specific user named `joe`. */context: LinkUsageContextV2;
  retentionTime: string;
};
/**
 * Set to `true` to temporarily disable the use of this Link to generate Analytics Applications.
 */
type LinkPropDisableV2 = {
  /** An expression based on the usage environment of a Link typically including predicates that test the current user's membership in a group or possession of a user role that when evaluated truthfully enables an applicable value for a Link property. For example, `User_*` indicates that the link property setting applies to all users while `User.name = joe` indicates the rule applies only to a specific user named `joe`. */context: LinkUsageContextV2;
  disable: boolean;
};
/**
 * The limit to the number of Analytics Applications generated using this specific Link that can exist, and still not deleted, before the policy defined by the `limitPolicy` property (configured separately via LinkPropertiesV2.limitPolicy) is applied. If no `limitPolicy` is defined, the `Restrict` policy is assumed. If there is no value for this property applicable to the current user, there is no limit to the number of Analytics Applications that can be generated from this link for the user.  The count of the current number of Analytics Applications is based on just those Analytics Applications generated by the current user (and still in existence) for this specific link. The minimum value for `limit` is `1`.
 */
type LinkPropGenAppLimitV2 = {
  /** An expression based on the usage environment of a Link typically including predicates that test the current user's membership in a group or possession of a user role that when evaluated truthfully enables an applicable value for a Link property. For example, `User_*` indicates that the link property setting applies to all users while `User.name = joe` indicates the rule applies only to a specific user named `joe`. */context: LinkUsageContextV2;
  limit: number;
};
/**
 * An object that defines how to compute the name to use for the generated Analytics Application.
 */
type LinkPropGenAppNameV2 = {
  /** An expression based on the usage environment of a Link typically including predicates that test the current user's membership in a group or possession of a user role that when evaluated truthfully enables an applicable value for a Link property. For example, `User_*` indicates that the link property setting applies to all users while `User.name = joe` indicates the rule applies only to a specific user named `joe`. */context: LinkUsageContextV2; /** A string containing the base text of the name to use for the generated Analytics Application and optionally any number of placeholder patterns of the form `{N}` where `N` is an integer greater than or equal to `0`. The integer identifies the offset in the `params` array of an `AppNameParameterV2` to evaluate at ODAG Request execution time to compute a fragment of the generated Analytics Application's name and insert it at the same position as its corresponding `{N}` placeholder. */
  formatString: string;
  params?: AppNameParameterV2[];
};
/**
 * The action to take when the limit to the maximum number of generated Analytics Applications is reached.
 */
type LinkPropLimitPolicyV2 = {
  /** An expression based on the usage environment of a Link typically including predicates that test the current user's membership in a group or possession of a user role that when evaluated truthfully enables an applicable value for a Link property. For example, `User_*` indicates that the link property setting applies to all users while `User.name = joe` indicates the rule applies only to a specific user named `joe`. */context: LinkUsageContextV2;
  limitPolicy: "Restrict" | "AutoDelete";
};
/**
 * The default label to use for this Link in the context of the selection Analytics Application's ODAG navigation menu.
 */
type LinkPropMenuLabelV2 = {
  /** An expression based on the usage environment of a Link typically including predicates that test the current user's membership in a group or possession of a user role that when evaluated truthfully enables an applicable value for a Link property. For example, `User_*` indicates that the link property setting applies to all users while `User.name = joe` indicates the rule applies only to a specific user named `joe`. */context: LinkUsageContextV2;
  label: string;
};
/**
 * The limit to the number of Analytics Applications generated can be overridden using this specific Link that can exist, and still not deleted. The default value for this property is `false`. If this property value is set to `true`, then the `limit` value in `genAppLimit` is ignored.
 */
type LinkPropOverrideGenAppLimitV2 = {
  /** An expression based on the usage environment of a Link typically including predicates that test the current user's membership in a group or possession of a user role that when evaluated truthfully enables an applicable value for a Link property. For example, `User_*` indicates that the link property setting applies to all users while `User.name = joe` indicates the rule applies only to a specific user named `joe`. */context: LinkUsageContextV2;
  overrideGenAppLimit?: boolean;
};
/**
 * A link property that defines a value range that the evaluated value of the row estimate measure must fall within in order to allow submissions of a request for the link.
 */
type LinkPropRowEstRangeV2 = {
  /** An expression based on the usage environment of a Link typically including predicates that test the current user's membership in a group or possession of a user role that when evaluated truthfully enables an applicable value for a Link property. For example, `User_*` indicates that the link property setting applies to all users while `User.name = joe` indicates the rule applies only to a specific user named `joe`. */context: LinkUsageContextV2; /** The maximum value for the row estimate to enable usage of the link. If the row estimate expression evaluates to a value larger than this value, the user will be prevented from submitting an ODAG request for this link. */
  highBound: number; /** The minimum value for the row estimate to enable usage of the link to perform an ODAG request.  If the row estimate expression evaluates to a number lower than this value, the user will be prevented from submitting an ODAG request for this link.  If this value is not supplied, no minimum is required. */
  lowBound?: number;
};
/**
 * An optional property that a Link creator can specify to cause the client to navigate to a specific sheet in the generated Analytics Application when opening the generated Analytics Application from the selection Analytics Application's navpoint panel.
 */
type LinkPropTargetSheetV2 = {
  /** An expression based on the usage environment of a Link typically including predicates that test the current user's membership in a group or possession of a user role that when evaluated truthfully enables an applicable value for a Link property. For example, `User_*` indicates that the link property setting applies to all users while `User.name = joe` indicates the rule applies only to a specific user named `joe`. */context: LinkUsageContextV2; /** The ID of the sheet to first navigate to when opening the generated Analytics Application from the selection Analytics Application. */
  sheetId: string; /** An optional, read-only property that is returned when retrieving a link if the `targetSheet` setting exists for the current user in the link's `properties` set and the sheet with that ID exists in the link's `templateApp`. */
  sheetName?: string;
};
/**
 * The complete set of possible properties for a link and their associated user context/value pairings.
 */
type LinkPropertiesV2 = {
  appOpenMethod?: LinkPropAppOpenMethodV2[];
  appRetentionTime?: LinkPropAppRetentionTimeV2[];
  disable?: LinkPropDisableV2[];
  genAppLimit?: LinkPropGenAppLimitV2[];
  genAppName?: LinkPropGenAppNameV2[];
  limitPolicy?: LinkPropLimitPolicyV2[];
  menuLabel?: LinkPropMenuLabelV2[];
  overrideGenAppLimit?: LinkPropOverrideGenAppLimitV2[];
  rowEstRange: LinkPropRowEstRangeV2[];
  targetSheet?: LinkPropTargetSheetV2[];
};
/**
 * An object that defines the properties of a Link to be modified.
 */
type LinkPutPayloadV2 = {
  /** A collection of Bindings.  Note that there can be multiple bindings having the same `templateAppFieldName` in a binding collection to denote different usages of the field's selection state in the context of the data prep logic but they all must have the same value for their `range` property. */bindings?: BindingArrayV2; /** When `true`, the ODAG link is treated as a dynamic view. Analytics Application retention time is overridden to `24 hours` and the maximum number of generated Analytics Applications is set to `1`. */
  dynamicView?: boolean; /** Set to `true` to include the generated Analytics Application load script in the generated Analytics Application. The default value is `false`. */
  includeScript?: boolean; /** The name of a link. */
  name: LinkNameV2; /** The system-assigned ID for a user */
  ownerId?: UserIdV2; /** The complete set of possible properties for a link and their associated user context/value pairings. */
  properties?: LinkPropertiesV2; /** The measure expression to be evaluated in the context of the selection Analytics Application for the link that estimates the number of records that will be qualified by the primary load query of the template Analytics Application. This expression must be valid in the context of the selection Analytics Application fields and update whenever the selection state of the selection Analytics Application changes. */
  rowEstExpr?: LinkRowEstExprV2; /** The system-assigned ID for an Analytics Application. */
  selectionApp: AppIdV2;
  /** The requested status transition to apply to a Link.
   * New links are always created with status `active`; `statusSetting` is ignored.
   * When updating a Link, if `statusSetting` is provided, the request updates the Link's `status` only (other fields in the payload are not applied). If omitted, the Link's status is not changed.
   * `statusSetting` is an action, and it maps to the resulting `status`: - `activate` sets `status` to `active`. - `disable` sets `status` to `disabled`. - `decommission` sets `status` to `decommissioned`.
   * If `statusSetting` has an unsupported value, the request returns an error and the Link is not updated.
   * Links with status `decommissioned` cannot change status. */
  statusSetting?: LinkStatusSettingV2; /** The system-assigned ID for an Analytics Application. */
  templateApp?: AppIdV2;
};
/**
 * The measure expression to be evaluated in the context of the selection Analytics Application for the link that estimates the number of records that will be qualified by the primary load query of the template Analytics Application. This expression must be valid in the context of the selection Analytics Application fields and update whenever the selection state of the selection Analytics Application changes.
 */
type LinkRowEstExprV2 = string;
/**
 * The full state of a Link.
 */
type LinkStateFullV2 = {
  /** A collection of Bindings.  Note that there can be multiple bindings having the same `templateAppFieldName` in a binding collection to denote different usages of the field's selection state in the context of the data prep logic but they all must have the same value for their `range` property. */bindings?: BindingArrayV2;
  createdDate: string; /** When `true`, the ODAG link is treated as a dynamic view. */
  dynamicView?: boolean; /** Only returned on `LinkGet` and set to `true` if user will have access to an Analytics Application generated by this link. */
  genAppAccessible?: boolean;
  id: string; /** Set to `true` to include the generated Analytics Application load script in the generated Analytics Application. The default value is `false`. */
  includeScript?: boolean; /** Condensed state of a user returned in state of ownable ODAG entities (for example, a link or request). */
  modifiedByUser?: UserStateCondensedV2;
  modifiedDate?: string; /** The name of a link. */
  name: LinkNameV2; /** Condensed state of a user returned in state of ownable ODAG entities (for example, a link or request). */
  owner: UserStateCondensedV2;
  privileges?: string[]; /** The complete set of possible properties for a link and their associated user context/value pairings. */
  properties: LinkPropertiesV2; /** The measure expression to be evaluated in the context of the selection Analytics Application for the link that estimates the number of records that will be qualified by the primary load query of the template Analytics Application. This expression must be valid in the context of the selection Analytics Application fields and update whenever the selection state of the selection Analytics Application changes. */
  rowEstExpr: LinkRowEstExprV2; /** The current status of a link. */
  status: LinkStatusV2; /** Condensed state of an Analytics Application returned in `state` for Link, LinkUsage, Request, and ODAG Apps GET calls. */
  templateApp: AppStateCondensedV2;
  templateAppChartObjects?: unknown[];
};
/**
 * Used to return a possibly empty link state when querying multiple links by ID where any one of those IDs may be invalid or obsolete. If the `link` field is missing, it means there was no accessible link for the corresponding `id`.
 */
type LinkStateRefV2 = {
  /** The system-assigned ID for a link. */id: LinkId; /** The full state of a Link. */
  link?: LinkStateFullV2;
};
/**
 * The requested status transition to apply to a Link.
 * New links are always created with status `active`; `statusSetting` is ignored.
 * When updating a Link, if `statusSetting` is provided, the request updates the Link's `status` only (other fields in the payload are not applied). If omitted, the Link's status is not changed.
 * `statusSetting` is an action, and it maps to the resulting `status`: - `activate` sets `status` to `active`. - `disable` sets `status` to `disabled`. - `decommission` sets `status` to `decommissioned`.
 * If `statusSetting` has an unsupported value, the request returns an error and the Link is not updated.
 * Links with status `decommissioned` cannot change status.
 */
type LinkStatusSettingV2 = "activate" | "disable" | "decommission";
/**
 * The current status of a link.
 */
type LinkStatusV2 = "active" | "disabled" | "decommissioned" | "incomplete";
/**
 * The type of link
 */
type LinkTypeV2 = "link" | "view" | "all";
/**
 * An expression based on the usage environment of a Link typically including predicates that test the current user's membership in a group or possession of a user role that when evaluated truthfully enables an applicable value for a Link property. For example, `User_*` indicates that the link property setting applies to all users while `User.name = joe` indicates the rule applies only to a specific user named `joe`.
 */
type LinkUsageContextV2 = string;
/**
 * Additional metadata associated with an error.
 */
type MetaV2 = {
  /** The HTTP status code for the error. Generally speaking, the following codes have these meanings: `200` - Success, `201` - Success (object created), `400` - Error with user input, `403` - Authorization error (user lacks permission), `404` - Object not found, `409` - Attempt to change an object using an obsolete last ModifiedDate. */statusCode?: number;
};
/**
 * Set to `true` to indicate that only numeric values from the selection Analytics Application source parameter should be used. The default value for this property, if left unspecified, is `false`. This is currently only settable in the template Analytics Application script and not when creating or updating a Link.
 */
type NumericOnlyV2 = boolean;
/**
 * An array of Request Summary objects.
 */
type RequestArrayV2 = RequestObjectV2[];
/**
 * The system-assigned ID for an ODAG request.
 */
type RequestIdV2 = string;
/**
 * For links that do not use any partitioning fields, a `single` Analytics Application generation request is created. However, for selection Analytics Applications that designate a set of partitioning fields and the user selects multiple values for any of those partitioning fields, ODAG uses a separate `singlesub` request to generate a separate Analytics Application for each combination of selected partition field values, and tracks the queuing and data load phase of each of those sub-requests separately. Note that `singlesub` requests share the same link ID as their spawning `multiple` parent request.
 */
type RequestKindV2 = "single" | "multiple" | "singlesub";
/**
 * An object that describes the state of a generated Analytics Application's data load operation. In request objects that include this object as an optional property, the property will be missing for `multiple` generation requests (see their sub-requests for their data load information) or for `single` and `singlesub` requests that have not yet reached their `loading` phase.
 */
type RequestLoadInfoV2 = {
  finishedAt?: string; /** The engine host name used to perform the data load operation for this request. This property will be missing in `multiple` generation requests (see the `loadHost` field of their sub-requests) and will be an empty string on a `single` or `singlesub` request that has not yet reached the `loading` phase. */
  loadHost: string;
  startedAt: string; /** The completion status of a completed Request. */
  status?: DataLoadStatus;
};
/**
 * The detailed content of an ODAG request object. If this is a summarization of a request initiated from a navigation point that has a single link, its `link` property refers to that link. Otherwise, a sub-request is created for each link in the navigation point and the `link` of each sub-request refers to its respective link.
 * If this is a `single` or `singlesub` Analytics Application generation request and the request has reached at least the `queued` stage, the `generatedApp` property contains the ID of the generated Analytics Application (note that the generated Analytics Application might not yet be populated with data or published if the request is not completed).
 * If this is a `single` or `singlesub` request and the data load operation failed, the `generatedApp` property still contains the ID of the failed Analytics Application to allow viewing of the ODAG-bound script for diagnostic purposes. Generated Analytics Applications for failed requests are purged regularly, so the Analytics Application might no longer be available.
 * If this is a `single` or `singlesub` request that was canceled before reaching the `loading` phase, the `generatedApp` property is missing because generated Analytics Applications for pre-load phase requests are deleted. If this is a `multiple` request, the `generatedApp` property is also missing.
 */
type RequestObjectV2 = {
  /** The evaluated value of the Link's `rowEstExpr` measure expression at the time this request was initiated. */actualRowEst?: number; /** A 64-bit hash of the bound field state at the time the request was made. */
  bindingStateHash?: number;
  createdDate: string; /** The Link's `rowEstExpr` property setting at the time this request was initiated. */
  curRowEstExpr?: string; /** The Link's `rowEstRange.highBound` value for the user at the time this request was initiated. */
  curRowEstHighBound?: number; /** The Link's `rowEstRange.lowBound` value for the user at the time this request was initiated. */
  curRowEstLowBound?: number; /** Detailed message if the request failed. */
  errorMessage?: string; /** Condensed state of an Analytics Application returned in `state` for Link, LinkUsage, Request, and ODAG Apps GET calls. */
  generatedApp?: AppStateCondensedV2; /** The name of an Analytics Application. */
  generatedAppName?: AppNameV2; /** The system-assigned ID for an ODAG request. */
  id: RequestIdV2; /** For links that do not use any partitioning fields, a `single` Analytics Application generation request is created. However, for selection Analytics Applications that designate a set of partitioning fields and the user selects multiple values for any of those partitioning fields, ODAG uses a separate `singlesub` request to generate a separate Analytics Application for each combination of selected partition field values, and tracks the queuing and data load phase of each of those sub-requests separately. Note that `singlesub` requests share the same link ID as their spawning `multiple` parent request. */
  kind: RequestKindV2; /** The system-assigned ID for a link. */
  link: LinkId; /** An object that describes the state of a generated Analytics Application's data load operation. In request objects that include this object as an optional property, the property will be missing for `multiple` generation requests (see their sub-requests for their data load information) or for `single` and `singlesub` requests that have not yet reached their `loading` phase. */
  loadState?: RequestLoadInfoV2;
  modifiedDate: string; /** Condensed state of a user returned in state of ownable ODAG entities (for example, a link or request). */
  owner: UserStateCondensedV2; /** The system-assigned ID for an ODAG request. */
  parentRequestId?: RequestIdV2;
  purgeAfter?: string; /** The remaining time in minutes this request will be retained (0 means kept forever). */
  retentionTime?: number; /** The system-assigned ID for an Analytics Application. */
  selectionApp?: AppIdV2; /** The name of an Analytics Application. */
  selectionAppName?: AppNameV2; /** A 64-bit hash of the selected field values at the time the request was made. */
  selectionStateHash?: number;
  sheetname?: string; /** The current state of an ODAG request. */
  state: RequestStateV2; /** The ID of the target sheet, taken from the link properties, to navigate to when opening the generated Analytics Application (empty for Analytics Application overview). */
  targetSheet?: string; /** The system-assigned ID for an Analytics Application. */
  templateApp: AppIdV2; /** The name of an Analytics Application. */
  templateAppName?: AppNameV2; /** The value of the Link's `appRetentionTime` property at the time the Analytics Application was generated (`0` means no auto-purge). */
  timeToLive?: number; /** A list of validation errors or warnings. */
  validation?: string[];
};
/**
 * Payload to send when creating an ODAG request. `selectionApp` is the ID of the selection Analytics Application from which the request is made. `bindSelectionState` is the selection state in the selection Analytics Application at the time the request is submitted (you can limit the fields to those used by the link's `bindings` to reduce payload size).
 */
type RequestPostPayloadV2 = {
  /** The current row estimate value calculated by the link's `rowEstExpr` property in the context of the selection Analytics Application. */actualRowEst?: number; /** A collection of FieldSelectionStateV2 objects. */
  bindSelectionState: SelectionStateV2; /** An opaque handle to a client-side object that contains the reference to the link being used. */
  clientContextHandle?: string; /** The system-assigned ID for an Analytics Application. */
  selectionApp: AppIdV2; /** A collection of FieldSelectionStateV2 objects. */
  selectionState?: SelectionStateV2; /** The name of the sheet from which the request is being made. */
  sheetname?: string;
};
/**
 * The current state of an ODAG request.
 */
type RequestStateV2 = "validating" | "queued" | "invalid" | "hold" | "loading" | "canceled" | "failed" | "succeeded" | "canceling" | "canceledAck" | "failedAck";
/**
 * A JSON payload containing an array of LinkIds.
 */
type SelAppLinkUsagePayload = {
  /** An array of Link IDs. */linkList: string[];
};
/**
 * The different kinds of selection Analytics Application parameters whose values can be bound to the script of template Analytics Applications when generating new Analytics Applications. Note that `Exclude` is used to specifically prevent fields defined as optional bind parameters in the template Analytics Application script from being bound (these must either not have the optional quantity constraint specifiers or have a minimum quantity of 0).
 */
type SelectAppParamTypeV2 = "Field" | "Variable" | "Property" | "Exclude" | "BDI";
/**
 * The valid set of selection states that a specific field value can be in. One of: `S` (selected), `O` (optional), or `X` (excluded).
 */
type SelectStatusV2 = "S" | "O" | "X";
/**
 * A combination of the letters `S` and/or `O` to indicate which values from the selection states `selected` or `optional` in the hypercube of the selection Analytics Application to harvest as bind values to inject into the script of the template Analytics Application at ODAG request submission time. This is currently only settable in the template Analytics Application script and not when creating or updating a Link.
 */
type SelectionStateDescrV2 = string;
/**
 * A collection of FieldSelectionStateV2 objects.
 */
type SelectionStateV2 = FieldSelectionStateV2[];
/**
 * The system-assigned ID for a user
 * @example
 * "wcgIs6wGcDdyzep9QmyopWvNH1FJTOhh"
 */
type UserIdV2 = string;
/**
 * Condensed state of a user returned in state of ownable ODAG entities (for example, a link or request).
 */
type UserStateCondensedV2 = {
  /** The system-assigned ID for a user */id: UserIdV2;
  name: string; /** Identity subject used for identity mapping. */
  subject: string; /** Tenant identifier. */
  tenantid: string;
};
/**
 * The lower and upper bound for the permitted number of values that must exist in the selection Analytics Application's source parameter in order for this binding to be valid (and permit an ODAG Request to be submitted. If this property is not supplied, there is no constraint on either the lower or upper bound. To indicate that an exact number of selections are required, use the same number for both the lower and upper bound.
 */
type ValueCountRangeV2 = {
  lowerBound?: number;
  upperBound?: number;
};
/**
 * A Link object defines an on-demand data navigation path between a selection Analytics Application and a template Analytics Application including the set of properties that control how that data access occurs and under what conditions access is permitted. The set of links returned by this method have properties that match the combination of conditions defined by any supplied query parameters.
 *
 * @param query an object with query parameters
 * @throws GetOdagLinksHttpError
 */
declare function getOdagLinks(query: {
  /** Determines whether master charts of the template Analytics Application are included in the response. */includeCharts?: boolean; /** Use `optOwner` to filter results by link owner user ID. If supplied, only links owned by that user are returned. If not supplied, returns all links the current user can access. */
  optOwner?: string; /** Filter the list by the selection Analytics Application ID. */
  selectionAppID?: string; /** The type of the links to query. Defaults to `link`. */
  type?: LinkTypeV2;
}, options?: ApiCallOptions): Promise<GetOdagLinksHttpResponse>;
type GetOdagLinksHttpResponse = {
  data: LinkStateFullV2[];
  headers: Headers;
  status: 200;
};
type GetOdagLinksHttpError = {
  data: ErrorV2;
  headers: Headers;
  status: 403 | 404;
};
/**
 * Creates a new link that enables ODAG navigation from a designated selection Analytics Application to a generated Analytics Application that is created by copying the designated template Analytics Application, injecting values for bind variables harvested from the selection Analytics Application and dynamically loaded with data using those bindings. The Bindings will be initialized by searching the load script of the template Analytics Application for patterns of the form `$(od_FIELDNAME)[M-N]` where `FIELDNAME` is the name of a field in the model of the selection Analytics Application and the optional pattern `[M-N]` identifies the lower bound `M` and the upper bound `N` for the number of values for that field which must be in the active selection state of the selection Analytics Application for binding to occur.  The active selection state defaults to `selected` (i.e. green) unless the `od` prefix is immediately followed by some combination of the letters `s`, `o`, or `x`, in that order, specifically designating the `selected`, `optional` (i.e. white) and/or `excluded` (i.e. gray) groups of values to be harvested from the selection Analytics Application's selection state. The bindings in the `bindings` array in the request payload override the properties of the corresponding field bindings found in the script of the template Analytics Application.
 *
 * @param query an object with query parameters
 * @param body an object with the body content
 * @throws CreateOdagLinkHttpError
 */
declare function createOdagLink(query: {
  /** Determines whether master charts of the template Analytics Application are included in the response. */includeCharts?: boolean;
}, body: LinkAddPayloadV2, options?: ApiCallOptions): Promise<CreateOdagLinkHttpResponse>;
type CreateOdagLinkHttpResponse = {
  data: LinkStateFullV2;
  headers: Headers;
  status: 201;
};
type CreateOdagLinkHttpError = {
  data: ErrorV2;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Checks whether the current user has permission to create new ODAG links. Optionally verify permissions for a specific template Analytics Application or selection Analytics Application context. Returns a boolean indicating create permission status.
 *
 * @param query an object with query parameters
 * @throws GetOdagLinksCancreate_FIX_THIS_QUIRKY_NAMEHttpError
 */
declare function getOdagLinksCancreate_FIX_THIS_QUIRKY_NAME(query: {
  /** When `true`, deny permission if the selection Analytics Application cannot be updated. This parameter is ignored unless `optSelectAppId` is also supplied. */optDenyIfSelAppNotUpdatable?: boolean; /** An optional parameter for specifying the ID of a selection Analytics Application. */
  optSelectAppId?: string; /** An optional parameter for specifying the ID of a template Analytics Application. */
  optTemplateAppId?: string;
}, options?: ApiCallOptions): Promise<GetOdagLinksCancreate_FIX_THIS_QUIRKY_NAMEHttpResponse>;
type GetOdagLinksCancreate_FIX_THIS_QUIRKY_NAMEHttpResponse = {
  data: CanCreateLinks;
  headers: Headers;
  status: 200;
};
type GetOdagLinksCancreate_FIX_THIS_QUIRKY_NAMEHttpError = {
  data: ErrorV2;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Registers the current set of ODAG links referenced by a selection Analytics Application and returns only those links the current user can access. Call this when a selection Analytics Application is opened or after modifying its ODAG link references. The response is an array of objects, where the `id` identifies the requested link and `link` contains the link state when accessible. Use `GET /analytics/odag-links/{linkId}` for full details.
 *
 * @param query an object with query parameters
 * @param body an object with the body content
 * @throws CreateOdagLinksSelectionAppLinkUsage_FIX_THIS_QUIRKY_NAMEHttpError
 */
declare function createOdagLinksSelectionAppLinkUsage_FIX_THIS_QUIRKY_NAME(query: {
  /** When `true`, include master charts from the template Analytics Application in the response. */includeCharts?: boolean; /** The ID of a selection Analytics Application. */
  selAppId: string; /** The type of the links to query. Defaults to `link`. */
  type?: LinkTypeV2;
}, body: SelAppLinkUsagePayload, options?: ApiCallOptions): Promise<CreateOdagLinksSelectionAppLinkUsage_FIX_THIS_QUIRKY_NAMEHttpResponse>;
type CreateOdagLinksSelectionAppLinkUsage_FIX_THIS_QUIRKY_NAMEHttpResponse = {
  data: LinkStateRefV2[];
  headers: Headers;
  status: 200;
};
type CreateOdagLinksSelectionAppLinkUsage_FIX_THIS_QUIRKY_NAMEHttpError = {
  data: ErrorV2;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Retrieves details of a specific ODAG link, including bindings, properties, status, and template Analytics Application charts. Use this to review link configuration or verify permissions before generating Analytics Applications.
 *
 * @param linkId The ID of the link.
 * @param query an object with query parameters
 * @throws GetOdagLinkHttpError
 */
declare function getOdagLink(linkId: string, query: {
  /** Determines whether master charts of the template Analytics Application are included in the response. */includeCharts?: boolean;
}, options?: ApiCallOptions): Promise<GetOdagLinkHttpResponse>;
type GetOdagLinkHttpResponse = {
  data: LinkStateFullV2;
  headers: Headers;
  status: 200;
};
type GetOdagLinkHttpError = {
  data: ErrorV2;
  headers: Headers;
  status: 403 | 404;
};
/**
 * Modifies ODAG link configuration including bindings, properties, status, and template Analytics Application reference. You can re-scan the template Analytics Application script to auto-detect binding patterns or override specific settings. If `statusSetting` is provided, the request updates only the link status (other payload fields are not applied).
 *
 * @param linkId The ID of the link.
 * @param query an object with query parameters
 * @param body an object with the body content
 * @throws UpdateOdagLinkHttpError
 */
declare function updateOdagLink(linkId: string, query: {
  /** Determines whether master charts of the template Analytics Application are included in the response. */includeCharts?: boolean;
}, body: LinkPutPayloadV2, options?: ApiCallOptions): Promise<UpdateOdagLinkHttpResponse>;
type UpdateOdagLinkHttpResponse = {
  data: LinkStateFullV2;
  headers: Headers;
  status: 200;
};
type UpdateOdagLinkHttpError = {
  data: ErrorV2;
  headers: Headers;
  status: 403 | 404;
};
/**
 * Retrieves all Analytics Application generation requests for a specific ODAG link, with optional filtering by pending status (`pending`), selection Analytics Application (`selectionAppId`), sheet context (`selectionAppSheet`), or client context (`clientContextHandle`). Use this to track generation history or monitor in-flight requests.
 *
 * @param linkId The ID of the link.
 * @param query an object with query parameters
 * @throws GetOdagLinkRequestsHttpError
 */
declare function getOdagLinkRequests(linkId: string, query: {
  /** An opaque handle to a client-side object that contains the reference to the link being used. */clientContextHandle?: string; /** Pass `true` if only pending requests should be returned. */
  pending?: boolean; /** The ID of the selection Analytics Application. */
  selectionAppId?: string; /** The name (or ID) of the sheet to filter qualifying ODAG requests for a selection Analytics Application. */
  selectionAppSheet?: string;
}, options?: ApiCallOptions): Promise<GetOdagLinkRequestsHttpResponse>;
type GetOdagLinkRequestsHttpResponse = {
  data: RequestArrayV2;
  headers: Headers;
  status: 200;
};
type GetOdagLinkRequestsHttpError = {
  data: ErrorV2;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Submits a new Analytics Application generation request with the current selection state from a selection Analytics Application. The request is validated against link properties before queuing.  On success, returns a request object that you must monitor for completion using the status endpoint.  Validation failures return detailed error information.
 *
 * @param linkId The ID of the link.
 * @param body an object with the body content
 * @throws CreateOdagLinkRequestHttpError
 */
declare function createOdagLinkRequest(linkId: string, body: RequestPostPayloadV2, options?: ApiCallOptions): Promise<CreateOdagLinkRequestHttpResponse>;
type CreateOdagLinkRequestHttpResponse = {
  data: RequestObjectV2;
  headers: Headers;
  status: 201;
};
type CreateOdagLinkRequestHttpError = {
  data: ErrorV2;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Clears the cache for analytics/odag-links api requests.
 */
declare function clearCache(): void;
type OdagLinksAPI = {
  /**
   * A Link object defines an on-demand data navigation path between a selection Analytics Application and a template Analytics Application including the set of properties that control how that data access occurs and under what conditions access is permitted. The set of links returned by this method have properties that match the combination of conditions defined by any supplied query parameters.
   *
   * @param query an object with query parameters
   * @throws GetOdagLinksHttpError
   */
  getOdagLinks: typeof getOdagLinks;
  /**
   * Creates a new link that enables ODAG navigation from a designated selection Analytics Application to a generated Analytics Application that is created by copying the designated template Analytics Application, injecting values for bind variables harvested from the selection Analytics Application and dynamically loaded with data using those bindings. The Bindings will be initialized by searching the load script of the template Analytics Application for patterns of the form `$(od_FIELDNAME)[M-N]` where `FIELDNAME` is the name of a field in the model of the selection Analytics Application and the optional pattern `[M-N]` identifies the lower bound `M` and the upper bound `N` for the number of values for that field which must be in the active selection state of the selection Analytics Application for binding to occur.  The active selection state defaults to `selected` (i.e. green) unless the `od` prefix is immediately followed by some combination of the letters `s`, `o`, or `x`, in that order, specifically designating the `selected`, `optional` (i.e. white) and/or `excluded` (i.e. gray) groups of values to be harvested from the selection Analytics Application's selection state. The bindings in the `bindings` array in the request payload override the properties of the corresponding field bindings found in the script of the template Analytics Application.
   *
   * @param query an object with query parameters
   * @param body an object with the body content
   * @throws CreateOdagLinkHttpError
   */
  createOdagLink: typeof createOdagLink;
  /**
   * Checks whether the current user has permission to create new ODAG links. Optionally verify permissions for a specific template Analytics Application or selection Analytics Application context. Returns a boolean indicating create permission status.
   *
   * @param query an object with query parameters
   * @throws GetOdagLinksCancreate_FIX_THIS_QUIRKY_NAMEHttpError
   */
  getOdagLinksCancreate_FIX_THIS_QUIRKY_NAME: typeof getOdagLinksCancreate_FIX_THIS_QUIRKY_NAME;
  /**
   * Registers the current set of ODAG links referenced by a selection Analytics Application and returns only those links the current user can access. Call this when a selection Analytics Application is opened or after modifying its ODAG link references. The response is an array of objects, where the `id` identifies the requested link and `link` contains the link state when accessible. Use `GET /analytics/odag-links/{linkId}` for full details.
   *
   * @param query an object with query parameters
   * @param body an object with the body content
   * @throws CreateOdagLinksSelectionAppLinkUsage_FIX_THIS_QUIRKY_NAMEHttpError
   */
  createOdagLinksSelectionAppLinkUsage_FIX_THIS_QUIRKY_NAME: typeof createOdagLinksSelectionAppLinkUsage_FIX_THIS_QUIRKY_NAME;
  /**
   * Retrieves details of a specific ODAG link, including bindings, properties, status, and template Analytics Application charts. Use this to review link configuration or verify permissions before generating Analytics Applications.
   *
   * @param linkId The ID of the link.
   * @param query an object with query parameters
   * @throws GetOdagLinkHttpError
   */
  getOdagLink: typeof getOdagLink;
  /**
   * Modifies ODAG link configuration including bindings, properties, status, and template Analytics Application reference. You can re-scan the template Analytics Application script to auto-detect binding patterns or override specific settings. If `statusSetting` is provided, the request updates only the link status (other payload fields are not applied).
   *
   * @param linkId The ID of the link.
   * @param query an object with query parameters
   * @param body an object with the body content
   * @throws UpdateOdagLinkHttpError
   */
  updateOdagLink: typeof updateOdagLink;
  /**
   * Retrieves all Analytics Application generation requests for a specific ODAG link, with optional filtering by pending status (`pending`), selection Analytics Application (`selectionAppId`), sheet context (`selectionAppSheet`), or client context (`clientContextHandle`). Use this to track generation history or monitor in-flight requests.
   *
   * @param linkId The ID of the link.
   * @param query an object with query parameters
   * @throws GetOdagLinkRequestsHttpError
   */
  getOdagLinkRequests: typeof getOdagLinkRequests;
  /**
   * Submits a new Analytics Application generation request with the current selection state from a selection Analytics Application. The request is validated against link properties before queuing.  On success, returns a request object that you must monitor for completion using the status endpoint.  Validation failures return detailed error information.
   *
   * @param linkId The ID of the link.
   * @param body an object with the body content
   * @throws CreateOdagLinkRequestHttpError
   */
  createOdagLinkRequest: typeof createOdagLinkRequest;
  /**
   * Clears the cache for odag-links api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the odag-links api
 */
declare const odagLinksExport: OdagLinksAPI;
//#endregion
export { AppIdV2, AppNameParameterV2, AppNameV2, AppStateCondensedV2, BindFormattingV2, BindingArrayV2, BindingV2, CanCreateLinks, CreateOdagLinkHttpError, CreateOdagLinkHttpResponse, CreateOdagLinkRequestHttpError, CreateOdagLinkRequestHttpResponse, CreateOdagLinksSelectionAppLinkUsage_FIX_THIS_QUIRKY_NAMEHttpError, CreateOdagLinksSelectionAppLinkUsage_FIX_THIS_QUIRKY_NAMEHttpResponse, DataLoadStatus, ErrorDetailsV2, ErrorV2, FieldSelectionStateV2, FieldValueV2, GetOdagLinkHttpError, GetOdagLinkHttpResponse, GetOdagLinkRequestsHttpError, GetOdagLinkRequestsHttpResponse, GetOdagLinksCancreate_FIX_THIS_QUIRKY_NAMEHttpError, GetOdagLinksCancreate_FIX_THIS_QUIRKY_NAMEHttpResponse, GetOdagLinksHttpError, GetOdagLinksHttpResponse, LinkAddPayloadV2, LinkId, LinkNameV2, LinkPropAppOpenMethodV2, LinkPropAppRetentionTimeV2, LinkPropDisableV2, LinkPropGenAppLimitV2, LinkPropGenAppNameV2, LinkPropLimitPolicyV2, LinkPropMenuLabelV2, LinkPropOverrideGenAppLimitV2, LinkPropRowEstRangeV2, LinkPropTargetSheetV2, LinkPropertiesV2, LinkPutPayloadV2, LinkRowEstExprV2, LinkStateFullV2, LinkStateRefV2, LinkStatusSettingV2, LinkStatusV2, LinkTypeV2, LinkUsageContextV2, MetaV2, NumericOnlyV2, OdagLinksAPI, RequestArrayV2, RequestIdV2, RequestKindV2, RequestLoadInfoV2, RequestObjectV2, RequestPostPayloadV2, RequestStateV2, SelAppLinkUsagePayload, SelectAppParamTypeV2, SelectStatusV2, SelectionStateDescrV2, SelectionStateV2, UpdateOdagLinkHttpError, UpdateOdagLinkHttpResponse, UserIdV2, UserStateCondensedV2, ValueCountRangeV2, clearCache, createOdagLink, createOdagLinkRequest, createOdagLinksSelectionAppLinkUsage_FIX_THIS_QUIRKY_NAME, odagLinksExport as default, getOdagLink, getOdagLinkRequests, getOdagLinks, getOdagLinksCancreate_FIX_THIS_QUIRKY_NAME, odag_links_d_exports as t, updateOdagLink };