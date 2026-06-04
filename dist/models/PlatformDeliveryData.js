"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformDeliveryData = void 0;
class PlatformDeliveryData {
    static getAttributeTypeMap() {
        return PlatformDeliveryData.attributeTypeMap;
    }
    constructor() {
    }
}
exports.PlatformDeliveryData = PlatformDeliveryData;
PlatformDeliveryData.discriminator = undefined;
PlatformDeliveryData.attributeTypeMap = [
    {
        "name": "edge_web_push",
        "baseName": "edge_web_push",
        "type": "DeliveryData",
        "format": ""
    },
    {
        "name": "chrome_web_push",
        "baseName": "chrome_web_push",
        "type": "DeliveryData",
        "format": ""
    },
    {
        "name": "firefox_web_push",
        "baseName": "firefox_web_push",
        "type": "DeliveryData",
        "format": ""
    },
    {
        "name": "safari_web_push",
        "baseName": "safari_web_push",
        "type": "DeliveryData",
        "format": ""
    },
    {
        "name": "android",
        "baseName": "android",
        "type": "DeliveryData",
        "format": ""
    },
    {
        "name": "ios",
        "baseName": "ios",
        "type": "DeliveryData",
        "format": ""
    },
    {
        "name": "sms",
        "baseName": "sms",
        "type": "DeliveryData & PlatformDeliveryDataSmsAllOf",
        "format": ""
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "DeliveryData & PlatformDeliveryDataEmailAllOf",
        "format": ""
    }
];
//# sourceMappingURL=PlatformDeliveryData.js.map