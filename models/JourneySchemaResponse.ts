/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class JourneySchemaResponse {
    /**
    * The requested operation.
    */
    'operation': JourneySchemaResponseOperationEnum;
    /**
    * The document that the schema describes. For update_node, merged_node is the complete node after applying the patch.
    */
    'document': JourneySchemaResponseDocumentEnum;
    /**
    * A self-contained JSON Schema Draft 6 document with local $defs references.
    */
    'schema': { [key: string]: any; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "operation",
            "baseName": "operation",
            "type": "JourneySchemaResponseOperationEnum",
            "format": ""
        },
        {
            "name": "document",
            "baseName": "document",
            "type": "JourneySchemaResponseDocumentEnum",
            "format": ""
        },
        {
            "name": "schema",
            "baseName": "schema",
            "type": "{ [key: string]: any; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JourneySchemaResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


export type JourneySchemaResponseOperationEnum = "create" | "duplicate" | "update" | "update_node" ;
export type JourneySchemaResponseDocumentEnum = "body" | "overrides" | "patch" | "merged_node" ;

