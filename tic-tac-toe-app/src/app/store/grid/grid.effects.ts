import { Actions, createEffect, ofType } from "@ngrx/effects";
import { gridUpdate } from "./grid.actions";
import { map, of, switchMap, tap, withLatestFrom } from "rxjs";
import { GridActions, Keys } from "..";
import { Store } from "@ngrx/store";
import { selectGrid } from "./grid.selectors";
import { Injectable } from "@angular/core";
import { GridAttr } from "./grid.reducer";
import { setWinner } from "../players/players.actions";

@Injectable()
export class GridEffects{
    calculateResult = createEffect(() =>
         this.actions$.pipe(
            ofType(gridUpdate),
            withLatestFrom(this.store.select(selectGrid)),
            map((action) => {
                /// calculate winner here 
                return setWinner({payload: {'winner': 'test'}})
            })     
    ))

    constructor(private actions$: Actions, private store: Store<{[Keys.GRID_KEY]: GridAttr}>){}
}