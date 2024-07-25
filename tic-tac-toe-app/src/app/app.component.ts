import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridComponent } from './components/grid/grid.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { GamePanelComponent } from './components/game-panel/game-panel.component';
import { Store } from '@ngrx/store';
import { PlayersConfig, PlayerState } from './store/players/players.reducer';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Keys } from './store';
import { selectPlayersState, selectWinner } from './store/players/players.selectors';
import { ActivePlayerComponent } from './components/game-panel/active-player/active-player.component';
import { WinnerComponent } from './components/winner/winner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GridComponent,
    OverlayComponent,
    GamePanelComponent,
    AsyncPipe,
    ActivePlayerComponent,
    WinnerComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  playersData$: Observable<PlayerState> = this.store.select(selectPlayersState)
  winner$: Observable<PlayersConfig['winner']> = this.store.select(selectWinner)

  constructor(private store: Store<{[Keys.PLAYER_KEY]: PlayerState}>){
  }
}
