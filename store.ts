export type Action<T = any> = {
  type: string;
  payload?: T; // Optional payload for the action
};

type Reducer<State> = (state: State, action: Action) => State;

type Listener = () => void;

// Function to create a store with reducer and initial state
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
