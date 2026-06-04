"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureAuthMethods = exports.RestApiKeyAuthentication = exports.OrganizationApiKeyAuthentication = void 0;
class OrganizationApiKeyAuthentication {
    constructor(tokenProvider) {
        this.tokenProvider = tokenProvider;
    }
    getName() {
        return "organization_api_key";
    }
    async applySecurityAuthentication(context) {
        context.setHeaderParam("Authorization", "Key " + await this.tokenProvider.getToken());
    }
}
exports.OrganizationApiKeyAuthentication = OrganizationApiKeyAuthentication;
class RestApiKeyAuthentication {
    constructor(tokenProvider) {
        this.tokenProvider = tokenProvider;
    }
    getName() {
        return "rest_api_key";
    }
    async applySecurityAuthentication(context) {
        context.setHeaderParam("Authorization", "Key " + await this.tokenProvider.getToken());
    }
}
exports.RestApiKeyAuthentication = RestApiKeyAuthentication;
function configureAuthMethods(config) {
    let authMethods = {};
    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"];
    if (config["organization_api_key"]) {
        authMethods["organization_api_key"] = new OrganizationApiKeyAuthentication(config["organization_api_key"]["tokenProvider"]);
    }
    if (config["rest_api_key"]) {
        authMethods["rest_api_key"] = new RestApiKeyAuthentication(config["rest_api_key"]["tokenProvider"]);
    }
    return authMethods;
}
exports.configureAuthMethods = configureAuthMethods;
//# sourceMappingURL=auth.js.map