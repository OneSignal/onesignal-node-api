"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyCondition = void 0;
class JourneyCondition {
    static getAttributeTypeMap() {
        return JourneyCondition.attributeTypeMap;
    }
    constructor() {
    }
}
exports.JourneyCondition = JourneyCondition;
JourneyCondition.discriminator = undefined;
JourneyCondition.attributeTypeMap = [
    {
        "name": "kind",
        "baseName": "kind",
        "type": "JourneyConditionKindEnum",
        "format": ""
    },
    {
        "name": "included_segment_ids",
        "baseName": "included_segment_ids",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "excluded_segment_ids",
        "baseName": "excluded_segment_ids",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "action",
        "baseName": "action",
        "type": "JourneyConditionActionEnum",
        "format": ""
    },
    {
        "name": "sending_node_id",
        "baseName": "sending_node_id",
        "type": "string",
        "format": ""
    },
    {
        "name": "client_node_id",
        "baseName": "client_node_id",
        "type": "string",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "attributes",
        "baseName": "attributes",
        "type": "Array<Array<JourneyEventAttribute>>",
        "format": ""
    },
    {
        "name": "entry_event_match_attributes",
        "baseName": "entry_event_match_attributes",
        "type": "Array<object>",
        "format": ""
    }
];
//# sourceMappingURL=JourneyCondition.js.map