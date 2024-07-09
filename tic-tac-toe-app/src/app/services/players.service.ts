import { Injectable, Signal, computed, signal } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private playersConfig = signal<any>(this.fb.group({
    player1: ['', Validators.required],
    player2: ['', Validators.required],
    complete: [false]
  }))

  constructor(private fb: FormBuilder) { }

  players: Signal<FormGroup> = computed(() => this.playersConfig())

  done(){
    this.playersConfig.update((form: FormGroup) => form.controls['complete'].setValue(true)
    )
  }
}
