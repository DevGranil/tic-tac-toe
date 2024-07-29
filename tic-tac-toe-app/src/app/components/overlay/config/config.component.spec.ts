import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigComponent } from './config.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { updatePlayers } from '../../../store/players/players.actions';

fdescribe('ConfigComponent', () => {
    let component: ConfigComponent;
    let fixture: ComponentFixture<ConfigComponent>;
    let store: MockStore

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ConfigComponent],
            providers: [provideMockStore({initialState: ''})]
        })
            .compileComponents();
    
        fixture = TestBed.createComponent(ConfigComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        store = TestBed.inject(MockStore)
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should send valid form', () =>{
        const button: HTMLButtonElement = fixture.nativeElement.querySelector('button')
        const submit = spyOn(component, 'onSubmit').and.callThrough()
        const dispatchSpy = spyOn(store, 'dispatch'); 

        component.configForm.controls['player_one'].patchValue('mike');
        component.configForm.controls['player_two'].patchValue('test');

        fixture.detectChanges()

        expect(component.configForm.valid).toBeTruthy()
        expect(button.disabled).toEqual(!component.configForm.valid)

        button.click();

        expect(submit).toHaveBeenCalled();
        expect(dispatchSpy).toHaveBeenCalledWith(updatePlayers(
            {
                payload: {
                    players: {
                        player_one: 'mike',
                        player_two: 'test',
                        active: 'mike',
                        scores: {
                            'mike': 0,
                            'test': 0,
                        }
                    }
                }
            }
        ));
    })
});
