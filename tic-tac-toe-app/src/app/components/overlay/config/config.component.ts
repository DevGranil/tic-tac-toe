import { Component, OnInit, computed, effect } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { PlayerState } from '../../../store/players/players.reducer';
import { updatePlayers } from '../../../store/players/players.actions';

@Component({
  selector: 'app-config',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss'
})
export class ConfigComponent implements OnInit{
  configForm: FormGroup = this.fb.group({
    player_one: ['', Validators.required],
    player_two: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private store: Store<{playersState: PlayerState}>){}

  ngOnInit(): void {
    // this.playerService.players()
  }


  onSubmit(){
    this.store.dispatch(updatePlayers({
      payload: {
        players: {...this.configForm.value, active: this.configForm.controls['player_one'].value}
      }
    }))
  }
}
