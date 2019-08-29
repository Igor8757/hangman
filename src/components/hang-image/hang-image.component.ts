import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hang-image',
  templateUrl: './hang-image.component.html',
  styleUrls: ['./hang-image.component.css']
})
export class HangImageComponent implements OnInit {
  @Input() lives: number;
  constructor() { }

  ngOnInit() {
  }

}
