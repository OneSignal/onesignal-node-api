"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateApiKeyResponse = void 0;
class CreateApiKeyResponse {
    static getAttributeTypeMap() {
        return CreateApiKeyResponse.attributeTypeMap;
    }
    constructor() {
    }
}
exports.CreateApiKeyResponse = CreateApiKeyResponse;
CreateApiKeyResponse.discriminator = undefined;
CreateApiKeyResponse.attributeTypeMap = [
    {
        "name": "token_id",
        "baseName": "token_id",
        "type": "string",
        "format": ""
    },
    {
        "name": "formatted_token",
        "baseName": "formatted_token",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=CreateApiKeyResponse.js.map