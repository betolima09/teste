"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Parent_1 = require("./Parent");
var Loaders_1 = require("./Loaders");
var defaultTaxoType = 'categories';
var WpApiTerms = (function (_super) {
    __extends(WpApiTerms, _super);
    function WpApiTerms(wpApiLoader, http) {
        var _this = _super.call(this, wpApiLoader, http) || this;
        _this.wpApiLoader = wpApiLoader;
        _this.http = http;
        return _this;
    }
    WpApiTerms.prototype.getList = function (taxonomiesType, options) {
        if (taxonomiesType === void 0) { taxonomiesType = defaultTaxoType; }
        if (options === void 0) { options = {}; }
        return this.httpGet("/" + taxonomiesType, options);
    };
    WpApiTerms.prototype.get = function (taxonomiesType, termId, options) {
        if (taxonomiesType === void 0) { taxonomiesType = defaultTaxoType; }
        if (options === void 0) { options = {}; }
        return this.httpGet("/" + taxonomiesType + "/" + termId, options);
    };
    WpApiTerms.prototype.create = function (taxonomiesType, body, options) {
        if (taxonomiesType === void 0) { taxonomiesType = defaultTaxoType; }
        if (body === void 0) { body = {}; }
        if (options === void 0) { options = {}; }
        return this.httpPost("/" + taxonomiesType, body, options);
    };
    WpApiTerms.prototype.update = function (taxonomiesType, termId, body, options) {
        if (taxonomiesType === void 0) { taxonomiesType = defaultTaxoType; }
        if (body === void 0) { body = {}; }
        if (options === void 0) { options = {}; }
        return this.httpPost("/" + taxonomiesType + "/" + termId, body, options);
    };
    WpApiTerms.prototype.delete = function (taxonomiesType, termId, options) {
        if (taxonomiesType === void 0) { taxonomiesType = defaultTaxoType; }
        if (options === void 0) { options = {}; }
        return this.httpDelete("/" + taxonomiesType + "/" + termId, options);
    };
    return WpApiTerms;
}(Parent_1.WpApiParent));
WpApiTerms.decorators = [
    { type: core_1.Injectable },
];
WpApiTerms.ctorParameters = function () { return [
    { type: Loaders_1.WpApiLoader, },
    { type: http_1.Http, },
]; };
exports.WpApiTerms = WpApiTerms;
//# sourceMappingURL=Terms.js.map