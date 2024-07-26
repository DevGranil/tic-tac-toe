import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerComponent } from './winner.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('WinnerComponent', () => {
    let component: WinnerComponent;
    let fixture: ComponentFixture<WinnerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [WinnerComponent],
            providers: [provideMockStore({})]
        })
            .compileComponents();
    
        fixture = TestBed.createComponent(WinnerComponent);
        component = fixture.componentInstance;
        fixture.componentRef.setInput('winner', 'test')
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
