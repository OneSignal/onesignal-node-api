"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutcomesData = void 0;
class OutcomesData {
    static getAttributeTypeMap() {
        return OutcomesData.attributeTypeMap;
    }
    constructor() {
    }
}
exports.OutcomesData = OutcomesData;
OutcomesData.discriminator = undefined;
OutcomesData.attributeTypeMap = [
    {
        "name": "outcomes",
        "baseName": "outcomes",
        "type": "Array<OutcomeData>",
        "format": ""
    }
];
//# sourceMappingURL=OutcomesData.js.map