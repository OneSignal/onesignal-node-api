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
    ObjectDefaultApi.prototype.createApp = function (param, options) {
        return this.api.createApp(param.app, options).toPromise();
    };
    ObjectDefaultApi.prototype.createNotification = function (param, options) {
        return this.api.createNotification(param.notification, options).toPromise();
    };
    ObjectDefaultApi.prototype.createPlayer = function (param, options) {
        return this.api.createPlayer(param.player, options).toPromise();
    };
    ObjectDefaultApi.prototype.createSegments = function (param, options) {
        return this.api.createSegments(param.appId, param.segment, options).toPromise();
    };
    ObjectDefaultApi.prototype.deletePlayer = function (param, options) {
        return this.api.deletePlayer(param.appId, param.playerId, options).toPromise();
    };
    ObjectDefaultApi.prototype.deleteSegments = function (param, options) {
        return this.api.deleteSegments(param.appId, param.segmentId, options).toPromise();
    };
    ObjectDefaultApi.prototype.exportPlayers = function (param, options) {
        return this.api.exportPlayers(param.appId, param.exportPlayersRequestBody, options).toPromise();
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
        return this.api.getNotificationHistory(param.notificationId, param.getNotificationRequestBody, options).toPromise();
    };
    ObjectDefaultApi.prototype.getNotifications = function (param, options) {
        return this.api.getNotifications(param.appId, param.limit, param.offset, param.kind, options).toPromise();
    };
    ObjectDefaultApi.prototype.getOutcomes = function (param, options) {
        return this.api.getOutcomes(param.appId, param.outcomeNames, param.outcomeNames2, param.outcomeTimeRange, param.outcomePlatforms, param.outcomeAttribution, options).toPromise();
    };
    ObjectDefaultApi.prototype.getPlayer = function (param, options) {
        return this.api.getPlayer(param.appId, param.playerId, param.emailAuthHash, options).toPromise();
    };
    ObjectDefaultApi.prototype.getPlayers = function (param, options) {
        return this.api.getPlayers(param.appId, param.limit, param.offset, options).toPromise();
    };
    ObjectDefaultApi.prototype.updateApp = function (param, options) {
        return this.api.updateApp(param.appId, param.app, options).toPromise();
    };
    ObjectDefaultApi.prototype.updatePlayer = function (param, options) {
        return this.api.updatePlayer(param.playerId, param.player, options).toPromise();
    };
    ObjectDefaultApi.prototype.updatePlayerTags = function (param, options) {
        return this.api.updatePlayerTags(param.appId, param.externalUserId, param.updatePlayerTagsRequestBody, options).toPromise();
    };
    return ObjectDefaultApi;
}());
exports.ObjectDefaultApi = ObjectDefaultApi;
//# sourceMappingURL=ObjectParamAPI.js.map