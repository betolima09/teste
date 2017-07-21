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
var WpApiPosts = (function (_super) {
    __extends(WpApiPosts, _super);
    function WpApiPosts(wpApiLoader, http) {
        var _this = _super.call(this, wpApiLoader, http) || this;
        _this.wpApiLoader = wpApiLoader;
        _this.http = http;
        return _this;
    }
    WpApiPosts.prototype.getList = function (options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/posts", options);
    };
    WpApiPosts.prototype.get = function (postId, options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/posts/" + postId, options);
    };
    WpApiPosts.prototype.create = function (body, options) {
        if (body === void 0) { body = {}; }
        if (options === void 0) { options = {}; }
        return this.httpPost("/posts", body, options);
    };
    WpApiPosts.prototype.update = function (postId, body, options) {
        if (body === void 0) { body = {}; }
        if (options === void 0) { options = {}; }
        return this.httpPost("/posts/" + postId, body, options);
    };
    WpApiPosts.prototype.delete = function (postId, options) {
        if (options === void 0) { options = {}; }
        return this.httpDelete("/posts/" + postId, options);
    };
    WpApiPosts.prototype.getMetaList = function (postId, options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/posts/" + postId + "/meta", options);
    };
    WpApiPosts.prototype.getMeta = function (postId, metaId, options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/posts/" + postId + "/meta/" + metaId, options);
    };
    WpApiPosts.prototype.getRevisionList = function (postId, options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/posts/" + postId + "/revisions", options);
    };
    WpApiPosts.prototype.getRevision = function (postId, revisionId, options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/posts/" + postId + "/revisions/" + revisionId, options);
    };
    WpApiPosts.prototype.getCategoryList = function (postId, options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/posts/" + postId + "/terms/category", options);
    };
    WpApiPosts.prototype.getCategory = function (postId, categoryId, options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/posts/" + postId + "/terms/category/" + categoryId, options);
    };
    WpApiPosts.prototype.getTagList = function (postId, options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/posts/" + postId + "/terms/tag", options);
    };
    WpApiPosts.prototype.getTag = function (postId, tagId, options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/posts/" + postId + "/terms/tag/" + tagId, options);
    };
    return WpApiPosts;
}(Parent_1.WpApiParent));
WpApiPosts.decorators = [
    { type: core_1.Injectable },
];
WpApiPosts.ctorParameters = function () { return [
    { type: Loaders_1.WpApiLoader, },
    { type: http_1.Http, },
]; };
exports.WpApiPosts = WpApiPosts;
//# sourceMappingURL=Posts.js.map