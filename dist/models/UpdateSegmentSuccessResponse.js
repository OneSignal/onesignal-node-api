"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSegmentSuccessResponse = void 0;
class UpdateSegmentSuccessResponse {
    static getAttributeTypeMap() {
        return UpdateSegmentSuccessResponse.attributeTypeMap;
    }
    constructor() {
    }
}
exports.UpdateSegmentSuccessResponse = UpdateSegmentSuccessResponse;
UpdateSegmentSuccessResponse.discriminator = undefined;
UpdateSegmentSuccessResponse.attributeTypeMap = [
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
//# sourceMappingURL=UpdateSegmentSuccessResponse.js.map