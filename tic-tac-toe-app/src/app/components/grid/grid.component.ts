import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GridAttr } from '../../store/grid.reducer';
import { AsyncPipe, KeyValuePipe } from '@angular/common';
import { gridReset, gridUpdate } from '../../store/grid.actions';
import { selectGrid } from '../../store/grid.selectors';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [AsyncPipe, KeyValuePipe],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  gridData$: Observable<GridAttr> = this.store.select(selectGrid)
  activePlayer: 'RED' | 'BLACK' = 'RED'

  constructor(private store: Store<{gridState: GridAttr}>){

    this.gridData$.subscribe(data => {
      console.log(data)
    })
   }

  selectBox(hash: string){
    this.store.dispatch(gridUpdate({payload: {[hash]: this.activePlayer}}))
    this.activePlayer = this.activePlayer === 'RED' ?  'BLACK' : 'RED'
  }

  reset(){
    this.store.dispatch(gridReset({payload: null}))
    this.activePlayer = 'RED';
  }

}
