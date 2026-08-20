import { JourneyBranchStats } from './JourneyBranchStats';
import { JourneyNodeStats } from './JourneyNodeStats';
export declare class JourneyStats {
    'id'?: string;
    'started'?: number;
    'completed'?: number;
    'exited_early'?: number;
    'nodes'?: {
        [key: string]: JourneyNodeStats;
    };
    'branches'?: {
        [key: string]: JourneyBranchStats;
    };
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
