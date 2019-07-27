import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { of } from 'rxjs';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;
  let http: HttpClient;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
  );

  beforeEach(() => {
    service = TestBed.get<HttpService>(HttpService);
    http = TestBed.get<HttpClient>(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#makeRequest()', () => {
    it('should be defined:', () => {
      expect(service.makeRequest).toBeDefined();
    });

    describe('when the request is successful', () => {
      it(`should return an observable of player`, () => {
        const targetPlayer = { id: 'peter', active: true, profile: 'peter-123.json' };

        spyOn(http, 'request').and.returnValue(of(targetPlayer));
        const resp$ = service.makeRequest('GET', 'someurl');
        expect(http.request).toHaveBeenCalled();

        resp$.subscribe(resp => {
          expect(resp).toEqual(targetPlayer);
        });
      });
    });

    describe('when the request is unsuccessful', () => {
      it('should return an instance of the HttpErrorResponse', () => {
        const errorResp = {
          error: '404 error',
          status: 404,
          statusText: 'Not Found',
        };

        spyOn(http, 'request')
          .and.callThrough()
          .and.returnValue(of(new HttpResponse()));

        const resp$ = service.makeRequest('GET', 'bad');

        resp$.subscribe(resp => {
          expect(resp instanceof HttpErrorResponse);
        });
      });
    });
  });
});
