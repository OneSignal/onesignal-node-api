import { LanguageStringMap } from './LanguageStringMap';
export declare class UpdateLiveActivityRequest {
    'name': string;
    'event': UpdateLiveActivityRequestEventEnum;
    'event_updates': object;
    'contents'?: LanguageStringMap;
    'headings'?: LanguageStringMap;
    'sound'?: string;
    'stale_date'?: number;
    'dismissal_date'?: number;
    'priority'?: number;
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
export type UpdateLiveActivityRequestEventEnum = "update" | "end";
