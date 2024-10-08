import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridComponent } from './grid.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('GridComponent', () => {
    let component: GridComponent;
    let fixture: ComponentFixture<GridComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [GridComponent],
            providers: [provideMockStore({})]
        })
            .compileComponents();
    
        fixture = TestBed.createComponent(GridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
