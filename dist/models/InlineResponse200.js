"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse200 = void 0;
var InlineResponse200 = (function () {
    function InlineResponse200() {
    }
    InlineResponse200.getAttributeTypeMap = function () {
        return InlineResponse200.attributeTypeMap;
    };
    InlineResponse200.discriminator = undefined;
    InlineResponse200.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "recipients",
            "baseName": "recipients",
            "type": "number",
            "format": ""
        },
        {
            "name": "external_id",
            "baseName": "external_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "any | Array<string>",
            "format": ""
        }
    ];
    return InlineResponse200;
}());
exports.InlineResponse200 = InlineResponse200;
//# sourceMappingURL=InlineResponse200.js.map