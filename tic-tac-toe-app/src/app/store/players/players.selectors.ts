import { createSelector } from "@ngrx/store";
import { Keys } from "..";
import { PlayerState } from "./players.reducer";

export const selectPlayersState = (state: { [Keys.PLAYER_KEY]: PlayerState}) => state[Keys.PLAYER_KEY]
export const selectPlayers = createSelector(selectPlayersState, (state) => [state?.player_one, state?.player_two] );
export const selectActive = createSelector(selectPlayersState, (state) => state?.active);
export const selectScores = createSelector(selectPlayersState, (state) => state?.scores);

