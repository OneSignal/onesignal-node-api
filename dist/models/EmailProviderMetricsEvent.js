"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailProviderMetricsEvent = void 0;
class EmailProviderMetricsEvent {
    static getAttributeTypeMap() {
        return EmailProviderMetricsEvent.attributeTypeMap;
    }
    constructor() {
    }
}
exports.EmailProviderMetricsEvent = EmailProviderMetricsEvent;
EmailProviderMetricsEvent.discriminator = undefined;
EmailProviderMetricsEvent.attributeTypeMap = [
    {
        "name": "date",
        "baseName": "date",
        "type": "string",
        "format": "date-time"
    },
    {
        "name": "metrics",
        "baseName": "metrics",
        "type": "EmailMetrics",
        "format": ""
    }
];
//# sourceMappingURL=EmailProviderMetricsEvent.js.map