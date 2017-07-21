import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { Response } from '@angular/http/src/static_response';
import { WpApiParent } from './Parent';
import { WpApiLoader } from './Loaders';
export interface IWpApiStatuses {
    getList(options?: RequestOptionsArgs): Observable<Response>;
    get(statusesName: string, options?: RequestOptionsArgs): Observable<Response>;
}
export declare class WpApiStatuses extends WpApiParent implements IWpApiStatuses {
    wpApiLoader: WpApiLoader;
    http: Http;
    constructor(wpApiLoader: WpApiLoader, http: Http);
    getList(options?: {}): Observable<Response>;
    get(statusesName: string, options?: {}): Observable<Response>;
}
