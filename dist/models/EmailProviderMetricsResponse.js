"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailProviderMetricsResponse = void 0;
class EmailProviderMetricsResponse {
    static getAttributeTypeMap() {
        return EmailProviderMetricsResponse.attributeTypeMap;
    }
    constructor() {
    }
}
exports.EmailProviderMetricsResponse = EmailProviderMetricsResponse;
EmailProviderMetricsResponse.discriminator = undefined;
EmailProviderMetricsResponse.attributeTypeMap = [
    {
        "name": "providers",
        "baseName": "providers",
        "type": "Array<EmailProviderMetrics>",
        "format": ""
    }
];
//# sourceMappingURL=EmailProviderMetricsResponse.js.map