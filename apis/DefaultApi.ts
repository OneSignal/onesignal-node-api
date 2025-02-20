// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { App } from '../models/App';
import { BeginLiveActivityRequest } from '../models/BeginLiveActivityRequest';
import { CancelNotificationSuccessResponse } from '../models/CancelNotificationSuccessResponse';
import { CreateNotificationSuccessResponse } from '../models/CreateNotificationSuccessResponse';
import { CreatePlayerSuccessResponse } from '../models/CreatePlayerSuccessResponse';
import { CreateSegmentConflictResponse } from '../models/CreateSegmentConflictResponse';
import { CreateSegmentSuccessResponse } from '../models/CreateSegmentSuccessResponse';
import { CreateSubscriptionRequestBody } from '../models/CreateSubscriptionRequestBody';
import { CreateUserConflictResponse } from '../models/CreateUserConflictResponse';
import { DeletePlayerNotFoundResponse } from '../models/DeletePlayerNotFoundResponse';
import { DeletePlayerSuccessResponse } from '../models/DeletePlayerSuccessResponse';
import { DeleteSegmentNotFoundResponse } from '../models/DeleteSegmentNotFoundResponse';
import { DeleteSegmentSuccessResponse } from '../models/DeleteSegmentSuccessResponse';
import { ExportEventsSuccessResponse } from '../models/ExportEventsSuccessResponse';
import { ExportPlayersRequestBody } from '../models/ExportPlayersRequestBody';
import { ExportPlayersSuccessResponse } from '../models/ExportPlayersSuccessResponse';
import { GenericError } from '../models/GenericError';
import { GetNotificationRequestBody } from '../models/GetNotificationRequestBody';
import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2003 } from '../models/InlineResponse2003';
import { InlineResponse201 } from '../models/InlineResponse201';
import { InlineResponse202 } from '../models/InlineResponse202';
import { Notification } from '../models/Notification';
import { NotificationHistorySuccessResponse } from '../models/NotificationHistorySuccessResponse';
import { NotificationSlice } from '../models/NotificationSlice';
import { NotificationWithMeta } from '../models/NotificationWithMeta';
import { OutcomesData } from '../models/OutcomesData';
import { Player } from '../models/Player';
import { PlayerSlice } from '../models/PlayerSlice';
import { RateLimiterError } from '../models/RateLimiterError';
import { Segment } from '../models/Segment';
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

/**
 * no description
 */
export class DefaultApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Starts a Live Activity
     * Start Live Activity
     * @param appId The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @param activityId Live Activity record ID
     * @param beginLiveActivityRequest 
     */
    public async beginLiveActivity(appId: string, activityId: string, beginLiveActivityRequest: BeginLiveActivityRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "beginLiveActivity", "appId");
        }


        // verify required parameter 'activityId' is not null or undefined
        if (activityId === null || activityId === undefined) {
            throw new RequiredError("DefaultApi", "beginLiveActivity", "activityId");
        }


        // verify required parameter 'beginLiveActivityRequest' is not null or undefined
        if (beginLiveActivityRequest === null || beginLiveActivityRequest === undefined) {
            throw new RequiredError("DefaultApi", "beginLiveActivity", "beginLiveActivityRequest");
        }


        // Path Params
        const localVarPath = '/apps/{app_id}/live_activities/{activity_id}/token'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'activity_id' + '}', encodeURIComponent(String(activityId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(beginLiveActivityRequest, "BeginLiveActivityRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Used to stop a scheduled or currently outgoing notification
     * Stop a scheduled or currently outgoing notification
     * @param appId 
     * @param notificationId 
     */
    public async cancelNotification(appId: string, notificationId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "cancelNotification", "appId");
        }


        // verify required parameter 'notificationId' is not null or undefined
        if (notificationId === null || notificationId === undefined) {
            throw new RequiredError("DefaultApi", "cancelNotification", "notificationId");
        }


        // Path Params
        const localVarPath = '/notifications/{notification_id}'
            .replace('{' + 'notification_id' + '}', encodeURIComponent(String(notificationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");

        // Query Params
        if (appId !== undefined) {
            requestContext.setQueryParam("app_id", ObjectSerializer.serialize(appId, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
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
            throw new RequiredError("DefaultApi", "createApp", "app");
        }


        // Path Params
        const localVarPath = '/apps';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");


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

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["user_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
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
            throw new RequiredError("DefaultApi", "createNotification", "notification");
        }


        // Path Params
        const localVarPath = '/notifications';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");


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

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Register a new device to one of your OneSignal apps &#x1F6A7; Don\'t use this This API endpoint is designed to be used from our open source Mobile and Web Push SDKs. It is not designed for developers to use it directly, unless instructed to do so by OneSignal support. If you use this method instead of our SDKs, many OneSignal features such as conversion tracking, timezone tracking, language detection, and rich-push won\'t work out of the box. It will also make it harder to identify possible setup issues. This method is used to register a new device with OneSignal. If a device is already registered with the specified identifier, then this will update the existing device record instead of creating a new one. The returned player is a player / user ID. Use the returned ID to send push notifications to this specific user later, or to include this player when sending to a set of users. &#x1F6A7; iOS Must set test_type to 1 when building your iOS app as development. Omit this field in your production app builds. 
     * Add a device
     * @param player 
     */
    public async createPlayer(player: Player, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'player' is not null or undefined
        if (player === null || player === undefined) {
            throw new RequiredError("DefaultApi", "createPlayer", "player");
        }


        // Path Params
        const localVarPath = '/players';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");


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

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create segments visible and usable in the dashboard and API - Required: OneSignal Paid Plan The Create Segment method is used when you want your server to programmatically create a segment instead of using the OneSignal Dashboard UI. Just like creating Segments from the dashboard you can pass in filters with multiple \"AND\" or \"OR\" operator\'s. &#x1F6A7; Does Not Update Segments This endpoint will only create segments, it does not edit or update currently created Segments. You will need to use the Delete Segments endpoint and re-create it with this endpoint to edit. 
     * Create Segments
     * @param appId The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @param segment 
     */
    public async createSegments(appId: string, segment?: Segment, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "createSegments", "appId");
        }



        // Path Params
        const localVarPath = '/apps/{app_id}/segments'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");


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

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Creates a new Subscription under the User provided. Useful to add email addresses and SMS numbers to the User.
     * @param appId 
     * @param aliasLabel 
     * @param aliasId 
     * @param createSubscriptionRequestBody 
     */
    public async createSubscription(appId: string, aliasLabel: string, aliasId: string, createSubscriptionRequestBody: CreateSubscriptionRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "createSubscription", "appId");
        }


        // verify required parameter 'aliasLabel' is not null or undefined
        if (aliasLabel === null || aliasLabel === undefined) {
            throw new RequiredError("DefaultApi", "createSubscription", "aliasLabel");
        }


        // verify required parameter 'aliasId' is not null or undefined
        if (aliasId === null || aliasId === undefined) {
            throw new RequiredError("DefaultApi", "createSubscription", "aliasId");
        }


        // verify required parameter 'createSubscriptionRequestBody' is not null or undefined
        if (createSubscriptionRequestBody === null || createSubscriptionRequestBody === undefined) {
            throw new RequiredError("DefaultApi", "createSubscription", "createSubscriptionRequestBody");
        }


        // Path Params
        const localVarPath = '/apps/{app_id}/users/by/{alias_label}/{alias_id}/subscriptions'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'alias_label' + '}', encodeURIComponent(String(aliasLabel)))
            .replace('{' + 'alias_id' + '}', encodeURIComponent(String(aliasId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createSubscriptionRequestBody, "CreateSubscriptionRequestBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Creates a User, optionally Subscriptions owned by the User as well as Aliases. Aliases provided in the payload will be used to look up an existing User.
     * @param appId 
     * @param user 
     */
    public async createUser(appId: string, user: User, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "createUser", "appId");
        }


        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DefaultApi", "createUser", "user");
        }


        // Path Params
        const localVarPath = '/apps/{app_id}/users'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(user, "User", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Deletes an alias by alias label
     * @param appId 
     * @param aliasLabel 
     * @param aliasId 
     * @param aliasLabelToDelete 
     */
    public async deleteAlias(appId: string, aliasLabel: string, aliasId: string, aliasLabelToDelete: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "deleteAlias", "appId");
        }


        // verify required parameter 'aliasLabel' is not null or undefined
        if (aliasLabel === null || aliasLabel === undefined) {
            throw new RequiredError("DefaultApi", "deleteAlias", "aliasLabel");
        }


        // verify required parameter 'aliasId' is not null or undefined
        if (aliasId === null || aliasId === undefined) {
            throw new RequiredError("DefaultApi", "deleteAlias", "aliasId");
        }


        // verify required parameter 'aliasLabelToDelete' is not null or undefined
        if (aliasLabelToDelete === null || aliasLabelToDelete === undefined) {
            throw new RequiredError("DefaultApi", "deleteAlias", "aliasLabelToDelete");
        }


        // Path Params
        const localVarPath = '/apps/{app_id}/users/by/{alias_label}/{alias_id}/identity/{alias_label_to_delete}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'alias_label' + '}', encodeURIComponent(String(aliasLabel)))
            .replace('{' + 'alias_id' + '}', encodeURIComponent(String(aliasId)))
            .replace('{' + 'alias_label_to_delete' + '}', encodeURIComponent(String(aliasLabelToDelete)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete player - Required: Used to delete a single, specific Player ID record from a specific OneSignal app. 
     * Delete a user record
     * @param appId The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @param playerId The OneSignal player_id
     */
    public async deletePlayer(appId: string, playerId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "deletePlayer", "appId");
        }


        // verify required parameter 'playerId' is not null or undefined
        if (playerId === null || playerId === undefined) {
            throw new RequiredError("DefaultApi", "deletePlayer", "playerId");
        }


        // Path Params
        const localVarPath = '/players/{player_id}'
            .replace('{' + 'player_id' + '}', encodeURIComponent(String(playerId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");

        // Query Params
        if (appId !== undefined) {
            requestContext.setQueryParam("app_id", ObjectSerializer.serialize(appId, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete segments (not user devices) - Required: OneSignal Paid Plan You can delete a segment under your app by calling this API. You must provide an API key in the Authorization header that has admin access on the app. The segment_id can be found in the URL of the segment when viewing it in the dashboard. 
     * Delete Segments
     * @param appId The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @param segmentId The segment_id can be found in the URL of the segment when viewing it in the dashboard.
     */
    public async deleteSegments(appId: string, segmentId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "deleteSegments", "appId");
        }


        // verify required parameter 'segmentId' is not null or undefined
        if (segmentId === null || segmentId === undefined) {
            throw new RequiredError("DefaultApi", "deleteSegments", "segmentId");
        }


        // Path Params
        const localVarPath = '/apps/{app_id}/segments/{segment_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'segment_id' + '}', encodeURIComponent(String(segmentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Deletes the Subscription.
     * @param appId 
     * @param subscriptionId 
     */
    public async deleteSubscription(appId: string, subscriptionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "deleteSubscription", "appId");
        }


        // verify required parameter 'subscriptionId' is not null or undefined
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new RequiredError("DefaultApi", "deleteSubscription", "subscriptionId");
        }


        // Path Params
        const localVarPath = '/apps/{app_id}/subscriptions/{subscription_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'subscription_id' + '}', encodeURIComponent(String(subscriptionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Removes the User identified by (:alias_label, :alias_id), and all Subscriptions and Aliases
     * @param appId 
     * @param aliasLabel 
     * @param aliasId 
     */
    public async deleteUser(appId: string, aliasLabel: string, aliasId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "deleteUser", "appId");
        }


        // verify required parameter 'aliasLabel' is not null or undefined
        if (aliasLabel === null || aliasLabel === undefined) {
            throw new RequiredError("DefaultApi", "deleteUser", "aliasLabel");
        }


        // verify required parameter 'aliasId' is not null or undefined
        if (aliasId === null || aliasId === undefined) {
            throw new RequiredError("DefaultApi", "deleteUser", "aliasId");
        }


        // Path Params
        const localVarPath = '/apps/{app_id}/users/by/{alias_label}/{alias_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'alias_label' + '}', encodeURIComponent(String(aliasLabel)))
            .replace('{' + 'alias_id' + '}', encodeURIComponent(String(aliasId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Stops a Live Activity
     * Stop Live Activity
     * @param appId The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @param activityId Live Activity record ID
     * @param subscriptionId Subscription ID
     */
    public async endLiveActivity(appId: string, activityId: string, subscriptionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "endLiveActivity", "appId");
        }


        // verify required parameter 'activityId' is not null or undefined
        if (activityId === null || activityId === undefined) {
            throw new RequiredError("DefaultApi", "endLiveActivity", "activityId");
        }


        // verify required parameter 'subscriptionId' is not null or undefined
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new RequiredError("DefaultApi", "endLiveActivity", "subscriptionId");
        }


        // Path Params
        const localVarPath = '/apps/{app_id}/live_activities/{activity_id}/token/{subscription_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'activity_id' + '}', encodeURIComponent(String(activityId)))
            .replace('{' + 'subscription_id' + '}', encodeURIComponent(String(subscriptionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Generate a compressed CSV report of all of the events data for a notification. This will return a URL immediately upon success but it may take several minutes for the CSV to become available at that URL depending on the volume of data. Only one export can be in-progress per OneSignal account at any given time.
     * Export CSV of Events
     * @param notificationId The ID of the notification to export events from.
     * @param appId The ID of the app that the notification belongs to.
     */
    public async exportEvents(notificationId: string, appId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'notificationId' is not null or undefined
        if (notificationId === null || notificationId === undefined) {
            throw new RequiredError("DefaultApi", "exportEvents", "notificationId");
        }


        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "exportEvents", "appId");
        }


        // Path Params
        const localVarPath = '/notifications/{notification_id}/export_events?app_id={app_id}'
            .replace('{' + 'notification_id' + '}', encodeURIComponent(String(notificationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");

        // Query Params
        if (appId !== undefined) {
            requestContext.setQueryParam("app_id", ObjectSerializer.serialize(appId, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Generate a compressed CSV export of all of your current user data This method can be used to generate a compressed CSV export of all of your current user data. It is a much faster alternative than retrieving this data using the /players API endpoint. The file will be compressed using GZip. The file may take several minutes to generate depending on the number of users in your app. The URL generated will be available for 3 days and includes random v4 uuid as part of the resource name to be unguessable. &#x1F6A7; 403 Error Responses          You can test if it is complete by making a GET request to the csv_file_url value. This file may take time to generate depending on how many device records are being pulled. If the file is not ready, a 403 error will be returned. Otherwise the file itself will be returned. &#x1F6A7; Requires Authentication Key Requires your OneSignal App\'s REST API Key, available in Keys & IDs. &#x1F6A7; Concurrent Exports Only one concurrent export is allowed per OneSignal account. Please ensure you have successfully downloaded the .csv.gz file before exporting another app. CSV File Format: - Default Columns:   | Field | Details |   | --- | --- |   | id | OneSignal Player Id |   | identifier | Push Token |   | session_count | Number of times they visited the app or site   | language | Device language code |   | timezone | Number of seconds away from UTC. Example: -28800 |   | game_version | Version of your mobile app gathered from Android Studio versionCode in your App/build.gradle and iOS uses kCFBundleVersionKey in Xcode. |   | device_os | Device Operating System Version. Example: 80 = Chrome 80, 9 = Android 9 |   | device_type | Device Operating System Type |   | device_model | Device Hardware String Code. Example: Mobile Web Subscribers will have `Linux armv` |   | ad_id | Based on the Google Advertising Id for Android, identifierForVendor for iOS. OptedOut means user turned off Advertising tracking on the device. |   | tags | Current OneSignal Data Tags on the device. |   | last_active | Date and time the user last opened the mobile app or visited the site. |   | playtime | Total amount of time in seconds the user had the mobile app open. |   | amount_spent |  Mobile only - amount spent in USD on In-App Purchases. |    | created_at | Date and time the device record was created in OneSignal. Mobile - first time they opened the app with OneSignal SDK. Web - first time the user subscribed to the site. |   | invalid_identifier | t = unsubscribed, f = subscibed |   | badge_count | Current number of badges on the device | - Extra Columns:   | Field | Details |   | --- | --- |   | external_user_id | Your User Id set on the device |   | notification_types | Notification types |   | location | Location points (Latitude and Longitude) set on the device. |   | country | Country code |   | rooted | Android device rooted or not |   | ip | IP Address of the device if being tracked. See Handling Personal Data. |   | web_auth | Web Only authorization key. |   | web_p256 | Web Only p256 key. | 
     * Export CSV of Players
     * @param appId The app ID that you want to export devices from
     * @param exportPlayersRequestBody 
     */
    public async exportPlayers(appId: string, exportPlayersRequestBody?: ExportPlayersRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "exportPlayers", "appId");
        }



        // Path Params
        const localVarPath = '/players/csv_export?app_id={app_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(exportPlayersRequestBody, "ExportPlayersRequestBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Lists all Aliases for the User identified by :subscription_id.
     * @param appId 
     * @param subscriptionId 
     */
    public async fetchAliases(appId: string, subscriptionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "fetchAliases", "appId");
        }


        // verify required parameter 'subscriptionId' is not null or undefined
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new RequiredError("DefaultApi", "fetchAliases", "subscriptionId");
        }


        // Path Params
        const localVarPath = '/apps/{app_id}/subscriptions/{subscription_id}/user/identity'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'subscription_id' + '}', encodeURIComponent(String(subscriptionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns the User’s properties, Aliases, and Subscriptions.
     * @param appId 
     * @param aliasLabel 
     * @param aliasId 
     */
    public async fetchUser(appId: string, aliasLabel: string, aliasId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "fetchUser", "appId");
        }


        // verify required parameter 'aliasLabel' is not null or undefined
        if (aliasLabel === null || aliasLabel === undefined) {
            throw new RequiredError("DefaultApi", "fetchUser", "aliasLabel");
        }


        // verify required parameter 'aliasId' is not null or undefined
        if (aliasId === null || aliasId === undefined) {
            throw new RequiredError("DefaultApi", "fetchUser", "aliasId");
        }


        // Path Params
        const localVarPath = '/apps/{app_id}/users/by/{alias_label}/{alias_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'alias_label' + '}', encodeURIComponent(String(aliasLabel)))
            .replace('{' + 'alias_id' + '}', encodeURIComponent(String(aliasId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Lists all Aliases for the User identified by (:alias_label, :alias_id).
     * @param appId 
     * @param aliasLabel 
     * @param aliasId 
     */
    public async fetchUserIdentity(appId: string, aliasLabel: string, aliasId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "fetchUserIdentity", "appId");
        }


        // verify required parameter 'aliasLabel' is not null or undefined
        if (aliasLabel === null || aliasLabel === undefined) {
            throw new RequiredError("DefaultApi", "fetchUserIdentity", "aliasLabel");
        }


        // verify required parameter 'aliasId' is not null or undefined
        if (aliasId === null || aliasId === undefined) {
            throw new RequiredError("DefaultApi", "fetchUserIdentity", "aliasId");
        }


        // Path Params
        const localVarPath = '/apps/{app_id}/users/by/{alias_label}/{alias_id}/identity'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'alias_label' + '}', encodeURIComponent(String(aliasLabel)))
            .replace('{' + 'alias_id' + '}', encodeURIComponent(String(aliasId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * View the details of a single OneSignal app
     * View an app
     * @param appId An app id
     */
    public async getApp(appId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "getApp", "appId");
        }


        // Path Params
        const localVarPath = '/apps/{app_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["user_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
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

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["user_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Manifest of In-App Messages the Subscription is eligible to display by the SDK.
     * @param appId 
     * @param subscriptionId 
     */
    public async getEligibleIams(appId: string, subscriptionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "getEligibleIams", "appId");
        }


        // verify required parameter 'subscriptionId' is not null or undefined
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new RequiredError("DefaultApi", "getEligibleIams", "subscriptionId");
        }


        // Path Params
        const localVarPath = '/apps/{app_id}/subscriptions/{subscription_id}/iams'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'subscription_id' + '}', encodeURIComponent(String(subscriptionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * View the details of a single notification and outcomes associated with it
     * View notification
     * @param appId 
     * @param notificationId 
     */
    public async getNotification(appId: string, notificationId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "getNotification", "appId");
        }


        // verify required parameter 'notificationId' is not null or undefined
        if (notificationId === null || notificationId === undefined) {
            throw new RequiredError("DefaultApi", "getNotification", "notificationId");
        }


        // Path Params
        const localVarPath = '/notifications/{notification_id}'
            .replace('{' + 'notification_id' + '}', encodeURIComponent(String(notificationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");

        // Query Params
        if (appId !== undefined) {
            requestContext.setQueryParam("app_id", ObjectSerializer.serialize(appId, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * -> View the devices sent a message - OneSignal Paid Plan Required This method will return all devices that were sent the given notification_id of an Email or Push Notification if used within 7 days of the date sent. After 7 days of the sending date, the message history data will be unavailable. After a successful response is received, the destination url may be polled until the file becomes available. Most exports are done in ~1-3 minutes, so setting a poll interval of 10 seconds should be adequate. For use cases that are not meant to be consumed by a script, an email will be sent to the supplied email address. &#x1F6A7; Requirements A OneSignal Paid Plan. Turn on Send History via OneSignal API in Settings -> Analytics. Cannot get data before this was turned on. Must be called within 7 days after sending the message. Messages targeting under 1000 recipients will not have \"sent\" events recorded, but will show \"clicked\" events. Requires your OneSignal App\'s REST API Key, available in Keys & IDs.
     * Notification History
     * @param notificationId The \&quot;id\&quot; of the message found in the Notification object
     * @param getNotificationRequestBody 
     */
    public async getNotificationHistory(notificationId: string, getNotificationRequestBody: GetNotificationRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'notificationId' is not null or undefined
        if (notificationId === null || notificationId === undefined) {
            throw new RequiredError("DefaultApi", "getNotificationHistory", "notificationId");
        }


        // verify required parameter 'getNotificationRequestBody' is not null or undefined
        if (getNotificationRequestBody === null || getNotificationRequestBody === undefined) {
            throw new RequiredError("DefaultApi", "getNotificationHistory", "getNotificationRequestBody");
        }


        // Path Params
        const localVarPath = '/notifications/{notification_id}/history'
            .replace('{' + 'notification_id' + '}', encodeURIComponent(String(notificationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(getNotificationRequestBody, "GetNotificationRequestBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * View the details of multiple notifications
     * View notifications
     * @param appId The app ID that you want to view notifications from
     * @param limit How many notifications to return.  Max is 50.  Default is 50.
     * @param offset Page offset.  Default is 0.  Results are sorted by queued_at in descending order.  queued_at is a representation of the time that the notification was queued at.
     * @param kind Kind of notifications returned:   * unset - All notification types (default)   * &#x60;0&#x60; - Dashboard only   * &#x60;1&#x60; - API only   * &#x60;3&#x60; - Automated only 
     */
    public async getNotifications(appId: string, limit?: number, offset?: number, kind?: 0 | 1 | 3, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "getNotifications", "appId");
        }





        // Path Params
        const localVarPath = '/notifications';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");

        // Query Params
        if (appId !== undefined) {
            requestContext.setQueryParam("app_id", ObjectSerializer.serialize(appId, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", ""));
        }

        // Query Params
        if (kind !== undefined) {
            requestContext.setQueryParam("kind", ObjectSerializer.serialize(kind, "0 | 1 | 3", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async getOutcomes(appId: string, outcomeNames: string, outcomeNames2?: string, outcomeTimeRange?: string, outcomePlatforms?: string, outcomeAttribution?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "getOutcomes", "appId");
        }


        // verify required parameter 'outcomeNames' is not null or undefined
        if (outcomeNames === null || outcomeNames === undefined) {
            throw new RequiredError("DefaultApi", "getOutcomes", "outcomeNames");
        }






        // Path Params
        const localVarPath = '/apps/{app_id}/outcomes'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");

        // Query Params
        if (outcomeNames !== undefined) {
            requestContext.setQueryParam("outcome_names", ObjectSerializer.serialize(outcomeNames, "string", ""));
        }

        // Query Params
        if (outcomeNames2 !== undefined) {
            requestContext.setQueryParam("outcome_names[]", ObjectSerializer.serialize(outcomeNames2, "string", ""));
        }

        // Query Params
        if (outcomeTimeRange !== undefined) {
            requestContext.setQueryParam("outcome_time_range", ObjectSerializer.serialize(outcomeTimeRange, "string", ""));
        }

        // Query Params
        if (outcomePlatforms !== undefined) {
            requestContext.setQueryParam("outcome_platforms", ObjectSerializer.serialize(outcomePlatforms, "string", ""));
        }

        // Query Params
        if (outcomeAttribution !== undefined) {
            requestContext.setQueryParam("outcome_attribution", ObjectSerializer.serialize(outcomeAttribution, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * View the details of an existing device in one of your OneSignal apps
     * View device
     * @param appId Your app_id for this device
     * @param playerId Player\&#39;s OneSignal ID
     * @param emailAuthHash Email - Only required if you have enabled Identity Verification and device_type is email (11).
     */
    public async getPlayer(appId: string, playerId: string, emailAuthHash?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "getPlayer", "appId");
        }


        // verify required parameter 'playerId' is not null or undefined
        if (playerId === null || playerId === undefined) {
            throw new RequiredError("DefaultApi", "getPlayer", "playerId");
        }



        // Path Params
        const localVarPath = '/players/{player_id}'
            .replace('{' + 'player_id' + '}', encodeURIComponent(String(playerId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");

        // Query Params
        if (appId !== undefined) {
            requestContext.setQueryParam("app_id", ObjectSerializer.serialize(appId, "string", ""));
        }

        // Query Params
        if (emailAuthHash !== undefined) {
            requestContext.setQueryParam("email_auth_hash", ObjectSerializer.serialize(emailAuthHash, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * View the details of multiple devices in one of your OneSignal apps Unavailable for Apps Over 80,000 Users For performance reasons, this method is not available for larger apps. Larger apps should use the CSV export API endpoint, which is much more performant. 
     * View devices
     * @param appId The app ID that you want to view players from
     * @param limit How many devices to return. Max is 300. Default is 300
     * @param offset Result offset. Default is 0. Results are sorted by id;
     */
    public async getPlayers(appId: string, limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "getPlayers", "appId");
        }




        // Path Params
        const localVarPath = '/players';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");

        // Query Params
        if (appId !== undefined) {
            requestContext.setQueryParam("app_id", ObjectSerializer.serialize(appId, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Upserts one or more Aliases to an existing User identified by (:alias_label, :alias_id).
     * @param appId 
     * @param aliasLabel 
     * @param aliasId 
     * @param userIdentityRequestBody 
     */
    public async identifyUserByAlias(appId: string, aliasLabel: string, aliasId: string, userIdentityRequestBody: UserIdentityRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "identifyUserByAlias", "appId");
        }


        // verify required parameter 'aliasLabel' is not null or undefined
        if (aliasLabel === null || aliasLabel === undefined) {
            throw new RequiredError("DefaultApi", "identifyUserByAlias", "aliasLabel");
        }


        // verify required parameter 'aliasId' is not null or undefined
        if (aliasId === null || aliasId === undefined) {
            throw new RequiredError("DefaultApi", "identifyUserByAlias", "aliasId");
        }


        // verify required parameter 'userIdentityRequestBody' is not null or undefined
        if (userIdentityRequestBody === null || userIdentityRequestBody === undefined) {
            throw new RequiredError("DefaultApi", "identifyUserByAlias", "userIdentityRequestBody");
        }


        // Path Params
        const localVarPath = '/apps/{app_id}/users/by/{alias_label}/{alias_id}/identity'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'alias_label' + '}', encodeURIComponent(String(aliasLabel)))
            .replace('{' + 'alias_id' + '}', encodeURIComponent(String(aliasId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(userIdentityRequestBody, "UserIdentityRequestBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Upserts one or more Aliases for the User identified by :subscription_id.
     * @param appId 
     * @param subscriptionId 
     * @param userIdentityRequestBody 
     */
    public async identifyUserBySubscriptionId(appId: string, subscriptionId: string, userIdentityRequestBody: UserIdentityRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "identifyUserBySubscriptionId", "appId");
        }


        // verify required parameter 'subscriptionId' is not null or undefined
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new RequiredError("DefaultApi", "identifyUserBySubscriptionId", "subscriptionId");
        }


        // verify required parameter 'userIdentityRequestBody' is not null or undefined
        if (userIdentityRequestBody === null || userIdentityRequestBody === undefined) {
            throw new RequiredError("DefaultApi", "identifyUserBySubscriptionId", "userIdentityRequestBody");
        }


        // Path Params
        const localVarPath = '/apps/{app_id}/subscriptions/{subscription_id}/user/identity'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'subscription_id' + '}', encodeURIComponent(String(subscriptionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(userIdentityRequestBody, "UserIdentityRequestBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Transfers this Subscription to the User identified by the identity in the payload.
     * @param appId 
     * @param subscriptionId 
     * @param transferSubscriptionRequestBody 
     */
    public async transferSubscription(appId: string, subscriptionId: string, transferSubscriptionRequestBody: TransferSubscriptionRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "transferSubscription", "appId");
        }


        // verify required parameter 'subscriptionId' is not null or undefined
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new RequiredError("DefaultApi", "transferSubscription", "subscriptionId");
        }


        // verify required parameter 'transferSubscriptionRequestBody' is not null or undefined
        if (transferSubscriptionRequestBody === null || transferSubscriptionRequestBody === undefined) {
            throw new RequiredError("DefaultApi", "transferSubscription", "transferSubscriptionRequestBody");
        }


        // Path Params
        const localVarPath = '/apps/{app_id}/subscriptions/{subscription_id}/owner'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'subscription_id' + '}', encodeURIComponent(String(subscriptionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(transferSubscriptionRequestBody, "TransferSubscriptionRequestBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates the name or configuration settings of an existing OneSignal app
     * Update an app
     * @param appId An app id
     * @param app 
     */
    public async updateApp(appId: string, app: App, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "updateApp", "appId");
        }


        // verify required parameter 'app' is not null or undefined
        if (app === null || app === undefined) {
            throw new RequiredError("DefaultApi", "updateApp", "app");
        }


        // Path Params
        const localVarPath = '/apps/{app_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");


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

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["user_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates a specified live activity.
     * Update a Live Activity via Push
     * @param appId The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @param activityId Live Activity record ID
     * @param updateLiveActivityRequest 
     */
    public async updateLiveActivity(appId: string, activityId: string, updateLiveActivityRequest: UpdateLiveActivityRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "updateLiveActivity", "appId");
        }


        // verify required parameter 'activityId' is not null or undefined
        if (activityId === null || activityId === undefined) {
            throw new RequiredError("DefaultApi", "updateLiveActivity", "activityId");
        }


        // verify required parameter 'updateLiveActivityRequest' is not null or undefined
        if (updateLiveActivityRequest === null || updateLiveActivityRequest === undefined) {
            throw new RequiredError("DefaultApi", "updateLiveActivity", "updateLiveActivityRequest");
        }


        // Path Params
        const localVarPath = '/apps/{app_id}/live_activities/{activity_id}/notifications'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'activity_id' + '}', encodeURIComponent(String(activityId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateLiveActivityRequest, "UpdateLiveActivityRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update an existing device in one of your OneSignal apps
     * Edit device
     * @param playerId Player\&#39;s OneSignal ID
     * @param player 
     */
    public async updatePlayer(playerId: string, player: Player, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'playerId' is not null or undefined
        if (playerId === null || playerId === undefined) {
            throw new RequiredError("DefaultApi", "updatePlayer", "playerId");
        }


        // verify required parameter 'player' is not null or undefined
        if (player === null || player === undefined) {
            throw new RequiredError("DefaultApi", "updatePlayer", "player");
        }


        // Path Params
        const localVarPath = '/players/{player_id}'
            .replace('{' + 'player_id' + '}', encodeURIComponent(String(playerId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");


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

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update an existing device\'s tags in one of your OneSignal apps using the External User ID. Warning - Android SDK Data Synchronization Tags added through the Android SDK tagging methods may not update if using the API to change or update the same tag. For example, if you use SDK method sendTag(\"key\", \"value1\") then update the tag value to \"value2\" with this API endpoint. You will not be able to set the value back to \"value1\" through the SDK, you will need to change it to something different through the SDK to be reset. Recommendations if using this Endpoint on Android Mobile Apps: 1 - Do not use the same tag keys for SDK and API updates 2 - If you want to use the same key for both SDK and API updates, call the SDK getTags method first to update the device\'s tags. This is only applicable on the Android Mobile App SDKs. &#128216; Deleting Tags To delete a tag, include its key and set its value to blank. Omitting a key/value will not delete it. For example, if I wanted to delete two existing tags rank and category while simultaneously adding a new tag class, the tags JSON would look like the following: \"tags\": {    \"rank\": \"\",    \"category\": \"\",    \"class\": \"my_new_value\" } 
     * Edit tags with external user id
     * @param appId The OneSignal App ID the user record is found under.
     * @param externalUserId The External User ID mapped to teh device record in OneSignal.  Must be actively set on the device to be updated.
     * @param updatePlayerTagsRequestBody 
     */
    public async updatePlayerTags(appId: string, externalUserId: string, updatePlayerTagsRequestBody?: UpdatePlayerTagsRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "updatePlayerTags", "appId");
        }


        // verify required parameter 'externalUserId' is not null or undefined
        if (externalUserId === null || externalUserId === undefined) {
            throw new RequiredError("DefaultApi", "updatePlayerTags", "externalUserId");
        }



        // Path Params
        const localVarPath = '/apps/{app_id}/users/{external_user_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'external_user_id' + '}', encodeURIComponent(String(externalUserId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updatePlayerTagsRequestBody, "UpdatePlayerTagsRequestBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates an existing Subscription’s properties.
     * @param appId 
     * @param subscriptionId 
     * @param updateSubscriptionRequestBody 
     */
    public async updateSubscription(appId: string, subscriptionId: string, updateSubscriptionRequestBody: UpdateSubscriptionRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "updateSubscription", "appId");
        }


        // verify required parameter 'subscriptionId' is not null or undefined
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new RequiredError("DefaultApi", "updateSubscription", "subscriptionId");
        }


        // verify required parameter 'updateSubscriptionRequestBody' is not null or undefined
        if (updateSubscriptionRequestBody === null || updateSubscriptionRequestBody === undefined) {
            throw new RequiredError("DefaultApi", "updateSubscription", "updateSubscriptionRequestBody");
        }


        // Path Params
        const localVarPath = '/apps/{app_id}/subscriptions/{subscription_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'subscription_id' + '}', encodeURIComponent(String(subscriptionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateSubscriptionRequestBody, "UpdateSubscriptionRequestBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates an existing User’s properties.
     * @param appId 
     * @param aliasLabel 
     * @param aliasId 
     * @param updateUserRequest 
     */
    public async updateUser(appId: string, aliasLabel: string, aliasId: string, updateUserRequest: UpdateUserRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "updateUser", "appId");
        }


        // verify required parameter 'aliasLabel' is not null or undefined
        if (aliasLabel === null || aliasLabel === undefined) {
            throw new RequiredError("DefaultApi", "updateUser", "aliasLabel");
        }


        // verify required parameter 'aliasId' is not null or undefined
        if (aliasId === null || aliasId === undefined) {
            throw new RequiredError("DefaultApi", "updateUser", "aliasId");
        }


        // verify required parameter 'updateUserRequest' is not null or undefined
        if (updateUserRequest === null || updateUserRequest === undefined) {
            throw new RequiredError("DefaultApi", "updateUser", "updateUserRequest");
        }


        // Path Params
        const localVarPath = '/apps/{app_id}/users/by/{alias_label}/{alias_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'alias_label' + '}', encodeURIComponent(String(aliasLabel)))
            .replace('{' + 'alias_id' + '}', encodeURIComponent(String(aliasId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=2.2.0-beta1");


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateUserRequest, "UpdateUserRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["app_key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class DefaultApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to beginLiveActivity
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async beginLiveActivity(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cancelNotification
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cancelNotification(response: ResponseContext): Promise<CancelNotificationSuccessResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CancelNotificationSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CancelNotificationSuccessResponse", ""
            ) as CancelNotificationSuccessResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CancelNotificationSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CancelNotificationSuccessResponse", ""
            ) as CancelNotificationSuccessResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
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
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: App = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "App", ""
            ) as App;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNotification
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createNotification(response: ResponseContext): Promise<CreateNotificationSuccessResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateNotificationSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateNotificationSuccessResponse", ""
            ) as CreateNotificationSuccessResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateNotificationSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateNotificationSuccessResponse", ""
            ) as CreateNotificationSuccessResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPlayer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createPlayer(response: ResponseContext): Promise<CreatePlayerSuccessResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreatePlayerSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreatePlayerSuccessResponse", ""
            ) as CreatePlayerSuccessResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(409, "Conflict", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreatePlayerSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreatePlayerSuccessResponse", ""
            ) as CreatePlayerSuccessResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSegments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createSegments(response: ResponseContext): Promise<CreateSegmentSuccessResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: CreateSegmentSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateSegmentSuccessResponse", ""
            ) as CreateSegmentSuccessResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: CreateSegmentConflictResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateSegmentConflictResponse", ""
            ) as CreateSegmentConflictResponse;
            throw new ApiException<CreateSegmentConflictResponse>(409, "Conflict", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateSegmentSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateSegmentSuccessResponse", ""
            ) as CreateSegmentSuccessResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSubscription
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createSubscription(response: ResponseContext): Promise<InlineResponse201 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: InlineResponse201 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse201", ""
            ) as InlineResponse201;
            return body;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: InlineResponse201 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse201", ""
            ) as InlineResponse201;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(409, "Operation is not permitted due to user having the maximum number of subscriptions assigned", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse201 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse201", ""
            ) as InlineResponse201;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createUser(response: ResponseContext): Promise<User > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: User = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "User", ""
            ) as User;
            return body;
        }
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: User = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "User", ""
            ) as User;
            return body;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: User = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "User", ""
            ) as User;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: CreateUserConflictResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateUserConflictResponse", ""
            ) as CreateUserConflictResponse;
            throw new ApiException<CreateUserConflictResponse>(409, "Multiple User Identity Conflict", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: User = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "User", ""
            ) as User;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAlias
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteAlias(response: ResponseContext): Promise<InlineResponse200 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse200 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse200", ""
            ) as InlineResponse200;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(409, "Conflict", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse200 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse200", ""
            ) as InlineResponse200;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletePlayer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deletePlayer(response: ResponseContext): Promise<DeletePlayerSuccessResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeletePlayerSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeletePlayerSuccessResponse", ""
            ) as DeletePlayerSuccessResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: DeletePlayerNotFoundResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeletePlayerNotFoundResponse", ""
            ) as DeletePlayerNotFoundResponse;
            throw new ApiException<DeletePlayerNotFoundResponse>(404, "Not Found", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeletePlayerSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeletePlayerSuccessResponse", ""
            ) as DeletePlayerSuccessResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteSegments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteSegments(response: ResponseContext): Promise<DeleteSegmentSuccessResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeleteSegmentSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteSegmentSuccessResponse", ""
            ) as DeleteSegmentSuccessResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: DeleteSegmentNotFoundResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteSegmentNotFoundResponse", ""
            ) as DeleteSegmentNotFoundResponse;
            throw new ApiException<DeleteSegmentNotFoundResponse>(404, "Not Found", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeleteSegmentSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteSegmentSuccessResponse", ""
            ) as DeleteSegmentSuccessResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteSubscription
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteSubscription(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(409, "Conflict", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteUser(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(409, "Conflict", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to endLiveActivity
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async endLiveActivity(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to exportEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exportEvents(response: ResponseContext): Promise<ExportEventsSuccessResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExportEventsSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExportEventsSuccessResponse", ""
            ) as ExportEventsSuccessResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(404, "Not Found", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ExportEventsSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExportEventsSuccessResponse", ""
            ) as ExportEventsSuccessResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to exportPlayers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exportPlayers(response: ResponseContext): Promise<ExportPlayersSuccessResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExportPlayersSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExportPlayersSuccessResponse", ""
            ) as ExportPlayersSuccessResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ExportPlayersSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExportPlayersSuccessResponse", ""
            ) as ExportPlayersSuccessResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to fetchAliases
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async fetchAliases(response: ResponseContext): Promise<UserIdentityResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserIdentityResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserIdentityResponse", ""
            ) as UserIdentityResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UserIdentityResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserIdentityResponse", ""
            ) as UserIdentityResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to fetchUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async fetchUser(response: ResponseContext): Promise<User > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: User = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "User", ""
            ) as User;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: User = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "User", ""
            ) as User;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to fetchUserIdentity
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async fetchUserIdentity(response: ResponseContext): Promise<InlineResponse200 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse200 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse200", ""
            ) as InlineResponse200;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse200 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse200", ""
            ) as InlineResponse200;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
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
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: App = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "App", ""
            ) as App;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApps
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApps(response: ResponseContext): Promise<Array<App> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<App> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<App>", ""
            ) as Array<App>;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<App> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<App>", ""
            ) as Array<App>;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEligibleIams
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEligibleIams(response: ResponseContext): Promise<InlineResponse2003 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2003 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2003", ""
            ) as InlineResponse2003;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse2003 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2003", ""
            ) as InlineResponse2003;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getNotification
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getNotification(response: ResponseContext): Promise<NotificationWithMeta > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NotificationWithMeta = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotificationWithMeta", ""
            ) as NotificationWithMeta;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NotificationWithMeta = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotificationWithMeta", ""
            ) as NotificationWithMeta;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getNotificationHistory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getNotificationHistory(response: ResponseContext): Promise<NotificationHistorySuccessResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NotificationHistorySuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotificationHistorySuccessResponse", ""
            ) as NotificationHistorySuccessResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NotificationHistorySuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotificationHistorySuccessResponse", ""
            ) as NotificationHistorySuccessResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
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
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NotificationSlice = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotificationSlice", ""
            ) as NotificationSlice;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOutcomes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getOutcomes(response: ResponseContext): Promise<OutcomesData > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OutcomesData = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OutcomesData", ""
            ) as OutcomesData;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OutcomesData = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OutcomesData", ""
            ) as OutcomesData;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
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
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Player = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Player", ""
            ) as Player;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
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
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PlayerSlice = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PlayerSlice", ""
            ) as PlayerSlice;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to identifyUserByAlias
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async identifyUserByAlias(response: ResponseContext): Promise<InlineResponse200 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse200 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse200", ""
            ) as InlineResponse200;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(409, "Conflict", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse200 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse200", ""
            ) as InlineResponse200;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to identifyUserBySubscriptionId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async identifyUserBySubscriptionId(response: ResponseContext): Promise<UserIdentityResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserIdentityResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserIdentityResponse", ""
            ) as UserIdentityResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(409, "Conflict", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UserIdentityResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserIdentityResponse", ""
            ) as UserIdentityResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to transferSubscription
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async transferSubscription(response: ResponseContext): Promise<UserIdentityResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserIdentityResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserIdentityResponse", ""
            ) as UserIdentityResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(409, "Conflict", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UserIdentityResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserIdentityResponse", ""
            ) as UserIdentityResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
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
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: App = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "App", ""
            ) as App;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateLiveActivity
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateLiveActivity(response: ResponseContext): Promise<UpdateLiveActivitySuccessResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UpdateLiveActivitySuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateLiveActivitySuccessResponse", ""
            ) as UpdateLiveActivitySuccessResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UpdateLiveActivitySuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateLiveActivitySuccessResponse", ""
            ) as UpdateLiveActivitySuccessResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePlayer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updatePlayer(response: ResponseContext): Promise<UpdatePlayerSuccessResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UpdatePlayerSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdatePlayerSuccessResponse", ""
            ) as UpdatePlayerSuccessResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(409, "Conflict", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UpdatePlayerSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdatePlayerSuccessResponse", ""
            ) as UpdatePlayerSuccessResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePlayerTags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updatePlayerTags(response: ResponseContext): Promise<UpdatePlayerTagsSuccessResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UpdatePlayerTagsSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdatePlayerTagsSuccessResponse", ""
            ) as UpdatePlayerTagsSuccessResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(409, "Conflict", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UpdatePlayerTagsSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdatePlayerTagsSuccessResponse", ""
            ) as UpdatePlayerTagsSuccessResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateSubscription
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateSubscription(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(409, "Conflict", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateUser(response: ResponseContext): Promise<InlineResponse202 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: InlineResponse202 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse202", ""
            ) as InlineResponse202;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(400, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(409, "Conflict", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimiterError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimiterError", ""
            ) as RateLimiterError;
            throw new ApiException<RateLimiterError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse202 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse202", ""
            ) as InlineResponse202;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
