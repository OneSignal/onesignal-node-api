"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailProviderMetrics = void 0;
class EmailProviderMetrics {
    static getAttributeTypeMap() {
        return EmailProviderMetrics.attributeTypeMap;
    }
    constructor() {
    }
}
exports.EmailProviderMetrics = EmailProviderMetrics;
EmailProviderMetrics.discriminator = undefined;
EmailProviderMetrics.attributeTypeMap = [
    {
        "name": "provider",
        "baseName": "provider",
        "type": "string",
        "format": ""
    },
    {
        "name": "metrics",
        "baseName": "metrics",
        "type": "EmailMetrics",
        "format": ""
    }
];
//# sourceMappingURL=EmailProviderMetrics.js.map