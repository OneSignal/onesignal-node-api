"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplatesListResponse = void 0;
var TemplatesListResponse = (function () {
    function TemplatesListResponse() {
    }
    TemplatesListResponse.getAttributeTypeMap = function () {
        return TemplatesListResponse.attributeTypeMap;
    };
    TemplatesListResponse.discriminator = undefined;
    TemplatesListResponse.attributeTypeMap = [
        {
            "name": "templates",
            "baseName": "templates",
            "type": "Array<TemplateResource>",
            "format": ""
        }
    ];
    return TemplatesListResponse;
}());
exports.TemplatesListResponse = TemplatesListResponse;
//# sourceMappingURL=TemplatesListResponse.js.map