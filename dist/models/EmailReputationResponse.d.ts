import { EmailReputationWindow } from './EmailReputationWindow';
export declare class EmailReputationResponse {
    'last_24_hours'?: EmailReputationWindow;
    'last_7_days'?: EmailReputationWindow;
    'last_30_days'?: EmailReputationWindow;
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
