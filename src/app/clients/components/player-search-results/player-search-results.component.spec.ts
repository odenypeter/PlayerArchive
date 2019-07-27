import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PlayerSearchResultsComponent } from './player-search-results.component';

describe('PlayerSearchResultsComponent', () => {
  let component: PlayerSearchResultsComponent;
  let fixture: ComponentFixture<PlayerSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerSearchResultsComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSearchResultsComponent);
    component = fixture.componentInstance;
    component.player = { id: 'someid', profile: {}, active: true };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
