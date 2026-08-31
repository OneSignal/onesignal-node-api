import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { ApiKeyToken } from '../models/ApiKeyToken';
import { ApiKeyTokensListResponse } from '../models/ApiKeyTokensListResponse';
import { App } from '../models/App';
import { AuditLogActor } from '../models/AuditLogActor';
import { AuditLogContext } from '../models/AuditLogContext';
import { AuditLogEvent } from '../models/AuditLogEvent';
import { AuditLogTarget } from '../models/AuditLogTarget';
import { BasicNotification } from '../models/BasicNotification';
import { BasicNotificationAllOf } from '../models/BasicNotificationAllOf';
import { BasicNotificationAllOfAndroidBackgroundLayout } from '../models/BasicNotificationAllOfAndroidBackgroundLayout';
import { Button } from '../models/Button';
import { CopyTemplateRequest } from '../models/CopyTemplateRequest';
import { CreateApiKeyRequest } from '../models/CreateApiKeyRequest';
import { CreateApiKeyResponse } from '../models/CreateApiKeyResponse';
import { CreateJourneyRequest } from '../models/CreateJourneyRequest';
import { CreateNotificationSuccessResponse } from '../models/CreateNotificationSuccessResponse';
import { CreateSegmentConflictResponse } from '../models/CreateSegmentConflictResponse';
import { CreateSegmentSuccessResponse } from '../models/CreateSegmentSuccessResponse';
import { CreateTemplateRequest } from '../models/CreateTemplateRequest';
import { CreateUserConflictResponse } from '../models/CreateUserConflictResponse';
import { CreateUserConflictResponseErrorsInner } from '../models/CreateUserConflictResponseErrorsInner';
import { CreateUserConflictResponseErrorsItemsMeta } from '../models/CreateUserConflictResponseErrorsItemsMeta';
import { CustomEvent } from '../models/CustomEvent';
import { CustomEventsRequest } from '../models/CustomEventsRequest';
import { DeliveryData } from '../models/DeliveryData';
import { EmailWarmUp } from '../models/EmailWarmUp';
import { EmailWarmUpRequest } from '../models/EmailWarmUpRequest';
import { EmailWarmUpStage } from '../models/EmailWarmUpStage';
import { EstimateNotificationRecipientsRequest } from '../models/EstimateNotificationRecipientsRequest';
import { EstimateNotificationRecipientsRequestAllOf } from '../models/EstimateNotificationRecipientsRequestAllOf';
import { EstimateNotificationRecipientsSuccessResponse } from '../models/EstimateNotificationRecipientsSuccessResponse';
import { ExportEventsSuccessResponse } from '../models/ExportEventsSuccessResponse';
import { ExportSubscriptionsRequestBody } from '../models/ExportSubscriptionsRequestBody';
import { ExportSubscriptionsSuccessResponse } from '../models/ExportSubscriptionsSuccessResponse';
import { Filter } from '../models/Filter';
import { FilterExpression } from '../models/FilterExpression';
import { GenericError } from '../models/GenericError';
import { GenericSuccessBoolResponse } from '../models/GenericSuccessBoolResponse';
import { GetNotificationHistoryRequestBody } from '../models/GetNotificationHistoryRequestBody';
import { GetSegmentSuccessResponse } from '../models/GetSegmentSuccessResponse';
import { GetSegmentsSuccessResponse } from '../models/GetSegmentsSuccessResponse';
import { Journey } from '../models/Journey';
import { JourneyAudience } from '../models/JourneyAudience';
import { JourneyBranch } from '../models/JourneyBranch';
import { JourneyBranchStats } from '../models/JourneyBranchStats';
import { JourneyCondition } from '../models/JourneyCondition';
import { JourneyEarlyExit } from '../models/JourneyEarlyExit';
import { JourneyEarlyExitRules } from '../models/JourneyEarlyExitRules';
import { JourneyEarlyExitRulesOnEvent } from '../models/JourneyEarlyExitRulesOnEvent';
import { JourneyEarlyExitRulesOnSegment } from '../models/JourneyEarlyExitRulesOnSegment';
import { JourneyEventAttribute } from '../models/JourneyEventAttribute';
import { JourneyListAudience } from '../models/JourneyListAudience';
import { JourneyListItem } from '../models/JourneyListItem';
import { JourneyListResponse } from '../models/JourneyListResponse';
import { JourneyMessageStats } from '../models/JourneyMessageStats';
import { JourneyNode } from '../models/JourneyNode';
import { JourneyNodeStats } from '../models/JourneyNodeStats';
import { JourneyReentryRules } from '../models/JourneyReentryRules';
import { JourneySchedule } from '../models/JourneySchedule';
import { JourneyStats } from '../models/JourneyStats';
import { JourneyTimePoint } from '../models/JourneyTimePoint';
import { JourneyTimeWindow } from '../models/JourneyTimeWindow';
import { JourneyWaitUntilExpiration } from '../models/JourneyWaitUntilExpiration';
import { LanguageStringMap } from '../models/LanguageStringMap';
import { ListAuditLogsSuccessResponse } from '../models/ListAuditLogsSuccessResponse';
import { Notification } from '../models/Notification';
import { NotificationAllOf } from '../models/NotificationAllOf';
import { NotificationHistorySuccessResponse } from '../models/NotificationHistorySuccessResponse';
import { NotificationSlice } from '../models/NotificationSlice';
import { NotificationTarget } from '../models/NotificationTarget';
import { NotificationWithMeta } from '../models/NotificationWithMeta';
import { NotificationWithMetaAllOf } from '../models/NotificationWithMetaAllOf';
import { Operator } from '../models/Operator';
import { OutcomeData } from '../models/OutcomeData';
import { OutcomesData } from '../models/OutcomesData';
import { PlatformDeliveryData } from '../models/PlatformDeliveryData';
import { PlatformDeliveryDataEmailAllOf } from '../models/PlatformDeliveryDataEmailAllOf';
import { PlatformDeliveryDataSmsAllOf } from '../models/PlatformDeliveryDataSmsAllOf';
import { PropertiesBody } from '../models/PropertiesBody';
import { PropertiesDeltas } from '../models/PropertiesDeltas';
import { PropertiesObject } from '../models/PropertiesObject';
import { Purchase } from '../models/Purchase';
import { RateLimitError } from '../models/RateLimitError';
import { Segment } from '../models/Segment';
import { SegmentData } from '../models/SegmentData';
import { SegmentDetails } from '../models/SegmentDetails';
import { SegmentNotificationTarget } from '../models/SegmentNotificationTarget';
import { StartLiveActivityRequest } from '../models/StartLiveActivityRequest';
import { StartLiveActivitySuccessResponse } from '../models/StartLiveActivitySuccessResponse';
import { Subscription } from '../models/Subscription';
import { SubscriptionBody } from '../models/SubscriptionBody';
import { SubscriptionNotificationTarget } from '../models/SubscriptionNotificationTarget';
import { TemplateResource } from '../models/TemplateResource';
import { TemplatesListResponse } from '../models/TemplatesListResponse';
import { TransferSubscriptionRequestBody } from '../models/TransferSubscriptionRequestBody';
import { UpdateApiKeyRequest } from '../models/UpdateApiKeyRequest';
import { UpdateJourneyNodeRequest } from '../models/UpdateJourneyNodeRequest';
import { UpdateJourneyRequest } from '../models/UpdateJourneyRequest';
import { UpdateLiveActivityRequest } from '../models/UpdateLiveActivityRequest';
import { UpdateLiveActivitySuccessResponse } from '../models/UpdateLiveActivitySuccessResponse';
import { UpdateSegmentRequest } from '../models/UpdateSegmentRequest';
import { UpdateSegmentSuccessResponse } from '../models/UpdateSegmentSuccessResponse';
import { UpdateTemplateRequest } from '../models/UpdateTemplateRequest';
import { UpdateUserRequest } from '../models/UpdateUserRequest';
import { User } from '../models/User';
import { UserIdentityBody } from '../models/UserIdentityBody';
import { WebButton } from '../models/WebButton';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiCancelNotificationRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicancelNotification
     */
    appId: string
    /**
     * 
     * @type string
     * @memberof DefaultApicancelNotification
     */
    notificationId: string
}

export interface DefaultApiCopyTemplateToAppRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicopyTemplateToApp
     */
    templateId: string
    /**
     * 
     * @type string
     * @memberof DefaultApicopyTemplateToApp
     */
    appId: string
    /**
     * 
     * @type CopyTemplateRequest
     * @memberof DefaultApicopyTemplateToApp
     */
    copyTemplateRequest: CopyTemplateRequest
}

export interface DefaultApiCreateAliasRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicreateAlias
     */
    appId: string
    /**
     * 
     * @type string
     * @memberof DefaultApicreateAlias
     */
    aliasLabel: string
    /**
     * 
     * @type string
     * @memberof DefaultApicreateAlias
     */
    aliasId: string
    /**
     * 
     * @type UserIdentityBody
     * @memberof DefaultApicreateAlias
     */
    userIdentityBody: UserIdentityBody
}

export interface DefaultApiCreateAliasBySubscriptionRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicreateAliasBySubscription
     */
    appId: string
    /**
     * 
     * @type string
     * @memberof DefaultApicreateAliasBySubscription
     */
    subscriptionId: string
    /**
     * 
     * @type UserIdentityBody
     * @memberof DefaultApicreateAliasBySubscription
     */
    userIdentityBody: UserIdentityBody
}

export interface DefaultApiCreateApiKeyRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicreateApiKey
     */
    appId: string
    /**
     * 
     * @type CreateApiKeyRequest
     * @memberof DefaultApicreateApiKey
     */
    createApiKeyRequest: CreateApiKeyRequest
}

export interface DefaultApiCreateAppRequest {
    /**
     * 
     * @type App
     * @memberof DefaultApicreateApp
     */
    app: App
}

export interface DefaultApiCreateCustomEventsRequest {
    /**
     * Your OneSignal App ID in UUID v4 format.
     * @type string
     * @memberof DefaultApicreateCustomEvents
     */
    appId: string
    /**
     * 
     * @type CustomEventsRequest
     * @memberof DefaultApicreateCustomEvents
     */
    customEventsRequest: CustomEventsRequest
}

export interface DefaultApiCreateJourneyRequest {
    /**
     * Your OneSignal App ID in UUID v4 format.
     * @type string
     * @memberof DefaultApicreateJourney
     */
    appId: string
    /**
     * 
     * @type CreateJourneyRequest
     * @memberof DefaultApicreateJourney
     */
    createJourneyRequest: CreateJourneyRequest
}

export interface DefaultApiCreateNotificationRequest {
    /**
     * 
     * @type Notification
     * @memberof DefaultApicreateNotification
     */
    notification: Notification
}

export interface DefaultApiCreateSegmentRequest {
    /**
     * The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @type string
     * @memberof DefaultApicreateSegment
     */
    appId: string
    /**
     * 
     * @type Segment
     * @memberof DefaultApicreateSegment
     */
    segment?: Segment
}

export interface DefaultApiCreateSubscriptionRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicreateSubscription
     */
    appId: string
    /**
     * 
     * @type string
     * @memberof DefaultApicreateSubscription
     */
    aliasLabel: string
    /**
     * 
     * @type string
     * @memberof DefaultApicreateSubscription
     */
    aliasId: string
    /**
     * 
     * @type SubscriptionBody
     * @memberof DefaultApicreateSubscription
     */
    subscriptionBody: SubscriptionBody
}

export interface DefaultApiCreateTemplateRequest {
    /**
     * 
     * @type CreateTemplateRequest
     * @memberof DefaultApicreateTemplate
     */
    createTemplateRequest: CreateTemplateRequest
}

export interface DefaultApiCreateUserRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicreateUser
     */
    appId: string
    /**
     * 
     * @type User
     * @memberof DefaultApicreateUser
     */
    user: User
}

export interface DefaultApiDeleteAliasRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApideleteAlias
     */
    appId: string
    /**
     * 
     * @type string
     * @memberof DefaultApideleteAlias
     */
    aliasLabel: string
    /**
     * 
     * @type string
     * @memberof DefaultApideleteAlias
     */
    aliasId: string
    /**
     * 
     * @type string
     * @memberof DefaultApideleteAlias
     */
    aliasLabelToDelete: string
}

export interface DefaultApiDeleteApiKeyRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApideleteApiKey
     */
    appId: string
    /**
     * 
     * @type string
     * @memberof DefaultApideleteApiKey
     */
    tokenId: string
}

export interface DefaultApiDeleteJourneyRequest {
    /**
     * Your OneSignal App ID in UUID v4 format.
     * @type string
     * @memberof DefaultApideleteJourney
     */
    appId: string
    /**
     * UUID of the journey to delete.
     * @type string
     * @memberof DefaultApideleteJourney
     */
    journeyId: string
}

export interface DefaultApiDeleteSegmentRequest {
    /**
     * The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @type string
     * @memberof DefaultApideleteSegment
     */
    appId: string
    /**
     * The segment_id can be found in the URL of the segment when viewing it in the dashboard.
     * @type string
     * @memberof DefaultApideleteSegment
     */
    segmentId: string
}

export interface DefaultApiDeleteSubscriptionRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApideleteSubscription
     */
    appId: string
    /**
     * 
     * @type string
     * @memberof DefaultApideleteSubscription
     */
    subscriptionId: string
}

export interface DefaultApiDeleteTemplateRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApideleteTemplate
     */
    templateId: string
    /**
     * 
     * @type string
     * @memberof DefaultApideleteTemplate
     */
    appId: string
}

export interface DefaultApiDeleteUserRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApideleteUser
     */
    appId: string
    /**
     * 
     * @type string
     * @memberof DefaultApideleteUser
     */
    aliasLabel: string
    /**
     * 
     * @type string
     * @memberof DefaultApideleteUser
     */
    aliasId: string
}

export interface DefaultApiEstimateNotificationRecipientsRequest {
    /**
     * 
     * @type EstimateNotificationRecipientsRequest
     * @memberof DefaultApiestimateNotificationRecipients
     */
    estimateNotificationRecipientsRequest: EstimateNotificationRecipientsRequest
}

export interface DefaultApiExportEventsRequest {
    /**
     * The ID of the notification to export events from.
     * @type string
     * @memberof DefaultApiexportEvents
     */
    notificationId: string
    /**
     * The ID of the app that the notification belongs to.
     * @type string
     * @memberof DefaultApiexportEvents
     */
    appId: string
}

export interface DefaultApiExportSubscriptionsRequest {
    /**
     * The app ID that you want to export devices from
     * @type string
     * @memberof DefaultApiexportSubscriptions
     */
    appId: string
    /**
     * 
     * @type ExportSubscriptionsRequestBody
     * @memberof DefaultApiexportSubscriptions
     */
    exportSubscriptionsRequestBody?: ExportSubscriptionsRequestBody
}

export interface DefaultApiGetAliasesRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetAliases
     */
    appId: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetAliases
     */
    aliasLabel: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetAliases
     */
    aliasId: string
}

export interface DefaultApiGetAliasesBySubscriptionRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetAliasesBySubscription
     */
    appId: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetAliasesBySubscription
     */
    subscriptionId: string
}

export interface DefaultApiGetAppRequest {
    /**
     * An app id
     * @type string
     * @memberof DefaultApigetApp
     */
    appId: string
}

export interface DefaultApiGetAppsRequest {
}

export interface DefaultApiGetNotificationRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetNotification
     */
    appId: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetNotification
     */
    notificationId: string
}

export interface DefaultApiGetNotificationHistoryRequest {
    /**
     * The \&quot;id\&quot; of the message found in the Notification object
     * @type string
     * @memberof DefaultApigetNotificationHistory
     */
    notificationId: string
    /**
     * 
     * @type GetNotificationHistoryRequestBody
     * @memberof DefaultApigetNotificationHistory
     */
    getNotificationHistoryRequestBody: GetNotificationHistoryRequestBody
}

export interface DefaultApiGetNotificationsRequest {
    /**
     * The app ID that you want to view notifications from
     * @type string
     * @memberof DefaultApigetNotifications
     */
    appId: string
    /**
     * How many notifications to return.  Max is 50.  Default is 50.
     * @type number
     * @memberof DefaultApigetNotifications
     */
    limit?: number
    /**
     * Page offset.  Default is 0.  Results are sorted by queued_at in descending order.  queued_at is a representation of the time that the notification was queued at.
     * @type number
     * @memberof DefaultApigetNotifications
     */
    offset?: number
    /**
     * Kind of notifications returned:   * unset - All notification types (default)   * &#x60;0&#x60; - Dashboard only   * &#x60;1&#x60; - API only   * &#x60;3&#x60; - Automated only 
     * @type 0 | 1 | 3
     * @memberof DefaultApigetNotifications
     */
    kind?: 0 | 1 | 3
    /**
     * Time-offset pagination cursor for sequential pulls of all messages.  Accepts either an ISO 8601 formatted timestamp (e.g. &#x60;2025-01-01T00:00:00.000Z&#x60;) or the opaque Base64 cursor token returned as &#x60;next_time_offset&#x60; in a prior response.  When set, results are sorted ascending by send_after and the standard &#x60;offset&#x60; parameter cannot be used.  Repeat the request with each &#x60;next_time_offset&#x60; until an empty notifications array is returned.
     * @type string
     * @memberof DefaultApigetNotifications
     */
    timeOffset?: string
}

export interface DefaultApiGetOutcomesRequest {
    /**
     * The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @type string
     * @memberof DefaultApigetOutcomes
     */
    appId: string
    /**
     * Required Comma-separated list of names and the value (sum/count) for the returned outcome data. Note: Clicks only support count aggregation. For out-of-the-box OneSignal outcomes such as click and session duration, please use the \&quot;os\&quot; prefix with two underscores. For other outcomes, please use the name specified by the user. Example:os__session_duration.count,os__click.count,CustomOutcomeName.sum 
     * @type string
     * @memberof DefaultApigetOutcomes
     */
    outcomeNames: string
    /**
     * Optional If outcome names contain any commas, then please specify only one value at a time. Example: outcome_names[]&#x3D;os__click.count&amp;outcome_names[]&#x3D;Sales, Purchase.count where \&quot;Sales, Purchase\&quot; is the custom outcomes with a comma in the name. 
     * @type string
     * @memberof DefaultApigetOutcomes
     */
    outcomeNames2?: string
    /**
     * Optional Time range for the returned data. The values can be 1h (for the last 1 hour data), 1d (for the last 1 day data), or 1mo (for the last 1 month data). Default is 1h if the parameter is omitted. 
     * @type string
     * @memberof DefaultApigetOutcomes
     */
    outcomeTimeRange?: string
    /**
     * Optional Platform id. Refer device\&#39;s platform ids for values. Example: outcome_platform&#x3D;0 for iOS outcome_platform&#x3D;7,8 for Safari and Firefox Default is data from all platforms if the parameter is omitted. 
     * @type string
     * @memberof DefaultApigetOutcomes
     */
    outcomePlatforms?: string
    /**
     * Optional Attribution type for the outcomes. The values can be direct or influenced or unattributed. Example: outcome_attribution&#x3D;direct Default is total (returns direct+influenced+unattributed) if the parameter is omitted. 
     * @type string
     * @memberof DefaultApigetOutcomes
     */
    outcomeAttribution?: string
}

export interface DefaultApiGetSegmentRequest {
    /**
     * The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @type string
     * @memberof DefaultApigetSegment
     */
    appId: string
    /**
     * The segment\&#39;s unique identifier. Can be found using the View Segments API or in the URL of the segment when viewing it in the dashboard.
     * @type string
     * @memberof DefaultApigetSegment
     */
    segmentId: string
    /**
     * Set to true to include segment metadata and filters in the response.
     * @type boolean
     * @memberof DefaultApigetSegment
     */
    includeSegmentDetail?: boolean
}

export interface DefaultApiGetSegmentsRequest {
    /**
     * The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @type string
     * @memberof DefaultApigetSegments
     */
    appId: string
    /**
     * Segments are listed in ascending order of created_at date. offset will omit that number of segments from the beginning of the list. Eg offset 5, will remove the 5 earliest created Segments.
     * @type number
     * @memberof DefaultApigetSegments
     */
    offset?: number
    /**
     * The amount of Segments in the response. Maximum 300.
     * @type number
     * @memberof DefaultApigetSegments
     */
    limit?: number
}

export interface DefaultApiGetUserRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetUser
     */
    appId: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetUser
     */
    aliasLabel: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetUser
     */
    aliasId: string
}

export interface DefaultApiListAuditLogsRequest {
    /**
     * The UUID of the organization to retrieve audit logs for. Must match the authenticated Organization API Key.
     * @type string
     * @memberof DefaultApilistAuditLogs
     */
    organizationId: string
    /**
     * Start of the time range in ISO 8601 format (e.g. 2026-02-01T00:00:00Z). Required unless cursor is provided. Must be within the last 90 days.
     * @type string
     * @memberof DefaultApilistAuditLogs
     */
    startTime?: string
    /**
     * End of the time range in ISO 8601 format. Defaults to the current time. Must be after start_time.
     * @type string
     * @memberof DefaultApilistAuditLogs
     */
    endTime?: string
    /**
     * Pagination cursor returned in a previous response as next_cursor. When provided, start_time and end_time are ignored.
     * @type string
     * @memberof DefaultApilistAuditLogs
     */
    cursor?: string
    /**
     * Maximum number of events to return per page. Minimum 1, maximum 100. Values outside this range are clamped automatically by the server.
     * @type number
     * @memberof DefaultApilistAuditLogs
     */
    limit?: number
    /**
     * Filter events by app UUID. Accepts up to 10 values. Org-level events are always included.
     * @type Array&lt;string&gt;
     * @memberof DefaultApilistAuditLogs
     */
    appIds?: Array<string>
    /**
     * Filter by action type (e.g. notification.sent, segment.created). Accepts up to 20 values.
     * @type Array&lt;string&gt;
     * @memberof DefaultApilistAuditLogs
     */
    actions?: Array<string>
    /**
     * Filter by actor UUID (the user or service that performed the action). Accepts up to 10 values.
     * @type Array&lt;string&gt;
     * @memberof DefaultApilistAuditLogs
     */
    actorIds?: Array<string>
    /**
     * Filter by actor email address. Accepts up to 10 values.
     * @type Array&lt;string&gt;
     * @memberof DefaultApilistAuditLogs
     */
    actorEmails?: Array<string>
    /**
     * Filter by the type of resource the action was performed on (e.g. notification, segment, journey). Accepts up to 10 values.
     * @type Array&lt;string&gt;
     * @memberof DefaultApilistAuditLogs
     */
    targetTypes?: Array<string>
    /**
     * Filter by the UUID of the resource the action was performed on. Accepts up to 10 values.
     * @type Array&lt;string&gt;
     * @memberof DefaultApilistAuditLogs
     */
    targetIds?: Array<string>
    /**
     * Filter by the IP address the action originated from. Accepts up to 10 values.
     * @type Array&lt;string&gt;
     * @memberof DefaultApilistAuditLogs
     */
    ipAddresses?: Array<string>
}

export interface DefaultApiRotateApiKeyRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApirotateApiKey
     */
    appId: string
    /**
     * 
     * @type string
     * @memberof DefaultApirotateApiKey
     */
    tokenId: string
}

export interface DefaultApiStartLiveActivityRequest {
    /**
     * Your OneSignal App ID in UUID v4 format.
     * @type string
     * @memberof DefaultApistartLiveActivity
     */
    appId: string
    /**
     * The name of the Live Activity defined in your app. This should match the attributes struct used in your app\&#39;s Live Activity implementation.
     * @type string
     * @memberof DefaultApistartLiveActivity
     */
    activityType: string
    /**
     * 
     * @type StartLiveActivityRequest
     * @memberof DefaultApistartLiveActivity
     */
    startLiveActivityRequest: StartLiveActivityRequest
}

export interface DefaultApiTransferSubscriptionRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApitransferSubscription
     */
    appId: string
    /**
     * 
     * @type string
     * @memberof DefaultApitransferSubscription
     */
    subscriptionId: string
    /**
     * 
     * @type TransferSubscriptionRequestBody
     * @memberof DefaultApitransferSubscription
     */
    transferSubscriptionRequestBody: TransferSubscriptionRequestBody
}

export interface DefaultApiUnsubscribeEmailWithTokenRequest {
    /**
     * The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @type string
     * @memberof DefaultApiunsubscribeEmailWithToken
     */
    appId: string
    /**
     * The id of the message found in the creation notification POST response, View Notifications GET response, or URL within the Message Report.
     * @type string
     * @memberof DefaultApiunsubscribeEmailWithToken
     */
    notificationId: string
    /**
     * The unsubscribe token that is generated via liquid syntax in {{subscription.unsubscribe_token}} when personalizing an email.
     * @type string
     * @memberof DefaultApiunsubscribeEmailWithToken
     */
    token: string
}

export interface DefaultApiUpdateApiKeyRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateApiKey
     */
    appId: string
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateApiKey
     */
    tokenId: string
    /**
     * 
     * @type UpdateApiKeyRequest
     * @memberof DefaultApiupdateApiKey
     */
    updateApiKeyRequest: UpdateApiKeyRequest
}

export interface DefaultApiUpdateAppRequest {
    /**
     * An app id
     * @type string
     * @memberof DefaultApiupdateApp
     */
    appId: string
    /**
     * 
     * @type App
     * @memberof DefaultApiupdateApp
     */
    app: App
}

export interface DefaultApiUpdateJourneyRequest {
    /**
     * Your OneSignal App ID in UUID v4 format.
     * @type string
     * @memberof DefaultApiupdateJourney
     */
    appId: string
    /**
     * UUID of the journey to update.
     * @type string
     * @memberof DefaultApiupdateJourney
     */
    journeyId: string
    /**
     * 
     * @type UpdateJourneyRequest
     * @memberof DefaultApiupdateJourney
     */
    updateJourneyRequest: UpdateJourneyRequest
}

export interface DefaultApiUpdateJourneyNodeRequest {
    /**
     * Your OneSignal App ID in UUID v4 format.
     * @type string
     * @memberof DefaultApiupdateJourneyNode
     */
    appId: string
    /**
     * UUID of the journey that owns the node.
     * @type string
     * @memberof DefaultApiupdateJourneyNode
     */
    journeyId: string
    /**
     * Server-assigned UUID of the node to update, from a prior View journey fetch.
     * @type string
     * @memberof DefaultApiupdateJourneyNode
     */
    nodeId: string
    /**
     * 
     * @type UpdateJourneyNodeRequest
     * @memberof DefaultApiupdateJourneyNode
     */
    updateJourneyNodeRequest: UpdateJourneyNodeRequest
}

export interface DefaultApiUpdateLiveActivityRequest {
    /**
     * The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @type string
     * @memberof DefaultApiupdateLiveActivity
     */
    appId: string
    /**
     * Live Activity record ID
     * @type string
     * @memberof DefaultApiupdateLiveActivity
     */
    activityId: string
    /**
     * 
     * @type UpdateLiveActivityRequest
     * @memberof DefaultApiupdateLiveActivity
     */
    updateLiveActivityRequest: UpdateLiveActivityRequest
}

export interface DefaultApiUpdateSegmentRequest {
    /**
     * The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @type string
     * @memberof DefaultApiupdateSegment
     */
    appId: string
    /**
     * The segment\&#39;s unique identifier. Can be found using the View Segments API or in the URL of the segment when viewing it in the dashboard.
     * @type string
     * @memberof DefaultApiupdateSegment
     */
    segmentId: string
    /**
     * 
     * @type UpdateSegmentRequest
     * @memberof DefaultApiupdateSegment
     */
    updateSegmentRequest?: UpdateSegmentRequest
}

export interface DefaultApiUpdateSubscriptionRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateSubscription
     */
    appId: string
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateSubscription
     */
    subscriptionId: string
    /**
     * 
     * @type SubscriptionBody
     * @memberof DefaultApiupdateSubscription
     */
    subscriptionBody: SubscriptionBody
}

export interface DefaultApiUpdateSubscriptionByTokenRequest {
    /**
     * Your OneSignal App ID in UUID v4 format.
     * @type string
     * @memberof DefaultApiupdateSubscriptionByToken
     */
    appId: string
    /**
     * The type of token to use when looking up the subscription. See Subscription Types.
     * @type string
     * @memberof DefaultApiupdateSubscriptionByToken
     */
    tokenType: string
    /**
     * The value of the token to lookup by (e.g., email address, phone number).
     * @type string
     * @memberof DefaultApiupdateSubscriptionByToken
     */
    token: string
    /**
     * 
     * @type SubscriptionBody
     * @memberof DefaultApiupdateSubscriptionByToken
     */
    subscriptionBody: SubscriptionBody
}

export interface DefaultApiUpdateTemplateRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateTemplate
     */
    templateId: string
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateTemplate
     */
    appId: string
    /**
     * 
     * @type UpdateTemplateRequest
     * @memberof DefaultApiupdateTemplate
     */
    updateTemplateRequest: UpdateTemplateRequest
}

export interface DefaultApiUpdateUserRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateUser
     */
    appId: string
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateUser
     */
    aliasLabel: string
    /**
     * 
     * @type string
     * @memberof DefaultApiupdateUser
     */
    aliasId: string
    /**
     * 
     * @type UpdateUserRequest
     * @memberof DefaultApiupdateUser
     */
    updateUserRequest: UpdateUserRequest
}

export interface DefaultApiViewApiKeysRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiviewApiKeys
     */
    appId: string
}

export interface DefaultApiViewJourneyRequest {
    /**
     * Your OneSignal App ID in UUID v4 format.
     * @type string
     * @memberof DefaultApiviewJourney
     */
    appId: string
    /**
     * UUID of the journey to retrieve.
     * @type string
     * @memberof DefaultApiviewJourney
     */
    journeyId: string
}

export interface DefaultApiViewJourneyStatsRequest {
    /**
     * Your OneSignal App ID in UUID v4 format.
     * @type string
     * @memberof DefaultApiviewJourneyStats
     */
    appId: string
    /**
     * UUID of the journey to retrieve stats for.
     * @type string
     * @memberof DefaultApiviewJourneyStats
     */
    journeyId: string
}

export interface DefaultApiViewJourneysRequest {
    /**
     * Your OneSignal App ID in UUID v4 format.
     * @type string
     * @memberof DefaultApiviewJourneys
     */
    appId: string
    /**
     * Opaque pagination token from a previous response\&#39;s next_cursor. Omit for the first page.
     * @type string
     * @memberof DefaultApiviewJourneys
     */
    cursor?: string
    /**
     * Maximum journeys to return per page. Minimum 1, maximum 50.
     * @type number
     * @memberof DefaultApiviewJourneys
     */
    limit?: number
}

export interface DefaultApiViewTemplateRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiviewTemplate
     */
    templateId: string
    /**
     * 
     * @type string
     * @memberof DefaultApiviewTemplate
     */
    appId: string
}

export interface DefaultApiViewTemplatesRequest {
    /**
     * Your OneSignal App ID in UUID v4 format.
     * @type string
     * @memberof DefaultApiviewTemplates
     */
    appId: string
    /**
     * Maximum number of templates. Default and max is 50.
     * @type number
     * @memberof DefaultApiviewTemplates
     */
    limit?: number
    /**
     * Pagination offset.
     * @type number
     * @memberof DefaultApiviewTemplates
     */
    offset?: number
    /**
     * Filter by delivery channel.
     * @type &#39;push&#39; | &#39;email&#39; | &#39;sms&#39;
     * @memberof DefaultApiviewTemplates
     */
    channel?: 'push' | 'email' | 'sms'
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Used to stop a scheduled or currently outgoing notification
     * Stop a scheduled or currently outgoing notification
     * @param param the request object
     */
    public cancelNotification(param: DefaultApiCancelNotificationRequest, options?: Configuration): Promise<GenericSuccessBoolResponse> {
        return this.api.cancelNotification(param.appId, param.notificationId,  options).toPromise();
    }

    /**
     * Copy a template to a destination app.
     * Copy template to another app
     * @param param the request object
     */
    public copyTemplateToApp(param: DefaultApiCopyTemplateToAppRequest, options?: Configuration): Promise<TemplateResource> {
        return this.api.copyTemplateToApp(param.templateId, param.appId, param.copyTemplateRequest,  options).toPromise();
    }

    /**
     * Upserts one or more Aliases to an existing User identified by (:alias_label, :alias_id).
     * @param param the request object
     */
    public createAlias(param: DefaultApiCreateAliasRequest, options?: Configuration): Promise<UserIdentityBody> {
        return this.api.createAlias(param.appId, param.aliasLabel, param.aliasId, param.userIdentityBody,  options).toPromise();
    }

    /**
     * Upserts one or more Aliases for the User identified by :subscription_id.
     * @param param the request object
     */
    public createAliasBySubscription(param: DefaultApiCreateAliasBySubscriptionRequest, options?: Configuration): Promise<UserIdentityBody> {
        return this.api.createAliasBySubscription(param.appId, param.subscriptionId, param.userIdentityBody,  options).toPromise();
    }

    /**
     * Use this API to create a new App API Key (also called a Rich Authentication Token) for a specific OneSignal app. These keys are used to authenticate API requests at the app level and offer enhanced security features, including optional IP allowlisting.
     * Create API key
     * @param param the request object
     */
    public createApiKey(param: DefaultApiCreateApiKeyRequest, options?: Configuration): Promise<CreateApiKeyResponse> {
        return this.api.createApiKey(param.appId, param.createApiKeyRequest,  options).toPromise();
    }

    /**
     * Creates a new OneSignal app
     * Create an app
     * @param param the request object
     */
    public createApp(param: DefaultApiCreateAppRequest, options?: Configuration): Promise<App> {
        return this.api.createApp(param.app,  options).toPromise();
    }

    /**
     * The Custom Events API allows you to record user events. Custom events can represent any action users take in your application, such as completing a purchase, viewing content, or achieving milestones.
     * Create custom events
     * @param param the request object
     */
    public createCustomEvents(param: DefaultApiCreateCustomEventsRequest, options?: Configuration): Promise<object> {
        return this.api.createCustomEvents(param.appId, param.customEventsRequest,  options).toPromise();
    }

    /**
     * The Journeys API is in beta. Endpoints and response fields can still change. Create a new journey with an audience and a node graph. Journeys are always created in the draft state. The authenticated App API key must have permission to create journeys.
     * Create journey
     * @param param the request object
     */
    public createJourney(param: DefaultApiCreateJourneyRequest, options?: Configuration): Promise<Journey> {
        return this.api.createJourney(param.appId, param.createJourneyRequest,  options).toPromise();
    }

    /**
     * Sends notifications to your users.  **Target by External ID (push example):** set `include_aliases` to `{ \"external_id\": [\"your-user-id\"] }` and set `target_channel` to `push` (or `email` / `sms` for those channels). Alias object keys must match API labels exactly (for example `external_id`, not camelCase).  **Do not confuse** the notification-level `external_id` field with External ID targeting: top-level `external_id` / `idempotency_key` are for idempotent notification requests only, not for selecting recipients.  **Targeting compatibility:** `include_aliases` must not be combined with other targeting modes (segments, filters, subscription IDs, legacy player IDs, etc.). Clients should send only one targeting strategy per request. 
     * Create notification
     * @param param the request object
     */
    public createNotification(param: DefaultApiCreateNotificationRequest, options?: Configuration): Promise<CreateNotificationSuccessResponse> {
        return this.api.createNotification(param.notification,  options).toPromise();
    }

    /**
     * Create a segment visible and usable in the dashboard and API - Required: OneSignal Paid Plan The Create Segment method is used when you want your server to programmatically create a segment instead of using the OneSignal Dashboard UI. Just like creating Segments from the dashboard you can pass in filters with multiple \"AND\" or \"OR\" operator\'s. &#x1F6A7; Does Not Update Segments This endpoint will only create segments, it does not edit or update currently created Segments. You will need to use the Delete Segment endpoint and re-create it with this endpoint to edit. 
     * Create Segment
     * @param param the request object
     */
    public createSegment(param: DefaultApiCreateSegmentRequest, options?: Configuration): Promise<CreateSegmentSuccessResponse> {
        return this.api.createSegment(param.appId, param.segment,  options).toPromise();
    }

    /**
     * Creates a new Subscription under the User provided. Useful to add email addresses and SMS numbers to the User.
     * @param param the request object
     */
    public createSubscription(param: DefaultApiCreateSubscriptionRequest, options?: Configuration): Promise<SubscriptionBody> {
        return this.api.createSubscription(param.appId, param.aliasLabel, param.aliasId, param.subscriptionBody,  options).toPromise();
    }

    /**
     * Create reusable message templates for push, email, and SMS channels.
     * Create template
     * @param param the request object
     */
    public createTemplate(param: DefaultApiCreateTemplateRequest, options?: Configuration): Promise<TemplateResource> {
        return this.api.createTemplate(param.createTemplateRequest,  options).toPromise();
    }

    /**
     * Creates a User, optionally Subscriptions owned by the User as well as Aliases. Aliases provided in the payload will be used to look up an existing User.
     * @param param the request object
     */
    public createUser(param: DefaultApiCreateUserRequest, options?: Configuration): Promise<User> {
        return this.api.createUser(param.appId, param.user,  options).toPromise();
    }

    /**
     * Deletes an alias by alias label
     * @param param the request object
     */
    public deleteAlias(param: DefaultApiDeleteAliasRequest, options?: Configuration): Promise<UserIdentityBody> {
        return this.api.deleteAlias(param.appId, param.aliasLabel, param.aliasId, param.aliasLabelToDelete,  options).toPromise();
    }

    /**
     * Delete a specific Rich Authentication Token (App API Key) for a OneSignal app. Requires your Organization API Key and the token’s unique ID, not the token value itself.
     * Delete API key
     * @param param the request object
     */
    public deleteApiKey(param: DefaultApiDeleteApiKeyRequest, options?: Configuration): Promise<object> {
        return this.api.deleteApiKey(param.appId, param.tokenId,  options).toPromise();
    }

    /**
     * The Journeys API is in beta. Endpoints and response fields can still change. Permanently delete a journey by its UUID. Returns { \"success\": true } on success. The authenticated App API key must have permission to delete journeys. Deleting a journey stops any in-flight users and cannot be undone. Archive a running journey instead if you need to keep its data.
     * Delete journey
     * @param param the request object
     */
    public deleteJourney(param: DefaultApiDeleteJourneyRequest, options?: Configuration): Promise<GenericSuccessBoolResponse> {
        return this.api.deleteJourney(param.appId, param.journeyId,  options).toPromise();
    }

    /**
     * Delete a segment (not user devices) - Required: OneSignal Paid Plan You can delete a segment under your app by calling this API. You must provide an API key in the Authorization header that has admin access on the app. The segment_id can be found in the URL of the segment when viewing it in the dashboard. 
     * Delete Segment
     * @param param the request object
     */
    public deleteSegment(param: DefaultApiDeleteSegmentRequest, options?: Configuration): Promise<GenericSuccessBoolResponse> {
        return this.api.deleteSegment(param.appId, param.segmentId,  options).toPromise();
    }

    /**
     * Deletes the Subscription.
     * @param param the request object
     */
    public deleteSubscription(param: DefaultApiDeleteSubscriptionRequest, options?: Configuration): Promise<void> {
        return this.api.deleteSubscription(param.appId, param.subscriptionId,  options).toPromise();
    }

    /**
     * Delete a template by id.
     * Delete template
     * @param param the request object
     */
    public deleteTemplate(param: DefaultApiDeleteTemplateRequest, options?: Configuration): Promise<GenericSuccessBoolResponse> {
        return this.api.deleteTemplate(param.templateId, param.appId,  options).toPromise();
    }

    /**
     * Removes the User identified by (:alias_label, :alias_id), and all Subscriptions and Aliases
     * @param param the request object
     */
    public deleteUser(param: DefaultApiDeleteUserRequest, options?: Configuration): Promise<void> {
        return this.api.deleteUser(param.appId, param.aliasLabel, param.aliasId,  options).toPromise();
    }

    /**
     * Returns the estimated number of recipients for a notification\'s targeting, without creating or sending anything. The returned `count` reflects the same audience-size estimate you would see under \"Choose your target audience\" when composing a message. It is based on the user targeting method you\'ve set and the specific platforms the message is targeted to send to. This endpoint only supports a subset of targeting parameters: `included_segments` is required (its `\"All\"` shorthand targets every subscriber), and `excluded_segments`, `filters`, `include_aliases`, and `target_channel` narrow that audience further. Use `target_channel` to select platforms. `include_subscription_ids` and the other raw subscription id/token fields, and the individual `isIos` / `isAndroid` / etc. platform flags, are not supported. All other notification fields (content, delivery options, and so on) are accepted, but ignored. 
     * Estimate notification recipients
     * @param param the request object
     */
    public estimateNotificationRecipients(param: DefaultApiEstimateNotificationRecipientsRequest, options?: Configuration): Promise<EstimateNotificationRecipientsSuccessResponse> {
        return this.api.estimateNotificationRecipients(param.estimateNotificationRecipientsRequest,  options).toPromise();
    }

    /**
     * Generate a compressed CSV report of all of the events data for a notification. This will return a URL immediately upon success but it may take several minutes for the CSV to become available at that URL depending on the volume of data. Only one export can be in-progress per OneSignal account at any given time.
     * Export CSV of Events
     * @param param the request object
     */
    public exportEvents(param: DefaultApiExportEventsRequest, options?: Configuration): Promise<ExportEventsSuccessResponse> {
        return this.api.exportEvents(param.notificationId, param.appId,  options).toPromise();
    }

    /**
     * Generate a compressed CSV export of all of your current user data This method can be used to generate a compressed CSV export of all of your current user data. It is a much faster alternative than retrieving this data using the /players API endpoint. The file will be compressed using GZip. The file may take several minutes to generate depending on the number of users in your app. The URL generated will be available for 3 days and includes random v4 uuid as part of the resource name to be unguessable. &#x1F6A7; 403 Error Responses          You can test if it is complete by making a GET request to the csv_file_url value. This file may take time to generate depending on how many device records are being pulled. If the file is not ready, a 403 error will be returned. Otherwise the file itself will be returned. &#x1F6A7; Requires Authentication Key Requires your OneSignal App\'s REST API Key, available in Keys & IDs. &#x1F6A7; Concurrent Exports Only one concurrent export is allowed per OneSignal account. Please ensure you have successfully downloaded the .csv.gz file before exporting another app. CSV File Format: - Default Columns:   | Field | Details |   | --- | --- |   | id | OneSignal Player Id |   | identifier | Push Token |   | session_count | Number of times they visited the app or site   | language | Device language code |   | timezone | Number of seconds away from UTC. Example: -28800 |   | game_version | Version of your mobile app gathered from Android Studio versionCode in your App/build.gradle and iOS uses kCFBundleVersionKey in Xcode. |   | device_os | Device Operating System Version. Example: 80 = Chrome 80, 9 = Android 9 |   | device_type | Device Operating System Type |   | device_model | Device Hardware String Code. Example: Mobile Web Subscribers will have `Linux armv` |   | ad_id | Based on the Google Advertising Id for Android, identifierForVendor for iOS. OptedOut means user turned off Advertising tracking on the device. |   | tags | Current OneSignal Data Tags on the device. |   | last_active | Date and time the user last opened the mobile app or visited the site. |   | playtime | Total amount of time in seconds the user had the mobile app open. |   | amount_spent |  Mobile only - amount spent in USD on In-App Purchases. |    | created_at | Date and time the device record was created in OneSignal. Mobile - first time they opened the app with OneSignal SDK. Web - first time the user subscribed to the site. |   | invalid_identifier | t = unsubscribed, f = subscibed |   | badge_count | Current number of badges on the device | - Extra Columns:   | Field | Details |   | --- | --- |   | external_user_id | Your User Id set on the device |   | notification_types | Notification types |   | location | Location points (Latitude and Longitude) set on the device. |   | country | Country code |   | rooted | Android device rooted or not |   | ip | IP Address of the device if being tracked. See Handling Personal Data. |   | web_auth | Web Only authorization key. |   | web_p256 | Web Only p256 key. | 
     * Export CSV of Subscriptions
     * @param param the request object
     */
    public exportSubscriptions(param: DefaultApiExportSubscriptionsRequest, options?: Configuration): Promise<ExportSubscriptionsSuccessResponse> {
        return this.api.exportSubscriptions(param.appId, param.exportSubscriptionsRequestBody,  options).toPromise();
    }

    /**
     * Lists all Aliases for the User identified by (:alias_label, :alias_id).
     * @param param the request object
     */
    public getAliases(param: DefaultApiGetAliasesRequest, options?: Configuration): Promise<UserIdentityBody> {
        return this.api.getAliases(param.appId, param.aliasLabel, param.aliasId,  options).toPromise();
    }

    /**
     * Lists all Aliases for the User identified by :subscription_id.
     * @param param the request object
     */
    public getAliasesBySubscription(param: DefaultApiGetAliasesBySubscriptionRequest, options?: Configuration): Promise<UserIdentityBody> {
        return this.api.getAliasesBySubscription(param.appId, param.subscriptionId,  options).toPromise();
    }

    /**
     * View the details of a single OneSignal app
     * View an app
     * @param param the request object
     */
    public getApp(param: DefaultApiGetAppRequest, options?: Configuration): Promise<App> {
        return this.api.getApp(param.appId,  options).toPromise();
    }

    /**
     * View the details of all of your current OneSignal apps
     * View apps
     * @param param the request object
     */
    public getApps(param: DefaultApiGetAppsRequest = {}, options?: Configuration): Promise<Array<App>> {
        return this.api.getApps( options).toPromise();
    }

    /**
     * View the details of a single notification and outcomes associated with it
     * View notification
     * @param param the request object
     */
    public getNotification(param: DefaultApiGetNotificationRequest, options?: Configuration): Promise<NotificationWithMeta> {
        return this.api.getNotification(param.appId, param.notificationId,  options).toPromise();
    }

    /**
     * -> View the devices sent a message - OneSignal Paid Plan Required This method will return all devices that were sent the given notification_id of an Email or Push Notification if used within 7 days of the date sent. After 7 days of the sending date, the message history data will be unavailable. After a successful response is received, the destination url may be polled until the file becomes available. Most exports are done in ~1-3 minutes, so setting a poll interval of 10 seconds should be adequate. For use cases that are not meant to be consumed by a script, an email will be sent to the supplied email address. &#x1F6A7; Requirements A OneSignal Paid Plan. Turn on Send History via OneSignal API in Settings -> Analytics. Cannot get data before this was turned on. Must be called within 7 days after sending the message. Messages targeting under 1000 recipients will not have \"sent\" events recorded, but will show \"clicked\" events. Requires your OneSignal App\'s REST API Key, available in Keys & IDs.
     * Notification History
     * @param param the request object
     */
    public getNotificationHistory(param: DefaultApiGetNotificationHistoryRequest, options?: Configuration): Promise<NotificationHistorySuccessResponse> {
        return this.api.getNotificationHistory(param.notificationId, param.getNotificationHistoryRequestBody,  options).toPromise();
    }

    /**
     * View the details of multiple notifications
     * View notifications
     * @param param the request object
     */
    public getNotifications(param: DefaultApiGetNotificationsRequest, options?: Configuration): Promise<NotificationSlice> {
        return this.api.getNotifications(param.appId, param.limit, param.offset, param.kind, param.timeOffset,  options).toPromise();
    }

    /**
     * View the details of all the outcomes associated with your app  &#x1F6A7; Requires Authentication Key Requires your OneSignal App\'s REST API Key, available in Keys & IDs.  &#x1F6A7; Outcome Data Limitations Outcomes are only accessible for around 30 days before deleted from our servers. You will need to export this data every month if you want to keep it. 
     * View Outcomes
     * @param param the request object
     */
    public getOutcomes(param: DefaultApiGetOutcomesRequest, options?: Configuration): Promise<OutcomesData> {
        return this.api.getOutcomes(param.appId, param.outcomeNames, param.outcomeNames2, param.outcomeTimeRange, param.outcomePlatforms, param.outcomeAttribution,  options).toPromise();
    }

    /**
     * Retrieve details for a single segment by its ID, including subscriber count and optionally segment metadata and filters.
     * View Segment
     * @param param the request object
     */
    public getSegment(param: DefaultApiGetSegmentRequest, options?: Configuration): Promise<GetSegmentSuccessResponse> {
        return this.api.getSegment(param.appId, param.segmentId, param.includeSegmentDetail,  options).toPromise();
    }

    /**
     * Returns an array of segments from an app.
     * Get Segments
     * @param param the request object
     */
    public getSegments(param: DefaultApiGetSegmentsRequest, options?: Configuration): Promise<GetSegmentsSuccessResponse> {
        return this.api.getSegments(param.appId, param.offset, param.limit,  options).toPromise();
    }

    /**
     * Returns the User’s properties, Aliases, and Subscriptions.
     * @param param the request object
     */
    public getUser(param: DefaultApiGetUserRequest, options?: Configuration): Promise<User> {
        return this.api.getUser(param.appId, param.aliasLabel, param.aliasId,  options).toPromise();
    }

    /**
     * Retrieve a paginated, time-scoped list of audit log events for an organization. Requires an Enterprise plan with the audit logs entitlement enabled.
     * List audit logs
     * @param param the request object
     */
    public listAuditLogs(param: DefaultApiListAuditLogsRequest, options?: Configuration): Promise<ListAuditLogsSuccessResponse> {
        return this.api.listAuditLogs(param.organizationId, param.startTime, param.endTime, param.cursor, param.limit, param.appIds, param.actions, param.actorIds, param.actorEmails, param.targetTypes, param.targetIds, param.ipAddresses,  options).toPromise();
    }

    /**
     * Rotate a Rich Authentication Token (App API Key) for a OneSignal app. Rotating a key revokes the current token and generates a new one under the same configuration—ideal when a token is lost or compromised but you don’t want to recreate and reconfigure it from scratch.
     * Rotate API key
     * @param param the request object
     */
    public rotateApiKey(param: DefaultApiRotateApiKeyRequest, options?: Configuration): Promise<CreateApiKeyResponse> {
        return this.api.rotateApiKey(param.appId, param.tokenId,  options).toPromise();
    }

    /**
     * Remotely start a Live Activity on iOS devices via OneSignal’s REST API.
     * Start Live Activity
     * @param param the request object
     */
    public startLiveActivity(param: DefaultApiStartLiveActivityRequest, options?: Configuration): Promise<StartLiveActivitySuccessResponse> {
        return this.api.startLiveActivity(param.appId, param.activityType, param.startLiveActivityRequest,  options).toPromise();
    }

    /**
     * Transfers this Subscription to the User identified by the identity in the payload.
     * @param param the request object
     */
    public transferSubscription(param: DefaultApiTransferSubscriptionRequest, options?: Configuration): Promise<UserIdentityBody> {
        return this.api.transferSubscription(param.appId, param.subscriptionId, param.transferSubscriptionRequestBody,  options).toPromise();
    }

    /**
     * Unsubscribe an email with a token when using your own custom email unsubscribe landing page
     * Unsubscribe with token
     * @param param the request object
     */
    public unsubscribeEmailWithToken(param: DefaultApiUnsubscribeEmailWithTokenRequest, options?: Configuration): Promise<GenericSuccessBoolResponse> {
        return this.api.unsubscribeEmailWithToken(param.appId, param.notificationId, param.token,  options).toPromise();
    }

    /**
     * Update a Rich Authentication Token (App API Key) for a OneSignal app.
     * Update API key
     * @param param the request object
     */
    public updateApiKey(param: DefaultApiUpdateApiKeyRequest, options?: Configuration): Promise<object> {
        return this.api.updateApiKey(param.appId, param.tokenId, param.updateApiKeyRequest,  options).toPromise();
    }

    /**
     * Updates the name or configuration settings of an existing OneSignal app
     * Update an app
     * @param param the request object
     */
    public updateApp(param: DefaultApiUpdateAppRequest, options?: Configuration): Promise<App> {
        return this.api.updateApp(param.appId, param.app,  options).toPromise();
    }

    /**
     * The Journeys API is in beta. Endpoints and response fields can still change. Apply a partial update to a journey using JSON Merge Patch (RFC 7396). Send only the fields you want to change; omitted fields are left unchanged. A null value clears a nullable field, and arrays such as nodes are replaced wholesale. Set state to active to activate a draft journey.
     * Update journey
     * @param param the request object
     */
    public updateJourney(param: DefaultApiUpdateJourneyRequest, options?: Configuration): Promise<Journey> {
        return this.api.updateJourney(param.appId, param.journeyId, param.updateJourneyRequest,  options).toPromise();
    }

    /**
     * The Journeys API is in beta. Endpoints and response fields can still change. Apply a partial update to a single node, located by its server-assigned id, using JSON Merge Patch (RFC 7396). Send only the node fields you want to change; the rest of the node and the rest of the journey graph are left untouched. Returns the full updated journey.
     * Update journey node
     * @param param the request object
     */
    public updateJourneyNode(param: DefaultApiUpdateJourneyNodeRequest, options?: Configuration): Promise<Journey> {
        return this.api.updateJourneyNode(param.appId, param.journeyId, param.nodeId, param.updateJourneyNodeRequest,  options).toPromise();
    }

    /**
     * Updates a specified live activity.
     * Update a Live Activity via Push
     * @param param the request object
     */
    public updateLiveActivity(param: DefaultApiUpdateLiveActivityRequest, options?: Configuration): Promise<UpdateLiveActivitySuccessResponse> {
        return this.api.updateLiveActivity(param.appId, param.activityId, param.updateLiveActivityRequest,  options).toPromise();
    }

    /**
     * Update an existing segment\'s name and/or filters. The name parameter is always required. When filters are provided, all existing filters are replaced with the new ones.
     * Update Segment
     * @param param the request object
     */
    public updateSegment(param: DefaultApiUpdateSegmentRequest, options?: Configuration): Promise<UpdateSegmentSuccessResponse> {
        return this.api.updateSegment(param.appId, param.segmentId, param.updateSegmentRequest,  options).toPromise();
    }

    /**
     * Updates an existing Subscription’s properties.
     * @param param the request object
     */
    public updateSubscription(param: DefaultApiUpdateSubscriptionRequest, options?: Configuration): Promise<void> {
        return this.api.updateSubscription(param.appId, param.subscriptionId, param.subscriptionBody,  options).toPromise();
    }

    /**
     * Update properties on an existing OneSignal subscription using its token.
     * Update subscription by token
     * @param param the request object
     */
    public updateSubscriptionByToken(param: DefaultApiUpdateSubscriptionByTokenRequest, options?: Configuration): Promise<object> {
        return this.api.updateSubscriptionByToken(param.appId, param.tokenType, param.token, param.subscriptionBody,  options).toPromise();
    }

    /**
     * Update an existing template.
     * Update template
     * @param param the request object
     */
    public updateTemplate(param: DefaultApiUpdateTemplateRequest, options?: Configuration): Promise<TemplateResource> {
        return this.api.updateTemplate(param.templateId, param.appId, param.updateTemplateRequest,  options).toPromise();
    }

    /**
     * Updates an existing User’s properties.
     * @param param the request object
     */
    public updateUser(param: DefaultApiUpdateUserRequest, options?: Configuration): Promise<PropertiesBody> {
        return this.api.updateUser(param.appId, param.aliasLabel, param.aliasId, param.updateUserRequest,  options).toPromise();
    }

    /**
     * View the details of all of your current app API keys (Rich Authentication Token) for a single OneSignal app.
     * View API keys
     * @param param the request object
     */
    public viewApiKeys(param: DefaultApiViewApiKeysRequest, options?: Configuration): Promise<ApiKeyTokensListResponse> {
        return this.api.viewApiKeys(param.appId,  options).toPromise();
    }

    /**
     * The Journeys API is in beta. Endpoints and response fields can still change. Retrieve the full configuration of a single journey by its UUID, including its audience and node graph.
     * View journey
     * @param param the request object
     */
    public viewJourney(param: DefaultApiViewJourneyRequest, options?: Configuration): Promise<Journey> {
        return this.api.viewJourney(param.appId, param.journeyId,  options).toPromise();
    }

    /**
     * The Journeys API is in beta. Endpoints and response fields can still change. Retrieve performance stats for a single journey: journey-level entry and exit counts, per-node counts keyed by node id, per-branch counts keyed by branch id, and channel delivery stats for message-sending nodes. The response carries no definition detail, so join it by id against the journey from View journey.
     * View journey stats
     * @param param the request object
     */
    public viewJourneyStats(param: DefaultApiViewJourneyStatsRequest, options?: Configuration): Promise<JourneyStats> {
        return this.api.viewJourneyStats(param.appId, param.journeyId,  options).toPromise();
    }

    /**
     * The Journeys API is in beta. Endpoints and response fields can still change. Retrieve a paginated list of journeys for an app. Returns a summary representation of each journey; use View journey for the full configuration. Uses forward-only cursor-based pagination.
     * View journeys
     * @param param the request object
     */
    public viewJourneys(param: DefaultApiViewJourneysRequest, options?: Configuration): Promise<JourneyListResponse> {
        return this.api.viewJourneys(param.appId, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Fetch a single template by id.
     * View template
     * @param param the request object
     */
    public viewTemplate(param: DefaultApiViewTemplateRequest, options?: Configuration): Promise<TemplateResource> {
        return this.api.viewTemplate(param.templateId, param.appId,  options).toPromise();
    }

    /**
     * List templates for an app.
     * View templates
     * @param param the request object
     */
    public viewTemplates(param: DefaultApiViewTemplatesRequest, options?: Configuration): Promise<TemplatesListResponse> {
        return this.api.viewTemplates(param.appId, param.limit, param.offset, param.channel,  options).toPromise();
    }

}
