import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, firstValueFrom, map, Observable, pluck, take, tap } from 'rxjs';
import { GridAttr } from '../../store/grid/grid.reducer';
import { AsyncPipe, KeyValuePipe } from '@angular/common';
import { gridReset, gridUpdate } from '../../store/grid/grid.actions';
import { selectGrid } from '../../store/grid/grid.selectors';
import { Keys } from '../../store';
import { PlayerState } from '../../store/players/players.reducer';
import { selectActive, selectPlayers } from '../../store/players/players.selectors';
import { SymbolPipe } from '../../pipes/symbol.pipe';

type Symbol = 'X' | 'O'

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [AsyncPipe, KeyValuePipe, SymbolPipe],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent implements OnInit {
  gridData$: Observable<GridAttr> = this.store.select(selectGrid)


  constructor(private store: Store<{[Keys.GRID_KEY]: GridAttr, [Keys.PLAYER_KEY]: PlayerState}>){}

  ngOnInit(): void {
    // this.store.select(selectGrid).pipe(
    //   map(state => state['winner'])
    // ).subscribe(winner => )
  }

  async selectBox(hash: string, boxHolder: string | null){
    if(boxHolder !== null) return;

    const activePlayer = await firstValueFrom(this.store.select(selectActive))
    
    if(!activePlayer) return;

    this.store.dispatch(gridUpdate({payload: {[hash]: activePlayer}}))
  }


  reset(){
    this.store.dispatch(gridReset())
  }

}
