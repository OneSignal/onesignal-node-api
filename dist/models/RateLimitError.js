"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimitError = void 0;
var RateLimitError = (function () {
    function RateLimitError() {
    }
    RateLimitError.getAttributeTypeMap = function () {
        return RateLimitError.attributeTypeMap;
    };
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
    return RateLimitError;
}());
exports.RateLimitError = RateLimitError;
//# sourceMappingURL=RateLimitError.js.map