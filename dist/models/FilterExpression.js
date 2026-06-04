"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterExpression = void 0;
class FilterExpression {
    static getAttributeTypeMap() {
        return FilterExpression.attributeTypeMap;
    }
    constructor() {
    }
}
exports.FilterExpression = FilterExpression;
FilterExpression.discriminator = undefined;
FilterExpression.attributeTypeMap = [
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
        "type": "FilterExpressionRelationEnum",
        "format": ""
    },
    {
        "name": "operator",
        "baseName": "operator",
        "type": "FilterExpressionOperatorEnum",
        "format": ""
    }
];
//# sourceMappingURL=FilterExpression.js.map