"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserConflictResponseErrorsInner = void 0;
class CreateUserConflictResponseErrorsInner {
    static getAttributeTypeMap() {
        return CreateUserConflictResponseErrorsInner.attributeTypeMap;
    }
    constructor() {
    }
}
exports.CreateUserConflictResponseErrorsInner = CreateUserConflictResponseErrorsInner;
CreateUserConflictResponseErrorsInner.discriminator = undefined;
CreateUserConflictResponseErrorsInner.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "string",
        "format": ""
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string",
        "format": ""
    },
    {
        "name": "meta",
        "baseName": "meta",
        "type": "CreateUserConflictResponseErrorsItemsMeta",
        "format": ""
    }
];
//# sourceMappingURL=CreateUserConflictResponseErrorsInner.js.map