import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayComponent } from './overlay.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('OverlayComponent', () => {
    let component: OverlayComponent;
    let fixture: ComponentFixture<OverlayComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [OverlayComponent],
            providers: [provideMockStore({})]
        })
            .compileComponents();
    
        fixture = TestBed.createComponent(OverlayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
