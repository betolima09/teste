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
var WpApiUsers = (function (_super) {
    __extends(WpApiUsers, _super);
    function WpApiUsers(wpApiLoader, http) {
        var _this = _super.call(this, wpApiLoader, http) || this;
        _this.wpApiLoader = wpApiLoader;
        _this.http = http;
        return _this;
    }
    WpApiUsers.prototype.getList = function (options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/users", options);
    };
    WpApiUsers.prototype.me = function (options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/users/me", options);
    };
    WpApiUsers.prototype.get = function (userId, options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/users/" + userId, options);
    };
    WpApiUsers.prototype.create = function (body, options) {
        if (body === void 0) { body = {}; }
        if (options === void 0) { options = {}; }
        return this.httpPost("/users", body, options);
    };
    WpApiUsers.prototype.update = function (userId, body, options) {
        if (body === void 0) { body = {}; }
        if (options === void 0) { options = {}; }
        return this.httpPost("/users/" + userId, body, options);
    };
    WpApiUsers.prototype.delete = function (userId, options) {
        if (options === void 0) { options = {}; }
        return this.httpDelete("/users/" + userId, options);
    };
    return WpApiUsers;
}(Parent_1.WpApiParent));
WpApiUsers.decorators = [
    { type: core_1.Injectable },
];
WpApiUsers.ctorParameters = function () { return [
    { type: Loaders_1.WpApiLoader, },
    { type: http_1.Http, },
]; };
exports.WpApiUsers = WpApiUsers;
//# sourceMappingURL=Users.js.map