import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { firstValueFrom, Observable } from 'rxjs';
import { GridAttr } from '../../store/grid/grid.reducer';
import { AsyncPipe, KeyValuePipe } from '@angular/common';
import { gridReset, gridUpdate } from '../../store/grid/grid.actions';
import { selectGrid } from '../../store/grid/grid.selectors';
import { Keys } from '../../store';
import { PlayerState } from '../../store/players/players.reducer';
import { selectActive } from '../../store/players/players.selectors';
import { SymbolPipe } from '../../pipes/symbol.pipe';

@Component({
    selector: 'app-grid',
    standalone: true,
    imports: [AsyncPipe, KeyValuePipe, SymbolPipe],
    templateUrl: './grid.component.html',
    styleUrl: './grid.component.scss'
})
export class GridComponent {
    gridData$: Observable<GridAttr> = this.store.select(selectGrid)


    constructor(private store: Store<{[Keys.GRID_KEY]: GridAttr, [Keys.PLAYER_KEY]: PlayerState}>){}

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
