"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSegmentConflictResponse = void 0;
var CreateSegmentConflictResponse = (function () {
    function CreateSegmentConflictResponse() {
    }
    CreateSegmentConflictResponse.getAttributeTypeMap = function () {
        return CreateSegmentConflictResponse.attributeTypeMap;
    };
    CreateSegmentConflictResponse.discriminator = undefined;
    CreateSegmentConflictResponse.attributeTypeMap = [
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return CreateSegmentConflictResponse;
}());
exports.CreateSegmentConflictResponse = CreateSegmentConflictResponse;
//# sourceMappingURL=CreateSegmentConflictResponse.js.map