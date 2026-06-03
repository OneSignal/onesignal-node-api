"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    static getAttributeTypeMap() {
        return User.attributeTypeMap;
    }
    constructor() {
    }
}
exports.User = User;
User.discriminator = undefined;
User.attributeTypeMap = [
    {
        "name": "properties",
        "baseName": "properties",
        "type": "PropertiesObject",
        "format": ""
    },
    {
        "name": "identity",
        "baseName": "identity",
        "type": "{ [key: string]: string; }",
        "format": ""
    },
    {
        "name": "subscriptions",
        "baseName": "subscriptions",
        "type": "Array<Subscription>",
        "format": ""
    }
];
//# sourceMappingURL=User.js.map