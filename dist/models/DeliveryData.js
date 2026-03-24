"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryData = void 0;
var DeliveryData = (function () {
    function DeliveryData() {
    }
    DeliveryData.getAttributeTypeMap = function () {
        return DeliveryData.attributeTypeMap;
    };
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
    return DeliveryData;
}());
exports.DeliveryData = DeliveryData;
//# sourceMappingURL=DeliveryData.js.map