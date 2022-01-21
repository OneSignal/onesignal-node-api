"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = (function () {
    function Player() {
    }
    Player.getAttributeTypeMap = function () {
        return Player.attributeTypeMap;
    };
    Player.discriminator = undefined;
    Player.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "invalid_identifier",
            "baseName": "invalid_identifier",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "app_id",
            "baseName": "app_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "device_type",
            "baseName": "device_type",
            "type": "number",
            "format": ""
        },
        {
            "name": "external_user_id",
            "baseName": "external_user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "external_user_id_auth_hash",
            "baseName": "external_user_id_auth_hash",
            "type": "string",
            "format": ""
        },
        {
            "name": "email_auth_hash",
            "baseName": "email_auth_hash",
            "type": "string",
            "format": ""
        },
        {
            "name": "identifier",
            "baseName": "identifier",
            "type": "string",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string",
            "format": ""
        },
        {
            "name": "timezone",
            "baseName": "timezone",
            "type": "number",
            "format": ""
        },
        {
            "name": "game_version",
            "baseName": "game_version",
            "type": "string",
            "format": ""
        },
        {
            "name": "device_model",
            "baseName": "device_model",
            "type": "string",
            "format": ""
        },
        {
            "name": "device_os",
            "baseName": "device_os",
            "type": "string",
            "format": ""
        },
        {
            "name": "ad_id",
            "baseName": "ad_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "sdk",
            "baseName": "sdk",
            "type": "string",
            "format": ""
        },
        {
            "name": "session_count",
            "baseName": "session_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "any",
            "format": ""
        },
        {
            "name": "amount_spent",
            "baseName": "amount_spent",
            "type": "string",
            "format": ""
        },
        {
            "name": "created_at",
            "baseName": "created_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "playtime",
            "baseName": "playtime",
            "type": "number",
            "format": ""
        },
        {
            "name": "badge_count",
            "baseName": "badge_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "last_active",
            "baseName": "last_active",
            "type": "number",
            "format": ""
        },
        {
            "name": "notification_types",
            "baseName": "notification_types",
            "type": "number",
            "format": ""
        },
        {
            "name": "test_type",
            "baseName": "test_type",
            "type": "number",
            "format": ""
        },
        {
            "name": "_long",
            "baseName": "long",
            "type": "number",
            "format": ""
        },
        {
            "name": "lat",
            "baseName": "lat",
            "type": "number",
            "format": ""
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": ""
        }
    ];
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=Player.js.map