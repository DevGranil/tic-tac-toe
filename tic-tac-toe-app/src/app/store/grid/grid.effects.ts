import { Actions, createEffect, ofType } from "@ngrx/effects";
import { gridUpdate } from "./grid.actions";
import { map, of, switchMap, tap, withLatestFrom } from "rxjs";
import { GridActions, Keys } from "..";
import { Store } from "@ngrx/store";
import { selectGrid } from "./grid.selectors";
import { Injectable } from "@angular/core";
import { GridAttr } from "./grid.reducer";
import { setWinner, updateActive } from "../players/players.actions";
import { PlayerState } from "../players/players.reducer";
import { selectPlayers } from "../players/players.selectors";

@Injectable()
export class GridEffects{
    calculateResult = createEffect(() =>
         this.actions$.pipe(
            ofType(gridUpdate),
            withLatestFrom(this.store.select(selectGrid)),
            withLatestFrom(this.store.select(selectPlayers)),
            map((action) => {

                /// calculate winner here.. if no winner switch active
                // return setWinner({payload: {'winner': 'test'}})
                const activePlayer = Object.values(action[0][0].payload)[0]
                const players = action[1];
                const switchActive = players.find(player => player !== activePlayer)
                // const switchToActive
                /// No one has one yet so update active

                return updateActive({payload: switchActive ?? ''})

             
            })     
    ))

    constructor(private actions$: Actions, private store: Store<{[Keys.GRID_KEY]: GridAttr, [Keys.PLAYER_KEY]: PlayerState}>){}
}