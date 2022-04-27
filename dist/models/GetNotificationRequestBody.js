"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetNotificationRequestBody = void 0;
var GetNotificationRequestBody = (function () {
    function GetNotificationRequestBody() {
    }
    GetNotificationRequestBody.getAttributeTypeMap = function () {
        return GetNotificationRequestBody.attributeTypeMap;
    };
    GetNotificationRequestBody.discriminator = undefined;
    GetNotificationRequestBody.attributeTypeMap = [
        {
            "name": "events",
            "baseName": "events",
            "type": "GetNotificationRequestBodyEventsEnum",
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
    return GetNotificationRequestBody;
}());
exports.GetNotificationRequestBody = GetNotificationRequestBody;
//# sourceMappingURL=GetNotificationRequestBody.js.map