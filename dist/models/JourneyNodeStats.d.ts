import { JourneyMessageStats } from './JourneyMessageStats';
export declare class JourneyNodeStats {
    'kind'?: JourneyNodeStatsKindEnum;
    'waiting'?: number;
    'completed'?: number;
    'exited_early'?: number;
    'message_stats'?: JourneyMessageStats;
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
export type JourneyNodeStatsKindEnum = "wait" | "time_window" | "send_push" | "send_email" | "send_sms" | "send_iam" | "send_webhook" | "tag" | "split_range" | "yes_no" | "wait_until";
