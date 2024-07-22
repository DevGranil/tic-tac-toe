import { createAction, props } from "@ngrx/store";
import { GridAttr } from "./grid.reducer";
import { GridActions } from "..";

export const gridUpdate = createAction(
    GridActions.GRID_UPDATE,
    props<{payload: GridAttr}>()
)

export const gridReset = createAction(
    GridActions.GRID_RESET
)

export const gridCalculate = createAction(
    GridActions.GRID_WINNER,
    props<{payload: string}>
)