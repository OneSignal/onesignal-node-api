"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterExpression = void 0;
var FilterExpression = (function () {
    function FilterExpression() {
    }
    FilterExpression.getAttributeTypeMap = function () {
        return FilterExpression.attributeTypeMap;
    };
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
    return FilterExpression;
}());
exports.FilterExpression = FilterExpression;
//# sourceMappingURL=FilterExpression.js.map