import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  makeRequest(page: string, type: string, data: any) {
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
    return this.http.request(type, page, requestOption);
  }

}
