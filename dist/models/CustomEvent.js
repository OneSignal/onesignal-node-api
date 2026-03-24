"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomEvent = void 0;
var CustomEvent = (function () {
    function CustomEvent() {
    }
    CustomEvent.getAttributeTypeMap = function () {
        return CustomEvent.attributeTypeMap;
    };
    CustomEvent.discriminator = undefined;
    CustomEvent.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "external_id",
            "baseName": "external_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "onesignal_id",
            "baseName": "onesignal_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "string",
            "format": "date-time"
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "{ [key: string]: any; }",
            "format": ""
        }
    ];
    return CustomEvent;
}());
exports.CustomEvent = CustomEvent;
//# sourceMappingURL=CustomEvent.js.map