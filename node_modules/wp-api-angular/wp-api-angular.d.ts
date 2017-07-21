import { ModuleWithProviders } from '@angular/core';
import 'rxjs';
import { Http } from '@angular/http';
import { WpApiStaticLoader } from './Loaders';
export { WpApiPosts } from './Posts';
export { WpApiPages } from './Pages';
export { WpApiComments } from './Comments';
export { WpApiTypes } from './Types';
export { WpApiMedia } from './Media';
export { WpApiUsers } from './Users';
export { WpApiTaxonomies } from './Taxonomies';
export { WpApiStatuses } from './Statuses';
export { WpApiTerms } from './Terms';
export { WpApiCustom } from './Custom';
export { WpApiLoader, WpApiStaticLoader } from './Loaders';
export declare function WpApiLoaderFactory(http: Http): WpApiStaticLoader;
export declare class WpApiModule {
    static forRoot(providedLoader?: any): ModuleWithProviders;
}
