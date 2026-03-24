"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportSubscriptionsRequestBody = void 0;
var ExportSubscriptionsRequestBody = (function () {
    function ExportSubscriptionsRequestBody() {
    }
    ExportSubscriptionsRequestBody.getAttributeTypeMap = function () {
        return ExportSubscriptionsRequestBody.attributeTypeMap;
    };
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
    return ExportSubscriptionsRequestBody;
}());
exports.ExportSubscriptionsRequestBody = ExportSubscriptionsRequestBody;
//# sourceMappingURL=ExportSubscriptionsRequestBody.js.map