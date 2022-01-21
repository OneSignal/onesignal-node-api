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