import { EmailProviderMetricsEvent } from './EmailProviderMetricsEvent';
export declare class EmailProviderMetricsTimeseriesResponse {
    'events'?: Array<EmailProviderMetricsEvent>;
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
