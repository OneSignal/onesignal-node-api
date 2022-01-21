"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterNotificationTarget = void 0;
var FilterNotificationTarget = (function () {
    function FilterNotificationTarget() {
    }
    FilterNotificationTarget.getAttributeTypeMap = function () {
        return FilterNotificationTarget.attributeTypeMap;
    };
    FilterNotificationTarget.discriminator = undefined;
    FilterNotificationTarget.attributeTypeMap = [
        {
            "name": "last_session",
            "baseName": "last_session",
            "type": "string",
            "format": ""
        },
        {
            "name": "first_session",
            "baseName": "first_session",
            "type": "string",
            "format": ""
        },
        {
            "name": "session_count",
            "baseName": "session_count",
            "type": "string",
            "format": ""
        },
        {
            "name": "session_time",
            "baseName": "session_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "amount_spent",
            "baseName": "amount_spent",
            "type": "string",
            "format": ""
        },
        {
            "name": "bought_sku",
            "baseName": "bought_sku",
            "type": "string",
            "format": ""
        },
        {
            "name": "tag",
            "baseName": "tag",
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
            "name": "app_version",
            "baseName": "app_version",
            "type": "string",
            "format": ""
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": ""
        }
    ];
    return FilterNotificationTarget;
}());
exports.FilterNotificationTarget = FilterNotificationTarget;
//# sourceMappingURL=FilterNotificationTarget.js.map