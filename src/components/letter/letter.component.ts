import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class LetterComponent implements OnInit {
  @Input() letter: string;
  @Input() hiddenLetters: Array<string>;
  public isHidden: boolean;
  constructor() { 
    
  }

  ngOnInit() {
    this.isHidden = this.hiddenLetters.includes(this.letter);
  }

}
