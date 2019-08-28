import { Component, OnInit, Input } from '@angular/core';
import { GameState } from 'src/gameGenerator';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
  @Input() gameState: GameState;
  public keys: Array<string> = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  constructor() { }

  ngOnInit() {
  }

  onPress(key: string){
    console.log(key);
  }
}
