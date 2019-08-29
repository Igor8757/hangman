import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { GameState } from 'src/gameGenerator';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
  
})
export class GameOverComponent implements OnInit, OnChanges {
  
  @Input() gameState: GameState;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

}
