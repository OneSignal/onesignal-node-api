"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutcomeData = void 0;
class OutcomeData {
    static getAttributeTypeMap() {
        return OutcomeData.attributeTypeMap;
    }
    constructor() {
    }
}
exports.OutcomeData = OutcomeData;
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
//# sourceMappingURL=OutcomeData.js.map