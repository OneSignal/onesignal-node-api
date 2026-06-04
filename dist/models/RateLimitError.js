"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimitError = void 0;
class RateLimitError {
    static getAttributeTypeMap() {
        return RateLimitError.attributeTypeMap;
    }
    constructor() {
    }
}
exports.RateLimitError = RateLimitError;
RateLimitError.discriminator = undefined;
RateLimitError.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "limit",
        "baseName": "limit",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=RateLimitError.js.map