import { EmailWarmUpStage } from './EmailWarmUpStage';
export declare class EmailWarmUpRequest {
    'stages': Array<EmailWarmUpStage>;
    'strategy'?: EmailWarmUpRequestStrategyEnum;
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
export type EmailWarmUpRequestStrategyEnum = "recommended" | "custom";
