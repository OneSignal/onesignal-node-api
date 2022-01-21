"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerSlice = void 0;
var PlayerSlice = (function () {
    function PlayerSlice() {
    }
    PlayerSlice.getAttributeTypeMap = function () {
        return PlayerSlice.attributeTypeMap;
    };
    PlayerSlice.discriminator = undefined;
    PlayerSlice.attributeTypeMap = [
        {
            "name": "total_count",
            "baseName": "total_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": ""
        },
        {
            "name": "players",
            "baseName": "players",
            "type": "Array<Player>",
            "format": ""
        }
    ];
    return PlayerSlice;
}());
exports.PlayerSlice = PlayerSlice;
//# sourceMappingURL=PlayerSlice.js.map