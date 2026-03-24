import { LanguageStringMap } from './LanguageStringMap';
export declare class UpdateTemplateRequest {
    'name'?: string;
    'contents'?: LanguageStringMap;
    'is_email'?: boolean;
    'email_subject'?: string;
    'email_body'?: string;
    'is_sms'?: boolean;
    'dynamic_content'?: string;
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
