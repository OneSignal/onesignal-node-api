"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailWarmUpRequest = void 0;
class EmailWarmUpRequest {
    static getAttributeTypeMap() {
        return EmailWarmUpRequest.attributeTypeMap;
    }
    constructor() {
    }
}
exports.EmailWarmUpRequest = EmailWarmUpRequest;
EmailWarmUpRequest.discriminator = undefined;
EmailWarmUpRequest.attributeTypeMap = [
    {
        "name": "stages",
        "baseName": "stages",
        "type": "Array<EmailWarmUpStage>",
        "format": ""
    },
    {
        "name": "strategy",
        "baseName": "strategy",
        "type": "EmailWarmUpRequestStrategyEnum",
        "format": ""
    }
];
//# sourceMappingURL=EmailWarmUpRequest.js.map