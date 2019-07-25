import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';



@NgModule({
  declarations: [PlayerListComponent, PlayerDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
