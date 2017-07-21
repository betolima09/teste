"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Loaders_1 = require("./Loaders");
var WpApiParent = (function () {
    function WpApiParent(wpApiLoader, http) {
        this.wpApiLoader = wpApiLoader;
        this.http = http;
    }
    WpApiParent.prototype.httpGet = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.http.get(this.wpApiLoader.getWebServiceUrl(url), options);
    };
    WpApiParent.prototype.httpHead = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.http.head(this.wpApiLoader.getWebServiceUrl(url), options);
    };
    WpApiParent.prototype.httpDelete = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.http.delete(this.wpApiLoader.getWebServiceUrl(url), options);
    };
    WpApiParent.prototype.httpPost = function (url, body, options) {
        if (body === void 0) { body = {}; }
        if (options === void 0) { options = {}; }
        return this.http.post(this.wpApiLoader.getWebServiceUrl(url), body, options);
    };
    WpApiParent.prototype.httpPut = function (url, body, options) {
        if (body === void 0) { body = {}; }
        if (options === void 0) { options = {}; }
        return this.http.put(this.wpApiLoader.getWebServiceUrl(url), body, options);
    };
    WpApiParent.prototype.httpPatch = function (url, body, options) {
        if (body === void 0) { body = {}; }
        if (options === void 0) { options = {}; }
        return this.http.patch(this.wpApiLoader.getWebServiceUrl(url), body, options);
    };
    return WpApiParent;
}());
WpApiParent.decorators = [
    { type: core_1.Injectable },
];
WpApiParent.ctorParameters = function () { return [
    { type: Loaders_1.WpApiLoader, },
    { type: http_1.Http, },
]; };
exports.WpApiParent = WpApiParent;
//# sourceMappingURL=Parent.js.map