import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideStore } from '@ngrx/store';
import { Keys } from './store';
import { provideEffects } from '@ngrx/effects';
import { reducer as gridReducer} from "./store/grid/grid.reducer";
import { reducer as playersReducer} from "./store/players/players.reducer";
import { GridEffects } from './store/grid/grid.effects';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideStore(
            {
                [Keys.GRID_KEY]: gridReducer, 
                [Keys.PLAYER_KEY]: playersReducer
            }),
        provideEffects([GridEffects])
    ]
};
