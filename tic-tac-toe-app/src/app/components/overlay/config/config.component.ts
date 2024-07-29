import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { PlayerState } from '../../../store/players/players.reducer';
import { updatePlayers } from '../../../store/players/players.actions';

interface FormStruct {
    player_one: FormControl<string | null>,
    player_two: FormControl<string | null>
}

@Component({
    selector: 'app-config',
    standalone: true,
    imports: [
        ReactiveFormsModule,
    ],
    templateUrl: './config.component.html',
    styleUrl: './config.component.scss'
})

export class ConfigComponent{
    configForm: FormGroup<FormStruct> = this.fb.group({
        player_one: ['', Validators.required],
        player_two: ['', Validators.required]
    })

    constructor(private fb: FormBuilder, private store: Store<{playersState: PlayerState}>){}


    onSubmit(){
        if(this.configForm.controls['player_one'].value === this.configForm.controls['player_two'].value){
            this.configForm.setErrors({playerNames: 'Player names must be unique'})
            return
        }

        this.store.dispatch(updatePlayers({
            payload: {
                players: {
                    player_one: this.configForm.controls['player_one'].value ?? '',
                    player_two: this.configForm.controls['player_two'].value ?? '',
                    active: this.configForm.controls['player_one'].value ?? '',
                    scores: {
                        [this.configForm.controls['player_one'].value ?? '']: 0,
                        [this.configForm.controls['player_two'].value ?? '']: 0,
                    }
                }
            }
        }))
    }
}
