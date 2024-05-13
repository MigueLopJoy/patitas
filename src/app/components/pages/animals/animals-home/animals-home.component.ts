import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-animals-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './animals-home.component.html',
  styleUrl: './animals-home.component.css'
})
export class AnimalsHomeComponent {

}
