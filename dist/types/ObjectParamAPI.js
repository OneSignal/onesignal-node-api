"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectDefaultApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var ObjectDefaultApi = (function () {
    function ObjectDefaultApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    ObjectDefaultApi.prototype.cancelNotification = function (param, options) {
        return this.api.cancelNotification(param.appId, param.notificationId, options).toPromise();
    };
    ObjectDefaultApi.prototype.copyTemplateToApp = function (param, options) {
        return this.api.copyTemplateToApp(param.templateId, param.appId, param.copyTemplateRequest, options).toPromise();
    };
    ObjectDefaultApi.prototype.createAlias = function (param, options) {
        return this.api.createAlias(param.appId, param.aliasLabel, param.aliasId, param.userIdentityBody, options).toPromise();
    };
    ObjectDefaultApi.prototype.createAliasBySubscription = function (param, options) {
        return this.api.createAliasBySubscription(param.appId, param.subscriptionId, param.userIdentityBody, options).toPromise();
    };
    ObjectDefaultApi.prototype.createApiKey = function (param, options) {
        return this.api.createApiKey(param.appId, param.createApiKeyRequest, options).toPromise();
    };
    ObjectDefaultApi.prototype.createApp = function (param, options) {
        return this.api.createApp(param.app, options).toPromise();
    };
    ObjectDefaultApi.prototype.createCustomEvents = function (param, options) {
        return this.api.createCustomEvents(param.appId, param.customEventsRequest, options).toPromise();
    };
    ObjectDefaultApi.prototype.createNotification = function (param, options) {
        return this.api.createNotification(param.notification, options).toPromise();
    };
    ObjectDefaultApi.prototype.createSegment = function (param, options) {
        return this.api.createSegment(param.appId, param.segment, options).toPromise();
    };
    ObjectDefaultApi.prototype.createSubscription = function (param, options) {
        return this.api.createSubscription(param.appId, param.aliasLabel, param.aliasId, param.subscriptionBody, options).toPromise();
    };
    ObjectDefaultApi.prototype.createTemplate = function (param, options) {
        return this.api.createTemplate(param.createTemplateRequest, options).toPromise();
    };
    ObjectDefaultApi.prototype.createUser = function (param, options) {
        return this.api.createUser(param.appId, param.user, options).toPromise();
    };
    ObjectDefaultApi.prototype.deleteAlias = function (param, options) {
        return this.api.deleteAlias(param.appId, param.aliasLabel, param.aliasId, param.aliasLabelToDelete, options).toPromise();
    };
    ObjectDefaultApi.prototype.deleteApiKey = function (param, options) {
        return this.api.deleteApiKey(param.appId, param.tokenId, options).toPromise();
    };
    ObjectDefaultApi.prototype.deleteSegment = function (param, options) {
        return this.api.deleteSegment(param.appId, param.segmentId, options).toPromise();
    };
    ObjectDefaultApi.prototype.deleteSubscription = function (param, options) {
        return this.api.deleteSubscription(param.appId, param.subscriptionId, options).toPromise();
    };
    ObjectDefaultApi.prototype.deleteTemplate = function (param, options) {
        return this.api.deleteTemplate(param.templateId, param.appId, options).toPromise();
    };
    ObjectDefaultApi.prototype.deleteUser = function (param, options) {
        return this.api.deleteUser(param.appId, param.aliasLabel, param.aliasId, options).toPromise();
    };
    ObjectDefaultApi.prototype.exportEvents = function (param, options) {
        return this.api.exportEvents(param.notificationId, param.appId, options).toPromise();
    };
    ObjectDefaultApi.prototype.exportSubscriptions = function (param, options) {
        return this.api.exportSubscriptions(param.appId, param.exportSubscriptionsRequestBody, options).toPromise();
    };
    ObjectDefaultApi.prototype.getAliases = function (param, options) {
        return this.api.getAliases(param.appId, param.aliasLabel, param.aliasId, options).toPromise();
    };
    ObjectDefaultApi.prototype.getAliasesBySubscription = function (param, options) {
        return this.api.getAliasesBySubscription(param.appId, param.subscriptionId, options).toPromise();
    };
    ObjectDefaultApi.prototype.getApp = function (param, options) {
        return this.api.getApp(param.appId, options).toPromise();
    };
    ObjectDefaultApi.prototype.getApps = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getApps(options).toPromise();
    };
    ObjectDefaultApi.prototype.getNotification = function (param, options) {
        return this.api.getNotification(param.appId, param.notificationId, options).toPromise();
    };
    ObjectDefaultApi.prototype.getNotificationHistory = function (param, options) {
        return this.api.getNotificationHistory(param.notificationId, param.getNotificationHistoryRequestBody, options).toPromise();
    };
    ObjectDefaultApi.prototype.getNotifications = function (param, options) {
        return this.api.getNotifications(param.appId, param.limit, param.offset, param.kind, options).toPromise();
    };
    ObjectDefaultApi.prototype.getOutcomes = function (param, options) {
        return this.api.getOutcomes(param.appId, param.outcomeNames, param.outcomeNames2, param.outcomeTimeRange, param.outcomePlatforms, param.outcomeAttribution, options).toPromise();
    };
    ObjectDefaultApi.prototype.getSegments = function (param, options) {
        return this.api.getSegments(param.appId, param.offset, param.limit, options).toPromise();
    };
    ObjectDefaultApi.prototype.getUser = function (param, options) {
        return this.api.getUser(param.appId, param.aliasLabel, param.aliasId, options).toPromise();
    };
    ObjectDefaultApi.prototype.rotateApiKey = function (param, options) {
        return this.api.rotateApiKey(param.appId, param.tokenId, options).toPromise();
    };
    ObjectDefaultApi.prototype.startLiveActivity = function (param, options) {
        return this.api.startLiveActivity(param.appId, param.activityType, param.startLiveActivityRequest, options).toPromise();
    };
    ObjectDefaultApi.prototype.transferSubscription = function (param, options) {
        return this.api.transferSubscription(param.appId, param.subscriptionId, param.transferSubscriptionRequestBody, options).toPromise();
    };
    ObjectDefaultApi.prototype.unsubscribeEmailWithToken = function (param, options) {
        return this.api.unsubscribeEmailWithToken(param.appId, param.notificationId, param.token, options).toPromise();
    };
    ObjectDefaultApi.prototype.updateApiKey = function (param, options) {
        return this.api.updateApiKey(param.appId, param.tokenId, param.updateApiKeyRequest, options).toPromise();
    };
    ObjectDefaultApi.prototype.updateApp = function (param, options) {
        return this.api.updateApp(param.appId, param.app, options).toPromise();
    };
    ObjectDefaultApi.prototype.updateLiveActivity = function (param, options) {
        return this.api.updateLiveActivity(param.appId, param.activityId, param.updateLiveActivityRequest, options).toPromise();
    };
    ObjectDefaultApi.prototype.updateSubscription = function (param, options) {
        return this.api.updateSubscription(param.appId, param.subscriptionId, param.subscriptionBody, options).toPromise();
    };
    ObjectDefaultApi.prototype.updateSubscriptionByToken = function (param, options) {
        return this.api.updateSubscriptionByToken(param.appId, param.tokenType, param.token, param.subscriptionBody, options).toPromise();
    };
    ObjectDefaultApi.prototype.updateTemplate = function (param, options) {
        return this.api.updateTemplate(param.templateId, param.appId, param.updateTemplateRequest, options).toPromise();
    };
    ObjectDefaultApi.prototype.updateUser = function (param, options) {
        return this.api.updateUser(param.appId, param.aliasLabel, param.aliasId, param.updateUserRequest, options).toPromise();
    };
    ObjectDefaultApi.prototype.viewApiKeys = function (param, options) {
        return this.api.viewApiKeys(param.appId, options).toPromise();
    };
    ObjectDefaultApi.prototype.viewTemplate = function (param, options) {
        return this.api.viewTemplate(param.templateId, param.appId, options).toPromise();
    };
    ObjectDefaultApi.prototype.viewTemplates = function (param, options) {
        return this.api.viewTemplates(param.appId, param.limit, param.offset, param.channel, options).toPromise();
    };
    return ObjectDefaultApi;
}());
exports.ObjectDefaultApi = ObjectDefaultApi;
//# sourceMappingURL=ObjectParamAPI.js.map