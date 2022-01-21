export declare class ApiException<T> extends Error {
    code: number;
    body: T;
    constructor(code: number, body: T);
}
