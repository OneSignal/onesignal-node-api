"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionBody = void 0;
class SubscriptionBody {
    static getAttributeTypeMap() {
        return SubscriptionBody.attributeTypeMap;
    }
    constructor() {
    }
}
exports.SubscriptionBody = SubscriptionBody;
SubscriptionBody.discriminator = undefined;
SubscriptionBody.attributeTypeMap = [
    {
        "name": "subscription",
        "baseName": "subscription",
        "type": "Subscription",
        "format": ""
    }
];
//# sourceMappingURL=SubscriptionBody.js.map