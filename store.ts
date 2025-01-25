export type Action<T = any> = {
  type: string;
  payload?: T; // Optional payload for the action
};

type Reducer<State> = (state: State, action: Action) => State;

type Listener = () => void;

/**
 * Creates a store that holds the state tree.
 * The only way to change the state inside it is to dispatch an action.
 *
 * @param reducer - A function that returns the next state tree, given
 * the current state tree and the action to handle.
 * @param initialState - The initial state of the store.
 * @returns The newly created store.
 *
 * @example ```const store = createStore(counterReducer, 0);```
 */
export const createStore = <State extends {}>(reducer: Reducer<State>, initialState: State) => {
  let state: State = initialState;
  let listeners: Listener[] = [];

  // function to get the current state
  const getState = (): State => {
    return state;
  };

  // dispatch action and update state
  const dispatch = (action: Action): void => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  // subscribe listener to state changes and remove listener on unsubscribe
  const subscribe = (listener: Listener): (() => void) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  return {
    getState,
    dispatch,
    subscribe,
  };
};
