import { Http } from '@angular/http';
export declare abstract class WpApiLoader {
    abstract getWebServiceUrl(postfix: string): string;
}
export declare class WpApiStaticLoader implements WpApiLoader {
    private http;
    private baseUrl;
    private namespace;
    completeUrl: string;
    constructor(http: Http, baseUrl?: string, namespace?: string);
    getWebServiceUrl(postfix: string): string;
}
