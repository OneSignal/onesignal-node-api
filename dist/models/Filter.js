"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = void 0;
var Filter = (function () {
    function Filter() {
    }
    Filter.getAttributeTypeMap = function () {
        return Filter.attributeTypeMap;
    };
    Filter.discriminator = undefined;
    Filter.attributeTypeMap = [
        {
            "name": "field",
            "baseName": "field",
            "type": "string",
            "format": ""
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "hours_ago",
            "baseName": "hours_ago",
            "type": "string",
            "format": ""
        },
        {
            "name": "radius",
            "baseName": "radius",
            "type": "number",
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
            "name": "relation",
            "baseName": "relation",
            "type": "FilterRelationEnum",
            "format": ""
        }
    ];
    return Filter;
}());
exports.Filter = Filter;
//# sourceMappingURL=Filter.js.map