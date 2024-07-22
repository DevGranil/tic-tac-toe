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
    '22': null,
    'winner': 'sime'
}

export const gridReducer = createReducer(
    state,
    on(gridUpdate, (state, action) => {
        const hash = Object.keys(action.payload)[0]
        const newState = {...state};
        newState[hash] = Object.values(action.payload)[0]
        return newState 
    }),
    on(gridReset, (state) => {
        const newState = {...state};
        Object.keys(newState).map(key => newState[key] = null)
        return newState
    }),
);
