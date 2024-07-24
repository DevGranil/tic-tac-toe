import { Component, input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Keys } from '../../store';
import { PlayersConfig, PlayerState } from '../../store/players/players.reducer';
import { Observable } from 'rxjs';
import { selectWinner } from '../../store/players/players.selectors';

@Component({
  selector: 'app-winner',
  standalone: true,
  imports: [],
  templateUrl: './winner.component.html',
  styleUrl: './winner.component.scss'
})
export class WinnerComponent {
  winner = input.required<string>()

  constructor(){
  }
}
