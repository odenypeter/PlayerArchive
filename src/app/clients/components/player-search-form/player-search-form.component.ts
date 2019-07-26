import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../.history/src/app/store/reducers/index_20190725214315';
import { SearchPlayer } from '../../../../../.history/src/app/store/player/actions/player.actions_20190726074909';

@Component({
  selector: 'app-player-search-form',
  templateUrl: './player-search-form.component.html',
  styleUrls: ['./player-search-form.component.scss'],
})
export class PlayerSearchFormComponent implements OnInit {
  searchForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {}

  ngOnInit() {
    // initialize search form
    this.initForm();
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
      const playerId = this.searchForm.value.playerId as string;
      this.store.dispatch(new SearchPlayer(`${playerId.toLowerCase()}.json`));
    }
  }
}
