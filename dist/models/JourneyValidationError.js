"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyValidationError = void 0;
class JourneyValidationError {
    static getAttributeTypeMap() {
        return JourneyValidationError.attributeTypeMap;
    }
    constructor() {
    }
}
exports.JourneyValidationError = JourneyValidationError;
JourneyValidationError.discriminator = undefined;
JourneyValidationError.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "string",
        "format": ""
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string",
        "format": ""
    },
    {
        "name": "meta",
        "baseName": "meta",
        "type": "{ [key: string]: any; }",
        "format": ""
    }
];
//# sourceMappingURL=JourneyValidationError.js.map