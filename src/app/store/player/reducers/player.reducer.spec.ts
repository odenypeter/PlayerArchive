import { reducer, initialState } from './player.reducer';
import * as fromActions from '../actions/player.actions';

describe('Player Reducer', () => {
  /**
   * unknown action
   */
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  /**
   * SearchPlayer,SearchPlayerSuccess, SearchPlayerFail Actions
   */
  describe('search actions', () => {
    // SearchPlayer
    it('should set searching > true, and found > false', () => {
      const action = new fromActions.SearchPlayer('test');
      const result = reducer(initialState, action);
      expect(result).toEqual({ ...initialState, searching: true, found: false });
    });

    // SearchPlayerSuccess
    it('should set loading > false, and found > true', () => {
      const action = new fromActions.SearchPlayerSuccess({});
      const result = reducer(initialState, action);
      expect(result.searching).toBe(false);
      expect(result.found).toBe(true);
    });

    // SearchPlayerFail
    it('should set loading > false, and found > false', () => {
      const action = new fromActions.SearchPlayerFail({});
      const result = reducer(initialState, action);
      expect(result.searching).toBe(false);
      expect(result.found).toBe(false);
    });
  });

  /**
   * GetPlayer, GetPlayerSuccess, GetPlayerFail Actions
   */
  describe('get player actions', () => {
    // GetPlayer
    it('should set loading > true, and loaded > false', () => {
      const action = new fromActions.GetPlayer('test');
      const result = reducer(initialState, action);
      expect(result).toEqual({ ...initialState, loading: true, loaded: false });
    });

    // GetPlayerSuccess
    it('should set loading > false, and found > true', () => {
      const action = new fromActions.GetPlayerSuccess({});
      const result = reducer(initialState, action);
      expect(result.loading).toBe(false);
      expect(result.loaded).toBe(true);
    });

    // GetPlayerFail
    it('should set loading > false, and found > false', () => {
      const action = new fromActions.GetPlayerFail({});
      const result = reducer(initialState, action);
      expect(result.loading).toBe(false);
      expect(result.loaded).toBe(false);
    });
  });
});
