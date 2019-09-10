import { Component, OnInit, Input } from '@angular/core';
import { GameState } from 'src/gameGenerator';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  @Input() gameState: GameState;
  constructor() { }

  ngOnInit() {
    let interval= setInterval(() => {
      if(this.gameState.timeLeft > 0) {
        this.gameState.timeLeft--;
      } else {
        this.gameState.isLoss = true;
      }
    },1000)
  }

}
