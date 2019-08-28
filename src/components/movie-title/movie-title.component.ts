import { Component, OnInit, Input } from '@angular/core';
import { GameState } from 'src/gameGenerator';

@Component({
  selector: 'app-movie-title',
  templateUrl: './movie-title.component.html',
  styleUrls: ['./movie-title.component.css']
})
export class MovieTitleComponent implements OnInit {
  @Input() gameState: GameState;
  constructor() { }

  ngOnInit() {
  }

}
