import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'btn',
  templateUrl: './btn.html',
  styleUrls: ['./btn.sass']
})

export class BtnComponent implements OnInit {

  @Input() size: 's' | 'm' | 'l';
  @Input() type: 'primary' | 'secondary' | 'text';

  constructor() {
  }

  ngOnInit() {}
}
