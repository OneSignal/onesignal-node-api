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
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Used to stop a scheduled or currently outgoing notification
     * Stop a scheduled or currently outgoing notification
     * @param appId 
     * @param notificationId 
     */
    public cancelNotification(appId: string, notificationId: string, _options?: Configuration): Promise<GenericSuccessBoolResponse> {
        const result = this.api.cancelNotification(appId, notificationId, _options);
        return result.toPromise();
    }

    /**
     * Upserts one or more Aliases to an existing User identified by (:alias_label, :alias_id).
     * @param appId 
     * @param aliasLabel 
     * @param aliasId 
     * @param userIdentityBody 
     */
    public createAlias(appId: string, aliasLabel: string, aliasId: string, userIdentityBody: UserIdentityBody, _options?: Configuration): Promise<UserIdentityBody> {
        const result = this.api.createAlias(appId, aliasLabel, aliasId, userIdentityBody, _options);
        return result.toPromise();
    }

    /**
     * Upserts one or more Aliases for the User identified by :subscription_id.
     * @param appId 
     * @param subscriptionId 
     * @param userIdentityBody 
     */
    public createAliasBySubscription(appId: string, subscriptionId: string, userIdentityBody: UserIdentityBody, _options?: Configuration): Promise<UserIdentityBody> {
        const result = this.api.createAliasBySubscription(appId, subscriptionId, userIdentityBody, _options);
        return result.toPromise();
    }

    /**
     * Creates a new OneSignal app
     * Create an app
     * @param app 
     */
    public createApp(app: App, _options?: Configuration): Promise<App> {
        const result = this.api.createApp(app, _options);
        return result.toPromise();
    }

    /**
     * Sends notifications to your users 
     * Create notification
     * @param notification 
     */
    public createNotification(notification: Notification, _options?: Configuration): Promise<CreateNotificationSuccessResponse> {
        const result = this.api.createNotification(notification, _options);
        return result.toPromise();
    }

    /**
     * Create a segment visible and usable in the dashboard and API - Required: OneSignal Paid Plan The Create Segment method is used when you want your server to programmatically create a segment instead of using the OneSignal Dashboard UI. Just like creating Segments from the dashboard you can pass in filters with multiple \"AND\" or \"OR\" operator\'s. &#x1F6A7; Does Not Update Segments This endpoint will only create segments, it does not edit or update currently created Segments. You will need to use the Delete Segment endpoint and re-create it with this endpoint to edit. 
     * Create Segment
     * @param appId The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @param segment 
     */
    public createSegment(appId: string, segment?: Segment, _options?: Configuration): Promise<CreateSegmentSuccessResponse> {
        const result = this.api.createSegment(appId, segment, _options);
        return result.toPromise();
    }

    /**
     * Creates a new Subscription under the User provided. Useful to add email addresses and SMS numbers to the User.
     * @param appId 
     * @param aliasLabel 
     * @param aliasId 
     * @param subscriptionBody 
     */
    public createSubscription(appId: string, aliasLabel: string, aliasId: string, subscriptionBody: SubscriptionBody, _options?: Configuration): Promise<SubscriptionBody> {
        const result = this.api.createSubscription(appId, aliasLabel, aliasId, subscriptionBody, _options);
        return result.toPromise();
    }

    /**
     * Creates a User, optionally Subscriptions owned by the User as well as Aliases. Aliases provided in the payload will be used to look up an existing User.
     * @param appId 
     * @param user 
     */
    public createUser(appId: string, user: User, _options?: Configuration): Promise<User> {
        const result = this.api.createUser(appId, user, _options);
        return result.toPromise();
    }

    /**
     * Deletes an alias by alias label
     * @param appId 
     * @param aliasLabel 
     * @param aliasId 
     * @param aliasLabelToDelete 
     */
    public deleteAlias(appId: string, aliasLabel: string, aliasId: string, aliasLabelToDelete: string, _options?: Configuration): Promise<UserIdentityBody> {
        const result = this.api.deleteAlias(appId, aliasLabel, aliasId, aliasLabelToDelete, _options);
        return result.toPromise();
    }

    /**
     * Delete a segment (not user devices) - Required: OneSignal Paid Plan You can delete a segment under your app by calling this API. You must provide an API key in the Authorization header that has admin access on the app. The segment_id can be found in the URL of the segment when viewing it in the dashboard. 
     * Delete Segment
     * @param appId The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @param segmentId The segment_id can be found in the URL of the segment when viewing it in the dashboard.
     */
    public deleteSegment(appId: string, segmentId: string, _options?: Configuration): Promise<GenericSuccessBoolResponse> {
        const result = this.api.deleteSegment(appId, segmentId, _options);
        return result.toPromise();
    }

    /**
     * Deletes the Subscription.
     * @param appId 
     * @param subscriptionId 
     */
    public deleteSubscription(appId: string, subscriptionId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteSubscription(appId, subscriptionId, _options);
        return result.toPromise();
    }

    /**
     * Removes the User identified by (:alias_label, :alias_id), and all Subscriptions and Aliases
     * @param appId 
     * @param aliasLabel 
     * @param aliasId 
     */
    public deleteUser(appId: string, aliasLabel: string, aliasId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteUser(appId, aliasLabel, aliasId, _options);
        return result.toPromise();
    }

    /**
     * Generate a compressed CSV report of all of the events data for a notification. This will return a URL immediately upon success but it may take several minutes for the CSV to become available at that URL depending on the volume of data. Only one export can be in-progress per OneSignal account at any given time.
     * Export CSV of Events
     * @param notificationId The ID of the notification to export events from.
     * @param appId The ID of the app that the notification belongs to.
     */
    public exportEvents(notificationId: string, appId: string, _options?: Configuration): Promise<ExportEventsSuccessResponse> {
        const result = this.api.exportEvents(notificationId, appId, _options);
        return result.toPromise();
    }

    /**
     * Generate a compressed CSV export of all of your current user data This method can be used to generate a compressed CSV export of all of your current user data. It is a much faster alternative than retrieving this data using the /players API endpoint. The file will be compressed using GZip. The file may take several minutes to generate depending on the number of users in your app. The URL generated will be available for 3 days and includes random v4 uuid as part of the resource name to be unguessable. &#x1F6A7; 403 Error Responses          You can test if it is complete by making a GET request to the csv_file_url value. This file may take time to generate depending on how many device records are being pulled. If the file is not ready, a 403 error will be returned. Otherwise the file itself will be returned. &#x1F6A7; Requires Authentication Key Requires your OneSignal App\'s REST API Key, available in Keys & IDs. &#x1F6A7; Concurrent Exports Only one concurrent export is allowed per OneSignal account. Please ensure you have successfully downloaded the .csv.gz file before exporting another app. CSV File Format: - Default Columns:   | Field | Details |   | --- | --- |   | id | OneSignal Player Id |   | identifier | Push Token |   | session_count | Number of times they visited the app or site   | language | Device language code |   | timezone | Number of seconds away from UTC. Example: -28800 |   | game_version | Version of your mobile app gathered from Android Studio versionCode in your App/build.gradle and iOS uses kCFBundleVersionKey in Xcode. |   | device_os | Device Operating System Version. Example: 80 = Chrome 80, 9 = Android 9 |   | device_type | Device Operating System Type |   | device_model | Device Hardware String Code. Example: Mobile Web Subscribers will have `Linux armv` |   | ad_id | Based on the Google Advertising Id for Android, identifierForVendor for iOS. OptedOut means user turned off Advertising tracking on the device. |   | tags | Current OneSignal Data Tags on the device. |   | last_active | Date and time the user last opened the mobile app or visited the site. |   | playtime | Total amount of time in seconds the user had the mobile app open. |   | amount_spent |  Mobile only - amount spent in USD on In-App Purchases. |    | created_at | Date and time the device record was created in OneSignal. Mobile - first time they opened the app with OneSignal SDK. Web - first time the user subscribed to the site. |   | invalid_identifier | t = unsubscribed, f = subscibed |   | badge_count | Current number of badges on the device | - Extra Columns:   | Field | Details |   | --- | --- |   | external_user_id | Your User Id set on the device |   | notification_types | Notification types |   | location | Location points (Latitude and Longitude) set on the device. |   | country | Country code |   | rooted | Android device rooted or not |   | ip | IP Address of the device if being tracked. See Handling Personal Data. |   | web_auth | Web Only authorization key. |   | web_p256 | Web Only p256 key. | 
     * Export CSV of Subscriptions
     * @param appId The app ID that you want to export devices from
     * @param exportSubscriptionsRequestBody 
     */
    public exportSubscriptions(appId: string, exportSubscriptionsRequestBody?: ExportSubscriptionsRequestBody, _options?: Configuration): Promise<ExportSubscriptionsSuccessResponse> {
        const result = this.api.exportSubscriptions(appId, exportSubscriptionsRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Lists all Aliases for the User identified by (:alias_label, :alias_id).
     * @param appId 
     * @param aliasLabel 
     * @param aliasId 
     */
    public getAliases(appId: string, aliasLabel: string, aliasId: string, _options?: Configuration): Promise<UserIdentityBody> {
        const result = this.api.getAliases(appId, aliasLabel, aliasId, _options);
        return result.toPromise();
    }

    /**
     * Lists all Aliases for the User identified by :subscription_id.
     * @param appId 
     * @param subscriptionId 
     */
    public getAliasesBySubscription(appId: string, subscriptionId: string, _options?: Configuration): Promise<UserIdentityBody> {
        const result = this.api.getAliasesBySubscription(appId, subscriptionId, _options);
        return result.toPromise();
    }

    /**
     * View the details of a single OneSignal app
     * View an app
     * @param appId An app id
     */
    public getApp(appId: string, _options?: Configuration): Promise<App> {
        const result = this.api.getApp(appId, _options);
        return result.toPromise();
    }

    /**
     * View the details of all of your current OneSignal apps
     * View apps
     */
    public getApps(_options?: Configuration): Promise<Array<App>> {
        const result = this.api.getApps(_options);
        return result.toPromise();
    }

    /**
     * View the details of a single notification and outcomes associated with it
     * View notification
     * @param appId 
     * @param notificationId 
     */
    public getNotification(appId: string, notificationId: string, _options?: Configuration): Promise<NotificationWithMeta> {
        const result = this.api.getNotification(appId, notificationId, _options);
        return result.toPromise();
    }

    /**
     * -> View the devices sent a message - OneSignal Paid Plan Required This method will return all devices that were sent the given notification_id of an Email or Push Notification if used within 7 days of the date sent. After 7 days of the sending date, the message history data will be unavailable. After a successful response is received, the destination url may be polled until the file becomes available. Most exports are done in ~1-3 minutes, so setting a poll interval of 10 seconds should be adequate. For use cases that are not meant to be consumed by a script, an email will be sent to the supplied email address. &#x1F6A7; Requirements A OneSignal Paid Plan. Turn on Send History via OneSignal API in Settings -> Analytics. Cannot get data before this was turned on. Must be called within 7 days after sending the message. Messages targeting under 1000 recipients will not have \"sent\" events recorded, but will show \"clicked\" events. Requires your OneSignal App\'s REST API Key, available in Keys & IDs.
     * Notification History
     * @param notificationId The \&quot;id\&quot; of the message found in the Notification object
     * @param getNotificationHistoryRequestBody 
     */
    public getNotificationHistory(notificationId: string, getNotificationHistoryRequestBody: GetNotificationHistoryRequestBody, _options?: Configuration): Promise<NotificationHistorySuccessResponse> {
        const result = this.api.getNotificationHistory(notificationId, getNotificationHistoryRequestBody, _options);
        return result.toPromise();
    }

    /**
     * View the details of multiple notifications
     * View notifications
     * @param appId The app ID that you want to view notifications from
     * @param limit How many notifications to return.  Max is 50.  Default is 50.
     * @param offset Page offset.  Default is 0.  Results are sorted by queued_at in descending order.  queued_at is a representation of the time that the notification was queued at.
     * @param kind Kind of notifications returned:   * unset - All notification types (default)   * &#x60;0&#x60; - Dashboard only   * &#x60;1&#x60; - API only   * &#x60;3&#x60; - Automated only 
     */
    public getNotifications(appId: string, limit?: number, offset?: number, kind?: 0 | 1 | 3, _options?: Configuration): Promise<NotificationSlice> {
        const result = this.api.getNotifications(appId, limit, offset, kind, _options);
        return result.toPromise();
    }

    /**
     * View the details of all the outcomes associated with your app  &#x1F6A7; Requires Authentication Key Requires your OneSignal App\'s REST API Key, available in Keys & IDs.  &#x1F6A7; Outcome Data Limitations Outcomes are only accessible for around 30 days before deleted from our servers. You will need to export this data every month if you want to keep it. 
     * View Outcomes
     * @param appId The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @param outcomeNames Required Comma-separated list of names and the value (sum/count) for the returned outcome data. Note: Clicks only support count aggregation. For out-of-the-box OneSignal outcomes such as click and session duration, please use the \&quot;os\&quot; prefix with two underscores. For other outcomes, please use the name specified by the user. Example:os__session_duration.count,os__click.count,CustomOutcomeName.sum 
     * @param outcomeNames2 Optional If outcome names contain any commas, then please specify only one value at a time. Example: outcome_names[]&#x3D;os__click.count&amp;outcome_names[]&#x3D;Sales, Purchase.count where \&quot;Sales, Purchase\&quot; is the custom outcomes with a comma in the name. 
     * @param outcomeTimeRange Optional Time range for the returned data. The values can be 1h (for the last 1 hour data), 1d (for the last 1 day data), or 1mo (for the last 1 month data). Default is 1h if the parameter is omitted. 
     * @param outcomePlatforms Optional Platform id. Refer device\&#39;s platform ids for values. Example: outcome_platform&#x3D;0 for iOS outcome_platform&#x3D;7,8 for Safari and Firefox Default is data from all platforms if the parameter is omitted. 
     * @param outcomeAttribution Optional Attribution type for the outcomes. The values can be direct or influenced or unattributed. Example: outcome_attribution&#x3D;direct Default is total (returns direct+influenced+unattributed) if the parameter is omitted. 
     */
    public getOutcomes(appId: string, outcomeNames: string, outcomeNames2?: string, outcomeTimeRange?: string, outcomePlatforms?: string, outcomeAttribution?: string, _options?: Configuration): Promise<OutcomesData> {
        const result = this.api.getOutcomes(appId, outcomeNames, outcomeNames2, outcomeTimeRange, outcomePlatforms, outcomeAttribution, _options);
        return result.toPromise();
    }

    /**
     * Returns an array of segments from an app.
     * Get Segments
     * @param appId The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @param offset Segments are listed in ascending order of created_at date. offset will omit that number of segments from the beginning of the list. Eg offset 5, will remove the 5 earliest created Segments.
     * @param limit The amount of Segments in the response. Maximum 300.
     */
    public getSegments(appId: string, offset?: number, limit?: number, _options?: Configuration): Promise<GetSegmentsSuccessResponse> {
        const result = this.api.getSegments(appId, offset, limit, _options);
        return result.toPromise();
    }

    /**
     * Returns the User’s properties, Aliases, and Subscriptions.
     * @param appId 
     * @param aliasLabel 
     * @param aliasId 
     */
    public getUser(appId: string, aliasLabel: string, aliasId: string, _options?: Configuration): Promise<User> {
        const result = this.api.getUser(appId, aliasLabel, aliasId, _options);
        return result.toPromise();
    }

    /**
     * Transfers this Subscription to the User identified by the identity in the payload.
     * @param appId 
     * @param subscriptionId 
     * @param transferSubscriptionRequestBody 
     */
    public transferSubscription(appId: string, subscriptionId: string, transferSubscriptionRequestBody: TransferSubscriptionRequestBody, _options?: Configuration): Promise<UserIdentityBody> {
        const result = this.api.transferSubscription(appId, subscriptionId, transferSubscriptionRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Unsubscribe an email with a token when using your own custom email unsubscribe landing page
     * Unsubscribe with token
     * @param appId The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @param notificationId The id of the message found in the creation notification POST response, View Notifications GET response, or URL within the Message Report.
     * @param token The unsubscribe token that is generated via liquid syntax in {{subscription.unsubscribe_token}} when personalizing an email.
     */
    public unsubscribeEmailWithToken(appId: string, notificationId: string, token: string, _options?: Configuration): Promise<GenericSuccessBoolResponse> {
        const result = this.api.unsubscribeEmailWithToken(appId, notificationId, token, _options);
        return result.toPromise();
    }

    /**
     * Updates the name or configuration settings of an existing OneSignal app
     * Update an app
     * @param appId An app id
     * @param app 
     */
    public updateApp(appId: string, app: App, _options?: Configuration): Promise<App> {
        const result = this.api.updateApp(appId, app, _options);
        return result.toPromise();
    }

    /**
     * Updates a specified live activity.
     * Update a Live Activity via Push
     * @param appId The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @param activityId Live Activity record ID
     * @param updateLiveActivityRequest 
     */
    public updateLiveActivity(appId: string, activityId: string, updateLiveActivityRequest: UpdateLiveActivityRequest, _options?: Configuration): Promise<UpdateLiveActivitySuccessResponse> {
        const result = this.api.updateLiveActivity(appId, activityId, updateLiveActivityRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates an existing Subscription’s properties.
     * @param appId 
     * @param subscriptionId 
     * @param subscriptionBody 
     */
    public updateSubscription(appId: string, subscriptionId: string, subscriptionBody: SubscriptionBody, _options?: Configuration): Promise<void> {
        const result = this.api.updateSubscription(appId, subscriptionId, subscriptionBody, _options);
        return result.toPromise();
    }

    /**
     * Updates an existing User’s properties.
     * @param appId 
     * @param aliasLabel 
     * @param aliasId 
     * @param updateUserRequest 
     */
    public updateUser(appId: string, aliasLabel: string, aliasId: string, updateUserRequest: UpdateUserRequest, _options?: Configuration): Promise<PropertiesBody> {
        const result = this.api.updateUser(appId, aliasLabel, aliasId, updateUserRequest, _options);
        return result.toPromise();
    }


}



