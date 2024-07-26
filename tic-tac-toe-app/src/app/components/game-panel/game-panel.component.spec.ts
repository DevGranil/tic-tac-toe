import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePanelComponent } from './game-panel.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('GamePanelComponent', () => {
    let component: GamePanelComponent;
    let fixture: ComponentFixture<GamePanelComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [GamePanelComponent],
            providers: [
                provideMockStore({})      
            ]
        })
            .compileComponents();
    
        fixture = TestBed.createComponent(GamePanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
