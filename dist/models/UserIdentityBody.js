"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserIdentityBody = void 0;
class UserIdentityBody {
    static getAttributeTypeMap() {
        return UserIdentityBody.attributeTypeMap;
    }
    constructor() {
    }
}
exports.UserIdentityBody = UserIdentityBody;
UserIdentityBody.discriminator = undefined;
UserIdentityBody.attributeTypeMap = [
    {
        "name": "identity",
        "baseName": "identity",
        "type": "{ [key: string]: string; }",
        "format": ""
    }
];
//# sourceMappingURL=UserIdentityBody.js.map