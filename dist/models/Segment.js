"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Segment = void 0;
var Segment = (function () {
    function Segment() {
    }
    Segment.getAttributeTypeMap = function () {
        return Segment.attributeTypeMap;
    };
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
            "type": "Array<FilterExpressions>",
            "format": ""
        }
    ];
    return Segment;
}());
exports.Segment = Segment;
//# sourceMappingURL=Segment.js.map