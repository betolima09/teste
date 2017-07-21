import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { Response } from '@angular/http/src/static_response';
import { WpApiParent } from './Parent';
import { WpApiLoader } from './Loaders';
export interface IWpApiPages {
    getList(options?: RequestOptionsArgs): Observable<Response>;
    get(pageId: number, options?: RequestOptionsArgs): Observable<Response>;
    create(body: any, options?: RequestOptionsArgs): Observable<Response>;
    update(pageId: number, body: any, options?: RequestOptionsArgs): Observable<Response>;
    delete(pageId: number, options?: RequestOptionsArgs): Observable<Response>;
    getMetaList(pageId: number, options?: RequestOptionsArgs): Observable<Response>;
    getMeta(pageId: number, metaId: number, options?: RequestOptionsArgs): Observable<Response>;
    getRevisionList(pageId: number, options?: RequestOptionsArgs): Observable<Response>;
    getRevision(pageId: number, revisionId: number, options?: RequestOptionsArgs): Observable<Response>;
}
export declare class WpApiPages extends WpApiParent implements IWpApiPages {
    wpApiLoader: WpApiLoader;
    http: Http;
    constructor(wpApiLoader: WpApiLoader, http: Http);
    getList(options?: {}): Observable<Response>;
    get(pageId: number, options?: {}): Observable<Response>;
    create(body?: {}, options?: {}): Observable<Response>;
    update(pageId: number, body?: {}, options?: {}): Observable<Response>;
    delete(pageId: number, options?: {}): Observable<Response>;
    getMetaList(pageId: number, options?: {}): Observable<Response>;
    getMeta(pageId: number, metaId: number, options?: {}): Observable<Response>;
    getRevisionList(pageId: number, options?: {}): Observable<Response>;
    getRevision(pageId: number, revisionId: number, options?: {}): Observable<Response>;
}
