import { Component, OnInit, Input } from '@angular/core';
import { Letter } from 'src/gameGenerator';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  @Input() word: string;
  @Input() letterStates: Array<Letter>;
  constructor() { }

  ngOnInit() {
  }

}
