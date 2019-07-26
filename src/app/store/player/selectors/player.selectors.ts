import { createSelector } from '@ngrx/store';
import { AppState } from '@app/store/reducers';

import { playerAdapter } from '../reducers/player.reducer';

export const getPlayerState = (state: AppState) => state.players;

export const { selectEntities: selectPlayerEntities } = playerAdapter.getSelectors(getPlayerState);

/**
 * select player searching status
 */
export const selectPlayerSearching = createSelector(
  getPlayerState,
  state => state.searching
);

/**
 * select player found status
 */
export const selectPlayerFound = createSelector(
  getPlayerState,
  state => state.found
);
/**
 * select player loading status
 */
export const selectPlayerLoading = createSelector(
  getPlayerState,
  state => state.loading
);

/**
 * select player loaded status
 */
export const selectPlayerLoaded = createSelector(
  getPlayerState,
  state => state.loaded
);

export const selectPlayerById = (playerId: string) =>
  createSelector(
    selectPlayerEntities,
    entities => {
      return entities[playerId];
    }
  );
