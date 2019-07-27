import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/store/reducers';
import {
  selectPlayerById,
  selectPlayerSearching,
  selectPlayerLoading,
} from '@app/store/player/selectors/player.selectors';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss'],
})
export class PlayerDetailsComponent implements OnInit {
  player$: Observable<any>;
  searching$: Observable<boolean>;
  loading$: Observable<boolean>;

  activePlayerId: string;

  playerSubscription: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.searching$ = this.store.select(selectPlayerSearching);
    this.loading$ = this.store.select(selectPlayerLoading);
  }

  /**
   * set the searched player id for selection
   * @param playerId - the searched player id
   */
  public setPlayerId(playerId: string) {
    this.activePlayerId = playerId;
    // select player from the store
    this.getPlayer(playerId);
  }

  /**
   * get the searched player from the store
   * @param playerId - player id (enetity selectId)
   */
  private getPlayer(playerId: string) {
    this.player$ = this.store.select(selectPlayerById(playerId));
  }
}
