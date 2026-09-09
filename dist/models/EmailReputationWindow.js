"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailReputationWindow = void 0;
class EmailReputationWindow {
    static getAttributeTypeMap() {
        return EmailReputationWindow.attributeTypeMap;
    }
    constructor() {
    }
}
exports.EmailReputationWindow = EmailReputationWindow;
EmailReputationWindow.discriminator = undefined;
EmailReputationWindow.attributeTypeMap = [
    {
        "name": "bounce_rate",
        "baseName": "bounce_rate",
        "type": "number",
        "format": "double"
    },
    {
        "name": "complaint_rate",
        "baseName": "complaint_rate",
        "type": "number",
        "format": "double"
    }
];
//# sourceMappingURL=EmailReputationWindow.js.map