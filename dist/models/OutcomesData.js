"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutcomesData = void 0;
var OutcomesData = (function () {
    function OutcomesData() {
    }
    OutcomesData.getAttributeTypeMap = function () {
        return OutcomesData.attributeTypeMap;
    };
    OutcomesData.discriminator = undefined;
    OutcomesData.attributeTypeMap = [
        {
            "name": "outcomes",
            "baseName": "outcomes",
            "type": "Array<OutcomeData>",
            "format": ""
        }
    ];
    return OutcomesData;
}());
exports.OutcomesData = OutcomesData;
//# sourceMappingURL=OutcomesData.js.map