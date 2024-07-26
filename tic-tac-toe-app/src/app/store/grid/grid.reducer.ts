import { createReducer, on } from "@ngrx/store";
import { gridCalculate, gridReset, gridUpdate } from "./grid.actions";

export type GridAttr = Record<string, null | string>

const state: GridAttr = {
    '00': null,
    '01': null,
    '02': null,
    '10': null,
    '11': null,
    '12': null,
    '20': null,
    '21': null,
    '22': null
}

export const reducer = createReducer(
    state,
    on(gridUpdate, (state, { payload }) => {
        const hash = Object.keys(payload)[0]
        const newState = {...state};
        newState[hash] = Object.values(payload)[0]
        return newState 
    }),
    on(gridReset, (state) => {
        const newState = {...state};
        Object.keys(newState).map(key => newState[key] = null)
        return newState
    }),
);
