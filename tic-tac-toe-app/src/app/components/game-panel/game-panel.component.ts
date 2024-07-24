import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PlayersConfig, PlayerState } from '../../store/players/players.reducer';
import { selectLeaderBoard, selectPlayers } from '../../store/players/players.selectors';
import { Keys } from '../../store';
import { ActivePlayerComponent } from './active-player/active-player.component';
import { AsyncPipe, KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-game-panel',
  standalone: true,
  imports: [
    ActivePlayerComponent,
    AsyncPipe,
    KeyValuePipe
  ],
  templateUrl: './game-panel.component.html',
  styleUrl: './game-panel.component.scss'
})
export class GamePanelComponent {
  scores$: Observable<PlayersConfig['scores'] | undefined> = this.store.select(selectLeaderBoard);

  constructor(private store: Store<{[Keys.PLAYER_KEY]: PlayerState}>){

    this.scores$.subscribe(data => {
    })

  }
}
