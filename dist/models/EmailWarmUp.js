"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailWarmUp = void 0;
class EmailWarmUp {
    static getAttributeTypeMap() {
        return EmailWarmUp.attributeTypeMap;
    }
    constructor() {
    }
}
exports.EmailWarmUp = EmailWarmUp;
EmailWarmUp.discriminator = undefined;
EmailWarmUp.attributeTypeMap = [
    {
        "name": "stages",
        "baseName": "stages",
        "type": "Array<EmailWarmUpStage>",
        "format": ""
    },
    {
        "name": "strategy",
        "baseName": "strategy",
        "type": "EmailWarmUpStrategyEnum",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "EmailWarmUpStatusEnum",
        "format": ""
    },
    {
        "name": "is_live",
        "baseName": "is_live",
        "type": "boolean",
        "format": ""
    }
];
//# sourceMappingURL=EmailWarmUp.js.map