"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSegmentSuccessResponse = void 0;
class GetSegmentSuccessResponse {
    static getAttributeTypeMap() {
        return GetSegmentSuccessResponse.attributeTypeMap;
    }
    constructor() {
    }
}
exports.GetSegmentSuccessResponse = GetSegmentSuccessResponse;
GetSegmentSuccessResponse.discriminator = undefined;
GetSegmentSuccessResponse.attributeTypeMap = [
    {
        "name": "subscriber_count",
        "baseName": "subscriber_count",
        "type": "number",
        "format": ""
    },
    {
        "name": "payload",
        "baseName": "payload",
        "type": "SegmentDetails",
        "format": ""
    }
];
//# sourceMappingURL=GetSegmentSuccessResponse.js.map