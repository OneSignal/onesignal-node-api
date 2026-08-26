/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { JourneyBranchStats } from './JourneyBranchStats';
import { JourneyNodeStats } from './JourneyNodeStats';
import { HttpFile } from '../http/http';

/**
* Journey-level counts plus flat, id-keyed maps of node and branch stats. Contains no definition detail; join it by id against the journey from View journey.
*/
export class JourneyStats {
    /**
    * UUID of the journey these stats belong to.
    */
    'id'?: string;
    /**
    * Users who entered the journey.
    */
    'started'?: number;
    /**
    * Users who reached the end of the journey normally.
    */
    'completed'?: number;
    /**
    * Users who left the journey through an early exit rule.
    */
    'exited_early'?: number;
    /**
    * Node stats keyed by node id. Includes every node in the graph, at any nesting depth.
    */
    'nodes'?: { [key: string]: JourneyNodeStats; };
    /**
    * Branch stats keyed by branch id. Empty for a journey with no branching nodes.
    */
    'branches'?: { [key: string]: JourneyBranchStats; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "started",
            "baseName": "started",
            "type": "number",
            "format": ""
        },
        {
            "name": "completed",
            "baseName": "completed",
            "type": "number",
            "format": ""
        },
        {
            "name": "exited_early",
            "baseName": "exited_early",
            "type": "number",
            "format": ""
        },
        {
            "name": "nodes",
            "baseName": "nodes",
            "type": "{ [key: string]: JourneyNodeStats; }",
            "format": ""
        },
        {
            "name": "branches",
            "baseName": "branches",
            "type": "{ [key: string]: JourneyBranchStats; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JourneyStats.attributeTypeMap;
    }

    public constructor() {
    }
}

