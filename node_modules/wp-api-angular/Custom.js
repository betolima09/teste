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
var Custom = (function (_super) {
    __extends(Custom, _super);
    function Custom(wpApiLoader, http, entityName) {
        var _this = _super.call(this, wpApiLoader, http) || this;
        _this.wpApiLoader = wpApiLoader;
        _this.http = http;
        _this.entityName = entityName;
        return _this;
    }
    Custom.prototype.getList = function (options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/" + this.entityName, options);
    };
    Custom.prototype.get = function (customId, options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/" + this.entityName + "/" + customId, options);
    };
    Custom.prototype.create = function (body, options) {
        if (body === void 0) { body = {}; }
        if (options === void 0) { options = {}; }
        return this.httpPost("/" + this.entityName, body, options);
    };
    Custom.prototype.update = function (customId, body, options) {
        if (body === void 0) { body = {}; }
        if (options === void 0) { options = {}; }
        return this.httpPost("/" + this.entityName + "/" + customId, body, options);
    };
    Custom.prototype.delete = function (customId, options) {
        if (options === void 0) { options = {}; }
        return this.httpDelete("/" + this.entityName + "/" + customId, options);
    };
    return Custom;
}(Parent_1.WpApiParent));
exports.Custom = Custom;
var WpApiCustom = (function (_super) {
    __extends(WpApiCustom, _super);
    function WpApiCustom(wpApiLoader, http) {
        var _this = _super.call(this, wpApiLoader, http) || this;
        _this.wpApiLoader = wpApiLoader;
        _this.http = http;
        return _this;
    }
    WpApiCustom.prototype.getInstance = function (entityName) {
        if (entityName === void 0) { entityName = ''; }
        if (typeof entityName !== 'string') {
            throw new Error("getInstance needs an entity name");
        }
        return new Custom(this.wpApiLoader, this.http, entityName);
    };
    return WpApiCustom;
}(Parent_1.WpApiParent));
WpApiCustom.decorators = [
    { type: core_1.Injectable },
];
WpApiCustom.ctorParameters = function () { return [
    { type: Loaders_1.WpApiLoader, },
    { type: http_1.Http, },
]; };
exports.WpApiCustom = WpApiCustom;
//# sourceMappingURL=Custom.js.map