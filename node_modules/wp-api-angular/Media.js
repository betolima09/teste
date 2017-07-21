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
var WpApiMedia = (function (_super) {
    __extends(WpApiMedia, _super);
    function WpApiMedia(wpApiLoader, http) {
        var _this = _super.call(this, wpApiLoader, http) || this;
        _this.wpApiLoader = wpApiLoader;
        _this.http = http;
        return _this;
    }
    WpApiMedia.prototype.getList = function (options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/media", options);
    };
    WpApiMedia.prototype.get = function (mediaId, options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/media/" + mediaId, options);
    };
    WpApiMedia.prototype.create = function (body, options) {
        if (body === void 0) { body = {}; }
        if (options === void 0) { options = {}; }
        return this.httpPost("/media", body, options);
    };
    WpApiMedia.prototype.update = function (mediaId, body, options) {
        if (body === void 0) { body = {}; }
        if (options === void 0) { options = {}; }
        return this.httpPost("/media/" + mediaId, body, options);
    };
    WpApiMedia.prototype.delete = function (mediaId, options) {
        if (options === void 0) { options = {}; }
        return this.httpDelete("/media/" + mediaId, options);
    };
    return WpApiMedia;
}(Parent_1.WpApiParent));
WpApiMedia.decorators = [
    { type: core_1.Injectable },
];
WpApiMedia.ctorParameters = function () { return [
    { type: Loaders_1.WpApiLoader, },
    { type: http_1.Http, },
]; };
exports.WpApiMedia = WpApiMedia;
//# sourceMappingURL=Media.js.map