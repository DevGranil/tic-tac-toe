import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { gridReducer } from './store/grid.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore({
    gridState: gridReducer
  })]
};
