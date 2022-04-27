"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.servers = exports.server1 = exports.ServerConfiguration = void 0;
var http_1 = require("./http/http");
var ServerConfiguration = (function () {
    function ServerConfiguration(url, variableConfiguration) {
        this.url = url;
        this.variableConfiguration = variableConfiguration;
    }
    ServerConfiguration.prototype.setVariables = function (variableConfiguration) {
        Object.assign(this.variableConfiguration, variableConfiguration);
    };
    ServerConfiguration.prototype.getConfiguration = function () {
        return this.variableConfiguration;
    };
    ServerConfiguration.prototype.getUrl = function () {
        var replacedUrl = this.url;
        for (var key in this.variableConfiguration) {
            var re = new RegExp("{" + key + "}", "g");
            replacedUrl = replacedUrl.replace(re, this.variableConfiguration[key]);
        }
        return replacedUrl;
    };
    ServerConfiguration.prototype.makeRequestContext = function (endpoint, httpMethod) {
        return new http_1.RequestContext(this.getUrl() + endpoint, httpMethod);
    };
    return ServerConfiguration;
}());
exports.ServerConfiguration = ServerConfiguration;
exports.server1 = new ServerConfiguration("https://onesignal.com/api/v1", {});
exports.servers = [exports.server1];
//# sourceMappingURL=servers.js.map