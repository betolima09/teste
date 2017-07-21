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
var WpApiTypes = (function (_super) {
    __extends(WpApiTypes, _super);
    function WpApiTypes(wpApiLoader, http) {
        var _this = _super.call(this, wpApiLoader, http) || this;
        _this.wpApiLoader = wpApiLoader;
        _this.http = http;
        return _this;
    }
    WpApiTypes.prototype.getList = function (options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/types", options);
    };
    WpApiTypes.prototype.get = function (postType, options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/types/" + postType, options);
    };
    return WpApiTypes;
}(Parent_1.WpApiParent));
WpApiTypes.decorators = [
    { type: core_1.Injectable },
];
WpApiTypes.ctorParameters = function () { return [
    { type: Loaders_1.WpApiLoader, },
    { type: http_1.Http, },
]; };
exports.WpApiTypes = WpApiTypes;
//# sourceMappingURL=Types.js.map