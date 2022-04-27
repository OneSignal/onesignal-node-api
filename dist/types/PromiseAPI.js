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
    PromiseDefaultApi.prototype.createApp = function (app, _options) {
        var result = this.api.createApp(app, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.createNotification = function (notification, _options) {
        var result = this.api.createNotification(notification, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.createPlayer = function (player, _options) {
        var result = this.api.createPlayer(player, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.createSegments = function (appId, segment, _options) {
        var result = this.api.createSegments(appId, segment, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.deletePlayer = function (appId, playerId, _options) {
        var result = this.api.deletePlayer(appId, playerId, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.deleteSegments = function (appId, segmentId, _options) {
        var result = this.api.deleteSegments(appId, segmentId, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.exportPlayers = function (appId, exportPlayersRequestBody, _options) {
        var result = this.api.exportPlayers(appId, exportPlayersRequestBody, _options);
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
    PromiseDefaultApi.prototype.getNotificationHistory = function (notificationId, getNotificationRequestBody, _options) {
        var result = this.api.getNotificationHistory(notificationId, getNotificationRequestBody, _options);
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
    PromiseDefaultApi.prototype.getPlayer = function (appId, playerId, emailAuthHash, _options) {
        var result = this.api.getPlayer(appId, playerId, emailAuthHash, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.getPlayers = function (appId, limit, offset, _options) {
        var result = this.api.getPlayers(appId, limit, offset, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.updateApp = function (appId, app, _options) {
        var result = this.api.updateApp(appId, app, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.updatePlayer = function (playerId, player, _options) {
        var result = this.api.updatePlayer(playerId, player, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.updatePlayerTags = function (appId, externalUserId, updatePlayerTagsRequestBody, _options) {
        var result = this.api.updatePlayerTags(appId, externalUserId, updatePlayerTagsRequestBody, _options);
        return result.toPromise();
    };
    return PromiseDefaultApi;
}());
exports.PromiseDefaultApi = PromiseDefaultApi;
//# sourceMappingURL=PromiseAPI.js.map