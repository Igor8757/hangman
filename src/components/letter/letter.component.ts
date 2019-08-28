import { Component, OnInit, Input } from '@angular/core';
import { Letter, letterState, getState } from 'src/gameGenerator';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {
  @Input() letter: string;
  @Input() letterStates: Array<Letter>;
  public letterState: letterState;
  constructor() { 
    
  }

  ngOnInit() {
    this.letterState = getState(this.letter, this.letterStates)
  }

}
