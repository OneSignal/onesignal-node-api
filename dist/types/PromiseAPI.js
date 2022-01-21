"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseDefaultApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var PromiseDefaultApi = (function () {
    function PromiseDefaultApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    PromiseDefaultApi.prototype.cancelNotification = function (app_id, notification_id, _options) {
        var result = this.api.cancelNotification(app_id, notification_id, _options);
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
    PromiseDefaultApi.prototype.createSegments = function (app_id, segment, _options) {
        var result = this.api.createSegments(app_id, segment, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.deletePlayer = function (app_id, player_id, _options) {
        var result = this.api.deletePlayer(app_id, player_id, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.deleteSegments = function (app_id, segment_id, _options) {
        var result = this.api.deleteSegments(app_id, segment_id, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.exportPlayers = function (app_id, export_players_request_body, _options) {
        var result = this.api.exportPlayers(app_id, export_players_request_body, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.getApp = function (app_id, _options) {
        var result = this.api.getApp(app_id, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.getApps = function (_options) {
        var result = this.api.getApps(_options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.getNotification = function (app_id, notification_id, _options) {
        var result = this.api.getNotification(app_id, notification_id, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.getNotificationHistory = function (notification_id, get_notification_request_body, _options) {
        var result = this.api.getNotificationHistory(notification_id, get_notification_request_body, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.getNotifications = function (app_id, limit, offset, kind, _options) {
        var result = this.api.getNotifications(app_id, limit, offset, kind, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.getOutcomes = function (app_id, outcome_names, outcome_names2, outcome_time_range, outcome_platforms, outcome_attribution, _options) {
        var result = this.api.getOutcomes(app_id, outcome_names, outcome_names2, outcome_time_range, outcome_platforms, outcome_attribution, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.getPlayer = function (app_id, player_id, email_auth_hash, _options) {
        var result = this.api.getPlayer(app_id, player_id, email_auth_hash, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.getPlayers = function (app_id, limit, offset, _options) {
        var result = this.api.getPlayers(app_id, limit, offset, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.updateApp = function (app_id, app, _options) {
        var result = this.api.updateApp(app_id, app, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.updatePlayer = function (player_id, player, _options) {
        var result = this.api.updatePlayer(player_id, player, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.updatePlayerTags = function (app_id, external_user_id, update_player_tags_request_body, _options) {
        var result = this.api.updatePlayerTags(app_id, external_user_id, update_player_tags_request_body, _options);
        return result.toPromise();
    };
    return PromiseDefaultApi;
}());
exports.PromiseDefaultApi = PromiseDefaultApi;
//# sourceMappingURL=PromiseAPI.js.map