"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplatesListResponse = void 0;
class TemplatesListResponse {
    static getAttributeTypeMap() {
        return TemplatesListResponse.attributeTypeMap;
    }
    constructor() {
    }
}
exports.TemplatesListResponse = TemplatesListResponse;
TemplatesListResponse.discriminator = undefined;
TemplatesListResponse.attributeTypeMap = [
    {
        "name": "templates",
        "baseName": "templates",
        "type": "Array<TemplateResource>",
        "format": ""
    }
];
//# sourceMappingURL=TemplatesListResponse.js.map