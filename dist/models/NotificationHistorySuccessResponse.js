"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationHistorySuccessResponse = void 0;
class NotificationHistorySuccessResponse {
    static getAttributeTypeMap() {
        return NotificationHistorySuccessResponse.attributeTypeMap;
    }
    constructor() {
    }
}
exports.NotificationHistorySuccessResponse = NotificationHistorySuccessResponse;
NotificationHistorySuccessResponse.discriminator = undefined;
NotificationHistorySuccessResponse.attributeTypeMap = [
    {
        "name": "success",
        "baseName": "success",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "destination_url",
        "baseName": "destination_url",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=NotificationHistorySuccessResponse.js.map