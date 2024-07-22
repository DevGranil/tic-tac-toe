import { createReducer, on } from "@ngrx/store";
import { setWinner } from "./players.actions";

const state : {winner: string | null} = {
    winner: null
}


export const reducer = createReducer(
    state,
    on(setWinner, (state, action) => {
        debugger
        return action.payload
    }),

);