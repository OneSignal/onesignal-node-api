import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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
     * Starts a Live Activity
     * Start Live Activity
     * @param appId The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @param activityId Live Activity record ID
     * @param beginLiveActivityRequest 
     */
    public beginLiveActivity(appId: string, activityId: string, beginLiveActivityRequest: BeginLiveActivityRequest, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.beginLiveActivity(appId, activityId, beginLiveActivityRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.beginLiveActivity(rsp)));
            }));
    }

    /**
     * Used to stop a scheduled or currently outgoing notification
     * Stop a scheduled or currently outgoing notification
     * @param appId 
     * @param notificationId 
     */
    public cancelNotification(appId: string, notificationId: string, _options?: Configuration): Observable<CancelNotificationSuccessResponse> {
        const requestContextPromise = this.requestFactory.cancelNotification(appId, notificationId, _options);

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
    public createNotification(notification: Notification, _options?: Configuration): Observable<CreateNotificationSuccessResponse> {
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
     * Register a new device to one of your OneSignal apps &#x1F6A7; Don\'t use this This API endpoint is designed to be used from our open source Mobile and Web Push SDKs. It is not designed for developers to use it directly, unless instructed to do so by OneSignal support. If you use this method instead of our SDKs, many OneSignal features such as conversion tracking, timezone tracking, language detection, and rich-push won\'t work out of the box. It will also make it harder to identify possible setup issues. This method is used to register a new device with OneSignal. If a device is already registered with the specified identifier, then this will update the existing device record instead of creating a new one. The returned player is a player / user ID. Use the returned ID to send push notifications to this specific user later, or to include this player when sending to a set of users. &#x1F6A7; iOS Must set test_type to 1 when building your iOS app as development. Omit this field in your production app builds. 
     * Add a device
     * @param player 
     */
    public createPlayer(player: Player, _options?: Configuration): Observable<CreatePlayerSuccessResponse> {
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
     * Create segments visible and usable in the dashboard and API - Required: OneSignal Paid Plan The Create Segment method is used when you want your server to programmatically create a segment instead of using the OneSignal Dashboard UI. Just like creating Segments from the dashboard you can pass in filters with multiple \"AND\" or \"OR\" operator\'s. &#x1F6A7; Does Not Update Segments This endpoint will only create segments, it does not edit or update currently created Segments. You will need to use the Delete Segments endpoint and re-create it with this endpoint to edit. 
     * Create Segments
     * @param appId The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @param segment 
     */
    public createSegments(appId: string, segment?: Segment, _options?: Configuration): Observable<CreateSegmentSuccessResponse> {
        const requestContextPromise = this.requestFactory.createSegments(appId, segment, _options);

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
     * Creates a new Subscription under the User provided. Useful to add email addresses and SMS numbers to the User.
     * @param appId 
     * @param aliasLabel 
     * @param aliasId 
     * @param createSubscriptionRequestBody 
     */
    public createSubscription(appId: string, aliasLabel: string, aliasId: string, createSubscriptionRequestBody: CreateSubscriptionRequestBody, _options?: Configuration): Observable<InlineResponse201> {
        const requestContextPromise = this.requestFactory.createSubscription(appId, aliasLabel, aliasId, createSubscriptionRequestBody, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSubscription(rsp)));
            }));
    }

    /**
     * Creates a User, optionally Subscriptions owned by the User as well as Aliases. Aliases provided in the payload will be used to look up an existing User.
     * @param appId 
     * @param user 
     */
    public createUser(appId: string, user: User, _options?: Configuration): Observable<User> {
        const requestContextPromise = this.requestFactory.createUser(appId, user, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createUser(rsp)));
            }));
    }

    /**
     * Deletes an alias by alias label
     * @param appId 
     * @param aliasLabel 
     * @param aliasId 
     * @param aliasLabelToDelete 
     */
    public deleteAlias(appId: string, aliasLabel: string, aliasId: string, aliasLabelToDelete: string, _options?: Configuration): Observable<InlineResponse200> {
        const requestContextPromise = this.requestFactory.deleteAlias(appId, aliasLabel, aliasId, aliasLabelToDelete, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAlias(rsp)));
            }));
    }

    /**
     * Delete player - Required: Used to delete a single, specific Player ID record from a specific OneSignal app. 
     * Delete a user record
     * @param appId The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @param playerId The OneSignal player_id
     */
    public deletePlayer(appId: string, playerId: string, _options?: Configuration): Observable<DeletePlayerSuccessResponse> {
        const requestContextPromise = this.requestFactory.deletePlayer(appId, playerId, _options);

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
     * @param appId The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @param segmentId The segment_id can be found in the URL of the segment when viewing it in the dashboard.
     */
    public deleteSegments(appId: string, segmentId: string, _options?: Configuration): Observable<DeleteSegmentSuccessResponse> {
        const requestContextPromise = this.requestFactory.deleteSegments(appId, segmentId, _options);

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
     * Deletes the Subscription.
     * @param appId 
     * @param subscriptionId 
     */
    public deleteSubscription(appId: string, subscriptionId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteSubscription(appId, subscriptionId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSubscription(rsp)));
            }));
    }

    /**
     * Removes the User identified by (:alias_label, :alias_id), and all Subscriptions and Aliases
     * @param appId 
     * @param aliasLabel 
     * @param aliasId 
     */
    public deleteUser(appId: string, aliasLabel: string, aliasId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteUser(appId, aliasLabel, aliasId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteUser(rsp)));
            }));
    }

    /**
     * Stops a Live Activity
     * Stop Live Activity
     * @param appId The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @param activityId Live Activity record ID
     * @param subscriptionId Subscription ID
     */
    public endLiveActivity(appId: string, activityId: string, subscriptionId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.endLiveActivity(appId, activityId, subscriptionId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.endLiveActivity(rsp)));
            }));
    }

    /**
     * Generate a compressed CSV report of all of the events data for a notification. This will return a URL immediately upon success but it may take several minutes for the CSV to become available at that URL depending on the volume of data. Only one export can be in-progress per OneSignal account at any given time.
     * Export CSV of Events
     * @param notificationId The ID of the notification to export events from.
     * @param appId The ID of the app that the notification belongs to.
     */
    public exportEvents(notificationId: string, appId: string, _options?: Configuration): Observable<ExportEventsSuccessResponse> {
        const requestContextPromise = this.requestFactory.exportEvents(notificationId, appId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exportEvents(rsp)));
            }));
    }

    /**
     * Generate a compressed CSV export of all of your current user data This method can be used to generate a compressed CSV export of all of your current user data. It is a much faster alternative than retrieving this data using the /players API endpoint. The file will be compressed using GZip. The file may take several minutes to generate depending on the number of users in your app. The URL generated will be available for 3 days and includes random v4 uuid as part of the resource name to be unguessable. &#x1F6A7; 403 Error Responses          You can test if it is complete by making a GET request to the csv_file_url value. This file may take time to generate depending on how many device records are being pulled. If the file is not ready, a 403 error will be returned. Otherwise the file itself will be returned. &#x1F6A7; Requires Authentication Key Requires your OneSignal App\'s REST API Key, available in Keys & IDs. &#x1F6A7; Concurrent Exports Only one concurrent export is allowed per OneSignal account. Please ensure you have successfully downloaded the .csv.gz file before exporting another app. CSV File Format: - Default Columns:   | Field | Details |   | --- | --- |   | id | OneSignal Player Id |   | identifier | Push Token |   | session_count | Number of times they visited the app or site   | language | Device language code |   | timezone | Number of seconds away from UTC. Example: -28800 |   | game_version | Version of your mobile app gathered from Android Studio versionCode in your App/build.gradle and iOS uses kCFBundleVersionKey in Xcode. |   | device_os | Device Operating System Version. Example: 80 = Chrome 80, 9 = Android 9 |   | device_type | Device Operating System Type |   | device_model | Device Hardware String Code. Example: Mobile Web Subscribers will have `Linux armv` |   | ad_id | Based on the Google Advertising Id for Android, identifierForVendor for iOS. OptedOut means user turned off Advertising tracking on the device. |   | tags | Current OneSignal Data Tags on the device. |   | last_active | Date and time the user last opened the mobile app or visited the site. |   | playtime | Total amount of time in seconds the user had the mobile app open. |   | amount_spent |  Mobile only - amount spent in USD on In-App Purchases. |    | created_at | Date and time the device record was created in OneSignal. Mobile - first time they opened the app with OneSignal SDK. Web - first time the user subscribed to the site. |   | invalid_identifier | t = unsubscribed, f = subscibed |   | badge_count | Current number of badges on the device | - Extra Columns:   | Field | Details |   | --- | --- |   | external_user_id | Your User Id set on the device |   | notification_types | Notification types |   | location | Location points (Latitude and Longitude) set on the device. |   | country | Country code |   | rooted | Android device rooted or not |   | ip | IP Address of the device if being tracked. See Handling Personal Data. |   | web_auth | Web Only authorization key. |   | web_p256 | Web Only p256 key. | 
     * Export CSV of Players
     * @param appId The app ID that you want to export devices from
     * @param exportPlayersRequestBody 
     */
    public exportPlayers(appId: string, exportPlayersRequestBody?: ExportPlayersRequestBody, _options?: Configuration): Observable<ExportPlayersSuccessResponse> {
        const requestContextPromise = this.requestFactory.exportPlayers(appId, exportPlayersRequestBody, _options);

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
     * Lists all Aliases for the User identified by :subscription_id.
     * @param appId 
     * @param subscriptionId 
     */
    public fetchAliases(appId: string, subscriptionId: string, _options?: Configuration): Observable<UserIdentityResponse> {
        const requestContextPromise = this.requestFactory.fetchAliases(appId, subscriptionId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.fetchAliases(rsp)));
            }));
    }

    /**
     * Returns the User’s properties, Aliases, and Subscriptions.
     * @param appId 
     * @param aliasLabel 
     * @param aliasId 
     */
    public fetchUser(appId: string, aliasLabel: string, aliasId: string, _options?: Configuration): Observable<User> {
        const requestContextPromise = this.requestFactory.fetchUser(appId, aliasLabel, aliasId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.fetchUser(rsp)));
            }));
    }

    /**
     * Lists all Aliases for the User identified by (:alias_label, :alias_id).
     * @param appId 
     * @param aliasLabel 
     * @param aliasId 
     */
    public fetchUserIdentity(appId: string, aliasLabel: string, aliasId: string, _options?: Configuration): Observable<InlineResponse200> {
        const requestContextPromise = this.requestFactory.fetchUserIdentity(appId, aliasLabel, aliasId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.fetchUserIdentity(rsp)));
            }));
    }

    /**
     * View the details of a single OneSignal app
     * View an app
     * @param appId An app id
     */
    public getApp(appId: string, _options?: Configuration): Observable<App> {
        const requestContextPromise = this.requestFactory.getApp(appId, _options);

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
    public getApps(_options?: Configuration): Observable<Array<App>> {
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
     * Manifest of In-App Messages the Subscription is eligible to display by the SDK.
     * @param appId 
     * @param subscriptionId 
     */
    public getEligibleIams(appId: string, subscriptionId: string, _options?: Configuration): Observable<InlineResponse2003> {
        const requestContextPromise = this.requestFactory.getEligibleIams(appId, subscriptionId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEligibleIams(rsp)));
            }));
    }

    /**
     * View the details of a single notification and outcomes associated with it
     * View notification
     * @param appId 
     * @param notificationId 
     */
    public getNotification(appId: string, notificationId: string, _options?: Configuration): Observable<NotificationWithMeta> {
        const requestContextPromise = this.requestFactory.getNotification(appId, notificationId, _options);

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
     * -> View the devices sent a message - OneSignal Paid Plan Required This method will return all devices that were sent the given notification_id of an Email or Push Notification if used within 7 days of the date sent. After 7 days of the sending date, the message history data will be unavailable. After a successful response is received, the destination url may be polled until the file becomes available. Most exports are done in ~1-3 minutes, so setting a poll interval of 10 seconds should be adequate. For use cases that are not meant to be consumed by a script, an email will be sent to the supplied email address. &#x1F6A7; Requirements A OneSignal Paid Plan. Turn on Send History via OneSignal API in Settings -> Analytics. Cannot get data before this was turned on. Must be called within 7 days after sending the message. Messages targeting under 1000 recipients will not have \"sent\" events recorded, but will show \"clicked\" events. Requires your OneSignal App\'s REST API Key, available in Keys & IDs.
     * Notification History
     * @param notificationId The \&quot;id\&quot; of the message found in the Notification object
     * @param getNotificationRequestBody 
     */
    public getNotificationHistory(notificationId: string, getNotificationRequestBody: GetNotificationRequestBody, _options?: Configuration): Observable<NotificationHistorySuccessResponse> {
        const requestContextPromise = this.requestFactory.getNotificationHistory(notificationId, getNotificationRequestBody, _options);

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
     * @param appId The app ID that you want to view notifications from
     * @param limit How many notifications to return.  Max is 50.  Default is 50.
     * @param offset Page offset.  Default is 0.  Results are sorted by queued_at in descending order.  queued_at is a representation of the time that the notification was queued at.
     * @param kind Kind of notifications returned:   * unset - All notification types (default)   * &#x60;0&#x60; - Dashboard only   * &#x60;1&#x60; - API only   * &#x60;3&#x60; - Automated only 
     */
    public getNotifications(appId: string, limit?: number, offset?: number, kind?: 0 | 1 | 3, _options?: Configuration): Observable<NotificationSlice> {
        const requestContextPromise = this.requestFactory.getNotifications(appId, limit, offset, kind, _options);

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
     * View the details of all the outcomes associated with your app  &#x1F6A7; Requires Authentication Key Requires your OneSignal App\'s REST API Key, available in Keys & IDs.  &#x1F6A7; Outcome Data Limitations Outcomes are only accessible for around 30 days before deleted from our servers. You will need to export this data every month if you want to keep it. 
     * View Outcomes
     * @param appId The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @param outcomeNames Required Comma-separated list of names and the value (sum/count) for the returned outcome data. Note: Clicks only support count aggregation. For out-of-the-box OneSignal outcomes such as click and session duration, please use the \&quot;os\&quot; prefix with two underscores. For other outcomes, please use the name specified by the user. Example:os__session_duration.count,os__click.count,CustomOutcomeName.sum 
     * @param outcomeNames2 Optional If outcome names contain any commas, then please specify only one value at a time. Example: outcome_names[]&#x3D;os__click.count&amp;outcome_names[]&#x3D;Sales, Purchase.count where \&quot;Sales, Purchase\&quot; is the custom outcomes with a comma in the name. 
     * @param outcomeTimeRange Optional Time range for the returned data. The values can be 1h (for the last 1 hour data), 1d (for the last 1 day data), or 1mo (for the last 1 month data). Default is 1h if the parameter is omitted. 
     * @param outcomePlatforms Optional Platform id. Refer device\&#39;s platform ids for values. Example: outcome_platform&#x3D;0 for iOS outcome_platform&#x3D;7,8 for Safari and Firefox Default is data from all platforms if the parameter is omitted. 
     * @param outcomeAttribution Optional Attribution type for the outcomes. The values can be direct or influenced or unattributed. Example: outcome_attribution&#x3D;direct Default is total (returns direct+influenced+unattributed) if the parameter is omitted. 
     */
    public getOutcomes(appId: string, outcomeNames: string, outcomeNames2?: string, outcomeTimeRange?: string, outcomePlatforms?: string, outcomeAttribution?: string, _options?: Configuration): Observable<OutcomesData> {
        const requestContextPromise = this.requestFactory.getOutcomes(appId, outcomeNames, outcomeNames2, outcomeTimeRange, outcomePlatforms, outcomeAttribution, _options);

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
     * @param appId Your app_id for this device
     * @param playerId Player\&#39;s OneSignal ID
     * @param emailAuthHash Email - Only required if you have enabled Identity Verification and device_type is email (11).
     */
    public getPlayer(appId: string, playerId: string, emailAuthHash?: string, _options?: Configuration): Observable<Player> {
        const requestContextPromise = this.requestFactory.getPlayer(appId, playerId, emailAuthHash, _options);

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
     * @param appId The app ID that you want to view players from
     * @param limit How many devices to return. Max is 300. Default is 300
     * @param offset Result offset. Default is 0. Results are sorted by id;
     */
    public getPlayers(appId: string, limit?: number, offset?: number, _options?: Configuration): Observable<PlayerSlice> {
        const requestContextPromise = this.requestFactory.getPlayers(appId, limit, offset, _options);

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
     * Upserts one or more Aliases to an existing User identified by (:alias_label, :alias_id).
     * @param appId 
     * @param aliasLabel 
     * @param aliasId 
     * @param userIdentityRequestBody 
     */
    public identifyUserByAlias(appId: string, aliasLabel: string, aliasId: string, userIdentityRequestBody: UserIdentityRequestBody, _options?: Configuration): Observable<InlineResponse200> {
        const requestContextPromise = this.requestFactory.identifyUserByAlias(appId, aliasLabel, aliasId, userIdentityRequestBody, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.identifyUserByAlias(rsp)));
            }));
    }

    /**
     * Upserts one or more Aliases for the User identified by :subscription_id.
     * @param appId 
     * @param subscriptionId 
     * @param userIdentityRequestBody 
     */
    public identifyUserBySubscriptionId(appId: string, subscriptionId: string, userIdentityRequestBody: UserIdentityRequestBody, _options?: Configuration): Observable<UserIdentityResponse> {
        const requestContextPromise = this.requestFactory.identifyUserBySubscriptionId(appId, subscriptionId, userIdentityRequestBody, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.identifyUserBySubscriptionId(rsp)));
            }));
    }

    /**
     * Transfers this Subscription to the User identified by the identity in the payload.
     * @param appId 
     * @param subscriptionId 
     * @param transferSubscriptionRequestBody 
     */
    public transferSubscription(appId: string, subscriptionId: string, transferSubscriptionRequestBody: TransferSubscriptionRequestBody, _options?: Configuration): Observable<UserIdentityResponse> {
        const requestContextPromise = this.requestFactory.transferSubscription(appId, subscriptionId, transferSubscriptionRequestBody, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.transferSubscription(rsp)));
            }));
    }

    /**
     * Updates the name or configuration settings of an existing OneSignal app
     * Update an app
     * @param appId An app id
     * @param app 
     */
    public updateApp(appId: string, app: App, _options?: Configuration): Observable<App> {
        const requestContextPromise = this.requestFactory.updateApp(appId, app, _options);

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
     * Updates a specified live activity.
     * Update a Live Activity via Push
     * @param appId The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @param activityId Live Activity record ID
     * @param updateLiveActivityRequest 
     */
    public updateLiveActivity(appId: string, activityId: string, updateLiveActivityRequest: UpdateLiveActivityRequest, _options?: Configuration): Observable<UpdateLiveActivitySuccessResponse> {
        const requestContextPromise = this.requestFactory.updateLiveActivity(appId, activityId, updateLiveActivityRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateLiveActivity(rsp)));
            }));
    }

    /**
     * Update an existing device in one of your OneSignal apps
     * Edit device
     * @param playerId Player\&#39;s OneSignal ID
     * @param player 
     */
    public updatePlayer(playerId: string, player: Player, _options?: Configuration): Observable<UpdatePlayerSuccessResponse> {
        const requestContextPromise = this.requestFactory.updatePlayer(playerId, player, _options);

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
     * Update an existing device\'s tags in one of your OneSignal apps using the External User ID. Warning - Android SDK Data Synchronization Tags added through the Android SDK tagging methods may not update if using the API to change or update the same tag. For example, if you use SDK method sendTag(\"key\", \"value1\") then update the tag value to \"value2\" with this API endpoint. You will not be able to set the value back to \"value1\" through the SDK, you will need to change it to something different through the SDK to be reset. Recommendations if using this Endpoint on Android Mobile Apps: 1 - Do not use the same tag keys for SDK and API updates 2 - If you want to use the same key for both SDK and API updates, call the SDK getTags method first to update the device\'s tags. This is only applicable on the Android Mobile App SDKs. &#128216; Deleting Tags To delete a tag, include its key and set its value to blank. Omitting a key/value will not delete it. For example, if I wanted to delete two existing tags rank and category while simultaneously adding a new tag class, the tags JSON would look like the following: \"tags\": {    \"rank\": \"\",    \"category\": \"\",    \"class\": \"my_new_value\" } 
     * Edit tags with external user id
     * @param appId The OneSignal App ID the user record is found under.
     * @param externalUserId The External User ID mapped to teh device record in OneSignal.  Must be actively set on the device to be updated.
     * @param updatePlayerTagsRequestBody 
     */
    public updatePlayerTags(appId: string, externalUserId: string, updatePlayerTagsRequestBody?: UpdatePlayerTagsRequestBody, _options?: Configuration): Observable<UpdatePlayerTagsSuccessResponse> {
        const requestContextPromise = this.requestFactory.updatePlayerTags(appId, externalUserId, updatePlayerTagsRequestBody, _options);

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

    /**
     * Updates an existing Subscription’s properties.
     * @param appId 
     * @param subscriptionId 
     * @param updateSubscriptionRequestBody 
     */
    public updateSubscription(appId: string, subscriptionId: string, updateSubscriptionRequestBody: UpdateSubscriptionRequestBody, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.updateSubscription(appId, subscriptionId, updateSubscriptionRequestBody, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateSubscription(rsp)));
            }));
    }

    /**
     * Updates an existing User’s properties.
     * @param appId 
     * @param aliasLabel 
     * @param aliasId 
     * @param updateUserRequest 
     */
    public updateUser(appId: string, aliasLabel: string, aliasId: string, updateUserRequest: UpdateUserRequest, _options?: Configuration): Observable<InlineResponse202> {
        const requestContextPromise = this.requestFactory.updateUser(appId, aliasLabel, aliasId, updateUserRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateUser(rsp)));
            }));
    }

}
