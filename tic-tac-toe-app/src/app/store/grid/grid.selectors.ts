import { GridAttr } from "./grid.reducer";
import { Selectors } from ".."

export const selectGrid = (state: { [Selectors.GRID_STATE]: GridAttr}) => state[Selectors.GRID_STATE]

