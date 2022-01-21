"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectDefaultApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var ObjectDefaultApi = (function () {
    function ObjectDefaultApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    ObjectDefaultApi.prototype.cancelNotification = function (param, options) {
        return this.api.cancelNotification(param.app_id, param.notification_id, options).toPromise();
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
        return this.api.createSegments(param.app_id, param.segment, options).toPromise();
    };
    ObjectDefaultApi.prototype.deletePlayer = function (param, options) {
        return this.api.deletePlayer(param.app_id, param.player_id, options).toPromise();
    };
    ObjectDefaultApi.prototype.deleteSegments = function (param, options) {
        return this.api.deleteSegments(param.app_id, param.segment_id, options).toPromise();
    };
    ObjectDefaultApi.prototype.exportPlayers = function (param, options) {
        return this.api.exportPlayers(param.app_id, param.export_players_request_body, options).toPromise();
    };
    ObjectDefaultApi.prototype.getApp = function (param, options) {
        return this.api.getApp(param.app_id, options).toPromise();
    };
    ObjectDefaultApi.prototype.getApps = function (param, options) {
        return this.api.getApps(options).toPromise();
    };
    ObjectDefaultApi.prototype.getNotification = function (param, options) {
        return this.api.getNotification(param.app_id, param.notification_id, options).toPromise();
    };
    ObjectDefaultApi.prototype.getNotificationHistory = function (param, options) {
        return this.api.getNotificationHistory(param.notification_id, param.get_notification_request_body, options).toPromise();
    };
    ObjectDefaultApi.prototype.getNotifications = function (param, options) {
        return this.api.getNotifications(param.app_id, param.limit, param.offset, param.kind, options).toPromise();
    };
    ObjectDefaultApi.prototype.getOutcomes = function (param, options) {
        return this.api.getOutcomes(param.app_id, param.outcome_names, param.outcome_names2, param.outcome_time_range, param.outcome_platforms, param.outcome_attribution, options).toPromise();
    };
    ObjectDefaultApi.prototype.getPlayer = function (param, options) {
        return this.api.getPlayer(param.app_id, param.player_id, param.email_auth_hash, options).toPromise();
    };
    ObjectDefaultApi.prototype.getPlayers = function (param, options) {
        return this.api.getPlayers(param.app_id, param.limit, param.offset, options).toPromise();
    };
    ObjectDefaultApi.prototype.updateApp = function (param, options) {
        return this.api.updateApp(param.app_id, param.app, options).toPromise();
    };
    ObjectDefaultApi.prototype.updatePlayer = function (param, options) {
        return this.api.updatePlayer(param.player_id, param.player, options).toPromise();
    };
    ObjectDefaultApi.prototype.updatePlayerTags = function (param, options) {
        return this.api.updatePlayerTags(param.app_id, param.external_user_id, param.update_player_tags_request_body, options).toPromise();
    };
    return ObjectDefaultApi;
}());
exports.ObjectDefaultApi = ObjectDefaultApi;
//# sourceMappingURL=ObjectParamAPI.js.map