"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertiesObject = void 0;
var PropertiesObject = (function () {
    function PropertiesObject() {
    }
    PropertiesObject.getAttributeTypeMap = function () {
        return PropertiesObject.attributeTypeMap;
    };
    PropertiesObject.discriminator = undefined;
    PropertiesObject.attributeTypeMap = [
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string",
            "format": ""
        },
        {
            "name": "timezone_id",
            "baseName": "timezone_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "lat",
            "baseName": "lat",
            "type": "number",
            "format": ""
        },
        {
            "name": "long",
            "baseName": "long",
            "type": "number",
            "format": ""
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": ""
        },
        {
            "name": "first_active",
            "baseName": "first_active",
            "type": "number",
            "format": ""
        },
        {
            "name": "last_active",
            "baseName": "last_active",
            "type": "number",
            "format": ""
        },
        {
            "name": "amount_spent",
            "baseName": "amount_spent",
            "type": "number",
            "format": ""
        },
        {
            "name": "purchases",
            "baseName": "purchases",
            "type": "Array<Purchase>",
            "format": ""
        },
        {
            "name": "ip",
            "baseName": "ip",
            "type": "string",
            "format": ""
        }
    ];
    return PropertiesObject;
}());
exports.PropertiesObject = PropertiesObject;
//# sourceMappingURL=PropertiesObject.js.map