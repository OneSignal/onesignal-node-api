import { JourneyCondition } from './JourneyCondition';
import { JourneyNode } from './JourneyNode';
export declare class JourneyBranch {
    'id'?: string;
    'condition'?: JourneyCondition;
    'weight'?: number;
    'nodes'?: Array<JourneyNode>;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
