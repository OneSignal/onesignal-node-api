"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSegmentSuccessResponse = void 0;
var CreateSegmentSuccessResponse = (function () {
    function CreateSegmentSuccessResponse() {
    }
    CreateSegmentSuccessResponse.getAttributeTypeMap = function () {
        return CreateSegmentSuccessResponse.attributeTypeMap;
    };
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
    return CreateSegmentSuccessResponse;
}());
exports.CreateSegmentSuccessResponse = CreateSegmentSuccessResponse;
//# sourceMappingURL=CreateSegmentSuccessResponse.js.map