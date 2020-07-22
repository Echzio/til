function createStore(reducer, initialState) {
  let store = initialState || reducer(undefined, { type: 'get_state' });
  let listener = () => { };

  return {
    dispatch: action => {
      store = reducer(store, action);
      listener();
    },
    getState: () => store,
    subscribe: fn => {
      listener = fn
      return () => {
        listener = () => { }
      }
    }
  }
}


function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
const store = createStore(counter)
store.subscribe(() =>
  console.log(store.getState())
)
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })