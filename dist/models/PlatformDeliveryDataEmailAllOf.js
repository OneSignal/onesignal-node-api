"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformDeliveryDataEmailAllOf = void 0;
class PlatformDeliveryDataEmailAllOf {
    static getAttributeTypeMap() {
        return PlatformDeliveryDataEmailAllOf.attributeTypeMap;
    }
    constructor() {
    }
}
exports.PlatformDeliveryDataEmailAllOf = PlatformDeliveryDataEmailAllOf;
PlatformDeliveryDataEmailAllOf.discriminator = undefined;
PlatformDeliveryDataEmailAllOf.attributeTypeMap = [
    {
        "name": "opened",
        "baseName": "opened",
        "type": "number",
        "format": ""
    },
    {
        "name": "unique_opens",
        "baseName": "unique_opens",
        "type": "number",
        "format": ""
    },
    {
        "name": "clicks",
        "baseName": "clicks",
        "type": "number",
        "format": ""
    },
    {
        "name": "unique_clicks",
        "baseName": "unique_clicks",
        "type": "number",
        "format": ""
    },
    {
        "name": "bounced",
        "baseName": "bounced",
        "type": "number",
        "format": ""
    },
    {
        "name": "reported_spam",
        "baseName": "reported_spam",
        "type": "number",
        "format": ""
    },
    {
        "name": "unsubscribed",
        "baseName": "unsubscribed",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=PlatformDeliveryDataEmailAllOf.js.map