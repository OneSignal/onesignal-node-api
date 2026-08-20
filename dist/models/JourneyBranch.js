"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyBranch = void 0;
class JourneyBranch {
    static getAttributeTypeMap() {
        return JourneyBranch.attributeTypeMap;
    }
    constructor() {
    }
}
exports.JourneyBranch = JourneyBranch;
JourneyBranch.discriminator = undefined;
JourneyBranch.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "condition",
        "baseName": "condition",
        "type": "JourneyCondition",
        "format": ""
    },
    {
        "name": "weight",
        "baseName": "weight",
        "type": "number",
        "format": ""
    },
    {
        "name": "nodes",
        "baseName": "nodes",
        "type": "Array<JourneyNode>",
        "format": ""
    }
];
//# sourceMappingURL=JourneyBranch.js.map