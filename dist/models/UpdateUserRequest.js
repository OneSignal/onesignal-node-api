"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserRequest = void 0;
class UpdateUserRequest {
    static getAttributeTypeMap() {
        return UpdateUserRequest.attributeTypeMap;
    }
    constructor() {
    }
}
exports.UpdateUserRequest = UpdateUserRequest;
UpdateUserRequest.discriminator = undefined;
UpdateUserRequest.attributeTypeMap = [
    {
        "name": "properties",
        "baseName": "properties",
        "type": "PropertiesObject",
        "format": ""
    },
    {
        "name": "refresh_device_metadata",
        "baseName": "refresh_device_metadata",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "deltas",
        "baseName": "deltas",
        "type": "PropertiesDeltas",
        "format": ""
    }
];
//# sourceMappingURL=UpdateUserRequest.js.map