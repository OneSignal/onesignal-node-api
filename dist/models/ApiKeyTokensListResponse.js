"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeyTokensListResponse = void 0;
class ApiKeyTokensListResponse {
    static getAttributeTypeMap() {
        return ApiKeyTokensListResponse.attributeTypeMap;
    }
    constructor() {
    }
}
exports.ApiKeyTokensListResponse = ApiKeyTokensListResponse;
ApiKeyTokensListResponse.discriminator = undefined;
ApiKeyTokensListResponse.attributeTypeMap = [
    {
        "name": "tokens",
        "baseName": "tokens",
        "type": "Array<ApiKeyToken>",
        "format": ""
    }
];
//# sourceMappingURL=ApiKeyTokensListResponse.js.map