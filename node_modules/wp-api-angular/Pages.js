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
var WpApiPages = (function (_super) {
    __extends(WpApiPages, _super);
    function WpApiPages(wpApiLoader, http) {
        var _this = _super.call(this, wpApiLoader, http) || this;
        _this.wpApiLoader = wpApiLoader;
        _this.http = http;
        return _this;
    }
    WpApiPages.prototype.getList = function (options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/pages", options);
    };
    WpApiPages.prototype.get = function (pageId, options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/pages/" + pageId, options);
    };
    WpApiPages.prototype.create = function (body, options) {
        if (body === void 0) { body = {}; }
        if (options === void 0) { options = {}; }
        return this.httpPost("/pages", body, options);
    };
    WpApiPages.prototype.update = function (pageId, body, options) {
        if (body === void 0) { body = {}; }
        if (options === void 0) { options = {}; }
        return this.httpPost("/pages/" + pageId, body, options);
    };
    WpApiPages.prototype.delete = function (pageId, options) {
        if (options === void 0) { options = {}; }
        return this.httpDelete("/pages/" + pageId, options);
    };
    WpApiPages.prototype.getMetaList = function (pageId, options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/pages/" + pageId + "/meta", options);
    };
    WpApiPages.prototype.getMeta = function (pageId, metaId, options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/pages/" + pageId + "/meta/" + metaId, options);
    };
    WpApiPages.prototype.getRevisionList = function (pageId, options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/pages/" + pageId + "/revisions", options);
    };
    WpApiPages.prototype.getRevision = function (pageId, revisionId, options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/pages/" + pageId + "/revisions/" + revisionId, options);
    };
    return WpApiPages;
}(Parent_1.WpApiParent));
WpApiPages.decorators = [
    { type: core_1.Injectable },
];
WpApiPages.ctorParameters = function () { return [
    { type: Loaders_1.WpApiLoader, },
    { type: http_1.Http, },
]; };
exports.WpApiPages = WpApiPages;
//# sourceMappingURL=Pages.js.map