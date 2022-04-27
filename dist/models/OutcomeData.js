"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutcomeData = void 0;
var OutcomeData = (function () {
    function OutcomeData() {
    }
    OutcomeData.getAttributeTypeMap = function () {
        return OutcomeData.attributeTypeMap;
    };
    OutcomeData.discriminator = undefined;
    OutcomeData.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": ""
        },
        {
            "name": "aggregation",
            "baseName": "aggregation",
            "type": "OutcomeDataAggregationEnum",
            "format": ""
        }
    ];
    return OutcomeData;
}());
exports.OutcomeData = OutcomeData;
//# sourceMappingURL=OutcomeData.js.map