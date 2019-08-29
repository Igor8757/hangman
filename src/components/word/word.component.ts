import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class WordComponent implements OnInit {
  @Input() word: string;
  @Input() hiddenLetters: Array<string>;
  constructor() { }

  ngOnInit() {
  }

}
