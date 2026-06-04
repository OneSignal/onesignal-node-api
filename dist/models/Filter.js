"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = void 0;
class Filter {
    static getAttributeTypeMap() {
        return Filter.attributeTypeMap;
    }
    constructor() {
    }
}
exports.Filter = Filter;
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
//# sourceMappingURL=Filter.js.map