"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNotificationSuccessResponse = void 0;
class CreateNotificationSuccessResponse {
    static getAttributeTypeMap() {
        return CreateNotificationSuccessResponse.attributeTypeMap;
    }
    constructor() {
    }
}
exports.CreateNotificationSuccessResponse = CreateNotificationSuccessResponse;
CreateNotificationSuccessResponse.discriminator = undefined;
CreateNotificationSuccessResponse.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "external_id",
        "baseName": "external_id",
        "type": "string",
        "format": ""
    },
    {
        "name": "errors",
        "baseName": "errors",
        "type": "any",
        "format": ""
    }
];
//# sourceMappingURL=CreateNotificationSuccessResponse.js.map