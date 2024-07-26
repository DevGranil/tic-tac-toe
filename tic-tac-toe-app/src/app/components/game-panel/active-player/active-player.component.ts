import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Keys } from '../../../store';
import { PlayerState } from '../../../store/players/players.reducer';
import { Observable } from 'rxjs';
import { selectActive } from '../../../store/players/players.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-active-player',
    standalone: true,
    imports: [
        AsyncPipe
    ],
    templateUrl: './active-player.component.html',
    styleUrl: './active-player.component.scss'
})
export class ActivePlayerComponent {
    active$: Observable<string | undefined> = this.store.select(selectActive);

    constructor(private store: Store<{[Keys.PLAYER_KEY]: PlayerState}>){}

}
