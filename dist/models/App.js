"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var App = (function () {
    function App() {
    }
    App.getAttributeTypeMap = function () {
        return App.attributeTypeMap;
    };
    App.discriminator = undefined;
    App.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "players",
            "baseName": "players",
            "type": "number",
            "format": ""
        },
        {
            "name": "messageable_players",
            "baseName": "messageable_players",
            "type": "number",
            "format": ""
        },
        {
            "name": "updated_at",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "created_at",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "android_gcm_sender_id",
            "baseName": "android_gcm_sender_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "gcm_key",
            "baseName": "gcm_key",
            "type": "string",
            "format": ""
        },
        {
            "name": "chrome_web_origin",
            "baseName": "chrome_web_origin",
            "type": "string",
            "format": ""
        },
        {
            "name": "chrome_key",
            "baseName": "chrome_key",
            "type": "string",
            "format": ""
        },
        {
            "name": "chrome_web_default_notification_icon",
            "baseName": "chrome_web_default_notification_icon",
            "type": "string",
            "format": ""
        },
        {
            "name": "chrome_web_sub_domain",
            "baseName": "chrome_web_sub_domain",
            "type": "string",
            "format": ""
        },
        {
            "name": "apns_env",
            "baseName": "apns_env",
            "type": "AppApnsEnvEnum",
            "format": ""
        },
        {
            "name": "apns_p12",
            "baseName": "apns_p12",
            "type": "string",
            "format": ""
        },
        {
            "name": "apns_p12_password",
            "baseName": "apns_p12_password",
            "type": "string",
            "format": ""
        },
        {
            "name": "apns_certificates",
            "baseName": "apns_certificates",
            "type": "string",
            "format": ""
        },
        {
            "name": "safari_apns_certificates",
            "baseName": "safari_apns_certificates",
            "type": "string",
            "format": ""
        },
        {
            "name": "safari_apns_p12",
            "baseName": "safari_apns_p12",
            "type": "string",
            "format": ""
        },
        {
            "name": "safari_apns_p12_password",
            "baseName": "safari_apns_p12_password",
            "type": "string",
            "format": ""
        },
        {
            "name": "safari_site_origin",
            "baseName": "safari_site_origin",
            "type": "string",
            "format": ""
        },
        {
            "name": "safari_push_id",
            "baseName": "safari_push_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "safari_icon_16_16",
            "baseName": "safari_icon_16_16",
            "type": "string",
            "format": ""
        },
        {
            "name": "safari_icon_32_32",
            "baseName": "safari_icon_32_32",
            "type": "string",
            "format": ""
        },
        {
            "name": "safari_icon_64_64",
            "baseName": "safari_icon_64_64",
            "type": "string",
            "format": ""
        },
        {
            "name": "safari_icon_128_128",
            "baseName": "safari_icon_128_128",
            "type": "string",
            "format": ""
        },
        {
            "name": "safari_icon_256_256",
            "baseName": "safari_icon_256_256",
            "type": "string",
            "format": ""
        },
        {
            "name": "site_name",
            "baseName": "site_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "basic_auth_key",
            "baseName": "basic_auth_key",
            "type": "string",
            "format": ""
        },
        {
            "name": "organization_id",
            "baseName": "organization_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "additional_data_is_root_payload",
            "baseName": "additional_data_is_root_payload",
            "type": "boolean",
            "format": ""
        }
    ];
    return App;
}());
exports.App = App;
//# sourceMappingURL=App.js.map