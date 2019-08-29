import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy, NgZone, SimpleChanges, OnChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { GameState, revealLetter } from 'src/gameGenerator';
import { BoardService } from './board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [BoardService]
})

export class BoardComponent implements OnInit, OnChanges {

  @Input() gameState: GameState;
  constructor(private _ngZone: NgZone) { }

  ngOnInit() {
  }

  onKeyPress(key: string){   
    this._ngZone.run(() => this.gameState.hiddenLetters = [...revealLetter(key)]);   
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('board changed !!')
  }
  
  
}
