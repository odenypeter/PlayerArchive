import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '@env/environment';
import * as fromReducers from '../player/reducers/player.reducer';

export interface AppState {
  players: fromReducers.PlayerState;
}

export const reducers: ActionReducerMap<AppState> = {
  players: fromReducers.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
