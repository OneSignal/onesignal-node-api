"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterExpressions = void 0;
var FilterExpressions = (function () {
    function FilterExpressions() {
    }
    FilterExpressions.getAttributeTypeMap = function () {
        return FilterExpressions.attributeTypeMap;
    };
    FilterExpressions.discriminator = undefined;
    FilterExpressions.attributeTypeMap = [
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
            "type": "FilterExpressionsRelationEnum",
            "format": ""
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "FilterExpressionsOperatorEnum",
            "format": ""
        }
    ];
    return FilterExpressions;
}());
exports.FilterExpressions = FilterExpressions;
//# sourceMappingURL=FilterExpressions.js.map