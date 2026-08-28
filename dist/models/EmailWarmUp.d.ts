import { EmailWarmUpStage } from './EmailWarmUpStage';
export declare class EmailWarmUp {
    'stages'?: Array<EmailWarmUpStage>;
    'strategy'?: EmailWarmUpStrategyEnum;
    'status'?: EmailWarmUpStatusEnum;
    'is_live'?: boolean;
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
export type EmailWarmUpStrategyEnum = "recommended" | "custom";
export type EmailWarmUpStatusEnum = "initializing" | "draft" | "active" | "finished" | "canceled";
