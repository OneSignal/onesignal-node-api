"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateApiKeyRequest = void 0;
var CreateApiKeyRequest = (function () {
    function CreateApiKeyRequest() {
    }
    CreateApiKeyRequest.getAttributeTypeMap = function () {
        return CreateApiKeyRequest.attributeTypeMap;
    };
    CreateApiKeyRequest.discriminator = undefined;
    CreateApiKeyRequest.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "ip_allowlist_mode",
            "baseName": "ip_allowlist_mode",
            "type": "CreateApiKeyRequestIpAllowlistModeEnum",
            "format": ""
        },
        {
            "name": "ip_allowlist",
            "baseName": "ip_allowlist",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return CreateApiKeyRequest;
}());
exports.CreateApiKeyRequest = CreateApiKeyRequest;
//# sourceMappingURL=CreateApiKeyRequest.js.map