"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentData = void 0;
class SegmentData {
    static getAttributeTypeMap() {
        return SegmentData.attributeTypeMap;
    }
    constructor() {
    }
}
exports.SegmentData = SegmentData;
SegmentData.discriminator = undefined;
SegmentData.attributeTypeMap = [
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
        "name": "created_at",
        "baseName": "created_at",
        "type": "string",
        "format": ""
    },
    {
        "name": "updated_at",
        "baseName": "updated_at",
        "type": "string",
        "format": ""
    },
    {
        "name": "app_id",
        "baseName": "app_id",
        "type": "string",
        "format": ""
    },
    {
        "name": "read_only",
        "baseName": "read_only",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "is_active",
        "baseName": "is_active",
        "type": "boolean",
        "format": ""
    }
];
//# sourceMappingURL=SegmentData.js.map