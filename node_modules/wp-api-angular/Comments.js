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
var WpApiComments = (function (_super) {
    __extends(WpApiComments, _super);
    function WpApiComments(wpApiLoader, http) {
        var _this = _super.call(this, wpApiLoader, http) || this;
        _this.wpApiLoader = wpApiLoader;
        _this.http = http;
        return _this;
    }
    WpApiComments.prototype.getList = function (options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/comments", options);
    };
    WpApiComments.prototype.get = function (commentId, options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/comments/" + commentId, options);
    };
    WpApiComments.prototype.create = function (body, options) {
        if (body === void 0) { body = {}; }
        if (options === void 0) { options = {}; }
        return this.httpPost("/comments", body, options);
    };
    WpApiComments.prototype.update = function (commentId, body, options) {
        if (body === void 0) { body = {}; }
        if (options === void 0) { options = {}; }
        return this.httpPost("/comments/" + commentId, body, options);
    };
    WpApiComments.prototype.delete = function (commentId, options) {
        if (options === void 0) { options = {}; }
        return this.httpDelete("/comments/" + commentId, options);
    };
    return WpApiComments;
}(Parent_1.WpApiParent));
WpApiComments.decorators = [
    { type: core_1.Injectable },
];
WpApiComments.ctorParameters = function () { return [
    { type: Loaders_1.WpApiLoader, },
    { type: http_1.Http, },
]; };
exports.WpApiComments = WpApiComments;
//# sourceMappingURL=Comments.js.map