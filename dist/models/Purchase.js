"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Purchase = void 0;
var Purchase = (function () {
    function Purchase() {
    }
    Purchase.getAttributeTypeMap = function () {
        return Purchase.attributeTypeMap;
    };
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
            "type": "number",
            "format": ""
        },
        {
            "name": "iso",
            "baseName": "iso",
            "type": "string",
            "format": ""
        }
    ];
    return Purchase;
}());
exports.Purchase = Purchase;
//# sourceMappingURL=Purchase.js.map