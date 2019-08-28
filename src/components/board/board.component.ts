import { Component, OnInit, Input } from '@angular/core';
import { GameState } from 'src/gameGenerator';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {
  @Input() gameState: GameState;
  constructor() { }

  ngOnInit() {
  }

  
}
