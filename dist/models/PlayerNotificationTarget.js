"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerNotificationTarget = void 0;
var PlayerNotificationTarget = (function () {
    function PlayerNotificationTarget() {
    }
    PlayerNotificationTarget.getAttributeTypeMap = function () {
        return PlayerNotificationTarget.attributeTypeMap;
    };
    PlayerNotificationTarget.discriminator = undefined;
    PlayerNotificationTarget.attributeTypeMap = [
        {
            "name": "include_player_ids",
            "baseName": "include_player_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "include_external_user_ids",
            "baseName": "include_external_user_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "include_email_tokens",
            "baseName": "include_email_tokens",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "include_phone_numbers",
            "baseName": "include_phone_numbers",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "include_ios_tokens",
            "baseName": "include_ios_tokens",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "include_wp_wns_uris",
            "baseName": "include_wp_wns_uris",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "include_amazon_reg_ids",
            "baseName": "include_amazon_reg_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "include_chrome_reg_ids",
            "baseName": "include_chrome_reg_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "include_chrome_web_reg_ids",
            "baseName": "include_chrome_web_reg_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "include_android_reg_ids",
            "baseName": "include_android_reg_ids",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return PlayerNotificationTarget;
}());
exports.PlayerNotificationTarget = PlayerNotificationTarget;
//# sourceMappingURL=PlayerNotificationTarget.js.map