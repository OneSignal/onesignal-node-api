"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseDefaultApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var PromiseDefaultApi = (function () {
    function PromiseDefaultApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    PromiseDefaultApi.prototype.cancelNotification = function (appId, notificationId, _options) {
        var result = this.api.cancelNotification(appId, notificationId, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.copyTemplateToApp = function (templateId, appId, copyTemplateRequest, _options) {
        var result = this.api.copyTemplateToApp(templateId, appId, copyTemplateRequest, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.createAlias = function (appId, aliasLabel, aliasId, userIdentityBody, _options) {
        var result = this.api.createAlias(appId, aliasLabel, aliasId, userIdentityBody, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.createAliasBySubscription = function (appId, subscriptionId, userIdentityBody, _options) {
        var result = this.api.createAliasBySubscription(appId, subscriptionId, userIdentityBody, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.createApiKey = function (appId, createApiKeyRequest, _options) {
        var result = this.api.createApiKey(appId, createApiKeyRequest, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.createApp = function (app, _options) {
        var result = this.api.createApp(app, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.createCustomEvents = function (appId, customEventsRequest, _options) {
        var result = this.api.createCustomEvents(appId, customEventsRequest, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.createNotification = function (notification, _options) {
        var result = this.api.createNotification(notification, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.createSegment = function (appId, segment, _options) {
        var result = this.api.createSegment(appId, segment, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.createSubscription = function (appId, aliasLabel, aliasId, subscriptionBody, _options) {
        var result = this.api.createSubscription(appId, aliasLabel, aliasId, subscriptionBody, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.createTemplate = function (createTemplateRequest, _options) {
        var result = this.api.createTemplate(createTemplateRequest, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.createUser = function (appId, user, _options) {
        var result = this.api.createUser(appId, user, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.deleteAlias = function (appId, aliasLabel, aliasId, aliasLabelToDelete, _options) {
        var result = this.api.deleteAlias(appId, aliasLabel, aliasId, aliasLabelToDelete, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.deleteApiKey = function (appId, tokenId, _options) {
        var result = this.api.deleteApiKey(appId, tokenId, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.deleteSegment = function (appId, segmentId, _options) {
        var result = this.api.deleteSegment(appId, segmentId, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.deleteSubscription = function (appId, subscriptionId, _options) {
        var result = this.api.deleteSubscription(appId, subscriptionId, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.deleteTemplate = function (templateId, appId, _options) {
        var result = this.api.deleteTemplate(templateId, appId, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.deleteUser = function (appId, aliasLabel, aliasId, _options) {
        var result = this.api.deleteUser(appId, aliasLabel, aliasId, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.exportEvents = function (notificationId, appId, _options) {
        var result = this.api.exportEvents(notificationId, appId, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.exportSubscriptions = function (appId, exportSubscriptionsRequestBody, _options) {
        var result = this.api.exportSubscriptions(appId, exportSubscriptionsRequestBody, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.getAliases = function (appId, aliasLabel, aliasId, _options) {
        var result = this.api.getAliases(appId, aliasLabel, aliasId, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.getAliasesBySubscription = function (appId, subscriptionId, _options) {
        var result = this.api.getAliasesBySubscription(appId, subscriptionId, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.getApp = function (appId, _options) {
        var result = this.api.getApp(appId, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.getApps = function (_options) {
        var result = this.api.getApps(_options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.getNotification = function (appId, notificationId, _options) {
        var result = this.api.getNotification(appId, notificationId, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.getNotificationHistory = function (notificationId, getNotificationHistoryRequestBody, _options) {
        var result = this.api.getNotificationHistory(notificationId, getNotificationHistoryRequestBody, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.getNotifications = function (appId, limit, offset, kind, _options) {
        var result = this.api.getNotifications(appId, limit, offset, kind, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.getOutcomes = function (appId, outcomeNames, outcomeNames2, outcomeTimeRange, outcomePlatforms, outcomeAttribution, _options) {
        var result = this.api.getOutcomes(appId, outcomeNames, outcomeNames2, outcomeTimeRange, outcomePlatforms, outcomeAttribution, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.getSegments = function (appId, offset, limit, _options) {
        var result = this.api.getSegments(appId, offset, limit, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.getUser = function (appId, aliasLabel, aliasId, _options) {
        var result = this.api.getUser(appId, aliasLabel, aliasId, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.rotateApiKey = function (appId, tokenId, _options) {
        var result = this.api.rotateApiKey(appId, tokenId, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.startLiveActivity = function (appId, activityType, startLiveActivityRequest, _options) {
        var result = this.api.startLiveActivity(appId, activityType, startLiveActivityRequest, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.transferSubscription = function (appId, subscriptionId, transferSubscriptionRequestBody, _options) {
        var result = this.api.transferSubscription(appId, subscriptionId, transferSubscriptionRequestBody, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.unsubscribeEmailWithToken = function (appId, notificationId, token, _options) {
        var result = this.api.unsubscribeEmailWithToken(appId, notificationId, token, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.updateApiKey = function (appId, tokenId, updateApiKeyRequest, _options) {
        var result = this.api.updateApiKey(appId, tokenId, updateApiKeyRequest, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.updateApp = function (appId, app, _options) {
        var result = this.api.updateApp(appId, app, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.updateLiveActivity = function (appId, activityId, updateLiveActivityRequest, _options) {
        var result = this.api.updateLiveActivity(appId, activityId, updateLiveActivityRequest, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.updateSubscription = function (appId, subscriptionId, subscriptionBody, _options) {
        var result = this.api.updateSubscription(appId, subscriptionId, subscriptionBody, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.updateSubscriptionByToken = function (appId, tokenType, token, subscriptionBody, _options) {
        var result = this.api.updateSubscriptionByToken(appId, tokenType, token, subscriptionBody, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.updateTemplate = function (templateId, appId, updateTemplateRequest, _options) {
        var result = this.api.updateTemplate(templateId, appId, updateTemplateRequest, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.updateUser = function (appId, aliasLabel, aliasId, updateUserRequest, _options) {
        var result = this.api.updateUser(appId, aliasLabel, aliasId, updateUserRequest, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.viewApiKeys = function (appId, _options) {
        var result = this.api.viewApiKeys(appId, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.viewTemplate = function (templateId, appId, _options) {
        var result = this.api.viewTemplate(templateId, appId, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.viewTemplates = function (appId, limit, offset, channel, _options) {
        var result = this.api.viewTemplates(appId, limit, offset, channel, _options);
        return result.toPromise();
    };
    return PromiseDefaultApi;
}());
exports.PromiseDefaultApi = PromiseDefaultApi;
//# sourceMappingURL=PromiseAPI.js.map