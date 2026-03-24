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
exports.RequiredError = exports.BaseAPIRequestFactory = exports.COLLECTION_FORMATS = void 0;
exports.COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};
var BaseAPIRequestFactory = (function () {
    function BaseAPIRequestFactory(configuration) {
        this.configuration = configuration;
    }
    return BaseAPIRequestFactory;
}());
exports.BaseAPIRequestFactory = BaseAPIRequestFactory;
;
var RequiredError = (function (_super) {
    __extends(RequiredError, _super);
    function RequiredError(api, method, field) {
        var _this = _super.call(this, "Required parameter " + field + " was null or undefined when calling " + api + "." + method + ".") || this;
        _this.api = api;
        _this.method = method;
        _this.field = field;
        _this.name = "RequiredError";
        return _this;
    }
    return RequiredError;
}(Error));
exports.RequiredError = RequiredError;
//# sourceMappingURL=baseapi.js.map