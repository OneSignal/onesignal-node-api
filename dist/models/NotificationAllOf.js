"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationAllOf = void 0;
var NotificationAllOf = (function () {
    function NotificationAllOf() {
    }
    NotificationAllOf.getAttributeTypeMap = function () {
        return NotificationAllOf.attributeTypeMap;
    };
    NotificationAllOf.discriminator = undefined;
    NotificationAllOf.attributeTypeMap = [
        {
            "name": "send_after",
            "baseName": "send_after",
            "type": "string",
            "format": "date-time"
        }
    ];
    return NotificationAllOf;
}());
exports.NotificationAllOf = NotificationAllOf;
//# sourceMappingURL=NotificationAllOf.js.map