"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSegmentSuccessResponse = void 0;
class CreateSegmentSuccessResponse {
    static getAttributeTypeMap() {
        return CreateSegmentSuccessResponse.attributeTypeMap;
    }
    constructor() {
    }
}
exports.CreateSegmentSuccessResponse = CreateSegmentSuccessResponse;
CreateSegmentSuccessResponse.discriminator = undefined;
CreateSegmentSuccessResponse.attributeTypeMap = [
    {
        "name": "success",
        "baseName": "success",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=CreateSegmentSuccessResponse.js.map