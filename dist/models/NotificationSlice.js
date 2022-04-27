"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSlice = void 0;
var NotificationSlice = (function () {
    function NotificationSlice() {
    }
    NotificationSlice.getAttributeTypeMap = function () {
        return NotificationSlice.attributeTypeMap;
    };
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
            "name": "notifications",
            "baseName": "notifications",
            "type": "Array<Notification>",
            "format": ""
        }
    ];
    return NotificationSlice;
}());
exports.NotificationSlice = NotificationSlice;
//# sourceMappingURL=NotificationSlice.js.map