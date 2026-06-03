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
        // Restore the prototype chain. Under tsconfig `target: "es5"`, classes that
        // extend a built-in (Error/Array/Map/...) lose their instance prototype because
        // the emitted __extends helper cannot fix `this` after super() returns. Without
        // this line, `err instanceof ApiException` is always `false` at runtime, even
        // though the data (code/body/headers) is present on the instance.
        // Reference: https://github.com/microsoft/TypeScript-wiki/blob/main/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, ApiException.prototype);
    }
}
