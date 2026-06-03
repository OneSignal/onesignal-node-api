"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateApiKeyRequest = void 0;
class UpdateApiKeyRequest {
    static getAttributeTypeMap() {
        return UpdateApiKeyRequest.attributeTypeMap;
    }
    constructor() {
    }
}
exports.UpdateApiKeyRequest = UpdateApiKeyRequest;
UpdateApiKeyRequest.discriminator = undefined;
UpdateApiKeyRequest.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "ip_allowlist_mode",
        "baseName": "ip_allowlist_mode",
        "type": "UpdateApiKeyRequestIpAllowlistModeEnum",
        "format": ""
    },
    {
        "name": "ip_allowlist",
        "baseName": "ip_allowlist",
        "type": "Array<string>",
        "format": ""
    }
];
//# sourceMappingURL=UpdateApiKeyRequest.js.map