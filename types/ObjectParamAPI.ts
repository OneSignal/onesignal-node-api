import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { App } from '../models/App';
import { Button } from '../models/Button';
import { DeliveryData } from '../models/DeliveryData';
import { ExportPlayersRequestBody } from '../models/ExportPlayersRequestBody';
import { Filter } from '../models/Filter';
import { FilterExpressions } from '../models/FilterExpressions';
import { FilterNotificationTarget } from '../models/FilterNotificationTarget';
import { GetNotificationRequestBody } from '../models/GetNotificationRequestBody';
import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2001 } from '../models/InlineResponse2001';
import { InlineResponse2002 } from '../models/InlineResponse2002';
import { InlineResponse2003 } from '../models/InlineResponse2003';
import { InlineResponse2004 } from '../models/InlineResponse2004';
import { InlineResponse2005 } from '../models/InlineResponse2005';
import { InlineResponse201 } from '../models/InlineResponse201';
import { InlineResponse400 } from '../models/InlineResponse400';
import { InlineResponse4001 } from '../models/InlineResponse4001';
import { InlineResponse4002 } from '../models/InlineResponse4002';
import { InlineResponse409 } from '../models/InlineResponse409';
import { Notification } from '../models/Notification';
import { NotificationAllOf } from '../models/NotificationAllOf';
import { NotificationAllOfAndroidBackgroundLayout } from '../models/NotificationAllOfAndroidBackgroundLayout';
import { NotificationSlice } from '../models/NotificationSlice';
import { NotificationTarget } from '../models/NotificationTarget';
import { Operator } from '../models/Operator';
import { OutcomeData } from '../models/OutcomeData';
import { PlatformDeliveryData } from '../models/PlatformDeliveryData';
import { Player } from '../models/Player';
import { PlayerNotificationTarget } from '../models/PlayerNotificationTarget';
import { PlayerSlice } from '../models/PlayerSlice';
import { Purchase } from '../models/Purchase';
import { Segment } from '../models/Segment';
import { SegmentNotificationTarget } from '../models/SegmentNotificationTarget';
import { StringMap } from '../models/StringMap';
import { UpdatePlayerTagsRequestBody } from '../models/UpdatePlayerTagsRequestBody';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiCancelNotificationRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicancelNotification
     */
    app_id: string
    /**
     * 
     * @type string
     * @memberof DefaultApicancelNotification
     */
    notification_id: string
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
    app_id: string
    /**
     * 
     * @type Segment
     * @memberof DefaultApicreateSegments
     */
    segment?: Segment
}

export interface DefaultApiDeletePlayerRequest {
    /**
     * The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @type string
     * @memberof DefaultApideletePlayer
     */
    app_id: string
    /**
     * The OneSignal player_id
     * @type string
     * @memberof DefaultApideletePlayer
     */
    player_id: string
}

export interface DefaultApiDeleteSegmentsRequest {
    /**
     * The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @type string
     * @memberof DefaultApideleteSegments
     */
    app_id: string
    /**
     * The segment_id can be found in the URL of the segment when viewing it in the dashboard.
     * @type string
     * @memberof DefaultApideleteSegments
     */
    segment_id: string
}

export interface DefaultApiExportPlayersRequest {
    /**
     * The app ID that you want to export devices from
     * @type string
     * @memberof DefaultApiexportPlayers
     */
    app_id: string
    /**
     * 
     * @type ExportPlayersRequestBody
     * @memberof DefaultApiexportPlayers
     */
    export_players_request_body?: ExportPlayersRequestBody
}

export interface DefaultApiGetAppRequest {
    /**
     * An app id
     * @type string
     * @memberof DefaultApigetApp
     */
    app_id: string
}

export interface DefaultApiGetAppsRequest {
}

export interface DefaultApiGetNotificationRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetNotification
     */
    app_id: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetNotification
     */
    notification_id: string
}

export interface DefaultApiGetNotificationHistoryRequest {
    /**
     * The \&quot;id\&quot; of the message found in the Notification object
     * @type string
     * @memberof DefaultApigetNotificationHistory
     */
    notification_id: string
    /**
     * 
     * @type GetNotificationRequestBody
     * @memberof DefaultApigetNotificationHistory
     */
    get_notification_request_body: GetNotificationRequestBody
}

export interface DefaultApiGetNotificationsRequest {
    /**
     * The app ID that you want to view notifications from
     * @type string
     * @memberof DefaultApigetNotifications
     */
    app_id: string
    /**
     * How many notifications to return.  Max is 50.  Default is 50.
     * @type string
     * @memberof DefaultApigetNotifications
     */
    limit?: string
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
    app_id: string
    /**
     * Required Comma-separated list of names and the value (sum/count) for the returned outcome data. Note: Clicks only support count aggregation. For out-of-the-box OneSignal outcomes such as click and session duration, please use the “os” prefix with two underscores. For other outcomes, please use the name specified by the user. Example:os__session_duration.count,os__click.count,CustomOutcomeName.sum 
     * @type string
     * @memberof DefaultApigetOutcomes
     */
    outcome_names: string
    /**
     * Optional If outcome names contain any commas, then please specify only one value at a time. Example: outcome_names[]&#x3D;os__click.count&amp;outcome_names[]&#x3D;Sales, Purchase.count where “Sales, Purchase” is the custom outcomes with a comma in the name. 
     * @type string
     * @memberof DefaultApigetOutcomes
     */
    outcome_names2?: string
    /**
     * Optional Time range for the returned data. The values can be 1h (for the last 1 hour data), 1d (for the last 1 day data), or 1mo (for the last 1 month data). Default is 1h if the parameter is omitted. 
     * @type string
     * @memberof DefaultApigetOutcomes
     */
    outcome_time_range?: string
    /**
     * Optional Platform id. Refer device&#39;s platform ids for values. Example: outcome_platform&#x3D;0 for iOS outcome_platform&#x3D;7,8 for Safari and Firefox Default is data from all platforms if the parameter is omitted. 
     * @type string
     * @memberof DefaultApigetOutcomes
     */
    outcome_platforms?: string
    /**
     * Optional Attribution type for the outcomes. The values can be direct or influenced or unattributed. Example: outcome_attribution&#x3D;direct Default is total (returns direct+influenced+unattributed) if the parameter is omitted. 
     * @type string
     * @memberof DefaultApigetOutcomes
     */
    outcome_attribution?: string
}

export interface DefaultApiGetPlayerRequest {
    /**
     * Your app_id for this device
     * @type string
     * @memberof DefaultApigetPlayer
     */
    app_id: string
    /**
     * Player&#39;s OneSignal ID
     * @type string
     * @memberof DefaultApigetPlayer
     */
    player_id: string
    /**
     * Email - Only required if you have enabled Identity Verification and device_type is email (11).
     * @type string
     * @memberof DefaultApigetPlayer
     */
    email_auth_hash?: string
}

export interface DefaultApiGetPlayersRequest {
    /**
     * The app ID that you want to view players from
     * @type string
     * @memberof DefaultApigetPlayers
     */
    app_id: string
    /**
     * How many devices to return. Max is 300. Default is 300
     * @type string
     * @memberof DefaultApigetPlayers
     */
    limit?: string
    /**
     * Result offset. Default is 0. Results are sorted by id;
     * @type number
     * @memberof DefaultApigetPlayers
     */
    offset?: number
}

export interface DefaultApiUpdateAppRequest {
    /**
     * An app id
     * @type string
     * @memberof DefaultApiupdateApp
     */
    app_id: string
    /**
     * 
     * @type App
     * @memberof DefaultApiupdateApp
     */
    app: App
}

export interface DefaultApiUpdatePlayerRequest {
    /**
     * Player&#39;s OneSignal ID
     * @type string
     * @memberof DefaultApiupdatePlayer
     */
    player_id: string
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
    app_id: string
    /**
     * The External User ID mapped to teh device record in OneSignal.  Must be actively set on the device to be updated.
     * @type string
     * @memberof DefaultApiupdatePlayerTags
     */
    external_user_id: string
    /**
     * 
     * @type UpdatePlayerTagsRequestBody
     * @memberof DefaultApiupdatePlayerTags
     */
    update_player_tags_request_body?: UpdatePlayerTagsRequestBody
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
    public cancelNotification(param: DefaultApiCancelNotificationRequest, options?: Configuration): Promise<InlineResponse2001> {
        return this.api.cancelNotification(param.app_id, param.notification_id,  options).toPromise();
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
    public createNotification(param: DefaultApiCreateNotificationRequest, options?: Configuration): Promise<InlineResponse200> {
        return this.api.createNotification(param.notification,  options).toPromise();
    }

    /**
     * Register a new device to one of your OneSignal apps 🚧 Don't use this This API endpoint is designed to be used from our open source Mobile and Web Push SDKs. It is not designed for developers to use it directly, unless instructed to do so by OneSignal support. If you use this method instead of our SDKs, many OneSignal features such as conversion tracking, timezone tracking, language detection, and rich-push won't work out of the box. It will also make it harder to identify possible setup issues. This method is used to register a new device with OneSignal. If a device is already registered with the specified identifier, then this will update the existing device record instead of creating a new one. The returned player is a player / user ID. Use the returned ID to send push notifications to this specific user later, or to include this player when sending to a set of users. 🚧 iOS Must set test_type to 1 when building your iOS app as development. Omit this field in your production app builds. 
     * Add a device
     * @param param the request object
     */
    public createPlayer(param: DefaultApiCreatePlayerRequest, options?: Configuration): Promise<InlineResponse2004> {
        return this.api.createPlayer(param.player,  options).toPromise();
    }

    /**
     * Create segments visible and usable in the dashboard and API - Required: OneSignal Paid Plan The Create Segment method is used when you want your server to programmatically create a segment instead of using the OneSignal Dashboard UI. Just like creating Segments from the dashboard you can pass in filters with multiple \"AND\" or \"OR\" operator's. 🚧 Does Not Update Segments This endpoint will only create segments, it does not edit or update currently created Segments. You will need to use the Delete Segments endpoint and re-create it with this endpoint to edit. 
     * Create Segments
     * @param param the request object
     */
    public createSegments(param: DefaultApiCreateSegmentsRequest, options?: Configuration): Promise<InlineResponse201> {
        return this.api.createSegments(param.app_id, param.segment,  options).toPromise();
    }

    /**
     * Delete player - Required: Used to delete a single, specific Player ID record from a specific OneSignal app. 
     * Delete a user record
     * @param param the request object
     */
    public deletePlayer(param: DefaultApiDeletePlayerRequest, options?: Configuration): Promise<InlineResponse2001> {
        return this.api.deletePlayer(param.app_id, param.player_id,  options).toPromise();
    }

    /**
     * Delete segments (not user devices) - Required: OneSignal Paid Plan You can delete a segment under your app by calling this API. You must provide an API key in the Authorization header that has admin access on the app. The segment_id can be found in the URL of the segment when viewing it in the dashboard. 
     * Delete Segments
     * @param param the request object
     */
    public deleteSegments(param: DefaultApiDeleteSegmentsRequest, options?: Configuration): Promise<InlineResponse2003> {
        return this.api.deleteSegments(param.app_id, param.segment_id,  options).toPromise();
    }

    /**
     * Generate a compressed CSV export of all of your current user data This method can be used to generate a compressed CSV export of all of your current user data. It is a much faster alternative than retrieving this data using the /players API endpoint. The file will be compressed using GZip. The file may take several minutes to generate depending on the number of users in your app. The URL generated will be available for 3 days and includes random v4 uuid as part of the resource name to be unguessable. 🚧 403 Error Responses          You can test if it is complete by making a GET request to the csv_file_url value. This file may take time to generate depending on how many device records are being pulled. If the file is not ready, a 403 error will be returned. Otherwise the file itself will be returned. 🚧 Requires Authentication Key Requires your OneSignal App's REST API Key, available in Keys & IDs. 🚧 Concurrent Exports Only one concurrent export is allowed per OneSignal account. Please ensure you have successfully downloaded the .csv.gz file before exporting another app. CSV File Format: - Default Columns:   | Field | Details |   | --- | --- |   | id | OneSignal Player Id |   | identifier | Push Token |   | session_count | Number of times they visited the app or site   | language | Device language code |   | timezone | Number of seconds away from UTC. Example: -28800 |   | game_version | Version of your mobile app gathered from Android Studio versionCode in your App/build.gradle and iOS uses kCFBundleVersionKey in Xcode. |   | device_os | Device Operating System Version. Example: 80 = Chrome 80, 9 = Android 9 |   | device_type | Device Operating System Type |   | device_model | Device Hardware String Code. Example: Mobile Web Subscribers will have `Linux armv` |   | ad_id | Based on the Google Advertising Id for Android, identifierForVendor for iOS. OptedOut means user turned off Advertising tracking on the device. |   | tags | Current OneSignal Data Tags on the device. |   | last_active | Date and time the user last opened the mobile app or visited the site. |   | playtime | Total amount of time in seconds the user had the mobile app open. |   | amount_spent |  Mobile only - amount spent in USD on In-App Purchases. |    | created_at | Date and time the device record was created in OneSignal. Mobile - first time they opened the app with OneSignal SDK. Web - first time the user subscribed to the site. |   | invalid_identifier | t = unsubscribed, f = subscibed |   | badge_count | Current number of badges on the device | - Extra Columns:   | Field | Details |   | --- | --- |   | external_user_id | Your User Id set on the device |   | notification_types | Notification types |   | location | Location points (Latitude and Longitude) set on the device. |   | country | Country code |   | rooted | Android device rooted or not |   | ip | IP Address of the device if being tracked. See Handling Personal Data. |   | web_auth | Web Only authorization key. |   | web_p256 | Web Only p256 key. | 
     * CSV export
     * @param param the request object
     */
    public exportPlayers(param: DefaultApiExportPlayersRequest, options?: Configuration): Promise<InlineResponse2005> {
        return this.api.exportPlayers(param.app_id, param.export_players_request_body,  options).toPromise();
    }

    /**
     * View the details of a single OneSignal app
     * View an app
     * @param param the request object
     */
    public getApp(param: DefaultApiGetAppRequest, options?: Configuration): Promise<App> {
        return this.api.getApp(param.app_id,  options).toPromise();
    }

    /**
     * View the details of all of your current OneSignal apps
     * View apps
     * @param param the request object
     */
    public getApps(param: DefaultApiGetAppsRequest, options?: Configuration): Promise<string> {
        return this.api.getApps( options).toPromise();
    }

    /**
     * View the details of a single notification and outcomes associated with it
     * View notification
     * @param param the request object
     */
    public getNotification(param: DefaultApiGetNotificationRequest, options?: Configuration): Promise<Notification> {
        return this.api.getNotification(param.app_id, param.notification_id,  options).toPromise();
    }

    /**
     * -> View the devices sent a message - OneSignal Paid Plan Required This method will return all devices that were sent the given notification_id of an Email or Push Notification if used within 7 days of the date sent. After 7 days of the sending date, the message history data will be unavailable. After a successful response is received, the destination url may be polled until the file becomes available. Most exports are done in ~1-3 minutes, so setting a poll interval of 10 seconds should be adequate. For use cases that are not meant to be consumed by a script, an email will be sent to the supplied email address. 🚧 Requirements A OneSignal Paid Plan. Turn on Send History via OneSignal API in Settings -> Analytics. Cannot get data before this was turned on. Must be called within 7 days after sending the message. Messages targeting under 1000 recipients will not have \"sent\" events recorded, but will show \"clicked\" events. Requires your OneSignal App's REST API Key, available in Keys & IDs.
     * Notification History
     * @param param the request object
     */
    public getNotificationHistory(param: DefaultApiGetNotificationHistoryRequest, options?: Configuration): Promise<InlineResponse2002> {
        return this.api.getNotificationHistory(param.notification_id, param.get_notification_request_body,  options).toPromise();
    }

    /**
     * View the details of multiple notifications
     * View notifications
     * @param param the request object
     */
    public getNotifications(param: DefaultApiGetNotificationsRequest, options?: Configuration): Promise<NotificationSlice> {
        return this.api.getNotifications(param.app_id, param.limit, param.offset, param.kind,  options).toPromise();
    }

    /**
     * View the details of all the outcomes associated with your app  🚧 Requires Authentication Key Requires your OneSignal App's REST API Key, available in Keys & IDs.  🚧 Outcome Data Limitations Outcomes are only accessible for around 30 days before deleted from our servers. You will need to export this data every month if you want to keep it. 
     * View Outcomes
     * @param param the request object
     */
    public getOutcomes(param: DefaultApiGetOutcomesRequest, options?: Configuration): Promise<Array<OutcomeData>> {
        return this.api.getOutcomes(param.app_id, param.outcome_names, param.outcome_names2, param.outcome_time_range, param.outcome_platforms, param.outcome_attribution,  options).toPromise();
    }

    /**
     * View the details of an existing device in one of your OneSignal apps
     * View device
     * @param param the request object
     */
    public getPlayer(param: DefaultApiGetPlayerRequest, options?: Configuration): Promise<Player> {
        return this.api.getPlayer(param.app_id, param.player_id, param.email_auth_hash,  options).toPromise();
    }

    /**
     * View the details of multiple devices in one of your OneSignal apps Unavailable for Apps Over 80,000 Users For performance reasons, this method is not available for larger apps. Larger apps should use the CSV export API endpoint, which is much more performant. 
     * View devices
     * @param param the request object
     */
    public getPlayers(param: DefaultApiGetPlayersRequest, options?: Configuration): Promise<PlayerSlice> {
        return this.api.getPlayers(param.app_id, param.limit, param.offset,  options).toPromise();
    }

    /**
     * Updates the name or configuration settings of an existing OneSignal app
     * Update an app
     * @param param the request object
     */
    public updateApp(param: DefaultApiUpdateAppRequest, options?: Configuration): Promise<App> {
        return this.api.updateApp(param.app_id, param.app,  options).toPromise();
    }

    /**
     * Update an existing device in one of your OneSignal apps
     * Edit device
     * @param param the request object
     */
    public updatePlayer(param: DefaultApiUpdatePlayerRequest, options?: Configuration): Promise<InlineResponse2001> {
        return this.api.updatePlayer(param.player_id, param.player,  options).toPromise();
    }

    /**
     * Update an existing device's tags in one of your OneSignal apps using the External User ID. Warning - Android SDK Data Synchronization Tags added through the Android SDK tagging methods may not update if using the API to change or update the same tag. For example, if you use SDK method sendTag(\"key\", \"value1\") then update the tag value to \"value2\" with this API endpoint. You will not be able to set the value back to \"value1\" through the SDK, you will need to change it to something different through the SDK to be reset. Recommendations if using this Endpoint on Android Mobile Apps: 1 - Do not use the same tag keys for SDK and API updates 2 - If you want to use the same key for both SDK and API updates, call the SDK getTags method first to update the device's tags. This is only applicable on the Android Mobile App SDKs. 📘 Deleting Tags To delete a tag, include its key and set its value to blank. Omitting a key/value will not delete it. For example, if I wanted to delete two existing tags rank and category while simultaneously adding a new tag class, the tags JSON would look like the following: \"tags\": {    \"rank\": \"\",    \"category\": \"\",    \"class\": \"my_new_value\" } 
     * Edit tags with external user id
     * @param param the request object
     */
    public updatePlayerTags(param: DefaultApiUpdatePlayerTagsRequest, options?: Configuration): Promise<InlineResponse2003> {
        return this.api.updatePlayerTags(param.app_id, param.external_user_id, param.update_player_tags_request_body,  options).toPromise();
    }

}
