import { JourneyTimePoint } from './JourneyTimePoint';
export declare class JourneyTimeWindow {
    'start'?: JourneyTimePoint;
    'end'?: JourneyTimePoint;
    'day_of_week'?: number;
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
