import { Component, OnInit, Input } from '@angular/core';

import { Player } from '@app/store/player/models/player.model';

@Component({
  selector: 'app-player-search-results',
  templateUrl: './player-search-results.component.html',
  styleUrls: ['./player-search-results.component.scss'],
})
export class PlayerSearchResultsComponent implements OnInit {
  @Input() player: Player;
  @Input() loading: boolean;

  constructor() {}

  ngOnInit() {}
}
