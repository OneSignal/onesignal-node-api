"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentData = void 0;
var SegmentData = (function () {
    function SegmentData() {
    }
    SegmentData.getAttributeTypeMap = function () {
        return SegmentData.attributeTypeMap;
    };
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
    return SegmentData;
}());
exports.SegmentData = SegmentData;
//# sourceMappingURL=SegmentData.js.map