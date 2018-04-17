import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class HttpService {
  private url: string = environment.backendUrl;

  constructor(private http: HttpClient) { }

  makeRequest(page: string, type: string, data: any = null) {
    let headers: HttpHeaders = new HttpHeaders(), requestOption;

    headers = headers.set('Accept', 'application/json');
    if (type === 'Post') {
      headers = headers.set('Content-Type', 'application/json');
      requestOption = {
        headers: headers,
        body: JSON.stringify(data),
        responseType: 'json'
      };
    } else if (type === 'Get') {
      requestOption = {
        headers: headers,
        responseType: 'json'
      };
    }
    console.log(this.url + page);
    return this.http.request(type, this.url + page, requestOption);
  }

}
