import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { App } from '../models/App';
import { BasicNotification } from '../models/BasicNotification';
import { BasicNotificationAllOf } from '../models/BasicNotificationAllOf';
import { BasicNotificationAllOfAndroidBackgroundLayout } from '../models/BasicNotificationAllOfAndroidBackgroundLayout';
import { Button } from '../models/Button';
import { CreateNotificationSuccessResponse } from '../models/CreateNotificationSuccessResponse';
import { CreateSegmentConflictResponse } from '../models/CreateSegmentConflictResponse';
import { CreateSegmentSuccessResponse } from '../models/CreateSegmentSuccessResponse';
import { CreateUserConflictResponse } from '../models/CreateUserConflictResponse';
import { CreateUserConflictResponseErrorsInner } from '../models/CreateUserConflictResponseErrorsInner';
import { CreateUserConflictResponseErrorsItemsMeta } from '../models/CreateUserConflictResponseErrorsItemsMeta';
import { DeliveryData } from '../models/DeliveryData';
import { ExportEventsSuccessResponse } from '../models/ExportEventsSuccessResponse';
import { ExportSubscriptionsRequestBody } from '../models/ExportSubscriptionsRequestBody';
import { ExportSubscriptionsSuccessResponse } from '../models/ExportSubscriptionsSuccessResponse';
import { Filter } from '../models/Filter';
import { FilterExpression } from '../models/FilterExpression';
import { GenericError } from '../models/GenericError';
import { GenericSuccessBoolResponse } from '../models/GenericSuccessBoolResponse';
import { GetNotificationHistoryRequestBody } from '../models/GetNotificationHistoryRequestBody';
import { GetSegmentsSuccessResponse } from '../models/GetSegmentsSuccessResponse';
import { InvalidIdentifierError } from '../models/InvalidIdentifierError';
import { LanguageStringMap } from '../models/LanguageStringMap';
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
import { SegmentNotificationTarget } from '../models/SegmentNotificationTarget';
import { Subscription } from '../models/Subscription';
import { SubscriptionBody } from '../models/SubscriptionBody';
import { SubscriptionNotificationTarget } from '../models/SubscriptionNotificationTarget';
import { TransferSubscriptionRequestBody } from '../models/TransferSubscriptionRequestBody';
import { UpdateLiveActivityRequest } from '../models/UpdateLiveActivityRequest';
import { UpdateLiveActivitySuccessResponse } from '../models/UpdateLiveActivitySuccessResponse';
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
     * Used to stop a scheduled or currently outgoing notification
     * Stop a scheduled or currently outgoing notification
     * @param param the request object
     */
    public cancelNotification(param: DefaultApiCancelNotificationRequest, options?: Configuration): Promise<GenericSuccessBoolResponse> {
        return this.api.cancelNotification(param.appId, param.notificationId,  options).toPromise();
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
     * Removes the User identified by (:alias_label, :alias_id), and all Subscriptions and Aliases
     * @param param the request object
     */
    public deleteUser(param: DefaultApiDeleteUserRequest, options?: Configuration): Promise<void> {
        return this.api.deleteUser(param.appId, param.aliasLabel, param.aliasId,  options).toPromise();
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
     * Updates an existing Subscription’s properties.
     * @param param the request object
     */
    public updateSubscription(param: DefaultApiUpdateSubscriptionRequest, options?: Configuration): Promise<void> {
        return this.api.updateSubscription(param.appId, param.subscriptionId, param.subscriptionBody,  options).toPromise();
    }

    /**
     * Updates an existing User’s properties.
     * @param param the request object
     */
    public updateUser(param: DefaultApiUpdateUserRequest, options?: Configuration): Promise<PropertiesBody> {
        return this.api.updateUser(param.appId, param.aliasLabel, param.aliasId, param.updateUserRequest,  options).toPromise();
    }

}
