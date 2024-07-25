import { Component, input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Keys } from '../../store';
import { PlayersConfig, PlayerState } from '../../store/players/players.reducer';
import { Observable } from 'rxjs';
import { selectWinner } from '../../store/players/players.selectors';
import { GridAttr } from '../../store/grid/grid.reducer';
import { resetWinner } from '../../store/players/players.actions';
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
}
