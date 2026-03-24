"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiException = void 0;
var ApiException = (function (_super) {
    __extends(ApiException, _super);
    function ApiException(code, message, body, headers) {
        var _this = _super.call(this, "HTTP-Code: " + code + "\nMessage: " + message + "\nBody: " + JSON.stringify(body) + "\nHeaders: " +
            JSON.stringify(headers)) || this;
        _this.code = code;
        _this.body = body;
        _this.headers = headers;
        return _this;
    }
    return ApiException;
}(Error));
exports.ApiException = ApiException;
//# sourceMappingURL=exception.js.map