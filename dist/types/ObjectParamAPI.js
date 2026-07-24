"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectDefaultApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class ObjectDefaultApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    cancelNotification(param, options) {
        return this.api.cancelNotification(param.appId, param.notificationId, options).toPromise();
    }
    copyTemplateToApp(param, options) {
        return this.api.copyTemplateToApp(param.templateId, param.appId, param.copyTemplateRequest, options).toPromise();
    }
    createAlias(param, options) {
        return this.api.createAlias(param.appId, param.aliasLabel, param.aliasId, param.userIdentityBody, options).toPromise();
    }
    createAliasBySubscription(param, options) {
        return this.api.createAliasBySubscription(param.appId, param.subscriptionId, param.userIdentityBody, options).toPromise();
    }
    createApiKey(param, options) {
        return this.api.createApiKey(param.appId, param.createApiKeyRequest, options).toPromise();
    }
    createApp(param, options) {
        return this.api.createApp(param.app, options).toPromise();
    }
    createCustomEvents(param, options) {
        return this.api.createCustomEvents(param.appId, param.customEventsRequest, options).toPromise();
    }
    createNotification(param, options) {
        return this.api.createNotification(param.notification, options).toPromise();
    }
    createSegment(param, options) {
        return this.api.createSegment(param.appId, param.segment, options).toPromise();
    }
    createSubscription(param, options) {
        return this.api.createSubscription(param.appId, param.aliasLabel, param.aliasId, param.subscriptionBody, options).toPromise();
    }
    createTemplate(param, options) {
        return this.api.createTemplate(param.createTemplateRequest, options).toPromise();
    }
    createUser(param, options) {
        return this.api.createUser(param.appId, param.user, options).toPromise();
    }
    deleteAlias(param, options) {
        return this.api.deleteAlias(param.appId, param.aliasLabel, param.aliasId, param.aliasLabelToDelete, options).toPromise();
    }
    deleteApiKey(param, options) {
        return this.api.deleteApiKey(param.appId, param.tokenId, options).toPromise();
    }
    deleteSegment(param, options) {
        return this.api.deleteSegment(param.appId, param.segmentId, options).toPromise();
    }
    deleteSubscription(param, options) {
        return this.api.deleteSubscription(param.appId, param.subscriptionId, options).toPromise();
    }
    deleteTemplate(param, options) {
        return this.api.deleteTemplate(param.templateId, param.appId, options).toPromise();
    }
    deleteUser(param, options) {
        return this.api.deleteUser(param.appId, param.aliasLabel, param.aliasId, options).toPromise();
    }
    exportEvents(param, options) {
        return this.api.exportEvents(param.notificationId, param.appId, options).toPromise();
    }
    exportSubscriptions(param, options) {
        return this.api.exportSubscriptions(param.appId, param.exportSubscriptionsRequestBody, options).toPromise();
    }
    getAliases(param, options) {
        return this.api.getAliases(param.appId, param.aliasLabel, param.aliasId, options).toPromise();
    }
    getAliasesBySubscription(param, options) {
        return this.api.getAliasesBySubscription(param.appId, param.subscriptionId, options).toPromise();
    }
    getApp(param, options) {
        return this.api.getApp(param.appId, options).toPromise();
    }
    getApps(param = {}, options) {
        return this.api.getApps(options).toPromise();
    }
    getNotification(param, options) {
        return this.api.getNotification(param.appId, param.notificationId, options).toPromise();
    }
    getNotificationHistory(param, options) {
        return this.api.getNotificationHistory(param.notificationId, param.getNotificationHistoryRequestBody, options).toPromise();
    }
    getNotifications(param, options) {
        return this.api.getNotifications(param.appId, param.limit, param.offset, param.kind, param.timeOffset, options).toPromise();
    }
    getOutcomes(param, options) {
        return this.api.getOutcomes(param.appId, param.outcomeNames, param.outcomeNames2, param.outcomeTimeRange, param.outcomePlatforms, param.outcomeAttribution, options).toPromise();
    }
    getSegment(param, options) {
        return this.api.getSegment(param.appId, param.segmentId, param.includeSegmentDetail, options).toPromise();
    }
    getSegments(param, options) {
        return this.api.getSegments(param.appId, param.offset, param.limit, options).toPromise();
    }
    getUser(param, options) {
        return this.api.getUser(param.appId, param.aliasLabel, param.aliasId, options).toPromise();
    }
    rotateApiKey(param, options) {
        return this.api.rotateApiKey(param.appId, param.tokenId, options).toPromise();
    }
    startLiveActivity(param, options) {
        return this.api.startLiveActivity(param.appId, param.activityType, param.startLiveActivityRequest, options).toPromise();
    }
    transferSubscription(param, options) {
        return this.api.transferSubscription(param.appId, param.subscriptionId, param.transferSubscriptionRequestBody, options).toPromise();
    }
    unsubscribeEmailWithToken(param, options) {
        return this.api.unsubscribeEmailWithToken(param.appId, param.notificationId, param.token, options).toPromise();
    }
    updateApiKey(param, options) {
        return this.api.updateApiKey(param.appId, param.tokenId, param.updateApiKeyRequest, options).toPromise();
    }
    updateApp(param, options) {
        return this.api.updateApp(param.appId, param.app, options).toPromise();
    }
    updateLiveActivity(param, options) {
        return this.api.updateLiveActivity(param.appId, param.activityId, param.updateLiveActivityRequest, options).toPromise();
    }
    updateSubscription(param, options) {
        return this.api.updateSubscription(param.appId, param.subscriptionId, param.subscriptionBody, options).toPromise();
    }
    updateSubscriptionByToken(param, options) {
        return this.api.updateSubscriptionByToken(param.appId, param.tokenType, param.token, param.subscriptionBody, options).toPromise();
    }
    updateTemplate(param, options) {
        return this.api.updateTemplate(param.templateId, param.appId, param.updateTemplateRequest, options).toPromise();
    }
    updateUser(param, options) {
        return this.api.updateUser(param.appId, param.aliasLabel, param.aliasId, param.updateUserRequest, options).toPromise();
    }
    viewApiKeys(param, options) {
        return this.api.viewApiKeys(param.appId, options).toPromise();
    }
    viewTemplate(param, options) {
        return this.api.viewTemplate(param.templateId, param.appId, options).toPromise();
    }
    viewTemplates(param, options) {
        return this.api.viewTemplates(param.appId, param.limit, param.offset, param.channel, options).toPromise();
    }
}
exports.ObjectDefaultApi = ObjectDefaultApi;
//# sourceMappingURL=ObjectParamAPI.js.map