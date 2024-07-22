import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PlayersConfig, PlayerState } from '../../store/players/players.reducer';
import { selectPlayers } from '../../store/players/players.selectors';
import { Keys } from '../../store';
import { ActivePlayerComponent } from './active-player/active-player.component';

@Component({
  selector: 'app-game-panel',
  standalone: true,
  imports: [
    ActivePlayerComponent
  ],
  templateUrl: './game-panel.component.html',
  styleUrl: './game-panel.component.scss'
})
export class GamePanelComponent {
  players$: Observable<(string | undefined)[]> = this.store.select(selectPlayers);

  constructor(private store: Store<{[Keys.PLAYER_KEY]: PlayerState}>){

  }
}
