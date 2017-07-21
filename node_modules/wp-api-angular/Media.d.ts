import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { Response } from '@angular/http/src/static_response';
import { WpApiParent } from './Parent';
import { WpApiLoader } from './Loaders';
export interface IWpApiMedia {
    getList(options?: RequestOptionsArgs): Observable<Response>;
    get(mediaId: number, options?: RequestOptionsArgs): Observable<Response>;
    create(body: any, options?: RequestOptionsArgs): Observable<Response>;
    update(mediaId: number, body: any, options?: RequestOptionsArgs): Observable<Response>;
    delete(mediaId: number, options?: RequestOptionsArgs): Observable<Response>;
}
export declare class WpApiMedia extends WpApiParent implements IWpApiMedia {
    wpApiLoader: WpApiLoader;
    http: Http;
    constructor(wpApiLoader: WpApiLoader, http: Http);
    getList(options?: {}): Observable<Response>;
    get(mediaId: number, options?: {}): Observable<Response>;
    create(body?: {}, options?: {}): Observable<Response>;
    update(mediaId: number, body?: {}, options?: {}): Observable<Response>;
    delete(mediaId: number, options?: {}): Observable<Response>;
}
