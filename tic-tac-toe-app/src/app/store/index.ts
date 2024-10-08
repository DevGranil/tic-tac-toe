
export enum GridActions {
    GRID_UPDATE = '[Grid] Update',
    GRID_RESET = '[Grid] Reset',
    GRID_WINNER = '[Grid] Winner',
}

export enum PlayerActions{
    PLAYER_WINNER = '[Players] setWinner',
    PLAYER_UPDATE = '[Players] update',
    PLAYER_ACTIVE = '[Players] active',
    PLAYER_RESTART = '[Players] restart',
    PLAYER_END = '[Players] end'
}

export enum Keys{
    GRID_KEY = 'gridKey',
    PLAYER_KEY = 'playersKey'
}
