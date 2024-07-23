import { createReducer, on } from "@ngrx/store";
import { setWinner, updateActive, updatePlayers } from "./players.actions";

export interface PlayersConfig{
    player_one: string,
    player_two: string,
    active: PlayersConfig['player_one'] | PlayersConfig['player_two']
    winner? : string,
    scores : {[key:string]: number}
}

export type PlayerState = PlayersConfig | null

const state: PlayersConfig | null = null

export const reducer = createReducer<PlayerState>(
    state,
    on(setWinner, (state, action) => {
        return null
    }),
    on(updatePlayers, (state, { payload }) => {
        state = payload.players
        return state
    }),
    on(updateActive, (state, { payload }) => {
        if(state) {
            let newState = {...state, active: payload}
            return newState
        } else {
            return state
        }
    })

);