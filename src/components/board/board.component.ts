import { Component, OnInit, Input, ChangeDetectionStrategy, NgZone, SimpleChanges, OnChanges } from '@angular/core';
import { GameState, revealLetter } from 'src/gameGenerator';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class BoardComponent implements OnInit, OnChanges {

  @Input() gameState: GameState;
  constructor(private _ngZone: NgZone) { }

  ngOnInit() {
  }

  onKeyPress(key: string){   
    if(!this.gameState.hiddenLetters.includes(key)) this.gameState.lives=Math.max(0, this.gameState.lives - 1);
    this._ngZone.run(() => this.gameState.hiddenLetters = [...revealLetter(key)]);   
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('board changed !!')
  }
  
  
}
