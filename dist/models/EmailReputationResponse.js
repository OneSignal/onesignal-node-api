"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailReputationResponse = void 0;
class EmailReputationResponse {
    static getAttributeTypeMap() {
        return EmailReputationResponse.attributeTypeMap;
    }
    constructor() {
    }
}
exports.EmailReputationResponse = EmailReputationResponse;
EmailReputationResponse.discriminator = undefined;
EmailReputationResponse.attributeTypeMap = [
    {
        "name": "last_24_hours",
        "baseName": "last_24_hours",
        "type": "EmailReputationWindow",
        "format": ""
    },
    {
        "name": "last_7_days",
        "baseName": "last_7_days",
        "type": "EmailReputationWindow",
        "format": ""
    },
    {
        "name": "last_30_days",
        "baseName": "last_30_days",
        "type": "EmailReputationWindow",
        "format": ""
    }
];
//# sourceMappingURL=EmailReputationResponse.js.map