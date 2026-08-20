import { JourneyEarlyExitRules } from './JourneyEarlyExitRules';
export declare class JourneyEarlyExit {
    'rules'?: JourneyEarlyExitRules;
    'tag_on_early_exit'?: {
        [key: string]: string;
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
