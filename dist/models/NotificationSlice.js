"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSlice = void 0;
class NotificationSlice {
    static getAttributeTypeMap() {
        return NotificationSlice.attributeTypeMap;
    }
    constructor() {
    }
}
exports.NotificationSlice = NotificationSlice;
NotificationSlice.discriminator = undefined;
NotificationSlice.attributeTypeMap = [
    {
        "name": "total_count",
        "baseName": "total_count",
        "type": "number",
        "format": ""
    },
    {
        "name": "offset",
        "baseName": "offset",
        "type": "number",
        "format": ""
    },
    {
        "name": "limit",
        "baseName": "limit",
        "type": "number",
        "format": ""
    },
    {
        "name": "time_offset",
        "baseName": "time_offset",
        "type": "string",
        "format": ""
    },
    {
        "name": "next_time_offset",
        "baseName": "next_time_offset",
        "type": "string",
        "format": ""
    },
    {
        "name": "notifications",
        "baseName": "notifications",
        "type": "Array<NotificationWithMeta>",
        "format": ""
    }
];
//# sourceMappingURL=NotificationSlice.js.map