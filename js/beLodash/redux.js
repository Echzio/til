function createStore(reducer, initialState) {
  let store = initialState ?? reducer(undefined, { type: "@_get_state" });
  let listeners = [];

  return {
    dispatch: (action) => {
      store = reducer(store, action);
      listeners.forEach((fn) => fn());
    },
    getState: () => store,
    subscribe: (fn) => {
      listeners = [...listeners, fn];
      return () => {
        listeners = listeners.filter(item => item.toString() !== fn.toString())
      };
    },
  };
}

function combineReducers(reducers) {
  const preReducer = {
    ...reducers,

    *[Symbol.iterator]() {
      for (let [key, value] of Object.entries(this)) {
        yield [key, value];
      }
    },
  };

  return (store, action) => {
    let rootReducer = {};
    for (let [key, value] of preReducer) {
      rootReducer[key] = value(store ? store[key] : store, action);
    }
    return rootReducer;
  };
}

function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

function writter(state = "hello", action) {
  switch (action.type) {
    case "WORLD":
      return state + action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter,
  writter,
});

const store = createStore(rootReducer);

const unsubscribe = store.subscribe(() =>
  console.log(store.getState(), "first")
);

store.subscribe(() => console.log(store.getState(), "last"));

unsubscribe();

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "WORLD", payload: "payload" });
