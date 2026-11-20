"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyValidationErrorResponse = void 0;
class JourneyValidationErrorResponse {
    static getAttributeTypeMap() {
        return JourneyValidationErrorResponse.attributeTypeMap;
    }
    constructor() {
    }
}
exports.JourneyValidationErrorResponse = JourneyValidationErrorResponse;
JourneyValidationErrorResponse.discriminator = undefined;
JourneyValidationErrorResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<JourneyValidationError>",
        "format": ""
    }
];
//# sourceMappingURL=JourneyValidationErrorResponse.js.map