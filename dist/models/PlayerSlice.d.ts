import { Player } from './Player';
export declare class PlayerSlice {
    'total_count'?: number;
    'offset'?: number;
    'limit'?: number;
    'players'?: Array<Player>;
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
