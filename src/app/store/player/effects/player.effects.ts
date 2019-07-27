import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { switchMap, tap, catchError, map, debounce, debounceTime } from 'rxjs/operators';

import * as fromActions from '../actions/player.actions';
import { HttpService } from '@app/shared/services/http.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class PlayerEffects {
  /**
   * side effect for search player
   * call Success if found and Fail if not found
   */
  @Effect()
  searchPLayer$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.PlayerActionTypes.SearchPlayer),
    switchMap((action: fromActions.SearchPlayer) => {
      return this.httpService.makeRequest('GET', `data/${action.playerId}`).pipe(
        map(response => {
          // error or player not found
          if (response instanceof HttpErrorResponse) {
            return new fromActions.SearchPlayerFail(response);
          }

          // success or player found
          return new fromActions.SearchPlayerSuccess(response);
        }),
        catchError(error => of(new fromActions.SearchPlayerFail(error)))
      );
    })
  );

  /**
   * side effect for player found
   * dispatches GetPlayer action
   */
  @Effect() searchPlayerSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.PlayerActionTypes.SearchPlayerSuccess),
    switchMap((action: fromActions.SearchPlayerSuccess) => {
      return of(new fromActions.GetPlayer(action.payload['profile-id']));
    })
  );
  
  /**
   * side effect for get player
   * call Success if found and Fail if not found
   */
  @Effect() getPlayer$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.PlayerActionTypes.GetPlayer),
    switchMap((action: fromActions.GetPlayer) =>
      this.httpService.makeRequest('GET', `profile/${action.profileId}`).pipe(
        map(response => {
          if (response instanceof HttpErrorResponse) {
            return new fromActions.GetPlayerFail(response);
          }
          return new fromActions.GetPlayerSuccess(response);
        }),
        catchError(err => of(new fromActions.GetPlayerFail(err)))
      )
    )
  );

  constructor(private httpService: HttpService, private actions$: Actions) {}
}
