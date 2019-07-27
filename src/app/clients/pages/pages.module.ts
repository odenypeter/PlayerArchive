import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [PlayerDetailsComponent],
  imports: [CommonModule, MatCardModule, MatTableModule, PagesRoutingModule, ComponentsModule],
})
export class PagesModule {}
