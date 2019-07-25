import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

@Injectable()
export class PlayerEffects {
  constructor(private actions$: Actions) {}
}
