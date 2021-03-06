import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-not-found',
  templateUrl: './player-not-found.component.html',
  styleUrls: ['./player-not-found.component.scss'],
})
export class PlayerNotFoundComponent {
  @Input() playerId: string;

  constructor() {}
}
