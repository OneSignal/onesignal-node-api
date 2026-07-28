"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentDetails = void 0;
class SegmentDetails {
    static getAttributeTypeMap() {
        return SegmentDetails.attributeTypeMap;
    }
    constructor() {
    }
}
exports.SegmentDetails = SegmentDetails;
SegmentDetails.discriminator = undefined;
SegmentDetails.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "created_at",
        "baseName": "created_at",
        "type": "number",
        "format": ""
    },
    {
        "name": "source",
        "baseName": "source",
        "type": "SegmentDetailsSourceEnum",
        "format": ""
    },
    {
        "name": "filters",
        "baseName": "filters",
        "type": "Array<FilterExpression>",
        "format": ""
    }
];
//# sourceMappingURL=SegmentDetails.js.map