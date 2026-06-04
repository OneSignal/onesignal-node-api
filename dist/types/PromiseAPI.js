"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseDefaultApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class PromiseDefaultApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    cancelNotification(appId, notificationId, _options) {
        const result = this.api.cancelNotification(appId, notificationId, _options);
        return result.toPromise();
    }
    copyTemplateToApp(templateId, appId, copyTemplateRequest, _options) {
        const result = this.api.copyTemplateToApp(templateId, appId, copyTemplateRequest, _options);
        return result.toPromise();
    }
    createAlias(appId, aliasLabel, aliasId, userIdentityBody, _options) {
        const result = this.api.createAlias(appId, aliasLabel, aliasId, userIdentityBody, _options);
        return result.toPromise();
    }
    createAliasBySubscription(appId, subscriptionId, userIdentityBody, _options) {
        const result = this.api.createAliasBySubscription(appId, subscriptionId, userIdentityBody, _options);
        return result.toPromise();
    }
    createApiKey(appId, createApiKeyRequest, _options) {
        const result = this.api.createApiKey(appId, createApiKeyRequest, _options);
        return result.toPromise();
    }
    createApp(app, _options) {
        const result = this.api.createApp(app, _options);
        return result.toPromise();
    }
    createCustomEvents(appId, customEventsRequest, _options) {
        const result = this.api.createCustomEvents(appId, customEventsRequest, _options);
        return result.toPromise();
    }
    createNotification(notification, _options) {
        const result = this.api.createNotification(notification, _options);
        return result.toPromise();
    }
    createSegment(appId, segment, _options) {
        const result = this.api.createSegment(appId, segment, _options);
        return result.toPromise();
    }
    createSubscription(appId, aliasLabel, aliasId, subscriptionBody, _options) {
        const result = this.api.createSubscription(appId, aliasLabel, aliasId, subscriptionBody, _options);
        return result.toPromise();
    }
    createTemplate(createTemplateRequest, _options) {
        const result = this.api.createTemplate(createTemplateRequest, _options);
        return result.toPromise();
    }
    createUser(appId, user, _options) {
        const result = this.api.createUser(appId, user, _options);
        return result.toPromise();
    }
    deleteAlias(appId, aliasLabel, aliasId, aliasLabelToDelete, _options) {
        const result = this.api.deleteAlias(appId, aliasLabel, aliasId, aliasLabelToDelete, _options);
        return result.toPromise();
    }
    deleteApiKey(appId, tokenId, _options) {
        const result = this.api.deleteApiKey(appId, tokenId, _options);
        return result.toPromise();
    }
    deleteSegment(appId, segmentId, _options) {
        const result = this.api.deleteSegment(appId, segmentId, _options);
        return result.toPromise();
    }
    deleteSubscription(appId, subscriptionId, _options) {
        const result = this.api.deleteSubscription(appId, subscriptionId, _options);
        return result.toPromise();
    }
    deleteTemplate(templateId, appId, _options) {
        const result = this.api.deleteTemplate(templateId, appId, _options);
        return result.toPromise();
    }
    deleteUser(appId, aliasLabel, aliasId, _options) {
        const result = this.api.deleteUser(appId, aliasLabel, aliasId, _options);
        return result.toPromise();
    }
    exportEvents(notificationId, appId, _options) {
        const result = this.api.exportEvents(notificationId, appId, _options);
        return result.toPromise();
    }
    exportSubscriptions(appId, exportSubscriptionsRequestBody, _options) {
        const result = this.api.exportSubscriptions(appId, exportSubscriptionsRequestBody, _options);
        return result.toPromise();
    }
    getAliases(appId, aliasLabel, aliasId, _options) {
        const result = this.api.getAliases(appId, aliasLabel, aliasId, _options);
        return result.toPromise();
    }
    getAliasesBySubscription(appId, subscriptionId, _options) {
        const result = this.api.getAliasesBySubscription(appId, subscriptionId, _options);
        return result.toPromise();
    }
    getApp(appId, _options) {
        const result = this.api.getApp(appId, _options);
        return result.toPromise();
    }
    getApps(_options) {
        const result = this.api.getApps(_options);
        return result.toPromise();
    }
    getNotification(appId, notificationId, _options) {
        const result = this.api.getNotification(appId, notificationId, _options);
        return result.toPromise();
    }
    getNotificationHistory(notificationId, getNotificationHistoryRequestBody, _options) {
        const result = this.api.getNotificationHistory(notificationId, getNotificationHistoryRequestBody, _options);
        return result.toPromise();
    }
    getNotifications(appId, limit, offset, kind, _options) {
        const result = this.api.getNotifications(appId, limit, offset, kind, _options);
        return result.toPromise();
    }
    getOutcomes(appId, outcomeNames, outcomeNames2, outcomeTimeRange, outcomePlatforms, outcomeAttribution, _options) {
        const result = this.api.getOutcomes(appId, outcomeNames, outcomeNames2, outcomeTimeRange, outcomePlatforms, outcomeAttribution, _options);
        return result.toPromise();
    }
    getSegments(appId, offset, limit, _options) {
        const result = this.api.getSegments(appId, offset, limit, _options);
        return result.toPromise();
    }
    getUser(appId, aliasLabel, aliasId, _options) {
        const result = this.api.getUser(appId, aliasLabel, aliasId, _options);
        return result.toPromise();
    }
    rotateApiKey(appId, tokenId, _options) {
        const result = this.api.rotateApiKey(appId, tokenId, _options);
        return result.toPromise();
    }
    startLiveActivity(appId, activityType, startLiveActivityRequest, _options) {
        const result = this.api.startLiveActivity(appId, activityType, startLiveActivityRequest, _options);
        return result.toPromise();
    }
    transferSubscription(appId, subscriptionId, transferSubscriptionRequestBody, _options) {
        const result = this.api.transferSubscription(appId, subscriptionId, transferSubscriptionRequestBody, _options);
        return result.toPromise();
    }
    unsubscribeEmailWithToken(appId, notificationId, token, _options) {
        const result = this.api.unsubscribeEmailWithToken(appId, notificationId, token, _options);
        return result.toPromise();
    }
    updateApiKey(appId, tokenId, updateApiKeyRequest, _options) {
        const result = this.api.updateApiKey(appId, tokenId, updateApiKeyRequest, _options);
        return result.toPromise();
    }
    updateApp(appId, app, _options) {
        const result = this.api.updateApp(appId, app, _options);
        return result.toPromise();
    }
    updateLiveActivity(appId, activityId, updateLiveActivityRequest, _options) {
        const result = this.api.updateLiveActivity(appId, activityId, updateLiveActivityRequest, _options);
        return result.toPromise();
    }
    updateSubscription(appId, subscriptionId, subscriptionBody, _options) {
        const result = this.api.updateSubscription(appId, subscriptionId, subscriptionBody, _options);
        return result.toPromise();
    }
    updateSubscriptionByToken(appId, tokenType, token, subscriptionBody, _options) {
        const result = this.api.updateSubscriptionByToken(appId, tokenType, token, subscriptionBody, _options);
        return result.toPromise();
    }
    updateTemplate(templateId, appId, updateTemplateRequest, _options) {
        const result = this.api.updateTemplate(templateId, appId, updateTemplateRequest, _options);
        return result.toPromise();
    }
    updateUser(appId, aliasLabel, aliasId, updateUserRequest, _options) {
        const result = this.api.updateUser(appId, aliasLabel, aliasId, updateUserRequest, _options);
        return result.toPromise();
    }
    viewApiKeys(appId, _options) {
        const result = this.api.viewApiKeys(appId, _options);
        return result.toPromise();
    }
    viewTemplate(templateId, appId, _options) {
        const result = this.api.viewTemplate(templateId, appId, _options);
        return result.toPromise();
    }
    viewTemplates(appId, limit, offset, channel, _options) {
        const result = this.api.viewTemplates(appId, limit, offset, channel, _options);
        return result.toPromise();
    }
}
exports.PromiseDefaultApi = PromiseDefaultApi;
//# sourceMappingURL=PromiseAPI.js.map