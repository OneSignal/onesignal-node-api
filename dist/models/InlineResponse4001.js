"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse4001 = void 0;
var InlineResponse4001 = (function () {
    function InlineResponse4001() {
    }
    InlineResponse4001.getAttributeTypeMap = function () {
        return InlineResponse4001.attributeTypeMap;
    };
    InlineResponse4001.discriminator = undefined;
    InlineResponse4001.attributeTypeMap = [
        {
            "name": "success",
            "baseName": "success",
            "type": "string",
            "format": ""
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return InlineResponse4001;
}());
exports.InlineResponse4001 = InlineResponse4001;
//# sourceMappingURL=InlineResponse4001.js.map