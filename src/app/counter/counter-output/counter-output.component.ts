import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {

  @Input() counter:Number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
