"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetNotificationHistoryRequestBody = void 0;
var GetNotificationHistoryRequestBody = (function () {
    function GetNotificationHistoryRequestBody() {
    }
    GetNotificationHistoryRequestBody.getAttributeTypeMap = function () {
        return GetNotificationHistoryRequestBody.attributeTypeMap;
    };
    GetNotificationHistoryRequestBody.discriminator = undefined;
    GetNotificationHistoryRequestBody.attributeTypeMap = [
        {
            "name": "events",
            "baseName": "events",
            "type": "GetNotificationHistoryRequestBodyEventsEnum",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "app_id",
            "baseName": "app_id",
            "type": "string",
            "format": ""
        }
    ];
    return GetNotificationHistoryRequestBody;
}());
exports.GetNotificationHistoryRequestBody = GetNotificationHistoryRequestBody;
//# sourceMappingURL=GetNotificationHistoryRequestBody.js.map