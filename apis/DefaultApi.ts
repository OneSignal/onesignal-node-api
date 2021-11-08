// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { App } from '../models/App';
import { ExportPlayersRequestBody } from '../models/ExportPlayersRequestBody';
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
import { NotificationSlice } from '../models/NotificationSlice';
import { OutcomeData } from '../models/OutcomeData';
import { Player } from '../models/Player';
import { PlayerSlice } from '../models/PlayerSlice';
import { Segment } from '../models/Segment';
import { UpdatePlayerTagsRequestBody } from '../models/UpdatePlayerTagsRequestBody';

/**
 * no description
 */
export class DefaultApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Used to stop a scheduled or currently outgoing notification
     * Stop a scheduled or currently outgoing notification
     * @param app_id 
     * @param notification_id 
     */
    public async cancelNotification(app_id: string, notification_id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'app_id' is not null or undefined
        if (app_id === null || app_id === undefined) {
            throw new RequiredError('Required parameter app_id was null or undefined when calling cancelNotification.');
        }


        // verify required parameter 'notification_id' is not null or undefined
        if (notification_id === null || notification_id === undefined) {
            throw new RequiredError('Required parameter notification_id was null or undefined when calling cancelNotification.');
        }


        // Path Params
        const localVarPath = '/notifications/{notification_id}'
            .replace('{' + 'notification_id' + '}', encodeURIComponent(String(notification_id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (app_id !== undefined) {
            requestContext.setQueryParam("app_id", ObjectSerializer.serialize(app_id, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Creates a new OneSignal app
     * Create an app
     * @param app 
     */
    public async createApp(app: App, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'app' is not null or undefined
        if (app === null || app === undefined) {
            throw new RequiredError('Required parameter app was null or undefined when calling createApp.');
        }


        // Path Params
        const localVarPath = '/apps';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(app, "App", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["user_key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Sends notifications to your users 
     * Create notification
     * @param notification 
     */
    public async createNotification(notification: Notification, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'notification' is not null or undefined
        if (notification === null || notification === undefined) {
            throw new RequiredError('Required parameter notification was null or undefined when calling createNotification.');
        }


        // Path Params
        const localVarPath = '/notifications';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(notification, "Notification", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Register a new device to one of your OneSignal apps 🚧 Don't use this This API endpoint is designed to be used from our open source Mobile and Web Push SDKs. It is not designed for developers to use it directly, unless instructed to do so by OneSignal support. If you use this method instead of our SDKs, many OneSignal features such as conversion tracking, timezone tracking, language detection, and rich-push won't work out of the box. It will also make it harder to identify possible setup issues. This method is used to register a new device with OneSignal. If a device is already registered with the specified identifier, then this will update the existing device record instead of creating a new one. The returned player is a player / user ID. Use the returned ID to send push notifications to this specific user later, or to include this player when sending to a set of users. 🚧 iOS Must set test_type to 1 when building your iOS app as development. Omit this field in your production app builds. 
     * Add a device
     * @param player 
     */
    public async createPlayer(player: Player, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'player' is not null or undefined
        if (player === null || player === undefined) {
            throw new RequiredError('Required parameter player was null or undefined when calling createPlayer.');
        }


        // Path Params
        const localVarPath = '/players';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(player, "Player", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create segments visible and usable in the dashboard and API - Required: OneSignal Paid Plan The Create Segment method is used when you want your server to programmatically create a segment instead of using the OneSignal Dashboard UI. Just like creating Segments from the dashboard you can pass in filters with multiple \"AND\" or \"OR\" operator's. 🚧 Does Not Update Segments This endpoint will only create segments, it does not edit or update currently created Segments. You will need to use the Delete Segments endpoint and re-create it with this endpoint to edit. 
     * Create Segments
     * @param app_id The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @param segment 
     */
    public async createSegments(app_id: string, segment?: Segment, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'app_id' is not null or undefined
        if (app_id === null || app_id === undefined) {
            throw new RequiredError('Required parameter app_id was null or undefined when calling createSegments.');
        }



        // Path Params
        const localVarPath = '/apps/{app_id}/segments'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(app_id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(segment, "Segment", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete player - Required: Used to delete a single, specific Player ID record from a specific OneSignal app. 
     * Delete a user record
     * @param app_id The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @param player_id The OneSignal player_id
     */
    public async deletePlayer(app_id: string, player_id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'app_id' is not null or undefined
        if (app_id === null || app_id === undefined) {
            throw new RequiredError('Required parameter app_id was null or undefined when calling deletePlayer.');
        }


        // verify required parameter 'player_id' is not null or undefined
        if (player_id === null || player_id === undefined) {
            throw new RequiredError('Required parameter player_id was null or undefined when calling deletePlayer.');
        }


        // Path Params
        const localVarPath = '/players/{player_id}'
            .replace('{' + 'player_id' + '}', encodeURIComponent(String(player_id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (app_id !== undefined) {
            requestContext.setQueryParam("app_id", ObjectSerializer.serialize(app_id, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete segments (not user devices) - Required: OneSignal Paid Plan You can delete a segment under your app by calling this API. You must provide an API key in the Authorization header that has admin access on the app. The segment_id can be found in the URL of the segment when viewing it in the dashboard. 
     * Delete Segments
     * @param app_id The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @param segment_id The segment_id can be found in the URL of the segment when viewing it in the dashboard.
     */
    public async deleteSegments(app_id: string, segment_id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'app_id' is not null or undefined
        if (app_id === null || app_id === undefined) {
            throw new RequiredError('Required parameter app_id was null or undefined when calling deleteSegments.');
        }


        // verify required parameter 'segment_id' is not null or undefined
        if (segment_id === null || segment_id === undefined) {
            throw new RequiredError('Required parameter segment_id was null or undefined when calling deleteSegments.');
        }


        // Path Params
        const localVarPath = '/apps/{app_id}/segments/{segment_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(app_id)))
            .replace('{' + 'segment_id' + '}', encodeURIComponent(String(segment_id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Generate a compressed CSV export of all of your current user data This method can be used to generate a compressed CSV export of all of your current user data. It is a much faster alternative than retrieving this data using the /players API endpoint. The file will be compressed using GZip. The file may take several minutes to generate depending on the number of users in your app. The URL generated will be available for 3 days and includes random v4 uuid as part of the resource name to be unguessable. 🚧 403 Error Responses          You can test if it is complete by making a GET request to the csv_file_url value. This file may take time to generate depending on how many device records are being pulled. If the file is not ready, a 403 error will be returned. Otherwise the file itself will be returned. 🚧 Requires Authentication Key Requires your OneSignal App's REST API Key, available in Keys & IDs. 🚧 Concurrent Exports Only one concurrent export is allowed per OneSignal account. Please ensure you have successfully downloaded the .csv.gz file before exporting another app. CSV File Format: - Default Columns:   | Field | Details |   | --- | --- |   | id | OneSignal Player Id |   | identifier | Push Token |   | session_count | Number of times they visited the app or site   | language | Device language code |   | timezone | Number of seconds away from UTC. Example: -28800 |   | game_version | Version of your mobile app gathered from Android Studio versionCode in your App/build.gradle and iOS uses kCFBundleVersionKey in Xcode. |   | device_os | Device Operating System Version. Example: 80 = Chrome 80, 9 = Android 9 |   | device_type | Device Operating System Type |   | device_model | Device Hardware String Code. Example: Mobile Web Subscribers will have `Linux armv` |   | ad_id | Based on the Google Advertising Id for Android, identifierForVendor for iOS. OptedOut means user turned off Advertising tracking on the device. |   | tags | Current OneSignal Data Tags on the device. |   | last_active | Date and time the user last opened the mobile app or visited the site. |   | playtime | Total amount of time in seconds the user had the mobile app open. |   | amount_spent |  Mobile only - amount spent in USD on In-App Purchases. |    | created_at | Date and time the device record was created in OneSignal. Mobile - first time they opened the app with OneSignal SDK. Web - first time the user subscribed to the site. |   | invalid_identifier | t = unsubscribed, f = subscibed |   | badge_count | Current number of badges on the device | - Extra Columns:   | Field | Details |   | --- | --- |   | external_user_id | Your User Id set on the device |   | notification_types | Notification types |   | location | Location points (Latitude and Longitude) set on the device. |   | country | Country code |   | rooted | Android device rooted or not |   | ip | IP Address of the device if being tracked. See Handling Personal Data. |   | web_auth | Web Only authorization key. |   | web_p256 | Web Only p256 key. | 
     * CSV export
     * @param app_id The app ID that you want to export devices from
     * @param export_players_request_body 
     */
    public async exportPlayers(app_id: string, export_players_request_body?: ExportPlayersRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'app_id' is not null or undefined
        if (app_id === null || app_id === undefined) {
            throw new RequiredError('Required parameter app_id was null or undefined when calling exportPlayers.');
        }



        // Path Params
        const localVarPath = '/players/csv_export?app_id={app_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(app_id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(export_players_request_body, "ExportPlayersRequestBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * View the details of a single OneSignal app
     * View an app
     * @param app_id An app id
     */
    public async getApp(app_id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'app_id' is not null or undefined
        if (app_id === null || app_id === undefined) {
            throw new RequiredError('Required parameter app_id was null or undefined when calling getApp.');
        }


        // Path Params
        const localVarPath = '/apps/{app_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(app_id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["user_key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * View the details of all of your current OneSignal apps
     * View apps
     */
    public async getApps(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/apps';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["user_key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * View the details of a single notification and outcomes associated with it
     * View notification
     * @param app_id 
     * @param notification_id 
     */
    public async getNotification(app_id: string, notification_id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'app_id' is not null or undefined
        if (app_id === null || app_id === undefined) {
            throw new RequiredError('Required parameter app_id was null or undefined when calling getNotification.');
        }


        // verify required parameter 'notification_id' is not null or undefined
        if (notification_id === null || notification_id === undefined) {
            throw new RequiredError('Required parameter notification_id was null or undefined when calling getNotification.');
        }


        // Path Params
        const localVarPath = '/notifications/{notification_id}'
            .replace('{' + 'notification_id' + '}', encodeURIComponent(String(notification_id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (app_id !== undefined) {
            requestContext.setQueryParam("app_id", ObjectSerializer.serialize(app_id, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * -> View the devices sent a message - OneSignal Paid Plan Required This method will return all devices that were sent the given notification_id of an Email or Push Notification if used within 7 days of the date sent. After 7 days of the sending date, the message history data will be unavailable. After a successful response is received, the destination url may be polled until the file becomes available. Most exports are done in ~1-3 minutes, so setting a poll interval of 10 seconds should be adequate. For use cases that are not meant to be consumed by a script, an email will be sent to the supplied email address. 🚧 Requirements A OneSignal Paid Plan. Turn on Send History via OneSignal API in Settings -> Analytics. Cannot get data before this was turned on. Must be called within 7 days after sending the message. Messages targeting under 1000 recipients will not have \"sent\" events recorded, but will show \"clicked\" events. Requires your OneSignal App's REST API Key, available in Keys & IDs.
     * Notification History
     * @param notification_id The \&quot;id\&quot; of the message found in the Notification object
     * @param get_notification_request_body 
     */
    public async getNotificationHistory(notification_id: string, get_notification_request_body: GetNotificationRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'notification_id' is not null or undefined
        if (notification_id === null || notification_id === undefined) {
            throw new RequiredError('Required parameter notification_id was null or undefined when calling getNotificationHistory.');
        }


        // verify required parameter 'get_notification_request_body' is not null or undefined
        if (get_notification_request_body === null || get_notification_request_body === undefined) {
            throw new RequiredError('Required parameter get_notification_request_body was null or undefined when calling getNotificationHistory.');
        }


        // Path Params
        const localVarPath = '/notifications/{notification_id}/history'
            .replace('{' + 'notification_id' + '}', encodeURIComponent(String(notification_id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(get_notification_request_body, "GetNotificationRequestBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * View the details of multiple notifications
     * View notifications
     * @param app_id The app ID that you want to view notifications from
     * @param limit How many notifications to return.  Max is 50.  Default is 50.
     * @param offset Page offset.  Default is 0.  Results are sorted by queued_at in descending order.  queued_at is a representation of the time that the notification was queued at.
     * @param kind Kind of notifications returned:   * unset - All notification types (default)   * &#x60;0&#x60; - Dashboard only   * &#x60;1&#x60; - API only   * &#x60;3&#x60; - Automated only 
     */
    public async getNotifications(app_id: string, limit?: string, offset?: number, kind?: 0 | 1 | 3, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'app_id' is not null or undefined
        if (app_id === null || app_id === undefined) {
            throw new RequiredError('Required parameter app_id was null or undefined when calling getNotifications.');
        }





        // Path Params
        const localVarPath = '/notifications';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (app_id !== undefined) {
            requestContext.setQueryParam("app_id", ObjectSerializer.serialize(app_id, "string", ""));
        }
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "string", ""));
        }
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", ""));
        }
        if (kind !== undefined) {
            requestContext.setQueryParam("kind", ObjectSerializer.serialize(kind, "0 | 1 | 3", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async getOutcomes(app_id: string, outcome_names: string, outcome_names2?: string, outcome_time_range?: string, outcome_platforms?: string, outcome_attribution?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'app_id' is not null or undefined
        if (app_id === null || app_id === undefined) {
            throw new RequiredError('Required parameter app_id was null or undefined when calling getOutcomes.');
        }


        // verify required parameter 'outcome_names' is not null or undefined
        if (outcome_names === null || outcome_names === undefined) {
            throw new RequiredError('Required parameter outcome_names was null or undefined when calling getOutcomes.');
        }






        // Path Params
        const localVarPath = '/apps/{app_id}/outcomes'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(app_id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (outcome_names !== undefined) {
            requestContext.setQueryParam("outcome_names", ObjectSerializer.serialize(outcome_names, "string", ""));
        }
        if (outcome_names2 !== undefined) {
            requestContext.setQueryParam("outcome_names[]", ObjectSerializer.serialize(outcome_names2, "string", ""));
        }
        if (outcome_time_range !== undefined) {
            requestContext.setQueryParam("outcome_time_range", ObjectSerializer.serialize(outcome_time_range, "string", ""));
        }
        if (outcome_platforms !== undefined) {
            requestContext.setQueryParam("outcome_platforms", ObjectSerializer.serialize(outcome_platforms, "string", ""));
        }
        if (outcome_attribution !== undefined) {
            requestContext.setQueryParam("outcome_attribution", ObjectSerializer.serialize(outcome_attribution, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * View the details of an existing device in one of your OneSignal apps
     * View device
     * @param app_id Your app_id for this device
     * @param player_id Player&#39;s OneSignal ID
     * @param email_auth_hash Email - Only required if you have enabled Identity Verification and device_type is email (11).
     */
    public async getPlayer(app_id: string, player_id: string, email_auth_hash?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'app_id' is not null or undefined
        if (app_id === null || app_id === undefined) {
            throw new RequiredError('Required parameter app_id was null or undefined when calling getPlayer.');
        }


        // verify required parameter 'player_id' is not null or undefined
        if (player_id === null || player_id === undefined) {
            throw new RequiredError('Required parameter player_id was null or undefined when calling getPlayer.');
        }



        // Path Params
        const localVarPath = '/players/{player_id}'
            .replace('{' + 'player_id' + '}', encodeURIComponent(String(player_id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (app_id !== undefined) {
            requestContext.setQueryParam("app_id", ObjectSerializer.serialize(app_id, "string", ""));
        }
        if (email_auth_hash !== undefined) {
            requestContext.setQueryParam("email_auth_hash", ObjectSerializer.serialize(email_auth_hash, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * View the details of multiple devices in one of your OneSignal apps Unavailable for Apps Over 80,000 Users For performance reasons, this method is not available for larger apps. Larger apps should use the CSV export API endpoint, which is much more performant. 
     * View devices
     * @param app_id The app ID that you want to view players from
     * @param limit How many devices to return. Max is 300. Default is 300
     * @param offset Result offset. Default is 0. Results are sorted by id;
     */
    public async getPlayers(app_id: string, limit?: string, offset?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'app_id' is not null or undefined
        if (app_id === null || app_id === undefined) {
            throw new RequiredError('Required parameter app_id was null or undefined when calling getPlayers.');
        }




        // Path Params
        const localVarPath = '/players';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (app_id !== undefined) {
            requestContext.setQueryParam("app_id", ObjectSerializer.serialize(app_id, "string", ""));
        }
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "string", ""));
        }
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates the name or configuration settings of an existing OneSignal app
     * Update an app
     * @param app_id An app id
     * @param app 
     */
    public async updateApp(app_id: string, app: App, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'app_id' is not null or undefined
        if (app_id === null || app_id === undefined) {
            throw new RequiredError('Required parameter app_id was null or undefined when calling updateApp.');
        }


        // verify required parameter 'app' is not null or undefined
        if (app === null || app === undefined) {
            throw new RequiredError('Required parameter app was null or undefined when calling updateApp.');
        }


        // Path Params
        const localVarPath = '/apps/{app_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(app_id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(app, "App", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["user_key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update an existing device in one of your OneSignal apps
     * Edit device
     * @param player_id Player&#39;s OneSignal ID
     * @param player 
     */
    public async updatePlayer(player_id: string, player: Player, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'player_id' is not null or undefined
        if (player_id === null || player_id === undefined) {
            throw new RequiredError('Required parameter player_id was null or undefined when calling updatePlayer.');
        }


        // verify required parameter 'player' is not null or undefined
        if (player === null || player === undefined) {
            throw new RequiredError('Required parameter player was null or undefined when calling updatePlayer.');
        }


        // Path Params
        const localVarPath = '/players/{player_id}'
            .replace('{' + 'player_id' + '}', encodeURIComponent(String(player_id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(player, "Player", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update an existing device's tags in one of your OneSignal apps using the External User ID. Warning - Android SDK Data Synchronization Tags added through the Android SDK tagging methods may not update if using the API to change or update the same tag. For example, if you use SDK method sendTag(\"key\", \"value1\") then update the tag value to \"value2\" with this API endpoint. You will not be able to set the value back to \"value1\" through the SDK, you will need to change it to something different through the SDK to be reset. Recommendations if using this Endpoint on Android Mobile Apps: 1 - Do not use the same tag keys for SDK and API updates 2 - If you want to use the same key for both SDK and API updates, call the SDK getTags method first to update the device's tags. This is only applicable on the Android Mobile App SDKs. 📘 Deleting Tags To delete a tag, include its key and set its value to blank. Omitting a key/value will not delete it. For example, if I wanted to delete two existing tags rank and category while simultaneously adding a new tag class, the tags JSON would look like the following: \"tags\": {    \"rank\": \"\",    \"category\": \"\",    \"class\": \"my_new_value\" } 
     * Edit tags with external user id
     * @param app_id The OneSignal App ID the user record is found under.
     * @param external_user_id The External User ID mapped to teh device record in OneSignal.  Must be actively set on the device to be updated.
     * @param update_player_tags_request_body 
     */
    public async updatePlayerTags(app_id: string, external_user_id: string, update_player_tags_request_body?: UpdatePlayerTagsRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'app_id' is not null or undefined
        if (app_id === null || app_id === undefined) {
            throw new RequiredError('Required parameter app_id was null or undefined when calling updatePlayerTags.');
        }


        // verify required parameter 'external_user_id' is not null or undefined
        if (external_user_id === null || external_user_id === undefined) {
            throw new RequiredError('Required parameter external_user_id was null or undefined when calling updatePlayerTags.');
        }



        // Path Params
        const localVarPath = '/apps/{app_id}/users/{external_user_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(app_id)))
            .replace('{' + 'external_user_id' + '}', encodeURIComponent(String(external_user_id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(update_player_tags_request_body, "UpdatePlayerTagsRequestBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class DefaultApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cancelNotification
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cancelNotification(response: ResponseContext): Promise<InlineResponse2001 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2001 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2001", ""
            ) as InlineResponse2001;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse2001 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2001", ""
            ) as InlineResponse2001;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createApp
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createApp(response: ResponseContext): Promise<App > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: App = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "App", ""
            ) as App;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: App = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "App", ""
            ) as App;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNotification
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createNotification(response: ResponseContext): Promise<InlineResponse200 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse200 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse200", ""
            ) as InlineResponse200;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: InlineResponse400 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse400", ""
            ) as InlineResponse400;
            throw new ApiException<InlineResponse400>(400, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse200 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse200", ""
            ) as InlineResponse200;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPlayer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createPlayer(response: ResponseContext): Promise<InlineResponse2004 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2004 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2004", ""
            ) as InlineResponse2004;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse2004 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2004", ""
            ) as InlineResponse2004;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSegments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createSegments(response: ResponseContext): Promise<InlineResponse201 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: InlineResponse201 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse201", ""
            ) as InlineResponse201;
            return body;
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: InlineResponse409 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse409", ""
            ) as InlineResponse409;
            throw new ApiException<InlineResponse409>(409, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: InlineResponse409 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse409", ""
            ) as InlineResponse409;
            throw new ApiException<InlineResponse409>(400, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse201 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse201", ""
            ) as InlineResponse201;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletePlayer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deletePlayer(response: ResponseContext): Promise<InlineResponse2001 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2001 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2001", ""
            ) as InlineResponse2001;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineResponse2001 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2001", ""
            ) as InlineResponse2001;
            throw new ApiException<InlineResponse2001>(404, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: InlineResponse4002 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse4002", ""
            ) as InlineResponse4002;
            throw new ApiException<InlineResponse4002>(400, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse2001 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2001", ""
            ) as InlineResponse2001;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteSegments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteSegments(response: ResponseContext): Promise<InlineResponse2003 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2003 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2003", ""
            ) as InlineResponse2003;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineResponse2003 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2003", ""
            ) as InlineResponse2003;
            throw new ApiException<InlineResponse2003>(404, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: InlineResponse4002 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse4002", ""
            ) as InlineResponse4002;
            throw new ApiException<InlineResponse4002>(400, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse2003 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2003", ""
            ) as InlineResponse2003;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to exportPlayers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exportPlayers(response: ResponseContext): Promise<InlineResponse2005 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2005 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2005", ""
            ) as InlineResponse2005;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(400, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse2005 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2005", ""
            ) as InlineResponse2005;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApp
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApp(response: ResponseContext): Promise<App > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: App = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "App", ""
            ) as App;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: App = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "App", ""
            ) as App;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApps
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApps(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getNotification
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getNotification(response: ResponseContext): Promise<Notification > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Notification = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Notification", ""
            ) as Notification;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Notification = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Notification", ""
            ) as Notification;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getNotificationHistory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getNotificationHistory(response: ResponseContext): Promise<InlineResponse2002 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2002 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2002", ""
            ) as InlineResponse2002;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: InlineResponse4001 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse4001", ""
            ) as InlineResponse4001;
            throw new ApiException<InlineResponse4001>(400, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse2002 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2002", ""
            ) as InlineResponse2002;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getNotifications
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getNotifications(response: ResponseContext): Promise<NotificationSlice > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NotificationSlice = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotificationSlice", ""
            ) as NotificationSlice;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NotificationSlice = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotificationSlice", ""
            ) as NotificationSlice;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOutcomes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getOutcomes(response: ResponseContext): Promise<Array<OutcomeData> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<OutcomeData> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<OutcomeData>", ""
            ) as Array<OutcomeData>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<OutcomeData> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<OutcomeData>", ""
            ) as Array<OutcomeData>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPlayer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPlayer(response: ResponseContext): Promise<Player > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Player = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Player", ""
            ) as Player;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Player = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Player", ""
            ) as Player;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPlayers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPlayers(response: ResponseContext): Promise<PlayerSlice > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PlayerSlice = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PlayerSlice", ""
            ) as PlayerSlice;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PlayerSlice = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PlayerSlice", ""
            ) as PlayerSlice;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateApp
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateApp(response: ResponseContext): Promise<App > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: App = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "App", ""
            ) as App;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: App = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "App", ""
            ) as App;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePlayer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updatePlayer(response: ResponseContext): Promise<InlineResponse2001 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2001 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2001", ""
            ) as InlineResponse2001;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse2001 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2001", ""
            ) as InlineResponse2001;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePlayerTags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updatePlayerTags(response: ResponseContext): Promise<InlineResponse2003 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2003 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2003", ""
            ) as InlineResponse2003;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse2003 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2003", ""
            ) as InlineResponse2003;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
