import { Action } from '@ngrx/store';

export enum PlayerActionTypes {
  SearchPlayer = '[Player] Search Player',
  SearchPlayerSuccess = '[Player] Search Player Success',
  SearchPlayerFail = '[Player] Search Player Fail',

  GetPlayer = '[Player] Get Player',
  GetPlayerSuccess = '[Player] Get Player Success',
  GetPlayerFail = '[Player] Get Player Fail',
}

export class SearchPlayer implements Action {
  readonly type = PlayerActionTypes.SearchPlayer;
  constructor(public playerId: string = null) {}
}

export class SearchPlayerSuccess implements Action {
  readonly type = PlayerActionTypes.SearchPlayerSuccess;

  constructor(public payload: any = null) {}
}

export class SearchPlayerFail implements Action {
  readonly type = PlayerActionTypes.SearchPlayerFail;
  constructor(public error: any = null) {}
}

export class GetPlayer implements Action {
  readonly type = PlayerActionTypes.GetPlayer;
  constructor(public profileId: string = null) {}
}

export class GetPlayerSuccess implements Action {
  readonly type = PlayerActionTypes.GetPlayerSuccess;
  constructor(public payload: any = null) {}
}

export class GetPlayerFail implements Action {
  readonly type = PlayerActionTypes.GetPlayerFail;
  constructor(public error: any = null) {}
}

export type PlayerActions =
  | SearchPlayer
  | SearchPlayerSuccess
  | SearchPlayerFail
  | GetPlayer
  | GetPlayerSuccess
  | GetPlayerFail;
