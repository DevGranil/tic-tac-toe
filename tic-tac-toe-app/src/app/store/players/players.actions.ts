import { createAction, props } from "@ngrx/store";

export const setWinner = createAction(
    '[Players] setWinner',
    props<{payload: { winner: string}}>()
)
