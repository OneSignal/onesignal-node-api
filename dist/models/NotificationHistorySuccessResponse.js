"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationHistorySuccessResponse = void 0;
var NotificationHistorySuccessResponse = (function () {
    function NotificationHistorySuccessResponse() {
    }
    NotificationHistorySuccessResponse.getAttributeTypeMap = function () {
        return NotificationHistorySuccessResponse.attributeTypeMap;
    };
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
    return NotificationHistorySuccessResponse;
}());
exports.NotificationHistorySuccessResponse = NotificationHistorySuccessResponse;
//# sourceMappingURL=NotificationHistorySuccessResponse.js.map