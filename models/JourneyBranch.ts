/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { JourneyCondition } from './JourneyCondition';
import { JourneyNode } from './JourneyNode';
import { HttpFile } from '../http/http';

export class JourneyBranch {
    /**
    * Server-assigned branch identifier. Read-only on create; echo it on update to keep the branch.
    */
    'id'?: string;
    'condition'?: JourneyCondition;
    /**
    * Branch weight for split_range nodes. Weights across a node\'s branches must sum to 100.
    */
    'weight'?: number;
    /**
    * Nodes run when this branch is taken, before flow converges to the next sibling node.
    */
    'nodes'?: Array<JourneyNode>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "condition",
            "baseName": "condition",
            "type": "JourneyCondition",
            "format": ""
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "number",
            "format": ""
        },
        {
            "name": "nodes",
            "baseName": "nodes",
            "type": "Array<JourneyNode>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JourneyBranch.attributeTypeMap;
    }

    public constructor() {
    }
}

