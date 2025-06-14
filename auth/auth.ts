// typings for btoa are incorrect
//@ts-ignore
import * as btoa from "btoa";
import { RequestContext } from "../http/http";

/**
 * Interface authentication schemes.
 */
export interface SecurityAuthentication {
    /*
     * @return returns the name of the security authentication as specified in OAI
     */
    getName(): string;

    /**
     * Applies the authentication scheme to the request context
     *
     * @params context the request context which should use this authentication scheme
     */
    applySecurityAuthentication(context: RequestContext): void | Promise<void>;
}

export interface TokenProvider {
  getToken(): Promise<string> | string;
}

/**
 * Applies http authentication to the request context.
 */
export class OrganizationApiKeyAuthentication implements SecurityAuthentication {
    /**
     * Configures the http authentication with the required details.
     *
     * @param tokenProvider service that can provide the up-to-date token when needed
     */
    public constructor(private tokenProvider: TokenProvider) {}

    public getName(): string {
        return "organization_api_key";
    }

    public async applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("Authorization", "Key " + await this.tokenProvider.getToken());
    }
}

/**
 * Applies http authentication to the request context.
 */
export class RestApiKeyAuthentication implements SecurityAuthentication {
    /**
     * Configures the http authentication with the required details.
     *
     * @param tokenProvider service that can provide the up-to-date token when needed
     */
    public constructor(private tokenProvider: TokenProvider) {}

    public getName(): string {
        return "rest_api_key";
    }

    public async applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("Authorization", "Key " + await this.tokenProvider.getToken());
    }
}


export type AuthMethods = {
    "default"?: SecurityAuthentication,
    "organization_api_key"?: SecurityAuthentication,
    "rest_api_key"?: SecurityAuthentication
}

export type ApiKeyConfiguration = string;
export type HttpBasicConfiguration = { "username": string, "password": string };
export type HttpBearerConfiguration = { tokenProvider: TokenProvider };
export type OAuth2Configuration = { accessToken: string };

export type AuthMethodsConfiguration = {
    "default"?: SecurityAuthentication,
    "organization_api_key"?: HttpBearerConfiguration,
    "rest_api_key"?: HttpBearerConfiguration
}

/**
 * Creates the authentication methods from a swagger description.
 *
 */
export function configureAuthMethods(config: AuthMethodsConfiguration | undefined): AuthMethods {
    let authMethods: AuthMethods = {}

    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"]

    if (config["organization_api_key"]) {
        authMethods["organization_api_key"] = new OrganizationApiKeyAuthentication(
            config["organization_api_key"]["tokenProvider"]
        );
    }

    if (config["rest_api_key"]) {
        authMethods["rest_api_key"] = new RestApiKeyAuthentication(
            config["rest_api_key"]["tokenProvider"]
        );
    }

    return authMethods;
}
