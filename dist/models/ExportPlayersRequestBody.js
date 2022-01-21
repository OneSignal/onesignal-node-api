"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportPlayersRequestBody = void 0;
var ExportPlayersRequestBody = (function () {
    function ExportPlayersRequestBody() {
    }
    ExportPlayersRequestBody.getAttributeTypeMap = function () {
        return ExportPlayersRequestBody.attributeTypeMap;
    };
    ExportPlayersRequestBody.discriminator = undefined;
    ExportPlayersRequestBody.attributeTypeMap = [
        {
            "name": "extra_fields",
            "baseName": "extra_fields",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "last_active_since",
            "baseName": "last_active_since",
            "type": "number",
            "format": ""
        },
        {
            "name": "segment_name",
            "baseName": "segment_name",
            "type": "string",
            "format": ""
        }
    ];
    return ExportPlayersRequestBody;
}());
exports.ExportPlayersRequestBody = ExportPlayersRequestBody;
//# sourceMappingURL=ExportPlayersRequestBody.js.map