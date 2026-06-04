"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericError = void 0;
class GenericError {
    static getAttributeTypeMap() {
        return GenericError.attributeTypeMap;
    }
    constructor() {
    }
}
exports.GenericError = GenericError;
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
//# sourceMappingURL=GenericError.js.map