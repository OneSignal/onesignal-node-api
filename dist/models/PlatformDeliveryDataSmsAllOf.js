"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformDeliveryDataSmsAllOf = void 0;
var PlatformDeliveryDataSmsAllOf = (function () {
    function PlatformDeliveryDataSmsAllOf() {
    }
    PlatformDeliveryDataSmsAllOf.getAttributeTypeMap = function () {
        return PlatformDeliveryDataSmsAllOf.attributeTypeMap;
    };
    PlatformDeliveryDataSmsAllOf.discriminator = undefined;
    PlatformDeliveryDataSmsAllOf.attributeTypeMap = [
        {
            "name": "provider_successful",
            "baseName": "provider_successful",
            "type": "number",
            "format": ""
        },
        {
            "name": "provider_failed",
            "baseName": "provider_failed",
            "type": "number",
            "format": ""
        },
        {
            "name": "provider_errored",
            "baseName": "provider_errored",
            "type": "number",
            "format": ""
        }
    ];
    return PlatformDeliveryDataSmsAllOf;
}());
exports.PlatformDeliveryDataSmsAllOf = PlatformDeliveryDataSmsAllOf;
//# sourceMappingURL=PlatformDeliveryDataSmsAllOf.js.map