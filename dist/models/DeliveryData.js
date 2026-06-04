"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryData = void 0;
class DeliveryData {
    static getAttributeTypeMap() {
        return DeliveryData.attributeTypeMap;
    }
    constructor() {
    }
}
exports.DeliveryData = DeliveryData;
DeliveryData.discriminator = undefined;
DeliveryData.attributeTypeMap = [
    {
        "name": "successful",
        "baseName": "successful",
        "type": "number",
        "format": ""
    },
    {
        "name": "failed",
        "baseName": "failed",
        "type": "number",
        "format": ""
    },
    {
        "name": "errored",
        "baseName": "errored",
        "type": "number",
        "format": ""
    },
    {
        "name": "converted",
        "baseName": "converted",
        "type": "number",
        "format": ""
    },
    {
        "name": "received",
        "baseName": "received",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=DeliveryData.js.map