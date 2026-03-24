"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationWithMetaAllOf = void 0;
var NotificationWithMetaAllOf = (function () {
    function NotificationWithMetaAllOf() {
    }
    NotificationWithMetaAllOf.getAttributeTypeMap = function () {
        return NotificationWithMetaAllOf.attributeTypeMap;
    };
    NotificationWithMetaAllOf.discriminator = undefined;
    NotificationWithMetaAllOf.attributeTypeMap = [
        {
            "name": "remaining",
            "baseName": "remaining",
            "type": "number",
            "format": ""
        },
        {
            "name": "successful",
            "baseName": "successful",
            "type": "number",
            "format": ""
        },
        {
            "name": "failed",
            "baseName": "failed",
            "type": "number",
            "format": ""
        },
        {
            "name": "errored",
            "baseName": "errored",
            "type": "number",
            "format": ""
        },
        {
            "name": "converted",
            "baseName": "converted",
            "type": "number",
            "format": ""
        },
        {
            "name": "queued_at",
            "baseName": "queued_at",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "send_after",
            "baseName": "send_after",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "completed_at",
            "baseName": "completed_at",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "platform_delivery_stats",
            "baseName": "platform_delivery_stats",
            "type": "PlatformDeliveryData",
            "format": ""
        },
        {
            "name": "received",
            "baseName": "received",
            "type": "number",
            "format": ""
        },
        {
            "name": "throttle_rate_per_minute",
            "baseName": "throttle_rate_per_minute",
            "type": "number",
            "format": ""
        },
        {
            "name": "canceled",
            "baseName": "canceled",
            "type": "boolean",
            "format": ""
        }
    ];
    return NotificationWithMetaAllOf;
}());
exports.NotificationWithMetaAllOf = NotificationWithMetaAllOf;
//# sourceMappingURL=NotificationWithMetaAllOf.js.map