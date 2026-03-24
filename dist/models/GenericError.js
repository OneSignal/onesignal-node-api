"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericError = void 0;
var GenericError = (function () {
    function GenericError() {
    }
    GenericError.getAttributeTypeMap = function () {
        return GenericError.attributeTypeMap;
    };
    GenericError.discriminator = undefined;
    GenericError.attributeTypeMap = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "any",
            "format": ""
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "any",
            "format": ""
        }
    ];
    return GenericError;
}());
exports.GenericError = GenericError;
//# sourceMappingURL=GenericError.js.map