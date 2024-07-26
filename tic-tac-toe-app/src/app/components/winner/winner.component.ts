import { Component, input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Keys } from '../../store';
import { PlayerState } from '../../store/players/players.reducer';
import { GridAttr } from '../../store/grid/grid.reducer';
import { endGame, resetWinner } from '../../store/players/players.actions';
import { gridReset } from '../../store/grid/grid.actions';
import { Draw } from '../../store/grid/grid.effects';

@Component({
    selector: 'app-winner',
    standalone: true,
    imports: [],
    templateUrl: './winner.component.html',
    styleUrl: './winner.component.scss'
})
export class WinnerComponent {
    winner = input.required<string>()
    draw = Draw.DRAW

    constructor(private store: Store<{[Keys.GRID_KEY]: GridAttr, [Keys.PLAYER_KEY]: PlayerState}>){
    }

    restart(){
        this.store.dispatch(resetWinner())
        this.store.dispatch(gridReset())

    }

    end(){
        this.store.dispatch(endGame())
        this.store.dispatch(gridReset())
    }
}
