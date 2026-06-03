"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateApiKeyRequest = void 0;
class CreateApiKeyRequest {
    static getAttributeTypeMap() {
        return CreateApiKeyRequest.attributeTypeMap;
    }
    constructor() {
    }
}
exports.CreateApiKeyRequest = CreateApiKeyRequest;
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
//# sourceMappingURL=CreateApiKeyRequest.js.map