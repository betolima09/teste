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
var WpApiTaxonomies = (function (_super) {
    __extends(WpApiTaxonomies, _super);
    function WpApiTaxonomies(wpApiLoader, http) {
        var _this = _super.call(this, wpApiLoader, http) || this;
        _this.wpApiLoader = wpApiLoader;
        _this.http = http;
        return _this;
    }
    WpApiTaxonomies.prototype.getList = function (options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/taxonomies", options);
    };
    WpApiTaxonomies.prototype.get = function (taxonomiesType, options) {
        if (options === void 0) { options = {}; }
        return this.httpGet("/taxonomies/" + taxonomiesType, options);
    };
    return WpApiTaxonomies;
}(Parent_1.WpApiParent));
WpApiTaxonomies.decorators = [
    { type: core_1.Injectable },
];
WpApiTaxonomies.ctorParameters = function () { return [
    { type: Loaders_1.WpApiLoader, },
    { type: http_1.Http, },
]; };
exports.WpApiTaxonomies = WpApiTaxonomies;
//# sourceMappingURL=Taxonomies.js.map