import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { reducers } from '@app/store/reducers';

import { PlayerDetailsComponent } from './player-details.component';

describe('PlayerDetailsComponent', () => {
  let component: PlayerDetailsComponent;
  let fixture: ComponentFixture<PlayerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerDetailsComponent],
      imports: [StoreModule.forRoot(reducers)],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit()', () => {
    it('should init both the searching$ and loading$ props', () => {
      component.ngOnInit();

      expect(component.searching$).toBeDefined();
      expect(component.loading$).toBeDefined();
    });
  });

  describe('#setPlayerId()', () => {
    let getPlayerSpy;
    const targetPlayerId = 'peter';

    beforeEach(() => {
      getPlayerSpy = spyOn<any>(component, 'getPlayer').and.callThrough();
    });

    it('should set the player id to the passed argument', () => {
      component.setPlayerId(targetPlayerId);

      expect(component.activePlayerId).toEqual(targetPlayerId);
    });

    it('should trigger the getPlayer() method with correct args', () => {
      component.setPlayerId(targetPlayerId);

      expect(getPlayerSpy).toHaveBeenCalledWith(targetPlayerId);
    });
  });
});
