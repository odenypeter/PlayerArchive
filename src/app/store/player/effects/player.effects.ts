import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { switchMap, tap, catchError, map } from 'rxjs/operators';

import * as fromActions from '../actions/player.actions';
import { HttpService } from '@app/shared/services/http.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SearchPlayerSuccess } from '../../../../../.history/src/app/store/player/actions/player.actions_20190726074909';

@Injectable()
export class PlayerEffects {
  @Effect()
  searchPLayer$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.PlayerActionTypes.SearchPlayer),
    switchMap((action: fromActions.SearchPlayer) => {
      return this.httpService.makeRequest('GET', `data/${action.playerId}`).pipe(
        map(response => {
          // console.log(response);
          if (response instanceof HttpErrorResponse) {
            return new fromActions.SearchPlayerFail(response);
          }

          return new fromActions.SearchPlayerSuccess(response);
        }),
        catchError(error => of(new fromActions.SearchPlayerFail(error)))
      );
    })
  );

  @Effect() searchPlayerSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.PlayerActionTypes.SearchPlayerSuccess),
    switchMap((action: fromActions.SearchPlayerSuccess) => {
      return of(new fromActions.GetPlayer(action.payload['profile-id']));
    })
  );

  @Effect() getPlayer$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.PlayerActionTypes.GetPlayer),
    switchMap((action: fromActions.GetPlayer) =>
      this.httpService.makeRequest('GET', `profile/${action.profileId}`).pipe(
        map(response => {
          return new fromActions.GetPlayerSuccess(response);
        }),
        catchError(err => of(new fromActions.GetPlayerFail(err)))
      )
    )
  );

  constructor(private httpService: HttpService, private actions$: Actions) {}
}
