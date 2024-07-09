import { Component, OnInit, computed, effect } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PlayersService } from '../../../services/players.service';

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
  configForm: FormGroup = this.playerService.players()

  constructor(private fb: FormBuilder, private playerService: PlayersService){}

  ngOnInit(): void {
    this.playerService.players()
  }


  onSubmit(){
    this.playerService.done()
  }
}
