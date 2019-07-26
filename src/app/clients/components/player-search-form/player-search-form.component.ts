import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { AppState } from '@app/store/reducers';
import { SearchPlayer } from '@app/store/player/actions/player.actions';
import { Observable } from 'rxjs';
import { selectPlayerSearching } from '@app/store/player/selectors/player.selectors';

@Component({
  selector: 'app-player-search-form',
  templateUrl: './player-search-form.component.html',
  styleUrls: ['./player-search-form.component.scss'],
})
export class PlayerSearchFormComponent implements OnInit {
  @Output() playerSearched = new EventEmitter<string>();

  searchForm: FormGroup;

  searching$: Observable<boolean>;

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {}

  ngOnInit() {
    // initialize search form
    this.initForm();

    this.searching$ = this.store.select(selectPlayerSearching);
  }

  /**
   * initialize player search form
   */
  private initForm() {
    this.searchForm = this.formBuilder.group({ playerId: ['', Validators.required] });
  }

  /**
   * search player
   */
  public searchPlayer() {
    if (this.searchForm.valid) {
      const playerId = (this.searchForm.value.playerId as string).toLowerCase();
      this.store.dispatch(new SearchPlayer(`${playerId}.json`));

      this.playerSearched.emit(playerId);
    }
  }
}
