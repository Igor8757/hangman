import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { GameState } from 'src/gameGenerator';

@Component({
  selector: 'app-movie-title',
  templateUrl: './movie-title.component.html',
  styleUrls: ['./movie-title.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class MovieTitleComponent implements OnInit, OnChanges {
  @Input() gameState: GameState;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('movie title changed !!')
    console.log(changes)

  }
}
