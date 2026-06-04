"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserConflictResponse = void 0;
class CreateUserConflictResponse {
    static getAttributeTypeMap() {
        return CreateUserConflictResponse.attributeTypeMap;
    }
    constructor() {
    }
}
exports.CreateUserConflictResponse = CreateUserConflictResponse;
CreateUserConflictResponse.discriminator = undefined;
CreateUserConflictResponse.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<CreateUserConflictResponseErrorsInner>",
        "format": ""
    }
];
//# sourceMappingURL=CreateUserConflictResponse.js.map