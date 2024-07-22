import { GridAttr } from "./grid.reducer";
import { Keys } from ".."

export const selectGrid = (state: { [Keys.GRID_KEY]: GridAttr}) => state[Keys.GRID_KEY]

