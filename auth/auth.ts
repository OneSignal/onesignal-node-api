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
export class AppKeyAuthentication implements SecurityAuthentication {
    /**
     * Configures the http authentication with the required details.
     *
     * @param tokenProvider service that can provide the up-to-date token when needed
     */
    public constructor(private tokenProvider: TokenProvider) {}

    public getName(): string {
        return "app_key";
    }

    public async applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("Authorization", "Bearer " + await this.tokenProvider.getToken());
    }
}

/**
 * Applies http authentication to the request context.
 */
export class UserKeyAuthentication implements SecurityAuthentication {
    /**
     * Configures the http authentication with the required details.
     *
     * @param tokenProvider service that can provide the up-to-date token when needed
     */
    public constructor(private tokenProvider: TokenProvider) {}

    public getName(): string {
        return "user_key";
    }

    public async applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("Authorization", "Bearer " + await this.tokenProvider.getToken());
    }
}


export type AuthMethods = {
    "app_key"?: SecurityAuthentication,
    "user_key"?: SecurityAuthentication
}

export type ApiKeyConfiguration = string;
export type HttpBasicConfiguration = { "username": string, "password": string };
export type HttpBearerConfiguration = { tokenProvider: TokenProvider };
export type OAuth2Configuration = { accessToken: string };

export type AuthMethodsConfiguration = {
    "app_key"?: HttpBearerConfiguration,
    "user_key"?: HttpBearerConfiguration
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

    if (config["app_key"]) {
        authMethods["app_key"] = new AppKeyAuthentication(
            config["app_key"]["tokenProvider"]
        );
    }

    if (config["user_key"]) {
        authMethods["user_key"] = new UserKeyAuthentication(
            config["user_key"]["tokenProvider"]
        );
    }

    return authMethods;
}