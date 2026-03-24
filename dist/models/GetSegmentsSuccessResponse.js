"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSegmentsSuccessResponse = void 0;
var GetSegmentsSuccessResponse = (function () {
    function GetSegmentsSuccessResponse() {
    }
    GetSegmentsSuccessResponse.getAttributeTypeMap = function () {
        return GetSegmentsSuccessResponse.attributeTypeMap;
    };
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
    return GetSegmentsSuccessResponse;
}());
exports.GetSegmentsSuccessResponse = GetSegmentsSuccessResponse;
//# sourceMappingURL=GetSegmentsSuccessResponse.js.map