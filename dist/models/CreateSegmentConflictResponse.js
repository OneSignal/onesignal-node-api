"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSegmentConflictResponse = void 0;
class CreateSegmentConflictResponse {
    static getAttributeTypeMap() {
        return CreateSegmentConflictResponse.attributeTypeMap;
    }
    constructor() {
    }
}
exports.CreateSegmentConflictResponse = CreateSegmentConflictResponse;
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
//# sourceMappingURL=CreateSegmentConflictResponse.js.map