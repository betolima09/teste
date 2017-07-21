import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { Response } from '@angular/http/src/static_response';
import { WpApiParent } from './Parent';
import { WpApiLoader } from './Loaders';
export interface IWpApiCustom {
    getList(options?: RequestOptionsArgs): Observable<Response>;
    get(customId: number, options?: RequestOptionsArgs): Observable<Response>;
    create(body: any, options?: RequestOptionsArgs): Observable<Response>;
    update(customId: number, body: any, options?: RequestOptionsArgs): Observable<Response>;
    delete(customId: number, options?: RequestOptionsArgs): Observable<Response>;
}
export declare class Custom extends WpApiParent implements IWpApiCustom {
    wpApiLoader: WpApiLoader;
    http: Http;
    entityName: string;
    constructor(wpApiLoader: WpApiLoader, http: Http, entityName: string);
    getList(options?: {}): Observable<Response>;
    get(customId: number, options?: {}): Observable<Response>;
    create(body?: {}, options?: {}): Observable<Response>;
    update(customId: number, body?: {}, options?: {}): Observable<Response>;
    delete(customId: number, options?: {}): Observable<Response>;
}
export declare class WpApiCustom extends WpApiParent {
    wpApiLoader: WpApiLoader;
    http: Http;
    constructor(wpApiLoader: WpApiLoader, http: Http);
    getInstance(entityName?: string): Custom;
}
