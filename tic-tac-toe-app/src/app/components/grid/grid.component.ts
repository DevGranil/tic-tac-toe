import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, map, Observable, pluck, tap } from 'rxjs';
import { GridAttr } from '../../store/grid/grid.reducer';
import { AsyncPipe, KeyValuePipe } from '@angular/common';
import { gridReset, gridUpdate } from '../../store/grid/grid.actions';
import { selectGrid } from '../../store/grid/grid.selectors';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [AsyncPipe, KeyValuePipe],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent implements OnInit {
  gridData$: Observable<GridAttr> = this.store.select(selectGrid)
  activePlayer: 'RED' | 'BLACK' = 'RED'

  constructor(private store: Store<{gridState: GridAttr}>){}

  ngOnInit(): void {
    // this.store.select(selectGrid).pipe(
    //   map(state => state['winner'])
    // ).subscribe(winner => )
  }

  selectBox(hash: string){
    this.store.dispatch(gridUpdate({payload: {[hash]: this.activePlayer}}))
    this.activePlayer = this.activePlayer === 'RED' ?  'BLACK' : 'RED'
  }

  reset(){
    this.store.dispatch(gridReset())
    this.activePlayer = 'RED';
  }

}
