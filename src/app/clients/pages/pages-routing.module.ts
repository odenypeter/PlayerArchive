import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PlayerDetailsComponent } from './player-details/player-details.component';

const routes: Routes = [
  { path: '', component: PlayerDetailsComponent },
  { path: 'details', component: PlayerDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PagesRoutingModule {}
