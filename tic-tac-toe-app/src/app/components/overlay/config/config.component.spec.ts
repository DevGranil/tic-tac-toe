import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigComponent } from './config.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('ConfigComponent', () => {
    let component: ConfigComponent;
    let fixture: ComponentFixture<ConfigComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ConfigComponent],
            providers: [provideMockStore({})]
        })
            .compileComponents();
    
        fixture = TestBed.createComponent(ConfigComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
