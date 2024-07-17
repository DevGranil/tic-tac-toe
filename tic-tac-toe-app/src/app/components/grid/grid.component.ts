import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { gridAttr } from '../../store/grid.reducer';
import { AsyncPipe, KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [AsyncPipe, KeyValuePipe],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  gridData$: Observable<gridAttr[]>;

  constructor(private store: Store<{gridState: gridAttr[]}>){
    this.gridData$ = this.store.select('gridState')
  }

  selectBox(){
  }

}
