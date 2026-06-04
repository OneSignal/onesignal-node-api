"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetNotificationHistoryRequestBody = void 0;
class GetNotificationHistoryRequestBody {
    static getAttributeTypeMap() {
        return GetNotificationHistoryRequestBody.attributeTypeMap;
    }
    constructor() {
    }
}
exports.GetNotificationHistoryRequestBody = GetNotificationHistoryRequestBody;
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
//# sourceMappingURL=GetNotificationHistoryRequestBody.js.map