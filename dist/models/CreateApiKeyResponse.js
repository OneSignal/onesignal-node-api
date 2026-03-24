"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateApiKeyResponse = void 0;
var CreateApiKeyResponse = (function () {
    function CreateApiKeyResponse() {
    }
    CreateApiKeyResponse.getAttributeTypeMap = function () {
        return CreateApiKeyResponse.attributeTypeMap;
    };
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
    return CreateApiKeyResponse;
}());
exports.CreateApiKeyResponse = CreateApiKeyResponse;
//# sourceMappingURL=CreateApiKeyResponse.js.map