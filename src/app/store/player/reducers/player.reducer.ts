import * as fromActions from '../actions/player.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { PlayerSearchResults } from '../models/player-search-reesults';
import { SearchPlayerFail } from '../../../../../.history/src/app/store/player/actions/player.actions_20190725223417';

export const playerAdapter = createEntityAdapter<PlayerSearchResults>();
export interface PlayerState extends EntityState<PlayerSearchResults> {
  searching: boolean;
  found: boolean;

  loading: boolean;
  loaded: boolean;
}

export const initialState: PlayerState = playerAdapter.getInitialState({
  searching: false,
  found: false,

  loading: false,
  loaded: false,
});

export function reducer(
  state: PlayerState = initialState,
  action: fromActions.PlayerActions
): PlayerState {
  switch (action.type) {
    case fromActions.PlayerActionTypes.SearchPlayer: {
      return { ...state, searching: true, found: false };
    }
    case fromActions.PlayerActionTypes.SearchPlayerSuccess: {
      return playerAdapter.addOne(action.payload, { ...state, searching: false, found: true });
    }
    case fromActions.PlayerActionTypes.SearchPlayerFail: {
      return { ...state, searching: false, found: false };
    }
    case fromActions.PlayerActionTypes.GetPlayer: {
      return { ...state, loading: true, loaded: false };
    }

    case fromActions.PlayerActionTypes.GetPlayerSuccess: {
      return playerAdapter.updateOne(
        { id: action.payload.id, changes: action.payload },
        { ...state, loaded: true, loading: false }
      );
    }
    case fromActions.PlayerActionTypes.GetPlayerFail: {
      return { ...state, loaded: false, loading: false };
    }

    default:
      return state;
  }
}
