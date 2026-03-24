"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformDeliveryDataEmailAllOf = void 0;
var PlatformDeliveryDataEmailAllOf = (function () {
    function PlatformDeliveryDataEmailAllOf() {
    }
    PlatformDeliveryDataEmailAllOf.getAttributeTypeMap = function () {
        return PlatformDeliveryDataEmailAllOf.attributeTypeMap;
    };
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
    return PlatformDeliveryDataEmailAllOf;
}());
exports.PlatformDeliveryDataEmailAllOf = PlatformDeliveryDataEmailAllOf;
//# sourceMappingURL=PlatformDeliveryDataEmailAllOf.js.map