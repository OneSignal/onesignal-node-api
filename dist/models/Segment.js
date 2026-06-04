"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Segment = void 0;
class Segment {
    static getAttributeTypeMap() {
        return Segment.attributeTypeMap;
    }
    constructor() {
    }
}
exports.Segment = Segment;
Segment.discriminator = undefined;
Segment.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "filters",
        "baseName": "filters",
        "type": "Array<FilterExpression>",
        "format": ""
    }
];
//# sourceMappingURL=Segment.js.map