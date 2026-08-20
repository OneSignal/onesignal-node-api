import { JourneyBranch } from './JourneyBranch';
import { JourneyTimeWindow } from './JourneyTimeWindow';
import { JourneyWaitUntilExpiration } from './JourneyWaitUntilExpiration';
export declare class UpdateJourneyNodeRequest {
    'client_node_id'?: string;
    'annotation'?: string;
    'duration_seconds'?: number;
    'relative_to'?: UpdateJourneyNodeRequestRelativeToEnum;
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
    'concurrency_key'?: string;
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
export type UpdateJourneyNodeRequestRelativeToEnum = "schedule_in_timezone" | "last_active_time";
