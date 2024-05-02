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
import { CreateNotificationSuccessResponse } from '../models/CreateNotificationSuccessResponse';
import { CreateSegmentConflictResponse } from '../models/CreateSegmentConflictResponse';
import { CreateSegmentSuccessResponse } from '../models/CreateSegmentSuccessResponse';
import { CreateUserConflictResponse } from '../models/CreateUserConflictResponse';
import { ExportEventsSuccessResponse } from '../models/ExportEventsSuccessResponse';
import { ExportSubscriptionsRequestBody } from '../models/ExportSubscriptionsRequestBody';
import { ExportSubscriptionsSuccessResponse } from '../models/ExportSubscriptionsSuccessResponse';
import { GenericError } from '../models/GenericError';
import { GenericSuccessBoolResponse } from '../models/GenericSuccessBoolResponse';
import { GetNotificationHistoryRequestBody } from '../models/GetNotificationHistoryRequestBody';
import { GetSegmentsSuccessResponse } from '../models/GetSegmentsSuccessResponse';
import { Notification } from '../models/Notification';
import { NotificationHistorySuccessResponse } from '../models/NotificationHistorySuccessResponse';
import { NotificationSlice } from '../models/NotificationSlice';
import { NotificationWithMeta } from '../models/NotificationWithMeta';
import { OutcomesData } from '../models/OutcomesData';
import { PropertiesBody } from '../models/PropertiesBody';
import { RateLimitError } from '../models/RateLimitError';
import { Segment } from '../models/Segment';
import { SubscriptionBody } from '../models/SubscriptionBody';
import { TransferSubscriptionRequestBody } from '../models/TransferSubscriptionRequestBody';
import { UpdateLiveActivityRequest } from '../models/UpdateLiveActivityRequest';
import { UpdateLiveActivitySuccessResponse } from '../models/UpdateLiveActivitySuccessResponse';
import { UpdateUserRequest } from '../models/UpdateUserRequest';
import { User } from '../models/User';
import { UserIdentityBody } from '../models/UserIdentityBody';

/**
 * no description
 */
export class DefaultApiRequestFactory extends BaseAPIRequestFactory {

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
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.0.0-alpha-01");

        // Query Params
        if (appId !== undefined) {
            requestContext.setQueryParam("app_id", ObjectSerializer.serialize(appId, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["rest_api_key"]
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
     * @param userIdentityBody 
     */
    public async createAlias(appId: string, aliasLabel: string, aliasId: string, userIdentityBody: UserIdentityBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "createAlias", "appId");
        }


        // verify required parameter 'aliasLabel' is not null or undefined
        if (aliasLabel === null || aliasLabel === undefined) {
            throw new RequiredError("DefaultApi", "createAlias", "aliasLabel");
        }


        // verify required parameter 'aliasId' is not null or undefined
        if (aliasId === null || aliasId === undefined) {
            throw new RequiredError("DefaultApi", "createAlias", "aliasId");
        }


        // verify required parameter 'userIdentityBody' is not null or undefined
        if (userIdentityBody === null || userIdentityBody === undefined) {
            throw new RequiredError("DefaultApi", "createAlias", "userIdentityBody");
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
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.0.0-alpha-01");


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(userIdentityBody, "UserIdentityBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["rest_api_key"]
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
     * @param userIdentityBody 
     */
    public async createAliasBySubscription(appId: string, subscriptionId: string, userIdentityBody: UserIdentityBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "createAliasBySubscription", "appId");
        }


        // verify required parameter 'subscriptionId' is not null or undefined
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new RequiredError("DefaultApi", "createAliasBySubscription", "subscriptionId");
        }


        // verify required parameter 'userIdentityBody' is not null or undefined
        if (userIdentityBody === null || userIdentityBody === undefined) {
            throw new RequiredError("DefaultApi", "createAliasBySubscription", "userIdentityBody");
        }


        // Path Params
        const localVarPath = '/apps/{app_id}/subscriptions/{subscription_id}/user/identity'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'subscription_id' + '}', encodeURIComponent(String(subscriptionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.0.0-alpha-01");


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(userIdentityBody, "UserIdentityBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["rest_api_key"]
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
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.0.0-alpha-01");


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
        authMethod = _config.authMethods["user_auth_key"]
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
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.0.0-alpha-01");


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
        authMethod = _config.authMethods["rest_api_key"]
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
     * Create a segment visible and usable in the dashboard and API - Required: OneSignal Paid Plan The Create Segment method is used when you want your server to programmatically create a segment instead of using the OneSignal Dashboard UI. Just like creating Segments from the dashboard you can pass in filters with multiple \"AND\" or \"OR\" operator\'s. &#x1F6A7; Does Not Update Segments This endpoint will only create segments, it does not edit or update currently created Segments. You will need to use the Delete Segment endpoint and re-create it with this endpoint to edit. 
     * Create Segment
     * @param appId The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @param segment 
     */
    public async createSegment(appId: string, segment?: Segment, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "createSegment", "appId");
        }



        // Path Params
        const localVarPath = '/apps/{app_id}/segments'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.0.0-alpha-01");


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
        authMethod = _config.authMethods["rest_api_key"]
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
     * @param subscriptionBody 
     */
    public async createSubscription(appId: string, aliasLabel: string, aliasId: string, subscriptionBody: SubscriptionBody, _options?: Configuration): Promise<RequestContext> {
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


        // verify required parameter 'subscriptionBody' is not null or undefined
        if (subscriptionBody === null || subscriptionBody === undefined) {
            throw new RequiredError("DefaultApi", "createSubscription", "subscriptionBody");
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
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.0.0-alpha-01");


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(subscriptionBody, "SubscriptionBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["rest_api_key"]
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
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.0.0-alpha-01");


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
        authMethod = _config.authMethods["rest_api_key"]
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
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.0.0-alpha-01");


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["rest_api_key"]
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
     * Delete a segment (not user devices) - Required: OneSignal Paid Plan You can delete a segment under your app by calling this API. You must provide an API key in the Authorization header that has admin access on the app. The segment_id can be found in the URL of the segment when viewing it in the dashboard. 
     * Delete Segment
     * @param appId The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @param segmentId The segment_id can be found in the URL of the segment when viewing it in the dashboard.
     */
    public async deleteSegment(appId: string, segmentId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "deleteSegment", "appId");
        }


        // verify required parameter 'segmentId' is not null or undefined
        if (segmentId === null || segmentId === undefined) {
            throw new RequiredError("DefaultApi", "deleteSegment", "segmentId");
        }


        // Path Params
        const localVarPath = '/apps/{app_id}/segments/{segment_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'segment_id' + '}', encodeURIComponent(String(segmentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.0.0-alpha-01");


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["rest_api_key"]
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
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.0.0-alpha-01");


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["rest_api_key"]
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
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.0.0-alpha-01");


        
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
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.0.0-alpha-01");

        // Query Params
        if (appId !== undefined) {
            requestContext.setQueryParam("app_id", ObjectSerializer.serialize(appId, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["rest_api_key"]
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
     * Export CSV of Subscriptions
     * @param appId The app ID that you want to export devices from
     * @param exportSubscriptionsRequestBody 
     */
    public async exportSubscriptions(appId: string, exportSubscriptionsRequestBody?: ExportSubscriptionsRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "exportSubscriptions", "appId");
        }



        // Path Params
        const localVarPath = '/players/csv_export?app_id={app_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.0.0-alpha-01");


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(exportSubscriptionsRequestBody, "ExportSubscriptionsRequestBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["rest_api_key"]
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
    public async getAliases(appId: string, aliasLabel: string, aliasId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "getAliases", "appId");
        }


        // verify required parameter 'aliasLabel' is not null or undefined
        if (aliasLabel === null || aliasLabel === undefined) {
            throw new RequiredError("DefaultApi", "getAliases", "aliasLabel");
        }


        // verify required parameter 'aliasId' is not null or undefined
        if (aliasId === null || aliasId === undefined) {
            throw new RequiredError("DefaultApi", "getAliases", "aliasId");
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
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.0.0-alpha-01");


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["rest_api_key"]
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
    public async getAliasesBySubscription(appId: string, subscriptionId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "getAliasesBySubscription", "appId");
        }


        // verify required parameter 'subscriptionId' is not null or undefined
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new RequiredError("DefaultApi", "getAliasesBySubscription", "subscriptionId");
        }


        // Path Params
        const localVarPath = '/apps/{app_id}/subscriptions/{subscription_id}/user/identity'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'subscription_id' + '}', encodeURIComponent(String(subscriptionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.0.0-alpha-01");


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["rest_api_key"]
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
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.0.0-alpha-01");


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["user_auth_key"]
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
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.0.0-alpha-01");


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["user_auth_key"]
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
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.0.0-alpha-01");

        // Query Params
        if (appId !== undefined) {
            requestContext.setQueryParam("app_id", ObjectSerializer.serialize(appId, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["rest_api_key"]
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
     * @param getNotificationHistoryRequestBody 
     */
    public async getNotificationHistory(notificationId: string, getNotificationHistoryRequestBody: GetNotificationHistoryRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'notificationId' is not null or undefined
        if (notificationId === null || notificationId === undefined) {
            throw new RequiredError("DefaultApi", "getNotificationHistory", "notificationId");
        }


        // verify required parameter 'getNotificationHistoryRequestBody' is not null or undefined
        if (getNotificationHistoryRequestBody === null || getNotificationHistoryRequestBody === undefined) {
            throw new RequiredError("DefaultApi", "getNotificationHistory", "getNotificationHistoryRequestBody");
        }


        // Path Params
        const localVarPath = '/notifications/{notification_id}/history'
            .replace('{' + 'notification_id' + '}', encodeURIComponent(String(notificationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.0.0-alpha-01");


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(getNotificationHistoryRequestBody, "GetNotificationHistoryRequestBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["rest_api_key"]
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
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.0.0-alpha-01");

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
        authMethod = _config.authMethods["rest_api_key"]
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
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.0.0-alpha-01");

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
        authMethod = _config.authMethods["rest_api_key"]
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
     * Returns an array of segments from an app.
     * Get Segments
     * @param appId The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @param offset Segments are listed in ascending order of created_at date. offset will omit that number of segments from the beginning of the list. Eg offset 5, will remove the 5 earliest created Segments.
     * @param limit The amount of Segments in the response. Maximum 300.
     */
    public async getSegments(appId: string, offset?: number, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "getSegments", "appId");
        }




        // Path Params
        const localVarPath = '/apps/{app_id}/segments'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.0.0-alpha-01");

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["rest_api_key"]
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
    public async getUser(appId: string, aliasLabel: string, aliasId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "getUser", "appId");
        }


        // verify required parameter 'aliasLabel' is not null or undefined
        if (aliasLabel === null || aliasLabel === undefined) {
            throw new RequiredError("DefaultApi", "getUser", "aliasLabel");
        }


        // verify required parameter 'aliasId' is not null or undefined
        if (aliasId === null || aliasId === undefined) {
            throw new RequiredError("DefaultApi", "getUser", "aliasId");
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
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.0.0-alpha-01");


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["rest_api_key"]
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
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.0.0-alpha-01");


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
        authMethod = _config.authMethods["rest_api_key"]
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
     * Unsubscribe an email with a token when using your own custom email unsubscribe landing page
     * Unsubscribe with token
     * @param appId The OneSignal App ID for your app.  Available in Keys &amp; IDs.
     * @param notificationId The id of the message found in the creation notification POST response, View Notifications GET response, or URL within the Message Report.
     * @param token The unsubscribe token that is generated via liquid syntax in {{subscription.unsubscribe_token}} when personalizing an email.
     */
    public async unsubscribeEmailWithToken(appId: string, notificationId: string, token: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "unsubscribeEmailWithToken", "appId");
        }


        // verify required parameter 'notificationId' is not null or undefined
        if (notificationId === null || notificationId === undefined) {
            throw new RequiredError("DefaultApi", "unsubscribeEmailWithToken", "notificationId");
        }


        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("DefaultApi", "unsubscribeEmailWithToken", "token");
        }


        // Path Params
        const localVarPath = '/apps/{app_id}/notifications/{notification_id}/unsubscribe'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'notification_id' + '}', encodeURIComponent(String(notificationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.0.0-alpha-01");

        // Query Params
        if (token !== undefined) {
            requestContext.setQueryParam("token", ObjectSerializer.serialize(token, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["rest_api_key"]
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
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.0.0-alpha-01");


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
        authMethod = _config.authMethods["user_auth_key"]
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
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.0.0-alpha-01");


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
        authMethod = _config.authMethods["rest_api_key"]
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
     * @param subscriptionBody 
     */
    public async updateSubscription(appId: string, subscriptionId: string, subscriptionBody: SubscriptionBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefaultApi", "updateSubscription", "appId");
        }


        // verify required parameter 'subscriptionId' is not null or undefined
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new RequiredError("DefaultApi", "updateSubscription", "subscriptionId");
        }


        // verify required parameter 'subscriptionBody' is not null or undefined
        if (subscriptionBody === null || subscriptionBody === undefined) {
            throw new RequiredError("DefaultApi", "updateSubscription", "subscriptionBody");
        }


        // Path Params
        const localVarPath = '/apps/{app_id}/subscriptions/{subscription_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'subscription_id' + '}', encodeURIComponent(String(subscriptionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Always add the One Signal telemetry to the request.
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.0.0-alpha-01");


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(subscriptionBody, "SubscriptionBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["rest_api_key"]
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
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.0.0-alpha-01");


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
        authMethod = _config.authMethods["rest_api_key"]
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
     * @params response Response returned by the server for a request to cancelNotification
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cancelNotification(response: ResponseContext): Promise<GenericSuccessBoolResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GenericSuccessBoolResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericSuccessBoolResponse", ""
            ) as GenericSuccessBoolResponse;
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
            const body: RateLimitError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitError", ""
            ) as RateLimitError;
            throw new ApiException<RateLimitError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GenericSuccessBoolResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericSuccessBoolResponse", ""
            ) as GenericSuccessBoolResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAlias
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createAlias(response: ResponseContext): Promise<UserIdentityBody > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserIdentityBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserIdentityBody", ""
            ) as UserIdentityBody;
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
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(409, "Conflict", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimitError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitError", ""
            ) as RateLimitError;
            throw new ApiException<RateLimitError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UserIdentityBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserIdentityBody", ""
            ) as UserIdentityBody;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAliasBySubscription
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createAliasBySubscription(response: ResponseContext): Promise<UserIdentityBody > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserIdentityBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserIdentityBody", ""
            ) as UserIdentityBody;
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
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(409, "Conflict", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimitError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitError", ""
            ) as RateLimitError;
            throw new ApiException<RateLimitError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UserIdentityBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserIdentityBody", ""
            ) as UserIdentityBody;
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
            const body: RateLimitError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitError", ""
            ) as RateLimitError;
            throw new ApiException<RateLimitError>(429, "Rate Limit Exceeded", body, response.headers);
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
            const body: RateLimitError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitError", ""
            ) as RateLimitError;
            throw new ApiException<RateLimitError>(429, "Rate Limit Exceeded", body, response.headers);
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
     * @params response Response returned by the server for a request to createSegment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createSegment(response: ResponseContext): Promise<CreateSegmentSuccessResponse > {
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
            const body: RateLimitError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitError", ""
            ) as RateLimitError;
            throw new ApiException<RateLimitError>(429, "Rate Limit Exceeded", body, response.headers);
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
     public async createSubscription(response: ResponseContext): Promise<SubscriptionBody > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: SubscriptionBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionBody", ""
            ) as SubscriptionBody;
            return body;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: SubscriptionBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionBody", ""
            ) as SubscriptionBody;
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
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(409, "Operation is not permitted due to user having the maximum number of subscriptions assigned", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimitError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitError", ""
            ) as RateLimitError;
            throw new ApiException<RateLimitError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SubscriptionBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionBody", ""
            ) as SubscriptionBody;
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
            const body: RateLimitError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitError", ""
            ) as RateLimitError;
            throw new ApiException<RateLimitError>(429, "Rate Limit Exceeded", body, response.headers);
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
     public async deleteAlias(response: ResponseContext): Promise<UserIdentityBody > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserIdentityBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserIdentityBody", ""
            ) as UserIdentityBody;
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
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(409, "Conflict", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimitError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitError", ""
            ) as RateLimitError;
            throw new ApiException<RateLimitError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UserIdentityBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserIdentityBody", ""
            ) as UserIdentityBody;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteSegment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteSegment(response: ResponseContext): Promise<GenericSuccessBoolResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GenericSuccessBoolResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericSuccessBoolResponse", ""
            ) as GenericSuccessBoolResponse;
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
            const body: GenericSuccessBoolResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericSuccessBoolResponse", ""
            ) as GenericSuccessBoolResponse;
            throw new ApiException<GenericSuccessBoolResponse>(404, "Not Found", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimitError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitError", ""
            ) as RateLimitError;
            throw new ApiException<RateLimitError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GenericSuccessBoolResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericSuccessBoolResponse", ""
            ) as GenericSuccessBoolResponse;
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
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(404, "Not Found", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(409, "Conflict", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimitError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitError", ""
            ) as RateLimitError;
            throw new ApiException<RateLimitError>(429, "Rate Limit Exceeded", body, response.headers);
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
            const body: RateLimitError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitError", ""
            ) as RateLimitError;
            throw new ApiException<RateLimitError>(429, "Rate Limit Exceeded", body, response.headers);
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
            const body: RateLimitError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitError", ""
            ) as RateLimitError;
            throw new ApiException<RateLimitError>(429, "Rate Limit Exceeded", body, response.headers);
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
     * @params response Response returned by the server for a request to exportSubscriptions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exportSubscriptions(response: ResponseContext): Promise<ExportSubscriptionsSuccessResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExportSubscriptionsSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExportSubscriptionsSuccessResponse", ""
            ) as ExportSubscriptionsSuccessResponse;
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
            const body: RateLimitError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitError", ""
            ) as RateLimitError;
            throw new ApiException<RateLimitError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ExportSubscriptionsSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExportSubscriptionsSuccessResponse", ""
            ) as ExportSubscriptionsSuccessResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAliases
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAliases(response: ResponseContext): Promise<UserIdentityBody > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserIdentityBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserIdentityBody", ""
            ) as UserIdentityBody;
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
            const body: RateLimitError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitError", ""
            ) as RateLimitError;
            throw new ApiException<RateLimitError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UserIdentityBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserIdentityBody", ""
            ) as UserIdentityBody;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAliasesBySubscription
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAliasesBySubscription(response: ResponseContext): Promise<UserIdentityBody > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserIdentityBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserIdentityBody", ""
            ) as UserIdentityBody;
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

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UserIdentityBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserIdentityBody", ""
            ) as UserIdentityBody;
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
            const body: RateLimitError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitError", ""
            ) as RateLimitError;
            throw new ApiException<RateLimitError>(429, "Rate Limit Exceeded", body, response.headers);
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
            const body: RateLimitError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitError", ""
            ) as RateLimitError;
            throw new ApiException<RateLimitError>(429, "Rate Limit Exceeded", body, response.headers);
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
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(404, "Not Found", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimitError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitError", ""
            ) as RateLimitError;
            throw new ApiException<RateLimitError>(429, "Rate Limit Exceeded", body, response.headers);
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
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(404, "Not Found", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimitError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitError", ""
            ) as RateLimitError;
            throw new ApiException<RateLimitError>(429, "Rate Limit Exceeded", body, response.headers);
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
            const body: RateLimitError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitError", ""
            ) as RateLimitError;
            throw new ApiException<RateLimitError>(429, "Rate Limit Exceeded", body, response.headers);
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
            const body: RateLimitError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitError", ""
            ) as RateLimitError;
            throw new ApiException<RateLimitError>(429, "Rate Limit Exceeded", body, response.headers);
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
     * @params response Response returned by the server for a request to getSegments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSegments(response: ResponseContext): Promise<GetSegmentsSuccessResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: GetSegmentsSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetSegmentsSuccessResponse", ""
            ) as GetSegmentsSuccessResponse;
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
            const body: RateLimitError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitError", ""
            ) as RateLimitError;
            throw new ApiException<RateLimitError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetSegmentsSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetSegmentsSuccessResponse", ""
            ) as GetSegmentsSuccessResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getUser(response: ResponseContext): Promise<User > {
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
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(404, "Not Found", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimitError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitError", ""
            ) as RateLimitError;
            throw new ApiException<RateLimitError>(429, "Rate Limit Exceeded", body, response.headers);
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
     * @params response Response returned by the server for a request to transferSubscription
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async transferSubscription(response: ResponseContext): Promise<UserIdentityBody > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserIdentityBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserIdentityBody", ""
            ) as UserIdentityBody;
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
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(409, "Conflict", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimitError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitError", ""
            ) as RateLimitError;
            throw new ApiException<RateLimitError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UserIdentityBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserIdentityBody", ""
            ) as UserIdentityBody;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unsubscribeEmailWithToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async unsubscribeEmailWithToken(response: ResponseContext): Promise<GenericSuccessBoolResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: GenericSuccessBoolResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericSuccessBoolResponse", ""
            ) as GenericSuccessBoolResponse;
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
            const body: RateLimitError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitError", ""
            ) as RateLimitError;
            throw new ApiException<RateLimitError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GenericSuccessBoolResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericSuccessBoolResponse", ""
            ) as GenericSuccessBoolResponse;
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
            const body: RateLimitError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitError", ""
            ) as RateLimitError;
            throw new ApiException<RateLimitError>(429, "Rate Limit Exceeded", body, response.headers);
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
            const body: RateLimitError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitError", ""
            ) as RateLimitError;
            throw new ApiException<RateLimitError>(429, "Rate Limit Exceeded", body, response.headers);
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
     * @params response Response returned by the server for a request to updateSubscription
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateSubscription(response: ResponseContext): Promise<void > {
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
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(404, "Not Found", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: GenericError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenericError", ""
            ) as GenericError;
            throw new ApiException<GenericError>(409, "Conflict", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: RateLimitError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitError", ""
            ) as RateLimitError;
            throw new ApiException<RateLimitError>(429, "Rate Limit Exceeded", body, response.headers);
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
     public async updateUser(response: ResponseContext): Promise<PropertiesBody > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: PropertiesBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PropertiesBody", ""
            ) as PropertiesBody;
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
            const body: RateLimitError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RateLimitError", ""
            ) as RateLimitError;
            throw new ApiException<RateLimitError>(429, "Rate Limit Exceeded", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PropertiesBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PropertiesBody", ""
            ) as PropertiesBody;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
