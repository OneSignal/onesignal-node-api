"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSegmentsSuccessResponse = void 0;
class GetSegmentsSuccessResponse {
    static getAttributeTypeMap() {
        return GetSegmentsSuccessResponse.attributeTypeMap;
    }
    constructor() {
    }
}
exports.GetSegmentsSuccessResponse = GetSegmentsSuccessResponse;
GetSegmentsSuccessResponse.discriminator = undefined;
GetSegmentsSuccessResponse.attributeTypeMap = [
    {
        "name": "total_count",
        "baseName": "total_count",
        "type": "number",
        "format": ""
    },
    {
        "name": "offset",
        "baseName": "offset",
        "type": "number",
        "format": ""
    },
    {
        "name": "limit",
        "baseName": "limit",
        "type": "number",
        "format": ""
    },
    {
        "name": "segments",
        "baseName": "segments",
        "type": "Array<SegmentData>",
        "format": ""
    }
];
//# sourceMappingURL=GetSegmentsSuccessResponse.js.map