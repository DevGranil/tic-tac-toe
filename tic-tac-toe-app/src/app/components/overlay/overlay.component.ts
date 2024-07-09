import { Component } from '@angular/core';
import { ConfigComponent } from './config/config.component';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [
    ConfigComponent
  ],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss'
})
export class OverlayComponent {

}
