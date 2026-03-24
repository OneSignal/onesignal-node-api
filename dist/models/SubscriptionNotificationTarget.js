"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionNotificationTarget = void 0;
var SubscriptionNotificationTarget = (function () {
    function SubscriptionNotificationTarget() {
    }
    SubscriptionNotificationTarget.getAttributeTypeMap = function () {
        return SubscriptionNotificationTarget.attributeTypeMap;
    };
    SubscriptionNotificationTarget.discriminator = undefined;
    SubscriptionNotificationTarget.attributeTypeMap = [
        {
            "name": "include_subscription_ids",
            "baseName": "include_subscription_ids",
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
        },
        {
            "name": "include_aliases",
            "baseName": "include_aliases",
            "type": "{ [key: string]: Array<string>; }",
            "format": ""
        },
        {
            "name": "target_channel",
            "baseName": "target_channel",
            "type": "SubscriptionNotificationTargetTargetChannelEnum",
            "format": ""
        }
    ];
    return SubscriptionNotificationTarget;
}());
exports.SubscriptionNotificationTarget = SubscriptionNotificationTarget;
//# sourceMappingURL=SubscriptionNotificationTarget.js.map