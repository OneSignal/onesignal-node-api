"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertiesDeltas = void 0;
var PropertiesDeltas = (function () {
    function PropertiesDeltas() {
    }
    PropertiesDeltas.getAttributeTypeMap = function () {
        return PropertiesDeltas.attributeTypeMap;
    };
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
    return PropertiesDeltas;
}());
exports.PropertiesDeltas = PropertiesDeltas;
//# sourceMappingURL=PropertiesDeltas.js.map