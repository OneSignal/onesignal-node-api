import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { App } from '../models/App';
import { BasicNotification } from '../models/BasicNotification';
import { BasicNotificationAllOf } from '../models/BasicNotificationAllOf';
import { BasicNotificationAllOfAndroidBackgroundLayout } from '../models/BasicNotificationAllOfAndroidBackgroundLayout';
import { BeginLiveActivityRequest } from '../models/BeginLiveActivityRequest';
import { Button } from '../models/Button';
import { CancelNotificationSuccessResponse } from '../models/CancelNotificationSuccessResponse';
import { CreateNotificationSuccessResponse } from '../models/CreateNotificationSuccessResponse';
import { CreatePlayerSuccessResponse } from '../models/CreatePlayerSuccessResponse';
import { CreateSegmentConflictResponse } from '../models/CreateSegmentConflictResponse';
import { CreateSegmentSuccessResponse } from '../models/CreateSegmentSuccessResponse';
import { CreateSubscriptionRequestBody } from '../models/CreateSubscriptionRequestBody';
import { CreateUserConflictResponse } from '../models/CreateUserConflictResponse';
import { CreateUserConflictResponseErrorsInner } from '../models/CreateUserConflictResponseErrorsInner';
import { CreateUserConflictResponseErrorsItemsMeta } from '../models/CreateUserConflictResponseErrorsItemsMeta';
import { DeletePlayerNotFoundResponse } from '../models/DeletePlayerNotFoundResponse';
import { DeletePlayerSuccessResponse } from '../models/DeletePlayerSuccessResponse';
import { DeleteSegmentNotFoundResponse } from '../models/DeleteSegmentNotFoundResponse';
import { DeleteSegmentSuccessResponse } from '../models/DeleteSegmentSuccessResponse';
import { DeliveryData } from '../models/DeliveryData';
import { ExportEventsSuccessResponse } from '../models/ExportEventsSuccessResponse';
import { ExportPlayersRequestBody } from '../models/ExportPlayersRequestBody';
import { ExportPlayersSuccessResponse } from '../models/ExportPlayersSuccessResponse';
import { Filter } from '../models/Filter';
import { FilterExpressions } from '../models/FilterExpressions';
import { GenericError } from '../models/GenericError';
import { GenericErrorErrorsInner } from '../models/GenericErrorErrorsInner';
import { GetNotificationRequestBody } from '../models/GetNotificationRequestBody';
import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2003 } from '../models/InlineResponse2003';
import { InlineResponse201 } from '../models/InlineResponse201';
import { InlineResponse202 } from '../models/InlineResponse202';
import { InvalidIdentifierError } from '../models/InvalidIdentifierError';
import { Notification } from '../models/Notification';
import { Notification200Errors } from '../models/Notification200Errors';
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
import { Player } from '../models/Player';
import { PlayerNotificationTarget } from '../models/PlayerNotificationTarget';
import { PlayerNotificationTargetIncludeAliases } from '../models/PlayerNotificationTargetIncludeAliases';
import { PlayerSlice } from '../models/PlayerSlice';
import { PropertiesDeltas } from '../models/PropertiesDeltas';
import { PropertiesObject } from '../models/PropertiesObject';
import { Purchase } from '../models/Purchase';
import { RateLimiterError } from '../models/RateLimiterError';
import { Segment } from '../models/Segment';
import { SegmentNotificationTarget } from '../models/SegmentNotificationTarget';
import { StringMap } from '../models/StringMap';
import { SubscriptionObject } from '../models/SubscriptionObject';
import { TransferSubscriptionRequestBody } from '../models/TransferSubscriptionRequestBody';
import { UpdateLiveActivityRequest } from '../models/UpdateLiveActivityRequest';
import { UpdateLiveActivitySuccessResponse } from '../models/UpdateLiveActivitySuccessResponse';
import { UpdatePlayerSuccessResponse } from '../models/UpdatePlayerSuccessResponse';
import { UpdatePlayerTagsRequestBody } from '../models/UpdatePlayerTagsRequestBody';
import { UpdatePlayerTagsSuccessResponse } from '../models/UpdatePlayerTagsSuccessResponse';
import { UpdateSubscriptionRequestBody } from '../models/UpdateSubscriptionRequestBody';
import { UpdateUserRequest } from '../models/UpdateUserRequest';
import { User } from '../models/User';
import { UserIdentityRequestBody } from '../models/UserIdentityRequestBody';
import { UserIdentityResponse } from '../models/UserIdentityResponse';
import { UserSubscriptionOptions } from '../models/UserSubscriptionOptions';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiBeginLiveActivityRequest {
    /**
     * The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @type string
     * @memberof DefaultApibeginLiveActivity
     */
    appId: string
    /**
     * Live Activity record ID
     * @type string
     * @memberof DefaultApibeginLiveActivity
     */
    activityId: string
    /**
     * 
     * @type BeginLiveActivityRequest
     * @memberof DefaultApibeginLiveActivity
     */
    beginLiveActivityRequest: BeginLiveActivityRequest
}

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

export interface DefaultApiCreateAppRequest {
    /**
     * 
     * @type App
     * @memberof DefaultApicreateApp
     */
    app: App
}

export interface DefaultApiCreateNotificationRequest {
    /**
     * 
     * @type Notification
     * @memberof DefaultApicreateNotification
     */
    notification: Notification
}

export interface DefaultApiCreatePlayerRequest {
    /**
     * 
     * @type Player
     * @memberof DefaultApicreatePlayer
     */
    player: Player
}

export interface DefaultApiCreateSegmentsRequest {
    /**
     * The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @type string
     * @memberof DefaultApicreateSegments
     */
    appId: string
    /**
     * 
     * @type Segment
     * @memberof DefaultApicreateSegments
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
     * @type CreateSubscriptionRequestBody
     * @memberof DefaultApicreateSubscription
     */
    createSubscriptionRequestBody: CreateSubscriptionRequestBody
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

export interface DefaultApiDeletePlayerRequest {
    /**
     * The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @type string
     * @memberof DefaultApideletePlayer
     */
    appId: string
    /**
     * The OneSignal player_id
     * @type string
     * @memberof DefaultApideletePlayer
     */
    playerId: string
}

export interface DefaultApiDeleteSegmentsRequest {
    /**
     * The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @type string
     * @memberof DefaultApideleteSegments
     */
    appId: string
    /**
     * The segment_id can be found in the URL of the segment when viewing it in the dashboard.
     * @type string
     * @memberof DefaultApideleteSegments
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

export interface DefaultApiEndLiveActivityRequest {
    /**
     * The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @type string
     * @memberof DefaultApiendLiveActivity
     */
    appId: string
    /**
     * Live Activity record ID
     * @type string
     * @memberof DefaultApiendLiveActivity
     */
    activityId: string
    /**
     * Subscription ID
     * @type string
     * @memberof DefaultApiendLiveActivity
     */
    subscriptionId: string
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

export interface DefaultApiExportPlayersRequest {
    /**
     * The app ID that you want to export devices from
     * @type string
     * @memberof DefaultApiexportPlayers
     */
    appId: string
    /**
     * 
     * @type ExportPlayersRequestBody
     * @memberof DefaultApiexportPlayers
     */
    exportPlayersRequestBody?: ExportPlayersRequestBody
}

export interface DefaultApiFetchAliasesRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApifetchAliases
     */
    appId: string
    /**
     * 
     * @type string
     * @memberof DefaultApifetchAliases
     */
    subscriptionId: string
}

export interface DefaultApiFetchUserRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApifetchUser
     */
    appId: string
    /**
     * 
     * @type string
     * @memberof DefaultApifetchUser
     */
    aliasLabel: string
    /**
     * 
     * @type string
     * @memberof DefaultApifetchUser
     */
    aliasId: string
}

export interface DefaultApiFetchUserIdentityRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApifetchUserIdentity
     */
    appId: string
    /**
     * 
     * @type string
     * @memberof DefaultApifetchUserIdentity
     */
    aliasLabel: string
    /**
     * 
     * @type string
     * @memberof DefaultApifetchUserIdentity
     */
    aliasId: string
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

export interface DefaultApiGetEligibleIamsRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetEligibleIams
     */
    appId: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetEligibleIams
     */
    subscriptionId: string
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
     * @type GetNotificationRequestBody
     * @memberof DefaultApigetNotificationHistory
     */
    getNotificationRequestBody: GetNotificationRequestBody
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

export interface DefaultApiGetPlayerRequest {
    /**
     * Your app_id for this device
     * @type string
     * @memberof DefaultApigetPlayer
     */
    appId: string
    /**
     * Player\&#39;s OneSignal ID
     * @type string
     * @memberof DefaultApigetPlayer
     */
    playerId: string
    /**
     * Email - Only required if you have enabled Identity Verification and device_type is email (11).
     * @type string
     * @memberof DefaultApigetPlayer
     */
    emailAuthHash?: string
}

export interface DefaultApiGetPlayersRequest {
    /**
     * The app ID that you want to view players from
     * @type string
     * @memberof DefaultApigetPlayers
     */
    appId: string
    /**
     * How many devices to return. Max is 300. Default is 300
     * @type number
     * @memberof DefaultApigetPlayers
     */
    limit?: number
    /**
     * Result offset. Default is 0. Results are sorted by id;
     * @type number
     * @memberof DefaultApigetPlayers
     */
    offset?: number
}

export interface DefaultApiIdentifyUserByAliasRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiidentifyUserByAlias
     */
    appId: string
    /**
     * 
     * @type string
     * @memberof DefaultApiidentifyUserByAlias
     */
    aliasLabel: string
    /**
     * 
     * @type string
     * @memberof DefaultApiidentifyUserByAlias
     */
    aliasId: string
    /**
     * 
     * @type UserIdentityRequestBody
     * @memberof DefaultApiidentifyUserByAlias
     */
    userIdentityRequestBody: UserIdentityRequestBody
}

export interface DefaultApiIdentifyUserBySubscriptionIdRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiidentifyUserBySubscriptionId
     */
    appId: string
    /**
     * 
     * @type string
     * @memberof DefaultApiidentifyUserBySubscriptionId
     */
    subscriptionId: string
    /**
     * 
     * @type UserIdentityRequestBody
     * @memberof DefaultApiidentifyUserBySubscriptionId
     */
    userIdentityRequestBody: UserIdentityRequestBody
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

export interface DefaultApiUpdatePlayerRequest {
    /**
     * Player\&#39;s OneSignal ID
     * @type string
     * @memberof DefaultApiupdatePlayer
     */
    playerId: string
    /**
     * 
     * @type Player
     * @memberof DefaultApiupdatePlayer
     */
    player: Player
}

export interface DefaultApiUpdatePlayerTagsRequest {
    /**
     * The OneSignal App ID the user record is found under.
     * @type string
     * @memberof DefaultApiupdatePlayerTags
     */
    appId: string
    /**
     * The External User ID mapped to teh device record in OneSignal.  Must be actively set on the device to be updated.
     * @type string
     * @memberof DefaultApiupdatePlayerTags
     */
    externalUserId: string
    /**
     * 
     * @type UpdatePlayerTagsRequestBody
     * @memberof DefaultApiupdatePlayerTags
     */
    updatePlayerTagsRequestBody?: UpdatePlayerTagsRequestBody
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
     * @type UpdateSubscriptionRequestBody
     * @memberof DefaultApiupdateSubscription
     */
    updateSubscriptionRequestBody: UpdateSubscriptionRequestBody
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

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Starts a Live Activity
     * Start Live Activity
     * @param param the request object
     */
    public beginLiveActivity(param: DefaultApiBeginLiveActivityRequest, options?: Configuration): Promise<void> {
        return this.api.beginLiveActivity(param.appId, param.activityId, param.beginLiveActivityRequest,  options).toPromise();
    }

    /**
     * Used to stop a scheduled or currently outgoing notification
     * Stop a scheduled or currently outgoing notification
     * @param param the request object
     */
    public cancelNotification(param: DefaultApiCancelNotificationRequest, options?: Configuration): Promise<CancelNotificationSuccessResponse> {
        return this.api.cancelNotification(param.appId, param.notificationId,  options).toPromise();
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
     * Sends notifications to your users 
     * Create notification
     * @param param the request object
     */
    public createNotification(param: DefaultApiCreateNotificationRequest, options?: Configuration): Promise<CreateNotificationSuccessResponse> {
        return this.api.createNotification(param.notification,  options).toPromise();
    }

    /**
     * Register a new device to one of your OneSignal apps &#x1F6A7; Don\'t use this This API endpoint is designed to be used from our open source Mobile and Web Push SDKs. It is not designed for developers to use it directly, unless instructed to do so by OneSignal support. If you use this method instead of our SDKs, many OneSignal features such as conversion tracking, timezone tracking, language detection, and rich-push won\'t work out of the box. It will also make it harder to identify possible setup issues. This method is used to register a new device with OneSignal. If a device is already registered with the specified identifier, then this will update the existing device record instead of creating a new one. The returned player is a player / user ID. Use the returned ID to send push notifications to this specific user later, or to include this player when sending to a set of users. &#x1F6A7; iOS Must set test_type to 1 when building your iOS app as development. Omit this field in your production app builds. 
     * Add a device
     * @param param the request object
     */
    public createPlayer(param: DefaultApiCreatePlayerRequest, options?: Configuration): Promise<CreatePlayerSuccessResponse> {
        return this.api.createPlayer(param.player,  options).toPromise();
    }

    /**
     * Create segments visible and usable in the dashboard and API - Required: OneSignal Paid Plan The Create Segment method is used when you want your server to programmatically create a segment instead of using the OneSignal Dashboard UI. Just like creating Segments from the dashboard you can pass in filters with multiple \"AND\" or \"OR\" operator\'s. &#x1F6A7; Does Not Update Segments This endpoint will only create segments, it does not edit or update currently created Segments. You will need to use the Delete Segments endpoint and re-create it with this endpoint to edit. 
     * Create Segments
     * @param param the request object
     */
    public createSegments(param: DefaultApiCreateSegmentsRequest, options?: Configuration): Promise<CreateSegmentSuccessResponse> {
        return this.api.createSegments(param.appId, param.segment,  options).toPromise();
    }

    /**
     * Creates a new Subscription under the User provided. Useful to add email addresses and SMS numbers to the User.
     * @param param the request object
     */
    public createSubscription(param: DefaultApiCreateSubscriptionRequest, options?: Configuration): Promise<InlineResponse201> {
        return this.api.createSubscription(param.appId, param.aliasLabel, param.aliasId, param.createSubscriptionRequestBody,  options).toPromise();
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
    public deleteAlias(param: DefaultApiDeleteAliasRequest, options?: Configuration): Promise<InlineResponse200> {
        return this.api.deleteAlias(param.appId, param.aliasLabel, param.aliasId, param.aliasLabelToDelete,  options).toPromise();
    }

    /**
     * Delete player - Required: Used to delete a single, specific Player ID record from a specific OneSignal app. 
     * Delete a user record
     * @param param the request object
     */
    public deletePlayer(param: DefaultApiDeletePlayerRequest, options?: Configuration): Promise<DeletePlayerSuccessResponse> {
        return this.api.deletePlayer(param.appId, param.playerId,  options).toPromise();
    }

    /**
     * Delete segments (not user devices) - Required: OneSignal Paid Plan You can delete a segment under your app by calling this API. You must provide an API key in the Authorization header that has admin access on the app. The segment_id can be found in the URL of the segment when viewing it in the dashboard. 
     * Delete Segments
     * @param param the request object
     */
    public deleteSegments(param: DefaultApiDeleteSegmentsRequest, options?: Configuration): Promise<DeleteSegmentSuccessResponse> {
        return this.api.deleteSegments(param.appId, param.segmentId,  options).toPromise();
    }

    /**
     * Deletes the Subscription.
     * @param param the request object
     */
    public deleteSubscription(param: DefaultApiDeleteSubscriptionRequest, options?: Configuration): Promise<void> {
        return this.api.deleteSubscription(param.appId, param.subscriptionId,  options).toPromise();
    }

    /**
     * Removes the User identified by (:alias_label, :alias_id), and all Subscriptions and Aliases
     * @param param the request object
     */
    public deleteUser(param: DefaultApiDeleteUserRequest, options?: Configuration): Promise<void> {
        return this.api.deleteUser(param.appId, param.aliasLabel, param.aliasId,  options).toPromise();
    }

    /**
     * Stops a Live Activity
     * Stop Live Activity
     * @param param the request object
     */
    public endLiveActivity(param: DefaultApiEndLiveActivityRequest, options?: Configuration): Promise<void> {
        return this.api.endLiveActivity(param.appId, param.activityId, param.subscriptionId,  options).toPromise();
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
     * Export CSV of Players
     * @param param the request object
     */
    public exportPlayers(param: DefaultApiExportPlayersRequest, options?: Configuration): Promise<ExportPlayersSuccessResponse> {
        return this.api.exportPlayers(param.appId, param.exportPlayersRequestBody,  options).toPromise();
    }

    /**
     * Lists all Aliases for the User identified by :subscription_id.
     * @param param the request object
     */
    public fetchAliases(param: DefaultApiFetchAliasesRequest, options?: Configuration): Promise<UserIdentityResponse> {
        return this.api.fetchAliases(param.appId, param.subscriptionId,  options).toPromise();
    }

    /**
     * Returns the User’s properties, Aliases, and Subscriptions.
     * @param param the request object
     */
    public fetchUser(param: DefaultApiFetchUserRequest, options?: Configuration): Promise<User> {
        return this.api.fetchUser(param.appId, param.aliasLabel, param.aliasId,  options).toPromise();
    }

    /**
     * Lists all Aliases for the User identified by (:alias_label, :alias_id).
     * @param param the request object
     */
    public fetchUserIdentity(param: DefaultApiFetchUserIdentityRequest, options?: Configuration): Promise<InlineResponse200> {
        return this.api.fetchUserIdentity(param.appId, param.aliasLabel, param.aliasId,  options).toPromise();
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
     * Manifest of In-App Messages the Subscription is eligible to display by the SDK.
     * @param param the request object
     */
    public getEligibleIams(param: DefaultApiGetEligibleIamsRequest, options?: Configuration): Promise<InlineResponse2003> {
        return this.api.getEligibleIams(param.appId, param.subscriptionId,  options).toPromise();
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
        return this.api.getNotificationHistory(param.notificationId, param.getNotificationRequestBody,  options).toPromise();
    }

    /**
     * View the details of multiple notifications
     * View notifications
     * @param param the request object
     */
    public getNotifications(param: DefaultApiGetNotificationsRequest, options?: Configuration): Promise<NotificationSlice> {
        return this.api.getNotifications(param.appId, param.limit, param.offset, param.kind,  options).toPromise();
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
     * View the details of an existing device in one of your OneSignal apps
     * View device
     * @param param the request object
     */
    public getPlayer(param: DefaultApiGetPlayerRequest, options?: Configuration): Promise<Player> {
        return this.api.getPlayer(param.appId, param.playerId, param.emailAuthHash,  options).toPromise();
    }

    /**
     * View the details of multiple devices in one of your OneSignal apps Unavailable for Apps Over 80,000 Users For performance reasons, this method is not available for larger apps. Larger apps should use the CSV export API endpoint, which is much more performant. 
     * View devices
     * @param param the request object
     */
    public getPlayers(param: DefaultApiGetPlayersRequest, options?: Configuration): Promise<PlayerSlice> {
        return this.api.getPlayers(param.appId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Upserts one or more Aliases to an existing User identified by (:alias_label, :alias_id).
     * @param param the request object
     */
    public identifyUserByAlias(param: DefaultApiIdentifyUserByAliasRequest, options?: Configuration): Promise<InlineResponse200> {
        return this.api.identifyUserByAlias(param.appId, param.aliasLabel, param.aliasId, param.userIdentityRequestBody,  options).toPromise();
    }

    /**
     * Upserts one or more Aliases for the User identified by :subscription_id.
     * @param param the request object
     */
    public identifyUserBySubscriptionId(param: DefaultApiIdentifyUserBySubscriptionIdRequest, options?: Configuration): Promise<UserIdentityResponse> {
        return this.api.identifyUserBySubscriptionId(param.appId, param.subscriptionId, param.userIdentityRequestBody,  options).toPromise();
    }

    /**
     * Transfers this Subscription to the User identified by the identity in the payload.
     * @param param the request object
     */
    public transferSubscription(param: DefaultApiTransferSubscriptionRequest, options?: Configuration): Promise<UserIdentityResponse> {
        return this.api.transferSubscription(param.appId, param.subscriptionId, param.transferSubscriptionRequestBody,  options).toPromise();
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
     * Updates a specified live activity.
     * Update a Live Activity via Push
     * @param param the request object
     */
    public updateLiveActivity(param: DefaultApiUpdateLiveActivityRequest, options?: Configuration): Promise<UpdateLiveActivitySuccessResponse> {
        return this.api.updateLiveActivity(param.appId, param.activityId, param.updateLiveActivityRequest,  options).toPromise();
    }

    /**
     * Update an existing device in one of your OneSignal apps
     * Edit device
     * @param param the request object
     */
    public updatePlayer(param: DefaultApiUpdatePlayerRequest, options?: Configuration): Promise<UpdatePlayerSuccessResponse> {
        return this.api.updatePlayer(param.playerId, param.player,  options).toPromise();
    }

    /**
     * Update an existing device\'s tags in one of your OneSignal apps using the External User ID. Warning - Android SDK Data Synchronization Tags added through the Android SDK tagging methods may not update if using the API to change or update the same tag. For example, if you use SDK method sendTag(\"key\", \"value1\") then update the tag value to \"value2\" with this API endpoint. You will not be able to set the value back to \"value1\" through the SDK, you will need to change it to something different through the SDK to be reset. Recommendations if using this Endpoint on Android Mobile Apps: 1 - Do not use the same tag keys for SDK and API updates 2 - If you want to use the same key for both SDK and API updates, call the SDK getTags method first to update the device\'s tags. This is only applicable on the Android Mobile App SDKs. &#128216; Deleting Tags To delete a tag, include its key and set its value to blank. Omitting a key/value will not delete it. For example, if I wanted to delete two existing tags rank and category while simultaneously adding a new tag class, the tags JSON would look like the following: \"tags\": {    \"rank\": \"\",    \"category\": \"\",    \"class\": \"my_new_value\" } 
     * Edit tags with external user id
     * @param param the request object
     */
    public updatePlayerTags(param: DefaultApiUpdatePlayerTagsRequest, options?: Configuration): Promise<UpdatePlayerTagsSuccessResponse> {
        return this.api.updatePlayerTags(param.appId, param.externalUserId, param.updatePlayerTagsRequestBody,  options).toPromise();
    }

    /**
     * Updates an existing Subscription’s properties.
     * @param param the request object
     */
    public updateSubscription(param: DefaultApiUpdateSubscriptionRequest, options?: Configuration): Promise<void> {
        return this.api.updateSubscription(param.appId, param.subscriptionId, param.updateSubscriptionRequestBody,  options).toPromise();
    }

    /**
     * Updates an existing User’s properties.
     * @param param the request object
     */
    public updateUser(param: DefaultApiUpdateUserRequest, options?: Configuration): Promise<InlineResponse202> {
        return this.api.updateUser(param.appId, param.aliasLabel, param.aliasId, param.updateUserRequest,  options).toPromise();
    }

}
