"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var WpApiLoader = (function () {
    function WpApiLoader() {
    }
    return WpApiLoader;
}());
exports.WpApiLoader = WpApiLoader;
var WpApiStaticLoader = (function () {
    function WpApiStaticLoader(http, baseUrl, namespace) {
        if (baseUrl === void 0) { baseUrl = 'http://changeYourDomainHere.com/wp-json'; }
        if (namespace === void 0) { namespace = '/wp/v2'; }
        this.http = http;
        this.baseUrl = baseUrl;
        this.namespace = namespace;
        this.completeUrl = "" + utils_1.stripTrailingSlash(this.baseUrl) + this.namespace;
    }
    WpApiStaticLoader.prototype.getWebServiceUrl = function (postfix) {
        return "" + this.completeUrl + postfix;
    };
    return WpApiStaticLoader;
}());
exports.WpApiStaticLoader = WpApiStaticLoader;
//# sourceMappingURL=Loaders.js.map