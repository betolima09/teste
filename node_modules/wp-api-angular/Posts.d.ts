import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { Response } from '@angular/http/src/static_response';
import { WpApiParent } from './Parent';
import { WpApiLoader } from './Loaders';
export interface IWpApiPosts {
    getList(options?: RequestOptionsArgs): Observable<Response>;
    get(postId: number, options?: RequestOptionsArgs): Observable<Response>;
    create(body: any, options?: RequestOptionsArgs): Observable<Response>;
    update(postId: number, body: any, options?: RequestOptionsArgs): Observable<Response>;
    delete(postId: number, options?: RequestOptionsArgs): Observable<Response>;
    getMetaList(postId: number, options?: RequestOptionsArgs): Observable<Response>;
    getMeta(postId: number, metaId: number, options?: RequestOptionsArgs): Observable<Response>;
    getRevisionList(postId: number, options?: RequestOptionsArgs): Observable<Response>;
    getRevision(postId: number, revisionId: number, options?: RequestOptionsArgs): Observable<Response>;
    getCategoryList(postId: number, options?: RequestOptionsArgs): Observable<Response>;
    getCategory(postId: number, categoryId: any, options?: RequestOptionsArgs): Observable<Response>;
    getTagList(postId: number, options?: RequestOptionsArgs): Observable<Response>;
    getTag(postId: number, tagId: any, options?: RequestOptionsArgs): Observable<Response>;
}
export declare class WpApiPosts extends WpApiParent implements IWpApiPosts {
    wpApiLoader: WpApiLoader;
    http: Http;
    constructor(wpApiLoader: WpApiLoader, http: Http);
    getList(options?: {}): Observable<Response>;
    get(postId: number, options?: {}): Observable<Response>;
    create(body?: {}, options?: {}): Observable<Response>;
    update(postId: number, body?: {}, options?: {}): Observable<Response>;
    delete(postId: number, options?: {}): Observable<Response>;
    getMetaList(postId: number, options?: {}): Observable<Response>;
    getMeta(postId: number, metaId: number, options?: {}): Observable<Response>;
    getRevisionList(postId: number, options?: {}): Observable<Response>;
    getRevision(postId: number, revisionId: number, options?: {}): Observable<Response>;
    getCategoryList(postId: number, options?: {}): Observable<Response>;
    getCategory(postId: number, categoryId: number, options?: {}): Observable<Response>;
    getTagList(postId: number, options?: {}): Observable<Response>;
    getTag(postId: number, tagId: number, options?: {}): Observable<Response>;
}
