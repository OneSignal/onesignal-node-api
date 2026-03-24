"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateApiKeyRequest = void 0;
var UpdateApiKeyRequest = (function () {
    function UpdateApiKeyRequest() {
    }
    UpdateApiKeyRequest.getAttributeTypeMap = function () {
        return UpdateApiKeyRequest.attributeTypeMap;
    };
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
    return UpdateApiKeyRequest;
}());
exports.UpdateApiKeyRequest = UpdateApiKeyRequest;
//# sourceMappingURL=UpdateApiKeyRequest.js.map