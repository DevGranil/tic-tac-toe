import { createReducer, on } from "@ngrx/store";
import { endGame, resetWinner, setWinner, updateActive, updatePlayers } from "./players.actions";
import { Draw } from "../grid/grid.effects";

export interface PlayersConfig{
    player_one: string,
    player_two: string,
    active: PlayersConfig['player_one'] | PlayersConfig['player_two']
    winner? : string,
    scores: {[key:string]: number}
}

export type PlayerState = PlayersConfig | null

const state: PlayerState = null

export const reducer = createReducer<PlayerState>(
    state,
    on(setWinner, (state, { payload }) => {
        if(!state) return state;

        const scoreOb = {...state.scores}
        const newScore = scoreOb[payload.winner] + 1
        const newState = payload.winner !== Draw.DRAW ? {...state, winner : payload.winner, scores: { ...scoreOb, [payload.winner]: newScore } } : {...state, winner : payload.winner} 
        return newState
    }),
    on(updatePlayers, (state, { payload }) => {
        state = payload.players
        return state
    }),
    on(updateActive, (state, { payload }) => {
        if(!state) return state

        const newState = {...state, active: payload}
        return newState
    }),
    on(resetWinner, (state) => {
        if(!state) return state;

        const newState = {...state, winner: undefined, active: state.player_one}
        return newState
    }),
    on(endGame, () => {return null})
    

);