"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Purchase = void 0;
class Purchase {
    static getAttributeTypeMap() {
        return Purchase.attributeTypeMap;
    }
    constructor() {
    }
}
exports.Purchase = Purchase;
Purchase.discriminator = undefined;
Purchase.attributeTypeMap = [
    {
        "name": "sku",
        "baseName": "sku",
        "type": "string",
        "format": ""
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "string",
        "format": ""
    },
    {
        "name": "iso",
        "baseName": "iso",
        "type": "string",
        "format": ""
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=Purchase.js.map