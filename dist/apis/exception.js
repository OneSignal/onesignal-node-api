"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiException = void 0;
class ApiException extends Error {
    constructor(code, message, body, headers) {
        super("HTTP-Code: " + code + "\nMessage: " + message + "\nBody: " + JSON.stringify(body) + "\nHeaders: " +
            JSON.stringify(headers));
        this.code = code;
        this.body = body;
        this.headers = headers;
        Object.setPrototypeOf(this, ApiException.prototype);
    }
    get errorMessages() {
        let parsed = this.body;
        if (typeof parsed === "string") {
            try {
                parsed = JSON.parse(parsed);
            }
            catch {
                return [];
            }
        }
        if (parsed === null || typeof parsed !== "object") {
            return [];
        }
        const errors = parsed.errors;
        if (typeof errors === "string") {
            return [errors];
        }
        if (Array.isArray(errors)) {
            return errors
                .map((e) => {
                if (typeof e === "string") {
                    return e;
                }
                if (e !== null && typeof e === "object") {
                    const title = typeof e.title === "string" ? e.title : undefined;
                    const code = typeof e.code === "string" ? e.code : (e.code != null ? String(e.code) : undefined);
                    return title || code;
                }
                return undefined;
            })
                .filter((m) => typeof m === "string");
        }
        if (errors !== null && typeof errors === "object") {
            return Object.keys(errors)
                .map((key) => {
                const value = errors[key];
                const rendered = typeof value === "string" ? value : JSON.stringify(value);
                return key + ": " + rendered;
            })
                .sort();
        }
        return [];
    }
}
exports.ApiException = ApiException;
//# sourceMappingURL=exception.js.map