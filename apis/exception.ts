/**
 * Represents an error caused by an api call i.e. it has attributes for a HTTP status code
 * and the returned body object.
 *
 * Example
 * API returns a ErrorMessageObject whenever HTTP status code is not in [200, 299]
 * => ApiException(404, someErrorMessageObject)
 *
 */
export class ApiException<T> extends Error {
    public constructor(public code: number, message: string, public body: T, public headers: { [key: string]: string; }) {
        super("HTTP-Code: " + code + "\nMessage: " + message + "\nBody: " + JSON.stringify(body) + "\nHeaders: " +
        JSON.stringify(headers))
        // Defensive: native `class extends Error` under our ES2020 emit
        // preserves the prototype chain correctly, so this is a no-op for
        // direct consumers of `dist/`. We keep it for consumers who
        // re-transpile our emit down to ES5 via Babel/webpack/swc/etc. —
        // the `__extends` helper emitted under ES5 can't fix `this` after
        // `super()` returns, and `err instanceof ApiException` would then
        // be `false` at runtime. Survives downleveling at zero runtime cost.
        // Reference: https://github.com/microsoft/TypeScript-wiki/blob/main/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, ApiException.prototype);
    }

    /**
     * The error messages carried by the response body, normalized to a flat
     * string array regardless of which envelope shape the API returned
     * (`{ errors: "..." }`, `{ errors: ["..."] }`, `{ errors: [{ code, title }] }`,
     * or an object map such as `{ errors: { invalid_aliases: {...} } }`, which is
     * surfaced as `"<key>: <value>"` entries). Returns an empty array when the
     * body is not a recognizable error envelope. The raw body remains on `body`.
     */
    public get errorMessages(): string[] {
        let parsed: any = this.body;
        if (typeof parsed === "string") {
            try {
                parsed = JSON.parse(parsed);
            } catch {
                return [];
            }
        }
        if (parsed === null || typeof parsed !== "object") {
            return [];
        }
        const errors: any = parsed.errors;
        if (typeof errors === "string") {
            return [errors];
        }
        if (Array.isArray(errors)) {
            return errors
                .map((e: any) => {
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
                .filter((m: any): m is string => typeof m === "string");
        }
        if (errors !== null && typeof errors === "object") {
            // Object-shaped envelopes (e.g. { invalid_aliases: {...} }) carry data
            // under arbitrary keys; surface each so it isn't silently dropped. Key
            // order is unspecified, so sort for deterministic output.
            return Object.keys(errors)
                .map((key: string) => {
                    const value: any = errors[key];
                    const rendered = typeof value === "string" ? value : JSON.stringify(value);
                    return key + ": " + rendered;
                })
                .sort();
        }
        return [];
    }
}
