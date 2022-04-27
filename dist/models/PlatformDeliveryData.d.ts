import { DeliveryData } from './DeliveryData';
export declare class PlatformDeliveryData {
    'edge_web_push'?: DeliveryData;
    'chrome_web_push'?: DeliveryData;
    'firefox_web_push'?: DeliveryData;
    'safari_web_push'?: DeliveryData;
    'android'?: DeliveryData;
    'ios'?: DeliveryData;
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
