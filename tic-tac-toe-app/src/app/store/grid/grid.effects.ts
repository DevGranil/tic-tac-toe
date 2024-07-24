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
            map((res) => {
                const { payload } = res[0][0]
                const grid = res[0][1]
                const winner = this.getWinner(payload, grid);
                if(winner) return setWinner({payload: {winner: winner}})

                /// calculate winner here.. if no winner switch active
                // return setWinner({payload: {'winner': 'test'}})
                const activePlayer = Object.values(res[0][0].payload)[0]
                const players = res[1];
                const switchActive = players.find(player => player !== activePlayer)
                // const switchToActive
                /// No one has one yet so update active

                return updateActive({payload: switchActive ?? ''})

             
            })     
    ))

    constructor(private actions$: Actions, private store: Store<{[Keys.GRID_KEY]: GridAttr, [Keys.PLAYER_KEY]: PlayerState}>){}


    private getWinner(payload: GridAttr, grid: GridAttr): false | string{
        const triggeredValue = Object.values(payload)[0]

        if(triggeredValue === null) return false

        ///horizontal
        if(grid['00'] === triggeredValue &&  grid['01'] === triggeredValue && grid['02'] === triggeredValue) return triggeredValue;
        if(grid['10'] === triggeredValue &&  grid['11'] === triggeredValue && grid['12'] === triggeredValue) return triggeredValue;
        if(grid['20'] === triggeredValue &&  grid['21'] === triggeredValue && grid['22'] === triggeredValue) return triggeredValue;

        // vertical
        if(grid['00'] === triggeredValue &&  grid['10'] === triggeredValue && grid['20'] === triggeredValue) return triggeredValue;
        if(grid['01'] === triggeredValue &&  grid['11'] === triggeredValue && grid['21'] === triggeredValue) return triggeredValue;
        if(grid['02'] === triggeredValue &&  grid['12'] === triggeredValue && grid['22'] === triggeredValue) return triggeredValue;

        // diagonal
        if(grid['00'] === triggeredValue &&  grid['11'] === triggeredValue && grid['22'] === triggeredValue) return triggeredValue;
        if(grid['20'] === triggeredValue &&  grid['11'] === triggeredValue && grid['02'] === triggeredValue) return triggeredValue;

        return false
    }
}