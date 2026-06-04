"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationAllOf = void 0;
class NotificationAllOf {
    static getAttributeTypeMap() {
        return NotificationAllOf.attributeTypeMap;
    }
    constructor() {
    }
}
exports.NotificationAllOf = NotificationAllOf;
NotificationAllOf.discriminator = undefined;
NotificationAllOf.attributeTypeMap = [
    {
        "name": "send_after",
        "baseName": "send_after",
        "type": "string",
        "format": "date-time"
    }
];
//# sourceMappingURL=NotificationAllOf.js.map