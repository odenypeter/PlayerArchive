import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { StoreModule, Store } from '@ngrx/store';

import { reducers } from '@app/store/reducers';
import { PlayerSearchFormComponent } from './player-search-form.component';
import { SearchPlayer } from '@app/store/player/actions/player.actions';

fdescribe('PlayerSearchFormComponent', () => {
  let component: PlayerSearchFormComponent;
  let fixture: ComponentFixture<PlayerSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerSearchFormComponent],
      imports: [ReactiveFormsModule, FormsModule, StoreModule.forRoot(reducers)],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit()', () => {
    beforeEach(() => {});

    it('should initialize the search form', () => {
      const initForm = spyOn<any>(component, 'initForm').and.callFake(() => {});

      component.ngOnInit();

      expect(initForm).toHaveBeenCalled();
      expect(component.searchForm).toBeDefined();
    });

    it('should init the searching observable', () => {
      component.ngOnInit();

      expect(component.searching$).toBeDefined();
    });
  });

  describe('#searchPlayer()', () => {
    let store: Store<any>;
    beforeEach(() => {
      component.ngOnInit();

      component.searchForm.patchValue({ playerId: 'peter' });

      store = TestBed.get(Store);

      spyOn(store, 'dispatch').and.callFake(() => {});
      spyOn(component.playerSearched, 'emit').and.callFake(() => {});
    });

    describe('when the form is valid', () => {
      it('should dispatch action to search a player with correct arguments', () => {
        component.searchPlayer();

        expect(store.dispatch).toHaveBeenCalledWith(
          new SearchPlayer(`${component.searchForm.value.playerId}.json`)
        );
      });

      it('should emit the player id', () => {
        component.searchPlayer();

        expect(component.playerSearched.emit).toHaveBeenCalledWith(
          component.searchForm.value.playerId
        );
      });
    });
  });
});
