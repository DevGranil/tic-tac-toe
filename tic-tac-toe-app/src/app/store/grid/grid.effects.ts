import { Actions, createEffect, ofType } from "@ngrx/effects";
import { gridUpdate } from "./grid.actions";
import { tap, withLatestFrom } from "rxjs";
import { GridActions, GridSelectors } from "..";
import { Store } from "@ngrx/store";
import { selectGrid } from "./grid.selectors";
import { Injectable } from "@angular/core";
import { GridAttr } from "./grid.reducer";

@Injectable()
export class GridEffects{
    calculateResult = createEffect(() =>
         this.actions$.pipe(
            ofType(gridUpdate),
            withLatestFrom(this.store.select(selectGrid)),
            tap((action) => {
                debugger
            })
            
    ), {dispatch: false})

    constructor(private actions$: Actions, private store: Store<{[GridSelectors.GRID_STATE]: GridAttr}>){}
}