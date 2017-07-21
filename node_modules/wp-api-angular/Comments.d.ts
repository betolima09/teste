import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { Response } from '@angular/http/src/static_response';
import { WpApiParent } from './Parent';
import { WpApiLoader } from './Loaders';
export interface IWpApiComments {
    getList(options?: RequestOptionsArgs): Observable<Response>;
    get(commentId: number, options?: RequestOptionsArgs): Observable<Response>;
    create(body: any, options?: RequestOptionsArgs): Observable<Response>;
    update(commentId: number, body: any, options?: RequestOptionsArgs): Observable<Response>;
    delete(commentId: number, options?: RequestOptionsArgs): Observable<Response>;
}
export declare class WpApiComments extends WpApiParent implements IWpApiComments {
    wpApiLoader: WpApiLoader;
    http: Http;
    constructor(wpApiLoader: WpApiLoader, http: Http);
    getList(options?: {}): Observable<Response>;
    get(commentId: number, options?: {}): Observable<Response>;
    create(body?: {}, options?: {}): Observable<Response>;
    update(commentId: number, body?: {}, options?: {}): Observable<Response>;
    delete(commentId: number, options?: {}): Observable<Response>;
}
