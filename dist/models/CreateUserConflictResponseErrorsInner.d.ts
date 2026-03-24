import { CreateUserConflictResponseErrorsItemsMeta } from './CreateUserConflictResponseErrorsItemsMeta';
export declare class CreateUserConflictResponseErrorsInner {
    'code'?: string;
    'title'?: string;
    'meta'?: CreateUserConflictResponseErrorsItemsMeta;
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
