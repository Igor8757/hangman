import { Component } from '@angular/core';
import { generateGame } from 'src/gameGenerator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hangman';
  state = generateGame();
}
