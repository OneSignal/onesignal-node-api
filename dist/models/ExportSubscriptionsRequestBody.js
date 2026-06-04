"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportSubscriptionsRequestBody = void 0;
class ExportSubscriptionsRequestBody {
    static getAttributeTypeMap() {
        return ExportSubscriptionsRequestBody.attributeTypeMap;
    }
    constructor() {
    }
}
exports.ExportSubscriptionsRequestBody = ExportSubscriptionsRequestBody;
ExportSubscriptionsRequestBody.discriminator = undefined;
ExportSubscriptionsRequestBody.attributeTypeMap = [
    {
        "name": "extra_fields",
        "baseName": "extra_fields",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "last_active_since",
        "baseName": "last_active_since",
        "type": "string",
        "format": ""
    },
    {
        "name": "segment_name",
        "baseName": "segment_name",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=ExportSubscriptionsRequestBody.js.map