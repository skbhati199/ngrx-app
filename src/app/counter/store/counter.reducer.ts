import { createReducer, on } from '@ngrx/store';
import {
  customInputCounter,
  decrement,
  increment,
  reset,
} from './counter.actions';
import { initialState } from './counter.state';

const __counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customInputCounter, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.count,
    };
  })
);

export function counterReducer(state: any, action: any) {
  return __counterReducer(state, action);
}
