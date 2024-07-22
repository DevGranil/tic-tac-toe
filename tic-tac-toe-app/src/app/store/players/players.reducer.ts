import { createReducer, on } from "@ngrx/store";
import { setWinner, updatePlayers } from "./players.actions";

export interface PlayersConfig{
    player_one: string,
    player_two: string,
    active: PlayersConfig['player_one'] | PlayersConfig['player_two']
    winner? : string,
}

export type PlayerState = PlayersConfig | null

const state: PlayersConfig | null = null

export const reducer = createReducer<PlayerState>(
    state,
    on(setWinner, (state, action) => {
        return null
    }),
    on(updatePlayers, (state, { payload }) => {
        if(payload) state = payload.players
        return state
    })

);