"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailProviderMetricsTimeseriesResponse = void 0;
class EmailProviderMetricsTimeseriesResponse {
    static getAttributeTypeMap() {
        return EmailProviderMetricsTimeseriesResponse.attributeTypeMap;
    }
    constructor() {
    }
}
exports.EmailProviderMetricsTimeseriesResponse = EmailProviderMetricsTimeseriesResponse;
EmailProviderMetricsTimeseriesResponse.discriminator = undefined;
EmailProviderMetricsTimeseriesResponse.attributeTypeMap = [
    {
        "name": "events",
        "baseName": "events",
        "type": "Array<EmailProviderMetricsEvent>",
        "format": ""
    }
];
//# sourceMappingURL=EmailProviderMetricsTimeseriesResponse.js.map