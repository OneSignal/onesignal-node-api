"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertiesDeltas = void 0;
class PropertiesDeltas {
    static getAttributeTypeMap() {
        return PropertiesDeltas.attributeTypeMap;
    }
    constructor() {
    }
}
exports.PropertiesDeltas = PropertiesDeltas;
PropertiesDeltas.discriminator = undefined;
PropertiesDeltas.attributeTypeMap = [
    {
        "name": "session_time",
        "baseName": "session_time",
        "type": "number",
        "format": ""
    },
    {
        "name": "session_count",
        "baseName": "session_count",
        "type": "number",
        "format": ""
    },
    {
        "name": "purchases",
        "baseName": "purchases",
        "type": "Array<Purchase>",
        "format": ""
    }
];
//# sourceMappingURL=PropertiesDeltas.js.map