import { createAction, props } from "@ngrx/store";
import { PlayerActions } from "..";
import { PlayersConfig, PlayerState } from "./players.reducer";

export const setWinner = createAction(
    PlayerActions.PLAYER_WINNER,
    props<{payload: { winner: string}}>()
)

export const updatePlayers = createAction(
    PlayerActions.PLAYER_UPDATE,
    props<{payload: { players: PlayerState}}>()
)

export const updateActive = createAction(
    PlayerActions.PLAYER_ACTIVE,
    props<{payload: PlayersConfig['active']}>()
)
