"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeyToken = void 0;
var ApiKeyToken = (function () {
    function ApiKeyToken() {
    }
    ApiKeyToken.getAttributeTypeMap = function () {
        return ApiKeyToken.attributeTypeMap;
    };
    ApiKeyToken.discriminator = undefined;
    ApiKeyToken.attributeTypeMap = [
        {
            "name": "token_id",
            "baseName": "token_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "updated_at",
            "baseName": "updated_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "created_at",
            "baseName": "created_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "ip_allowlist_mode",
            "baseName": "ip_allowlist_mode",
            "type": "ApiKeyTokenIpAllowlistModeEnum",
            "format": ""
        },
        {
            "name": "ip_allowlist",
            "baseName": "ip_allowlist",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return ApiKeyToken;
}());
exports.ApiKeyToken = ApiKeyToken;
//# sourceMappingURL=ApiKeyToken.js.map