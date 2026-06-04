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
}
