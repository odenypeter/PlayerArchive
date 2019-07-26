import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  /**
   * generic request method
   * @param url - last part of the url after API_BASE_URL
   * @param method - request method
   * @param body - request body
   * @returns an Observable
   */
  public makeRequest(method: string, url: string, body: any = null) {
    const options = {
      headers: new HttpHeaders({}),
      body,
    };
    return this.httpClient
      .request(method, `${environment.apiBaseUrl}${url}`, options)
      .pipe(catchError(error => this.handleError(error)));
  }

  /**
   * error handler
   * @param error - request error
   * @returns an observable of the error
   */
  private handleError(error) {
    return of(error);
  }
}
