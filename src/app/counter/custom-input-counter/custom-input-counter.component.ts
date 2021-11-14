import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customInputCounter } from '../store/counter.actions';
import { CounterState } from '../store/counter.state';

@Component({
  selector: 'app-custom-input-counter',
  templateUrl: './custom-input-counter.component.html',
  styleUrls: ['./custom-input-counter.component.css']
})
export class CustomInputCounterComponent implements OnInit {
  value: number = 0

  constructor(private store: Store<{ counter: CounterState }>) { }

  ngOnInit(): void {
  }


  onAdd(): void {
      this.store.dispatch(customInputCounter({count: +this.value}))
  }

}
