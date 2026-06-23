"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultApiResponseProcessor = exports.DefaultApiRequestFactory = void 0;
const baseapi_1 = require("./baseapi");
const http_1 = require("../http/http");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("./exception");
const util_1 = require("../util");
class DefaultApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    async cancelNotification(appId, notificationId, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "cancelNotification", "appId");
        }
        if (notificationId === null || notificationId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "cancelNotification", "notificationId");
        }
        const localVarPath = '/notifications/{notification_id}'
            .replace('{' + 'notification_id' + '}', encodeURIComponent(String(notificationId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        if (appId !== undefined) {
            requestContext.setQueryParam("app_id", ObjectSerializer_1.ObjectSerializer.serialize(appId, "string", ""));
        }
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async copyTemplateToApp(templateId, appId, copyTemplateRequest, _options) {
        let _config = _options || this.configuration;
        if (templateId === null || templateId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "copyTemplateToApp", "templateId");
        }
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "copyTemplateToApp", "appId");
        }
        if (copyTemplateRequest === null || copyTemplateRequest === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "copyTemplateToApp", "copyTemplateRequest");
        }
        const localVarPath = '/templates/{template_id}/copy_to_app'
            .replace('{' + 'template_id' + '}', encodeURIComponent(String(templateId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        if (appId !== undefined) {
            requestContext.setQueryParam("app_id", ObjectSerializer_1.ObjectSerializer.serialize(appId, "string", ""));
        }
        const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(copyTemplateRequest, "CopyTemplateRequest", ""), contentType);
        requestContext.setBody(serializedBody);
        let authMethod;
        authMethod = _config.authMethods["organization_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async createAlias(appId, aliasLabel, aliasId, userIdentityBody, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "createAlias", "appId");
        }
        if (aliasLabel === null || aliasLabel === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "createAlias", "aliasLabel");
        }
        if (aliasId === null || aliasId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "createAlias", "aliasId");
        }
        if (userIdentityBody === null || userIdentityBody === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "createAlias", "userIdentityBody");
        }
        const localVarPath = '/apps/{app_id}/users/by/{alias_label}/{alias_id}/identity'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'alias_label' + '}', encodeURIComponent(String(aliasLabel)))
            .replace('{' + 'alias_id' + '}', encodeURIComponent(String(aliasId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(userIdentityBody, "UserIdentityBody", ""), contentType);
        requestContext.setBody(serializedBody);
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async createAliasBySubscription(appId, subscriptionId, userIdentityBody, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "createAliasBySubscription", "appId");
        }
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "createAliasBySubscription", "subscriptionId");
        }
        if (userIdentityBody === null || userIdentityBody === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "createAliasBySubscription", "userIdentityBody");
        }
        const localVarPath = '/apps/{app_id}/subscriptions/{subscription_id}/user/identity'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'subscription_id' + '}', encodeURIComponent(String(subscriptionId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(userIdentityBody, "UserIdentityBody", ""), contentType);
        requestContext.setBody(serializedBody);
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async createApiKey(appId, createApiKeyRequest, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "createApiKey", "appId");
        }
        if (createApiKeyRequest === null || createApiKeyRequest === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "createApiKey", "createApiKeyRequest");
        }
        const localVarPath = '/apps/{app_id}/auth/tokens'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(createApiKeyRequest, "CreateApiKeyRequest", ""), contentType);
        requestContext.setBody(serializedBody);
        let authMethod;
        authMethod = _config.authMethods["organization_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async createApp(app, _options) {
        let _config = _options || this.configuration;
        if (app === null || app === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "createApp", "app");
        }
        const localVarPath = '/apps';
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(app, "App", ""), contentType);
        requestContext.setBody(serializedBody);
        let authMethod;
        authMethod = _config.authMethods["organization_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async createCustomEvents(appId, customEventsRequest, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "createCustomEvents", "appId");
        }
        if (customEventsRequest === null || customEventsRequest === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "createCustomEvents", "customEventsRequest");
        }
        const localVarPath = '/apps/{app_id}/integrations/custom_events'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(customEventsRequest, "CustomEventsRequest", ""), contentType);
        requestContext.setBody(serializedBody);
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async createNotification(notification, _options) {
        let _config = _options || this.configuration;
        if (notification === null || notification === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "createNotification", "notification");
        }
        const localVarPath = '/notifications';
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(notification, "Notification", ""), contentType);
        requestContext.setBody(serializedBody);
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async createSegment(appId, segment, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "createSegment", "appId");
        }
        const localVarPath = '/apps/{app_id}/segments'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(segment, "Segment", ""), contentType);
        requestContext.setBody(serializedBody);
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async createSubscription(appId, aliasLabel, aliasId, subscriptionBody, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "createSubscription", "appId");
        }
        if (aliasLabel === null || aliasLabel === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "createSubscription", "aliasLabel");
        }
        if (aliasId === null || aliasId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "createSubscription", "aliasId");
        }
        if (subscriptionBody === null || subscriptionBody === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "createSubscription", "subscriptionBody");
        }
        const localVarPath = '/apps/{app_id}/users/by/{alias_label}/{alias_id}/subscriptions'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'alias_label' + '}', encodeURIComponent(String(aliasLabel)))
            .replace('{' + 'alias_id' + '}', encodeURIComponent(String(aliasId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(subscriptionBody, "SubscriptionBody", ""), contentType);
        requestContext.setBody(serializedBody);
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async createTemplate(createTemplateRequest, _options) {
        let _config = _options || this.configuration;
        if (createTemplateRequest === null || createTemplateRequest === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "createTemplate", "createTemplateRequest");
        }
        const localVarPath = '/templates';
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(createTemplateRequest, "CreateTemplateRequest", ""), contentType);
        requestContext.setBody(serializedBody);
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async createUser(appId, user, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "createUser", "appId");
        }
        if (user === null || user === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "createUser", "user");
        }
        const localVarPath = '/apps/{app_id}/users'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(user, "User", ""), contentType);
        requestContext.setBody(serializedBody);
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async deleteAlias(appId, aliasLabel, aliasId, aliasLabelToDelete, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "deleteAlias", "appId");
        }
        if (aliasLabel === null || aliasLabel === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "deleteAlias", "aliasLabel");
        }
        if (aliasId === null || aliasId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "deleteAlias", "aliasId");
        }
        if (aliasLabelToDelete === null || aliasLabelToDelete === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "deleteAlias", "aliasLabelToDelete");
        }
        const localVarPath = '/apps/{app_id}/users/by/{alias_label}/{alias_id}/identity/{alias_label_to_delete}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'alias_label' + '}', encodeURIComponent(String(aliasLabel)))
            .replace('{' + 'alias_id' + '}', encodeURIComponent(String(aliasId)))
            .replace('{' + 'alias_label_to_delete' + '}', encodeURIComponent(String(aliasLabelToDelete)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async deleteApiKey(appId, tokenId, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "deleteApiKey", "appId");
        }
        if (tokenId === null || tokenId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "deleteApiKey", "tokenId");
        }
        const localVarPath = '/apps/{app_id}/auth/tokens/{token_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'token_id' + '}', encodeURIComponent(String(tokenId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        let authMethod;
        authMethod = _config.authMethods["organization_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async deleteSegment(appId, segmentId, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "deleteSegment", "appId");
        }
        if (segmentId === null || segmentId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "deleteSegment", "segmentId");
        }
        const localVarPath = '/apps/{app_id}/segments/{segment_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'segment_id' + '}', encodeURIComponent(String(segmentId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async deleteSubscription(appId, subscriptionId, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "deleteSubscription", "appId");
        }
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "deleteSubscription", "subscriptionId");
        }
        const localVarPath = '/apps/{app_id}/subscriptions/{subscription_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'subscription_id' + '}', encodeURIComponent(String(subscriptionId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async deleteTemplate(templateId, appId, _options) {
        let _config = _options || this.configuration;
        if (templateId === null || templateId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "deleteTemplate", "templateId");
        }
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "deleteTemplate", "appId");
        }
        const localVarPath = '/templates/{template_id}'
            .replace('{' + 'template_id' + '}', encodeURIComponent(String(templateId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        if (appId !== undefined) {
            requestContext.setQueryParam("app_id", ObjectSerializer_1.ObjectSerializer.serialize(appId, "string", ""));
        }
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async deleteUser(appId, aliasLabel, aliasId, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "deleteUser", "appId");
        }
        if (aliasLabel === null || aliasLabel === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "deleteUser", "aliasLabel");
        }
        if (aliasId === null || aliasId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "deleteUser", "aliasId");
        }
        const localVarPath = '/apps/{app_id}/users/by/{alias_label}/{alias_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'alias_label' + '}', encodeURIComponent(String(aliasLabel)))
            .replace('{' + 'alias_id' + '}', encodeURIComponent(String(aliasId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async exportEvents(notificationId, appId, _options) {
        let _config = _options || this.configuration;
        if (notificationId === null || notificationId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "exportEvents", "notificationId");
        }
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "exportEvents", "appId");
        }
        const localVarPath = '/notifications/{notification_id}/export_events?app_id={app_id}'
            .replace('{' + 'notification_id' + '}', encodeURIComponent(String(notificationId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        if (appId !== undefined) {
            requestContext.setQueryParam("app_id", ObjectSerializer_1.ObjectSerializer.serialize(appId, "string", ""));
        }
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async exportSubscriptions(appId, exportSubscriptionsRequestBody, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "exportSubscriptions", "appId");
        }
        const localVarPath = '/players/csv_export?app_id={app_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(exportSubscriptionsRequestBody, "ExportSubscriptionsRequestBody", ""), contentType);
        requestContext.setBody(serializedBody);
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async getAliases(appId, aliasLabel, aliasId, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "getAliases", "appId");
        }
        if (aliasLabel === null || aliasLabel === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "getAliases", "aliasLabel");
        }
        if (aliasId === null || aliasId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "getAliases", "aliasId");
        }
        const localVarPath = '/apps/{app_id}/users/by/{alias_label}/{alias_id}/identity'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'alias_label' + '}', encodeURIComponent(String(aliasLabel)))
            .replace('{' + 'alias_id' + '}', encodeURIComponent(String(aliasId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async getAliasesBySubscription(appId, subscriptionId, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "getAliasesBySubscription", "appId");
        }
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "getAliasesBySubscription", "subscriptionId");
        }
        const localVarPath = '/apps/{app_id}/subscriptions/{subscription_id}/user/identity'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'subscription_id' + '}', encodeURIComponent(String(subscriptionId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async getApp(appId, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "getApp", "appId");
        }
        const localVarPath = '/apps/{app_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        let authMethod;
        authMethod = _config.authMethods["organization_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async getApps(_options) {
        let _config = _options || this.configuration;
        const localVarPath = '/apps';
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        let authMethod;
        authMethod = _config.authMethods["organization_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async getNotification(appId, notificationId, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "getNotification", "appId");
        }
        if (notificationId === null || notificationId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "getNotification", "notificationId");
        }
        const localVarPath = '/notifications/{notification_id}'
            .replace('{' + 'notification_id' + '}', encodeURIComponent(String(notificationId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        if (appId !== undefined) {
            requestContext.setQueryParam("app_id", ObjectSerializer_1.ObjectSerializer.serialize(appId, "string", ""));
        }
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async getNotificationHistory(notificationId, getNotificationHistoryRequestBody, _options) {
        let _config = _options || this.configuration;
        if (notificationId === null || notificationId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "getNotificationHistory", "notificationId");
        }
        if (getNotificationHistoryRequestBody === null || getNotificationHistoryRequestBody === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "getNotificationHistory", "getNotificationHistoryRequestBody");
        }
        const localVarPath = '/notifications/{notification_id}/history'
            .replace('{' + 'notification_id' + '}', encodeURIComponent(String(notificationId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(getNotificationHistoryRequestBody, "GetNotificationHistoryRequestBody", ""), contentType);
        requestContext.setBody(serializedBody);
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async getNotifications(appId, limit, offset, kind, timeOffset, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "getNotifications", "appId");
        }
        const localVarPath = '/notifications';
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        if (appId !== undefined) {
            requestContext.setQueryParam("app_id", ObjectSerializer_1.ObjectSerializer.serialize(appId, "string", ""));
        }
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", ""));
        }
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer_1.ObjectSerializer.serialize(offset, "number", ""));
        }
        if (kind !== undefined) {
            requestContext.setQueryParam("kind", ObjectSerializer_1.ObjectSerializer.serialize(kind, "0 | 1 | 3", ""));
        }
        if (timeOffset !== undefined) {
            requestContext.setQueryParam("time_offset", ObjectSerializer_1.ObjectSerializer.serialize(timeOffset, "string", ""));
        }
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async getOutcomes(appId, outcomeNames, outcomeNames2, outcomeTimeRange, outcomePlatforms, outcomeAttribution, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "getOutcomes", "appId");
        }
        if (outcomeNames === null || outcomeNames === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "getOutcomes", "outcomeNames");
        }
        const localVarPath = '/apps/{app_id}/outcomes'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        if (outcomeNames !== undefined) {
            requestContext.setQueryParam("outcome_names", ObjectSerializer_1.ObjectSerializer.serialize(outcomeNames, "string", ""));
        }
        if (outcomeNames2 !== undefined) {
            requestContext.setQueryParam("outcome_names[]", ObjectSerializer_1.ObjectSerializer.serialize(outcomeNames2, "string", ""));
        }
        if (outcomeTimeRange !== undefined) {
            requestContext.setQueryParam("outcome_time_range", ObjectSerializer_1.ObjectSerializer.serialize(outcomeTimeRange, "string", ""));
        }
        if (outcomePlatforms !== undefined) {
            requestContext.setQueryParam("outcome_platforms", ObjectSerializer_1.ObjectSerializer.serialize(outcomePlatforms, "string", ""));
        }
        if (outcomeAttribution !== undefined) {
            requestContext.setQueryParam("outcome_attribution", ObjectSerializer_1.ObjectSerializer.serialize(outcomeAttribution, "string", ""));
        }
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async getSegments(appId, offset, limit, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "getSegments", "appId");
        }
        const localVarPath = '/apps/{app_id}/segments'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer_1.ObjectSerializer.serialize(offset, "number", ""));
        }
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", ""));
        }
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async getUser(appId, aliasLabel, aliasId, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "getUser", "appId");
        }
        if (aliasLabel === null || aliasLabel === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "getUser", "aliasLabel");
        }
        if (aliasId === null || aliasId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "getUser", "aliasId");
        }
        const localVarPath = '/apps/{app_id}/users/by/{alias_label}/{alias_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'alias_label' + '}', encodeURIComponent(String(aliasLabel)))
            .replace('{' + 'alias_id' + '}', encodeURIComponent(String(aliasId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async rotateApiKey(appId, tokenId, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "rotateApiKey", "appId");
        }
        if (tokenId === null || tokenId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "rotateApiKey", "tokenId");
        }
        const localVarPath = '/apps/{app_id}/auth/tokens/{token_id}/rotate'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'token_id' + '}', encodeURIComponent(String(tokenId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        let authMethod;
        authMethod = _config.authMethods["organization_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async startLiveActivity(appId, activityType, startLiveActivityRequest, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "startLiveActivity", "appId");
        }
        if (activityType === null || activityType === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "startLiveActivity", "activityType");
        }
        if (startLiveActivityRequest === null || startLiveActivityRequest === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "startLiveActivity", "startLiveActivityRequest");
        }
        const localVarPath = '/apps/{app_id}/activities/activity/{activity_type}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'activity_type' + '}', encodeURIComponent(String(activityType)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(startLiveActivityRequest, "StartLiveActivityRequest", ""), contentType);
        requestContext.setBody(serializedBody);
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async transferSubscription(appId, subscriptionId, transferSubscriptionRequestBody, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "transferSubscription", "appId");
        }
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "transferSubscription", "subscriptionId");
        }
        if (transferSubscriptionRequestBody === null || transferSubscriptionRequestBody === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "transferSubscription", "transferSubscriptionRequestBody");
        }
        const localVarPath = '/apps/{app_id}/subscriptions/{subscription_id}/owner'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'subscription_id' + '}', encodeURIComponent(String(subscriptionId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(transferSubscriptionRequestBody, "TransferSubscriptionRequestBody", ""), contentType);
        requestContext.setBody(serializedBody);
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async unsubscribeEmailWithToken(appId, notificationId, token, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "unsubscribeEmailWithToken", "appId");
        }
        if (notificationId === null || notificationId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "unsubscribeEmailWithToken", "notificationId");
        }
        if (token === null || token === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "unsubscribeEmailWithToken", "token");
        }
        const localVarPath = '/apps/{app_id}/notifications/{notification_id}/unsubscribe'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'notification_id' + '}', encodeURIComponent(String(notificationId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        if (token !== undefined) {
            requestContext.setQueryParam("token", ObjectSerializer_1.ObjectSerializer.serialize(token, "string", ""));
        }
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async updateApiKey(appId, tokenId, updateApiKeyRequest, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "updateApiKey", "appId");
        }
        if (tokenId === null || tokenId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "updateApiKey", "tokenId");
        }
        if (updateApiKeyRequest === null || updateApiKeyRequest === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "updateApiKey", "updateApiKeyRequest");
        }
        const localVarPath = '/apps/{app_id}/auth/tokens/{token_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'token_id' + '}', encodeURIComponent(String(tokenId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(updateApiKeyRequest, "UpdateApiKeyRequest", ""), contentType);
        requestContext.setBody(serializedBody);
        let authMethod;
        authMethod = _config.authMethods["organization_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async updateApp(appId, app, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "updateApp", "appId");
        }
        if (app === null || app === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "updateApp", "app");
        }
        const localVarPath = '/apps/{app_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(app, "App", ""), contentType);
        requestContext.setBody(serializedBody);
        let authMethod;
        authMethod = _config.authMethods["organization_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async updateLiveActivity(appId, activityId, updateLiveActivityRequest, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "updateLiveActivity", "appId");
        }
        if (activityId === null || activityId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "updateLiveActivity", "activityId");
        }
        if (updateLiveActivityRequest === null || updateLiveActivityRequest === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "updateLiveActivity", "updateLiveActivityRequest");
        }
        const localVarPath = '/apps/{app_id}/live_activities/{activity_id}/notifications'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'activity_id' + '}', encodeURIComponent(String(activityId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(updateLiveActivityRequest, "UpdateLiveActivityRequest", ""), contentType);
        requestContext.setBody(serializedBody);
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async updateSubscription(appId, subscriptionId, subscriptionBody, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "updateSubscription", "appId");
        }
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "updateSubscription", "subscriptionId");
        }
        if (subscriptionBody === null || subscriptionBody === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "updateSubscription", "subscriptionBody");
        }
        const localVarPath = '/apps/{app_id}/subscriptions/{subscription_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'subscription_id' + '}', encodeURIComponent(String(subscriptionId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(subscriptionBody, "SubscriptionBody", ""), contentType);
        requestContext.setBody(serializedBody);
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async updateSubscriptionByToken(appId, tokenType, token, subscriptionBody, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "updateSubscriptionByToken", "appId");
        }
        if (tokenType === null || tokenType === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "updateSubscriptionByToken", "tokenType");
        }
        if (token === null || token === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "updateSubscriptionByToken", "token");
        }
        if (subscriptionBody === null || subscriptionBody === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "updateSubscriptionByToken", "subscriptionBody");
        }
        const localVarPath = '/apps/{app_id}/subscriptions_by_token/{token_type}/{token}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'token_type' + '}', encodeURIComponent(String(tokenType)))
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(subscriptionBody, "SubscriptionBody", ""), contentType);
        requestContext.setBody(serializedBody);
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async updateTemplate(templateId, appId, updateTemplateRequest, _options) {
        let _config = _options || this.configuration;
        if (templateId === null || templateId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "updateTemplate", "templateId");
        }
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "updateTemplate", "appId");
        }
        if (updateTemplateRequest === null || updateTemplateRequest === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "updateTemplate", "updateTemplateRequest");
        }
        const localVarPath = '/templates/{template_id}'
            .replace('{' + 'template_id' + '}', encodeURIComponent(String(templateId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        if (appId !== undefined) {
            requestContext.setQueryParam("app_id", ObjectSerializer_1.ObjectSerializer.serialize(appId, "string", ""));
        }
        const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(updateTemplateRequest, "UpdateTemplateRequest", ""), contentType);
        requestContext.setBody(serializedBody);
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async updateUser(appId, aliasLabel, aliasId, updateUserRequest, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "updateUser", "appId");
        }
        if (aliasLabel === null || aliasLabel === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "updateUser", "aliasLabel");
        }
        if (aliasId === null || aliasId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "updateUser", "aliasId");
        }
        if (updateUserRequest === null || updateUserRequest === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "updateUser", "updateUserRequest");
        }
        const localVarPath = '/apps/{app_id}/users/by/{alias_label}/{alias_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'alias_label' + '}', encodeURIComponent(String(aliasLabel)))
            .replace('{' + 'alias_id' + '}', encodeURIComponent(String(aliasId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(updateUserRequest, "UpdateUserRequest", ""), contentType);
        requestContext.setBody(serializedBody);
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async viewApiKeys(appId, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "viewApiKeys", "appId");
        }
        const localVarPath = '/apps/{app_id}/auth/tokens'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        let authMethod;
        authMethod = _config.authMethods["organization_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async viewTemplate(templateId, appId, _options) {
        let _config = _options || this.configuration;
        if (templateId === null || templateId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "viewTemplate", "templateId");
        }
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "viewTemplate", "appId");
        }
        const localVarPath = '/templates/{template_id}'
            .replace('{' + 'template_id' + '}', encodeURIComponent(String(templateId)));
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        if (appId !== undefined) {
            requestContext.setQueryParam("app_id", ObjectSerializer_1.ObjectSerializer.serialize(appId, "string", ""));
        }
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
    async viewTemplates(appId, limit, offset, channel, _options) {
        let _config = _options || this.configuration;
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError("DefaultApi", "viewTemplates", "appId");
        }
        const localVarPath = '/templates';
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        requestContext.setHeaderParam("OS-Usage-Data", "kind=sdk, sdk-name=onesignal-typescript, version=5.8.0");
        if (appId !== undefined) {
            requestContext.setQueryParam("app_id", ObjectSerializer_1.ObjectSerializer.serialize(appId, "string", ""));
        }
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", ""));
        }
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer_1.ObjectSerializer.serialize(offset, "number", ""));
        }
        if (channel !== undefined) {
            requestContext.setQueryParam("channel", ObjectSerializer_1.ObjectSerializer.serialize(channel, "'push' | 'email' | 'sms'", ""));
        }
        let authMethod;
        authMethod = _config.authMethods["rest_api_key"];
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    }
}
exports.DefaultApiRequestFactory = DefaultApiRequestFactory;
class DefaultApiResponseProcessor {
    async cancelNotification(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericSuccessBoolResponse", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(404, "Not Found", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericSuccessBoolResponse", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async copyTemplateToApp(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "TemplateResource", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "TemplateResource", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async createAlias(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "UserIdentityBody", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(404, "Not Found", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(409, "Conflict", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "UserIdentityBody", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async createAliasBySubscription(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "UserIdentityBody", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(404, "Not Found", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(409, "Conflict", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "UserIdentityBody", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async createApiKey(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "CreateApiKeyResponse", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "CreateApiKeyResponse", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async createApp(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "App", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "App", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async createCustomEvents(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "object", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(401, "Unauthorized", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "object", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async createNotification(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "CreateNotificationSuccessResponse", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "CreateNotificationSuccessResponse", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async createSegment(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("201", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "CreateSegmentSuccessResponse", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "CreateSegmentConflictResponse", "");
            throw new exception_1.ApiException(409, "Conflict", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "CreateSegmentSuccessResponse", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async createSubscription(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("201", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "SubscriptionBody", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("202", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "SubscriptionBody", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(404, "Not Found", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(409, "Operation is not permitted due to user having the maximum number of subscriptions assigned", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "SubscriptionBody", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async createTemplate(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "TemplateResource", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("422", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(422, "Unprocessable Entity", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "TemplateResource", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async createUser(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "User", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("201", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "User", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("202", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "User", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "CreateUserConflictResponse", "");
            throw new exception_1.ApiException(409, "Multiple User Identity Conflict", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "User", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async deleteAlias(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "UserIdentityBody", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(404, "Not Found", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(409, "Conflict", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "UserIdentityBody", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async deleteApiKey(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "object", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "object", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async deleteSegment(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericSuccessBoolResponse", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericSuccessBoolResponse", "");
            throw new exception_1.ApiException(404, "Not Found", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericSuccessBoolResponse", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async deleteSubscription(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("202", response.httpStatusCode)) {
            return;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(404, "Not Found", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(409, "Conflict", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "void", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async deleteTemplate(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericSuccessBoolResponse", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(404, "Not Found", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericSuccessBoolResponse", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async deleteUser(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            return;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(409, "Conflict", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "void", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async exportEvents(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "ExportEventsSuccessResponse", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(404, "Not Found", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "ExportEventsSuccessResponse", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async exportSubscriptions(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "ExportSubscriptionsSuccessResponse", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "ExportSubscriptionsSuccessResponse", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async getAliases(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "UserIdentityBody", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(404, "Not Found", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "UserIdentityBody", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async getAliasesBySubscription(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "UserIdentityBody", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(404, "Not Found", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "UserIdentityBody", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async getApp(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "App", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "App", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async getApps(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "Array<App>", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "Array<App>", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async getNotification(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "NotificationWithMeta", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(404, "Not Found", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "NotificationWithMeta", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async getNotificationHistory(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "NotificationHistorySuccessResponse", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(404, "Not Found", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "NotificationHistorySuccessResponse", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async getNotifications(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "NotificationSlice", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "NotificationSlice", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async getOutcomes(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "OutcomesData", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "OutcomesData", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async getSegments(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("201", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GetSegmentsSuccessResponse", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GetSegmentsSuccessResponse", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async getUser(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "User", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(404, "Not Found", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "User", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async rotateApiKey(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "CreateApiKeyResponse", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "CreateApiKeyResponse", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async startLiveActivity(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("201", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "StartLiveActivitySuccessResponse", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "StartLiveActivitySuccessResponse", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async transferSubscription(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "UserIdentityBody", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(404, "Not Found", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(409, "Conflict", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "UserIdentityBody", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async unsubscribeEmailWithToken(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("202", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericSuccessBoolResponse", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericSuccessBoolResponse", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async updateApiKey(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "object", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "object", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async updateApp(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "App", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "App", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async updateLiveActivity(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "UpdateLiveActivitySuccessResponse", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "UpdateLiveActivitySuccessResponse", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async updateSubscription(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            return;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(404, "Not Found", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(409, "Conflict", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "void", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async updateSubscriptionByToken(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("202", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "object", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(404, "Not Found", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "object", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async updateTemplate(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "TemplateResource", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "TemplateResource", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async updateUser(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("202", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "PropertiesBody", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("409", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(409, "Conflict", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "PropertiesBody", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async viewApiKeys(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "ApiKeyTokensListResponse", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "ApiKeyTokensListResponse", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async viewTemplate(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "TemplateResource", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("404", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(404, "Not Found", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "TemplateResource", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    async viewTemplates(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "TemplatesListResponse", "");
            return body;
        }
        if ((0, util_1.isCodeInRange)("400", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(400, "Bad Request", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("429", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "RateLimitError", "");
            throw new exception_1.ApiException(429, "Rate Limit Exceeded", body, response.headers);
        }
        if ((0, util_1.isCodeInRange)("0", response.httpStatusCode) && response.httpStatusCode >= 300) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "GenericError", "");
            throw new exception_1.ApiException(response.httpStatusCode, "Unexpected error", body, response.headers);
        }
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "TemplatesListResponse", "");
            return body;
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
}
exports.DefaultApiResponseProcessor = DefaultApiResponseProcessor;
//# sourceMappingURL=DefaultApi.js.map