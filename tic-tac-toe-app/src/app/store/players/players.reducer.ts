import { createReducer, on } from "@ngrx/store";
import { resetWinner, setWinner, updateActive, updatePlayers } from "./players.actions";

export interface PlayersConfig{
    player_one: string,
    player_two: string,
    active: PlayersConfig['player_one'] | PlayersConfig['player_two']
    winner? : string,
    scores: {[key:string]: number}
}

export type PlayerState = PlayersConfig | null

const state: PlayersConfig | null = null

export const reducer = createReducer<PlayerState>(
    state,
    on(setWinner, (state, { payload }) => {
        if(!state) return state;

        let scoreOb = {...state.scores}
        let newScore = scoreOb[payload.winner] + 1
        let newState = {...state, winner : payload.winner, scores: { ...scoreOb, [payload.winner]: newScore } }
        return newState
    }),
    on(updatePlayers, (state, { payload }) => {
        state = payload.players
        return state
    }),
    on(updateActive, (state, { payload }) => {
        if(!state) return state

        let newState = {...state, active: payload}
        return newState
    }),
    on(resetWinner, (state) => {
        if(!state) return state;

        let newState = {...state, winner: undefined, active: state.player_one}
        return newState
    }),
    

);