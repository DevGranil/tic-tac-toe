import { createReducer } from "@ngrx/store";

export type gridAttr = Record<string, null | 'RED' | 'BLACK'>

const initial: gridAttr = {
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

export const gridReducer = createReducer(initial);