import { GridAttr } from "./grid.reducer";
import { GridSelectors } from "."

export const selectGrid = (state: { [GridSelectors.GRID_STATE]: GridAttr}) => state[GridSelectors.GRID_STATE]

