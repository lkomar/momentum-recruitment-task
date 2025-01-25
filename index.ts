import { Action, createStore } from './store';

enum CounterAction {
  increment = 'INCREMENT',
  decrement = 'DECREMENT'
}

export const counterReducer = (state = 0, action: Action) => {
  switch (action.type) {
    case CounterAction.increment:
      return state + (action.payload ?? 1);
    case CounterAction.decrement:
      return state - (action.payload ?? 1);
    default:
      return state;
  }
}

const store = createStore(counterReducer, 0);

const exampleListener = () => {
  console.log('Nowy stan:', store.getState());
}

const unsubscribe = store.subscribe(exampleListener);

store.dispatch({ type: CounterAction.increment });
store.dispatch({ type: CounterAction.decrement });

unsubscribe();
