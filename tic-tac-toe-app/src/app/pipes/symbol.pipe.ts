import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlayerState } from '../store/players/players.reducer';
import { Keys } from '../store';
import { firstValueFrom } from 'rxjs';
import { selectActive, selectPlayers } from '../store/players/players.selectors';

type Symbol = 'X' | 'O'

@Pipe({
  name: 'symbol',
  standalone: true
})
export class SymbolPipe implements PipeTransform {

  constructor(private store: Store<{[Keys.PLAYER_KEY]: PlayerState}>){}

  async transform(value: unknown, ...args: unknown[]): Promise<unknown> {
    return firstValueFrom(this.store.select(selectPlayers))
      .then((players) => {
      const val = value
      if(!val) return null
      const symbols: Symbol[] = ['X', 'O'];      
      return symbols[players.findIndex(p => p === value)] 
    })
  }

}
