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
var WpApiStatuses = (function (_super) {
    __extends(WpApiStatuses, _super);
    function WpApiStatuses(wpApiLoader, http) {
        var _this = _super.call(this, wpApiLoader, http) || this;
        _this.wpApiLoader = wpApiLoader;
        _this.http = http;
        return _this;
    }
    WpApiStatuses.prototype.getList = function (options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/statuses", options);
    };
    WpApiStatuses.prototype.get = function (statusesName, options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/statuses/" + statusesName, options);
    };
    return WpApiStatuses;
}(Parent_1.WpApiParent));
WpApiStatuses.decorators = [
    { type: core_1.Injectable },
];
WpApiStatuses.ctorParameters = function () { return [
    { type: Loaders_1.WpApiLoader, },
    { type: http_1.Http, },
]; };
exports.WpApiStatuses = WpApiStatuses;
//# sourceMappingURL=Statuses.js.map