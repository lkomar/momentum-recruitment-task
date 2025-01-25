import { counterReducer } from '.';
import { createStore } from './store';

/**
 * Test core functionalities of store.js
 *
 * getState, dispatch, subscribe, unsubscribe
*/
describe('createStore', () => {
  it('should initialize with the given initial state', () => {
    const store = createStore(counterReducer, 0);

    expect(store.getState()).toBe(0);
  });

  it('should update state when action is dispatched', () => {
    const store = createStore(counterReducer, 0);
    store.dispatch({ type: 'INCREMENT' });

    expect(store.getState()).toBe(1);
  });

  it('should handle actions with payloads properly', () => {
    const store = createStore(counterReducer, 0);
    store.dispatch({ type: 'INCREMENT', payload: 5 });

    expect(store.getState()).toBe(5);
  });

  it('should subscribe to state changes', () => {
    const store = createStore(counterReducer, 0);
    const listener = jest.fn();
    store.subscribe(listener);

    store.dispatch({ type: 'INCREMENT' });
    expect(listener).toHaveBeenCalled();
  });

  it('should unsubscribe from state changes', () => {
    const store = createStore(counterReducer, 0);
    const listener = jest.fn();
    const unsubscribe = store.subscribe(listener);

    unsubscribe();
    store.dispatch({ type: 'INCREMENT' });
    expect(listener).not.toHaveBeenCalled();
  });
});
