import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { Response } from '@angular/http/src/static_response';
import { WpApiLoader } from './Loaders';
export interface IParent {
    httpGet(url: string, options?: RequestOptionsArgs): Observable<Response>;
    httpHead(url: string, options?: RequestOptionsArgs): Observable<Response>;
    httpDelete(url: string, options?: RequestOptionsArgs): Observable<Response>;
    httpPost(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
    httpPut(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
    httpPatch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
}
export declare class WpApiParent implements IParent {
    wpApiLoader: WpApiLoader;
    http: Http;
    constructor(wpApiLoader: WpApiLoader, http: Http);
    httpGet(url: string, options?: {}): Observable<Response>;
    httpHead(url: string, options?: {}): Observable<Response>;
    httpDelete(url: string, options?: {}): Observable<Response>;
    httpPost(url: string, body?: {}, options?: {}): Observable<Response>;
    httpPut(url: string, body?: {}, options?: {}): Observable<Response>;
    httpPatch(url: string, body?: {}, options?: {}): Observable<Response>;
}
