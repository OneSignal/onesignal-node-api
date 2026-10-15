"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailMetrics = void 0;
class EmailMetrics {
    static getAttributeTypeMap() {
        return EmailMetrics.attributeTypeMap;
    }
    constructor() {
    }
}
exports.EmailMetrics = EmailMetrics;
EmailMetrics.discriminator = undefined;
EmailMetrics.attributeTypeMap = [
    {
        "name": "sent",
        "baseName": "sent",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "delivered",
        "baseName": "delivered",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "opened",
        "baseName": "opened",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "clicked",
        "baseName": "clicked",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "unique_opened",
        "baseName": "unique_opened",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "unique_clicked",
        "baseName": "unique_clicked",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "failed",
        "baseName": "failed",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "bounced",
        "baseName": "bounced",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "complained",
        "baseName": "complained",
        "type": "number",
        "format": "int64"
    }
];
//# sourceMappingURL=EmailMetrics.js.map