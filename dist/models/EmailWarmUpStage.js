"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailWarmUpStage = void 0;
class EmailWarmUpStage {
    static getAttributeTypeMap() {
        return EmailWarmUpStage.attributeTypeMap;
    }
    constructor() {
    }
}
exports.EmailWarmUpStage = EmailWarmUpStage;
EmailWarmUpStage.discriminator = undefined;
EmailWarmUpStage.attributeTypeMap = [
    {
        "name": "start",
        "baseName": "start",
        "type": "string",
        "format": "date-time"
    },
    {
        "name": "end",
        "baseName": "end",
        "type": "string",
        "format": "date-time"
    },
    {
        "name": "quota",
        "baseName": "quota",
        "type": "number",
        "format": ""
    },
    {
        "name": "acked",
        "baseName": "acked",
        "type": "boolean",
        "format": ""
    }
];
//# sourceMappingURL=EmailWarmUpStage.js.map