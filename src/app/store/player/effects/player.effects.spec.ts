import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, ReplaySubject } from 'rxjs';

import { PlayerEffects } from './player.effects';
import { HttpService } from '@app/shared/services/http.service';
import * as fromActions from '../actions/player.actions';
import { Actions } from '@ngrx/effects';

describe('PlayerEffects', () => {
  let actions$: Observable<any>;
  let effects: PlayerEffects;
  let action;
  let httpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PlayerEffects,
        provideMockActions(() => actions$),
        { provide: HttpService, useValue: jasmine.createSpyObj('HttpService', ['makeRequest']) },
      ],
    });
  });

  beforeEach(() => {
    effects = TestBed.get<PlayerEffects>(PlayerEffects);
    httpService = TestBed.get(HttpService);
    actions$ = TestBed.get(Actions);

    action = new ReplaySubject(1);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  /**
   * Search Player Effect
   */
  describe('searchPlayer$', () => {
    it('should be defined', () => {
      expect(effects.getPlayer$).toBeDefined();
    });

    it('should dispatch SearchPlayerSuccess or SearchPlayerFail Actions', () => {
      const searchAction = new fromActions.SearchPlayer('test');
      const playerFound = httpService.makeRequest();
      const searchSuccess = new fromActions.SearchPlayerSuccess(playerFound);
      const searchFail = new fromActions.SearchPlayerFail({});

      spyOn(actions$, 'pipe').and.callThrough();

      action.next(searchAction);

      effects.getPlayer$.subscribe(res => {
        expect(res).toEqual(searchSuccess || searchFail);
      });
    });
  });

  /**
   * search player Success Effect
   */
  describe('searchPlayerSuccess$', () => {
    it('should be defined', () => {
      expect(effects.searchPlayerSuccess$).toBeDefined();
    });

    it('should dispatch GetPlayer', () => {
      const searchSuccessAction = new fromActions.SearchPlayerSuccess({});
      const getPlayerAction = new fromActions.GetPlayer('player-id');
      const player = httpService.makeRequest();
      action.next(searchSuccessAction);

      effects.searchPLayer$.subscribe(res => {
        expect(res).toEqual(getPlayerAction);
      });
    });
  });

  /**
   * get player Effect
   */
  describe('#getPlayer$', () => {
    it('should be defined', () => {
      expect(effects.getPlayer$).toBeDefined();
    });

    it('should dispatch GetPlayerSuccess or GetPlayerFail Actions', () => {
      const getPlayerAction = new fromActions.GetPlayer('player-id');
      const getPlayerSucces = new fromActions.GetPlayerSuccess({});
      const getPlayerFail = new fromActions.GetPlayerFail({});
      const player = httpService.makeRequest();
      action.next(player);

      effects.getPlayer$.subscribe(res => {
        expect(res).toEqual(getPlayerSucces || getPlayerFail);
      });
    });
  });
});
