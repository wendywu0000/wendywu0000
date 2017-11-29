import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';


@Injectable()
export class CurrencyConversionService {
    private baseUrl = 'http://api.fixer.io/latest';
    constructor(private http: Http) {}

    getRates(base): Observable<any> {
        let url: string;

      
        if (base) {
            url = this.baseUrl + '?base=' + base;
        } else {
            url = this.baseUrl;
        }
        return this.http.get(url).map(res => res.json());
              
    }
   
    
}