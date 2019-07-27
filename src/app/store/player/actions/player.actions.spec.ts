import * as fromActions from './player.actions';

describe('Player Actions', () => {
  /**
   * SearchPlayer Actions Test
   */
  describe('#Search Player', () => {
    // test for SearchPlayer
    it('should create an instance of #SearchPlayer', () => {
      expect(new fromActions.SearchPlayer()).toBeTruthy();
    });

    it('should create an action of type #SearchPlayer', () => {
      const action = new fromActions.SearchPlayer('test');
      expect({ ...action }).toEqual({
        type: fromActions.PlayerActionTypes.SearchPlayer,
        playerId: 'test',
      });
    });

    // SearchPlayerSuccess
    it('should create an instance of #SearchPlayerSuccess', () => {
      expect(new fromActions.SearchPlayerSuccess()).toBeTruthy();
    });

    it('should create an action of type #SearchPlayerSuccess', () => {
      const action = new fromActions.SearchPlayerSuccess({});
      expect({ ...action }).toEqual({
        type: fromActions.PlayerActionTypes.SearchPlayerSuccess,
        payload: {},
      });
    });

    // SearchPlayerFail
    it('should create an instance of #SearchPlayerFail', () => {
      expect(new fromActions.SearchPlayerFail()).toBeTruthy();
    });

    it('should create an action of type #SearchPlayerFail', () => {
      const action = new fromActions.SearchPlayerFail({});
      expect({ ...action }).toEqual({
        type: fromActions.PlayerActionTypes.SearchPlayerFail,
        error: {},
      });
    });
  });

  /**
   * GetPlayer Actions Test
   */
  describe('#Get Player', () => {
    // GetPlayer
    it('should create an instance of #GetPlayer', () => {
      expect(new fromActions.GetPlayer()).toBeTruthy();
    });

    it('should create an action of type #GetPlayer', () => {
      const action = new fromActions.GetPlayer('test-id');
      expect({ ...action }).toEqual({
        type: fromActions.PlayerActionTypes.GetPlayer,
        profileId: 'test-id',
      });
    });

    // GetPlayerSuccess
    it('should create an instance of #GetPlayerSuccess', () => {
      expect(new fromActions.GetPlayerSuccess()).toBeTruthy();
    });

    it('should create an action of type #GetPlayerSuccess', () => {
      const action = new fromActions.GetPlayerSuccess({});
      expect({ ...action }).toEqual({
        type: fromActions.PlayerActionTypes.GetPlayerSuccess,
        payload: {},
      });
    });

    // GetPlayerFail
    it('should create an instance of #GetPlayerFail', () => {
      expect(new fromActions.GetPlayerFail()).toBeTruthy();
    });

    it('should create an action of type #GetPlayerFail', () => {
      const action = new fromActions.GetPlayerFail({});
      expect({ ...action }).toEqual({
        type: fromActions.PlayerActionTypes.GetPlayerFail,
        error: {},
      });
    });
  });
});
