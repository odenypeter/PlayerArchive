import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerSearchFormComponent } from './player-search-form/player-search-form.component';
import { PlayerSearchResultsComponent } from './player-search-results/player-search-results.component';
import { PlayerNotFoundComponent } from './player-not-found/player-not-found.component';
import { MatInputModule } from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PlayerSearchFormComponent, PlayerSearchResultsComponent, PlayerNotFoundComponent],
  imports: [CommonModule, MatInputModule, FormsModule, ReactiveFormsModule],
  exports: [PlayerSearchFormComponent, PlayerSearchResultsComponent, PlayerNotFoundComponent],
})
export class ComponentsModule {}
