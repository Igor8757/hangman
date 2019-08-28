import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent implements OnInit {
  @Input() key: string;
  @Input() hiddenLetters: Array<string>;
  @Input() titleLetters: Array<string>;
  @Output() pressed = new EventEmitter<string>();
  disableButton: boolean = false;
  constructor() { }

  ngOnInit() {
    this.disableButton = !this.hiddenLetters.includes(this.key) && this.titleLetters.includes(this.key);

  }

  keyClick(){
    this.pressed.emit(this.key)
    this.disableButton = true;
  }

}
