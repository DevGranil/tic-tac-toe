import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { gridReducer } from './store/grid/grid.reducer';
import { GridSelectors } from './store';
import { provideEffects } from '@ngrx/effects';
import { GridEffects } from './store/grid/grid.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(
      {[GridSelectors.GRID_STATE]: gridReducer},
    ), 
    provideEffects([GridEffects])]
};