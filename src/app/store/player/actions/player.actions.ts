import { Action } from '@ngrx/store';

export enum PlayerActionTypes {
  LoadPlayers = '[Player] Load Players',
}

export class LoadPlayers implements Action {
  readonly type = PlayerActionTypes.LoadPlayers;
}

export type PlayerActions = LoadPlayers;
