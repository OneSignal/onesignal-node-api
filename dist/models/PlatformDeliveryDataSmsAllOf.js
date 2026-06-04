"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformDeliveryDataSmsAllOf = void 0;
class PlatformDeliveryDataSmsAllOf {
    static getAttributeTypeMap() {
        return PlatformDeliveryDataSmsAllOf.attributeTypeMap;
    }
    constructor() {
    }
}
exports.PlatformDeliveryDataSmsAllOf = PlatformDeliveryDataSmsAllOf;
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
//# sourceMappingURL=PlatformDeliveryDataSmsAllOf.js.map