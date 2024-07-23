import { createSelector } from "@ngrx/store";
import { Keys } from "..";
import { PlayerState } from "./players.reducer";

export const selectPlayersState = (state: { [Keys.PLAYER_KEY]: PlayerState}) => state[Keys.PLAYER_KEY]
export const selectPlayers = createSelector(selectPlayersState, (state) => [state?.player_one, state?.player_two] );
export const selectActive = createSelector(selectPlayersState, (state) => state?.active);
export const selectGamesPanel = createSelector(selectPlayersState, (state) => {
    if(!state) return null
    return state.scores = { [state.player_one] : Object.values([state.scores[state.player_one]])[0], [state.player_two] : Object.values([state.scores[state.player_two]])[0]}
});

