"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs");
var http_1 = require("@angular/http");
var Posts_1 = require("./Posts");
var Pages_1 = require("./Pages");
var Comments_1 = require("./Comments");
var Types_1 = require("./Types");
var Media_1 = require("./Media");
var Users_1 = require("./Users");
var Taxonomies_1 = require("./Taxonomies");
var Statuses_1 = require("./Statuses");
var Terms_1 = require("./Terms");
var Custom_1 = require("./Custom");
var Loaders_1 = require("./Loaders");
var Posts_2 = require("./Posts");
exports.WpApiPosts = Posts_2.WpApiPosts;
var Pages_2 = require("./Pages");
exports.WpApiPages = Pages_2.WpApiPages;
var Comments_2 = require("./Comments");
exports.WpApiComments = Comments_2.WpApiComments;
var Types_2 = require("./Types");
exports.WpApiTypes = Types_2.WpApiTypes;
var Media_2 = require("./Media");
exports.WpApiMedia = Media_2.WpApiMedia;
var Users_2 = require("./Users");
exports.WpApiUsers = Users_2.WpApiUsers;
var Taxonomies_2 = require("./Taxonomies");
exports.WpApiTaxonomies = Taxonomies_2.WpApiTaxonomies;
var Statuses_2 = require("./Statuses");
exports.WpApiStatuses = Statuses_2.WpApiStatuses;
var Terms_2 = require("./Terms");
exports.WpApiTerms = Terms_2.WpApiTerms;
var Custom_2 = require("./Custom");
exports.WpApiCustom = Custom_2.WpApiCustom;
var Loaders_2 = require("./Loaders");
exports.WpApiLoader = Loaders_2.WpApiLoader;
exports.WpApiStaticLoader = Loaders_2.WpApiStaticLoader;
function WpApiLoaderFactory(http) {
    return new Loaders_1.WpApiStaticLoader(http);
}
exports.WpApiLoaderFactory = WpApiLoaderFactory;
var WpApiModule = (function () {
    function WpApiModule() {
    }
    WpApiModule.forRoot = function (providedLoader) {
        if (providedLoader === void 0) { providedLoader = {
            provide: Loaders_1.WpApiLoader,
            useFactory: WpApiLoaderFactory,
            deps: [http_1.Http]
        }; }
        return {
            ngModule: WpApiModule,
            providers: [
                providedLoader
            ]
        };
    };
    return WpApiModule;
}());
WpApiModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    http_1.HttpModule
                ],
                exports: [
                    http_1.HttpModule
                ],
                providers: [
                    Posts_1.WpApiPosts,
                    Pages_1.WpApiPages,
                    Comments_1.WpApiComments,
                    Types_1.WpApiTypes,
                    Media_1.WpApiMedia,
                    Users_1.WpApiUsers,
                    Taxonomies_1.WpApiTaxonomies,
                    Statuses_1.WpApiStatuses,
                    Terms_1.WpApiTerms,
                    Custom_1.WpApiCustom
                ]
            },] },
];
WpApiModule.ctorParameters = function () { return []; };
exports.WpApiModule = WpApiModule;
//# sourceMappingURL=wp-api-angular.js.map