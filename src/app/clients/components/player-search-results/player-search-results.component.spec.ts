import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSearchResultsComponent } from './player-search-results.component';

describe('PlayerSearchResultsComponent', () => {
  let component: PlayerSearchResultsComponent;
  let fixture: ComponentFixture<PlayerSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
