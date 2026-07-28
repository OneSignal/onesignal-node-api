"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSegmentRequest = void 0;
class UpdateSegmentRequest {
    static getAttributeTypeMap() {
        return UpdateSegmentRequest.attributeTypeMap;
    }
    constructor() {
    }
}
exports.UpdateSegmentRequest = UpdateSegmentRequest;
UpdateSegmentRequest.discriminator = undefined;
UpdateSegmentRequest.attributeTypeMap = [
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
        "name": "filters",
        "baseName": "filters",
        "type": "Array<FilterExpression>",
        "format": ""
    }
];
//# sourceMappingURL=UpdateSegmentRequest.js.map