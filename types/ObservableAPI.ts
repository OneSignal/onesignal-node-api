import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * Used to stop a scheduled or currently outgoing notification
     * Stop a scheduled or currently outgoing notification
     * @param app_id 
     * @param notification_id 
     */
    public cancelNotification(app_id: string, notification_id: string, _options?: Configuration): Observable<InlineResponse2001> {
        const requestContextPromise = this.requestFactory.cancelNotification(app_id, notification_id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelNotification(rsp)));
            }));
    }
 
    /**
     * Creates a new OneSignal app
     * Create an app
     * @param app 
     */
    public createApp(app: App, _options?: Configuration): Observable<App> {
        const requestContextPromise = this.requestFactory.createApp(app, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createApp(rsp)));
            }));
    }
 
    /**
     * Sends notifications to your users 
     * Create notification
     * @param notification 
     */
    public createNotification(notification: Notification, _options?: Configuration): Observable<InlineResponse200> {
        const requestContextPromise = this.requestFactory.createNotification(notification, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createNotification(rsp)));
            }));
    }
 
    /**
     * Register a new device to one of your OneSignal apps 🚧 Don't use this This API endpoint is designed to be used from our open source Mobile and Web Push SDKs. It is not designed for developers to use it directly, unless instructed to do so by OneSignal support. If you use this method instead of our SDKs, many OneSignal features such as conversion tracking, timezone tracking, language detection, and rich-push won't work out of the box. It will also make it harder to identify possible setup issues. This method is used to register a new device with OneSignal. If a device is already registered with the specified identifier, then this will update the existing device record instead of creating a new one. The returned player is a player / user ID. Use the returned ID to send push notifications to this specific user later, or to include this player when sending to a set of users. 🚧 iOS Must set test_type to 1 when building your iOS app as development. Omit this field in your production app builds. 
     * Add a device
     * @param player 
     */
    public createPlayer(player: Player, _options?: Configuration): Observable<InlineResponse2004> {
        const requestContextPromise = this.requestFactory.createPlayer(player, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPlayer(rsp)));
            }));
    }
 
    /**
     * Create segments visible and usable in the dashboard and API - Required: OneSignal Paid Plan The Create Segment method is used when you want your server to programmatically create a segment instead of using the OneSignal Dashboard UI. Just like creating Segments from the dashboard you can pass in filters with multiple \"AND\" or \"OR\" operator's. 🚧 Does Not Update Segments This endpoint will only create segments, it does not edit or update currently created Segments. You will need to use the Delete Segments endpoint and re-create it with this endpoint to edit. 
     * Create Segments
     * @param app_id The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @param segment 
     */
    public createSegments(app_id: string, segment?: Segment, _options?: Configuration): Observable<InlineResponse201> {
        const requestContextPromise = this.requestFactory.createSegments(app_id, segment, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSegments(rsp)));
            }));
    }
 
    /**
     * Delete player - Required: Used to delete a single, specific Player ID record from a specific OneSignal app. 
     * Delete a user record
     * @param app_id The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @param player_id The OneSignal player_id
     */
    public deletePlayer(app_id: string, player_id: string, _options?: Configuration): Observable<InlineResponse2001> {
        const requestContextPromise = this.requestFactory.deletePlayer(app_id, player_id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePlayer(rsp)));
            }));
    }
 
    /**
     * Delete segments (not user devices) - Required: OneSignal Paid Plan You can delete a segment under your app by calling this API. You must provide an API key in the Authorization header that has admin access on the app. The segment_id can be found in the URL of the segment when viewing it in the dashboard. 
     * Delete Segments
     * @param app_id The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @param segment_id The segment_id can be found in the URL of the segment when viewing it in the dashboard.
     */
    public deleteSegments(app_id: string, segment_id: string, _options?: Configuration): Observable<InlineResponse2003> {
        const requestContextPromise = this.requestFactory.deleteSegments(app_id, segment_id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSegments(rsp)));
            }));
    }
 
    /**
     * Generate a compressed CSV export of all of your current user data This method can be used to generate a compressed CSV export of all of your current user data. It is a much faster alternative than retrieving this data using the /players API endpoint. The file will be compressed using GZip. The file may take several minutes to generate depending on the number of users in your app. The URL generated will be available for 3 days and includes random v4 uuid as part of the resource name to be unguessable. 🚧 403 Error Responses          You can test if it is complete by making a GET request to the csv_file_url value. This file may take time to generate depending on how many device records are being pulled. If the file is not ready, a 403 error will be returned. Otherwise the file itself will be returned. 🚧 Requires Authentication Key Requires your OneSignal App's REST API Key, available in Keys & IDs. 🚧 Concurrent Exports Only one concurrent export is allowed per OneSignal account. Please ensure you have successfully downloaded the .csv.gz file before exporting another app. CSV File Format: - Default Columns:   | Field | Details |   | --- | --- |   | id | OneSignal Player Id |   | identifier | Push Token |   | session_count | Number of times they visited the app or site   | language | Device language code |   | timezone | Number of seconds away from UTC. Example: -28800 |   | game_version | Version of your mobile app gathered from Android Studio versionCode in your App/build.gradle and iOS uses kCFBundleVersionKey in Xcode. |   | device_os | Device Operating System Version. Example: 80 = Chrome 80, 9 = Android 9 |   | device_type | Device Operating System Type |   | device_model | Device Hardware String Code. Example: Mobile Web Subscribers will have `Linux armv` |   | ad_id | Based on the Google Advertising Id for Android, identifierForVendor for iOS. OptedOut means user turned off Advertising tracking on the device. |   | tags | Current OneSignal Data Tags on the device. |   | last_active | Date and time the user last opened the mobile app or visited the site. |   | playtime | Total amount of time in seconds the user had the mobile app open. |   | amount_spent |  Mobile only - amount spent in USD on In-App Purchases. |    | created_at | Date and time the device record was created in OneSignal. Mobile - first time they opened the app with OneSignal SDK. Web - first time the user subscribed to the site. |   | invalid_identifier | t = unsubscribed, f = subscibed |   | badge_count | Current number of badges on the device | - Extra Columns:   | Field | Details |   | --- | --- |   | external_user_id | Your User Id set on the device |   | notification_types | Notification types |   | location | Location points (Latitude and Longitude) set on the device. |   | country | Country code |   | rooted | Android device rooted or not |   | ip | IP Address of the device if being tracked. See Handling Personal Data. |   | web_auth | Web Only authorization key. |   | web_p256 | Web Only p256 key. | 
     * CSV export
     * @param app_id The app ID that you want to export devices from
     * @param export_players_request_body 
     */
    public exportPlayers(app_id: string, export_players_request_body?: ExportPlayersRequestBody, _options?: Configuration): Observable<InlineResponse2005> {
        const requestContextPromise = this.requestFactory.exportPlayers(app_id, export_players_request_body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exportPlayers(rsp)));
            }));
    }
 
    /**
     * View the details of a single OneSignal app
     * View an app
     * @param app_id An app id
     */
    public getApp(app_id: string, _options?: Configuration): Observable<App> {
        const requestContextPromise = this.requestFactory.getApp(app_id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApp(rsp)));
            }));
    }
 
    /**
     * View the details of all of your current OneSignal apps
     * View apps
     */
    public getApps(_options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getApps(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApps(rsp)));
            }));
    }
 
    /**
     * View the details of a single notification and outcomes associated with it
     * View notification
     * @param app_id 
     * @param notification_id 
     */
    public getNotification(app_id: string, notification_id: string, _options?: Configuration): Observable<Notification> {
        const requestContextPromise = this.requestFactory.getNotification(app_id, notification_id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNotification(rsp)));
            }));
    }
 
    /**
     * -> View the devices sent a message - OneSignal Paid Plan Required This method will return all devices that were sent the given notification_id of an Email or Push Notification if used within 7 days of the date sent. After 7 days of the sending date, the message history data will be unavailable. After a successful response is received, the destination url may be polled until the file becomes available. Most exports are done in ~1-3 minutes, so setting a poll interval of 10 seconds should be adequate. For use cases that are not meant to be consumed by a script, an email will be sent to the supplied email address. 🚧 Requirements A OneSignal Paid Plan. Turn on Send History via OneSignal API in Settings -> Analytics. Cannot get data before this was turned on. Must be called within 7 days after sending the message. Messages targeting under 1000 recipients will not have \"sent\" events recorded, but will show \"clicked\" events. Requires your OneSignal App's REST API Key, available in Keys & IDs.
     * Notification History
     * @param notification_id The \&quot;id\&quot; of the message found in the Notification object
     * @param get_notification_request_body 
     */
    public getNotificationHistory(notification_id: string, get_notification_request_body: GetNotificationRequestBody, _options?: Configuration): Observable<InlineResponse2002> {
        const requestContextPromise = this.requestFactory.getNotificationHistory(notification_id, get_notification_request_body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNotificationHistory(rsp)));
            }));
    }
 
    /**
     * View the details of multiple notifications
     * View notifications
     * @param app_id The app ID that you want to view notifications from
     * @param limit How many notifications to return.  Max is 50.  Default is 50.
     * @param offset Page offset.  Default is 0.  Results are sorted by queued_at in descending order.  queued_at is a representation of the time that the notification was queued at.
     * @param kind Kind of notifications returned:   * unset - All notification types (default)   * &#x60;0&#x60; - Dashboard only   * &#x60;1&#x60; - API only   * &#x60;3&#x60; - Automated only 
     */
    public getNotifications(app_id: string, limit?: string, offset?: number, kind?: 0 | 1 | 3, _options?: Configuration): Observable<NotificationSlice> {
        const requestContextPromise = this.requestFactory.getNotifications(app_id, limit, offset, kind, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNotifications(rsp)));
            }));
    }
 
    /**
     * View the details of all the outcomes associated with your app  🚧 Requires Authentication Key Requires your OneSignal App's REST API Key, available in Keys & IDs.  🚧 Outcome Data Limitations Outcomes are only accessible for around 30 days before deleted from our servers. You will need to export this data every month if you want to keep it. 
     * View Outcomes
     * @param app_id The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @param outcome_names Required Comma-separated list of names and the value (sum/count) for the returned outcome data. Note: Clicks only support count aggregation. For out-of-the-box OneSignal outcomes such as click and session duration, please use the “os” prefix with two underscores. For other outcomes, please use the name specified by the user. Example:os__session_duration.count,os__click.count,CustomOutcomeName.sum 
     * @param outcome_names2 Optional If outcome names contain any commas, then please specify only one value at a time. Example: outcome_names[]&#x3D;os__click.count&amp;outcome_names[]&#x3D;Sales, Purchase.count where “Sales, Purchase” is the custom outcomes with a comma in the name. 
     * @param outcome_time_range Optional Time range for the returned data. The values can be 1h (for the last 1 hour data), 1d (for the last 1 day data), or 1mo (for the last 1 month data). Default is 1h if the parameter is omitted. 
     * @param outcome_platforms Optional Platform id. Refer device&#39;s platform ids for values. Example: outcome_platform&#x3D;0 for iOS outcome_platform&#x3D;7,8 for Safari and Firefox Default is data from all platforms if the parameter is omitted. 
     * @param outcome_attribution Optional Attribution type for the outcomes. The values can be direct or influenced or unattributed. Example: outcome_attribution&#x3D;direct Default is total (returns direct+influenced+unattributed) if the parameter is omitted. 
     */
    public getOutcomes(app_id: string, outcome_names: string, outcome_names2?: string, outcome_time_range?: string, outcome_platforms?: string, outcome_attribution?: string, _options?: Configuration): Observable<Array<OutcomeData>> {
        const requestContextPromise = this.requestFactory.getOutcomes(app_id, outcome_names, outcome_names2, outcome_time_range, outcome_platforms, outcome_attribution, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOutcomes(rsp)));
            }));
    }
 
    /**
     * View the details of an existing device in one of your OneSignal apps
     * View device
     * @param app_id Your app_id for this device
     * @param player_id Player&#39;s OneSignal ID
     * @param email_auth_hash Email - Only required if you have enabled Identity Verification and device_type is email (11).
     */
    public getPlayer(app_id: string, player_id: string, email_auth_hash?: string, _options?: Configuration): Observable<Player> {
        const requestContextPromise = this.requestFactory.getPlayer(app_id, player_id, email_auth_hash, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPlayer(rsp)));
            }));
    }
 
    /**
     * View the details of multiple devices in one of your OneSignal apps Unavailable for Apps Over 80,000 Users For performance reasons, this method is not available for larger apps. Larger apps should use the CSV export API endpoint, which is much more performant. 
     * View devices
     * @param app_id The app ID that you want to view players from
     * @param limit How many devices to return. Max is 300. Default is 300
     * @param offset Result offset. Default is 0. Results are sorted by id;
     */
    public getPlayers(app_id: string, limit?: string, offset?: number, _options?: Configuration): Observable<PlayerSlice> {
        const requestContextPromise = this.requestFactory.getPlayers(app_id, limit, offset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPlayers(rsp)));
            }));
    }
 
    /**
     * Updates the name or configuration settings of an existing OneSignal app
     * Update an app
     * @param app_id An app id
     * @param app 
     */
    public updateApp(app_id: string, app: App, _options?: Configuration): Observable<App> {
        const requestContextPromise = this.requestFactory.updateApp(app_id, app, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateApp(rsp)));
            }));
    }
 
    /**
     * Update an existing device in one of your OneSignal apps
     * Edit device
     * @param player_id Player&#39;s OneSignal ID
     * @param player 
     */
    public updatePlayer(player_id: string, player: Player, _options?: Configuration): Observable<InlineResponse2001> {
        const requestContextPromise = this.requestFactory.updatePlayer(player_id, player, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePlayer(rsp)));
            }));
    }
 
    /**
     * Update an existing device's tags in one of your OneSignal apps using the External User ID. Warning - Android SDK Data Synchronization Tags added through the Android SDK tagging methods may not update if using the API to change or update the same tag. For example, if you use SDK method sendTag(\"key\", \"value1\") then update the tag value to \"value2\" with this API endpoint. You will not be able to set the value back to \"value1\" through the SDK, you will need to change it to something different through the SDK to be reset. Recommendations if using this Endpoint on Android Mobile Apps: 1 - Do not use the same tag keys for SDK and API updates 2 - If you want to use the same key for both SDK and API updates, call the SDK getTags method first to update the device's tags. This is only applicable on the Android Mobile App SDKs. 📘 Deleting Tags To delete a tag, include its key and set its value to blank. Omitting a key/value will not delete it. For example, if I wanted to delete two existing tags rank and category while simultaneously adding a new tag class, the tags JSON would look like the following: \"tags\": {    \"rank\": \"\",    \"category\": \"\",    \"class\": \"my_new_value\" } 
     * Edit tags with external user id
     * @param app_id The OneSignal App ID the user record is found under.
     * @param external_user_id The External User ID mapped to teh device record in OneSignal.  Must be actively set on the device to be updated.
     * @param update_player_tags_request_body 
     */
    public updatePlayerTags(app_id: string, external_user_id: string, update_player_tags_request_body?: UpdatePlayerTagsRequestBody, _options?: Configuration): Observable<InlineResponse2003> {
        const requestContextPromise = this.requestFactory.updatePlayerTags(app_id, external_user_id, update_player_tags_request_body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePlayerTags(rsp)));
            }));
    }
 
}
