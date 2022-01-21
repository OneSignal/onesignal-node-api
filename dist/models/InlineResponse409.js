"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse409 = void 0;
var InlineResponse409 = (function () {
    function InlineResponse409() {
    }
    InlineResponse409.getAttributeTypeMap = function () {
        return InlineResponse409.attributeTypeMap;
    };
    InlineResponse409.discriminator = undefined;
    InlineResponse409.attributeTypeMap = [
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return InlineResponse409;
}());
exports.InlineResponse409 = InlineResponse409;
//# sourceMappingURL=InlineResponse409.js.map