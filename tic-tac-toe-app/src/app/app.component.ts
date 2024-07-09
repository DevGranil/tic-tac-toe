import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridComponent } from './components/grid/grid.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { PlayersService } from './services/players.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GridComponent,
    OverlayComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  playersForm: FormGroup = this.playerService.players()

  constructor(private playerService: PlayersService){}
}
