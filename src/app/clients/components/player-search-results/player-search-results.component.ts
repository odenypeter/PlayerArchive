import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-search-results',
  templateUrl: './player-search-results.component.html',
  styleUrls: ['./player-search-results.component.scss'],
})
export class PlayerSearchResultsComponent implements OnInit {
  @Input() player: any;
  @Input() loading: boolean;

  constructor() {}

  ngOnInit() {}
}
