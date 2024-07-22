import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridComponent } from './components/grid/grid.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { PlayersService } from './services/players.service';
import { FormGroup } from '@angular/forms';
import { GamePanelComponent } from './components/game-panel/game-panel.component';
import { Store } from '@ngrx/store';
import { PlayerState } from './store/players/players.reducer';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Keys } from './store';
import { selectPlayersState } from './store/players/players.selectors';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GridComponent,
    OverlayComponent,
    GamePanelComponent,
    AsyncPipe
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  playersData$: Observable<PlayerState> = this.store.select(selectPlayersState)

  constructor(private store: Store<{[Keys.PLAYER_KEY]: PlayerState}>){
  }
}
