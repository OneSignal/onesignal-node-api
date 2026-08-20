import { JourneyBranch } from './JourneyBranch';
import { JourneyTimeWindow } from './JourneyTimeWindow';
import { JourneyWaitUntilExpiration } from './JourneyWaitUntilExpiration';
export declare class JourneyNode {
    'id'?: string;
    'kind': JourneyNodeKindEnum;
    'client_node_id'?: string;
    'annotation'?: string;
    'duration_seconds'?: number;
    'relative_to'?: JourneyNodeRelativeToEnum;
    'windows'?: Array<JourneyTimeWindow>;
    'time_zone'?: string;
    'use_user_time_zone'?: boolean;
    'template_id'?: string;
    'iam_id'?: string;
    'user_ttl_seconds'?: number;
    'webhook_id'?: string;
    'assignments'?: {
        [key: string]: string;
    };
    'randomize_on_entry'?: boolean;
    'branches'?: Array<JourneyBranch>;
    'expiration'?: JourneyWaitUntilExpiration;
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
export type JourneyNodeKindEnum = "wait" | "time_window" | "send_push" | "send_email" | "send_sms" | "send_iam" | "send_webhook" | "tag" | "split_range" | "yes_no" | "wait_until";
export type JourneyNodeRelativeToEnum = "schedule_in_timezone" | "last_active_time";
