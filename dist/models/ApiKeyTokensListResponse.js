"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeyTokensListResponse = void 0;
var ApiKeyTokensListResponse = (function () {
    function ApiKeyTokensListResponse() {
    }
    ApiKeyTokensListResponse.getAttributeTypeMap = function () {
        return ApiKeyTokensListResponse.attributeTypeMap;
    };
    ApiKeyTokensListResponse.discriminator = undefined;
    ApiKeyTokensListResponse.attributeTypeMap = [
        {
            "name": "tokens",
            "baseName": "tokens",
            "type": "Array<ApiKeyToken>",
            "format": ""
        }
    ];
    return ApiKeyTokensListResponse;
}());
exports.ApiKeyTokensListResponse = ApiKeyTokensListResponse;
//# sourceMappingURL=ApiKeyTokensListResponse.js.map