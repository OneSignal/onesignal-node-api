"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericSuccessBoolResponse = void 0;
class GenericSuccessBoolResponse {
    static getAttributeTypeMap() {
        return GenericSuccessBoolResponse.attributeTypeMap;
    }
    constructor() {
    }
}
exports.GenericSuccessBoolResponse = GenericSuccessBoolResponse;
GenericSuccessBoolResponse.discriminator = undefined;
GenericSuccessBoolResponse.attributeTypeMap = [
    {
        "name": "success",
        "baseName": "success",
        "type": "boolean",
        "format": ""
    }
];
//# sourceMappingURL=GenericSuccessBoolResponse.js.map