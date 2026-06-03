"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapHttpLibrary = exports.ResponseContext = exports.SelfDecodingBody = exports.RequestContext = exports.HttpException = exports.HttpMethod = void 0;
const rxjsStub_1 = require("../rxjsStub");
__exportStar(require("./isomorphic-fetch"), exports);
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["HEAD"] = "HEAD";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["DELETE"] = "DELETE";
    HttpMethod["CONNECT"] = "CONNECT";
    HttpMethod["OPTIONS"] = "OPTIONS";
    HttpMethod["TRACE"] = "TRACE";
    HttpMethod["PATCH"] = "PATCH";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
class HttpException extends Error {
    constructor(msg) {
        super(msg);
    }
}
exports.HttpException = HttpException;
class RequestContext {
    constructor(url, httpMethod) {
        this.httpMethod = httpMethod;
        this.headers = {};
        this.body = undefined;
        this.url = new URL(url);
    }
    getUrl() {
        return this.url.toString();
    }
    setUrl(url) {
        this.url = new URL(url);
    }
    setBody(body) {
        this.body = body;
    }
    getHttpMethod() {
        return this.httpMethod;
    }
    getHeaders() {
        return this.headers;
    }
    getBody() {
        return this.body;
    }
    setQueryParam(name, value) {
        this.url.searchParams.set(name, value);
    }
    addCookie(name, value) {
        if (!this.headers["Cookie"]) {
            this.headers["Cookie"] = "";
        }
        this.headers["Cookie"] += name + "=" + value + "; ";
    }
    setHeaderParam(key, value) {
        this.headers[key] = value;
    }
}
exports.RequestContext = RequestContext;
class SelfDecodingBody {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    binary() {
        return this.dataSource;
    }
    async text() {
        const data = await this.dataSource;
        return data.toString();
    }
}
exports.SelfDecodingBody = SelfDecodingBody;
class ResponseContext {
    constructor(httpStatusCode, headers, body) {
        this.httpStatusCode = httpStatusCode;
        this.headers = headers;
        this.body = body;
    }
    getParsedHeader(headerName) {
        const result = {};
        if (!this.headers[headerName]) {
            return result;
        }
        const parameters = this.headers[headerName].split(";");
        for (const parameter of parameters) {
            let [key, value] = parameter.split("=", 2);
            key = key.toLowerCase().trim();
            if (value === undefined) {
                result[""] = key;
            }
            else {
                value = value.trim();
                if (value.startsWith('"') && value.endsWith('"')) {
                    value = value.substring(1, value.length - 1);
                }
                result[key] = value;
            }
        }
        return result;
    }
    async getBodyAsFile() {
        const data = await this.body.binary();
        const fileName = this.getParsedHeader("content-disposition")["filename"] || "";
        return { data, name: fileName };
    }
    async getBodyAsAny() {
        return this.body;
    }
}
exports.ResponseContext = ResponseContext;
function wrapHttpLibrary(promiseHttpLibrary) {
    return {
        send(request) {
            return (0, rxjsStub_1.from)(promiseHttpLibrary.send(request));
        }
    };
}
exports.wrapHttpLibrary = wrapHttpLibrary;
//# sourceMappingURL=http.js.map