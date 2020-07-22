function createStore(reducer, initialState) {
  let store = initialState || reducer(undefined, { type: 'initial' });
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


function reducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        value: state.value + action.payload
      }
    case 'DECREMENT':
      return {
        ...state,
        value: state.value - action.payload
      }
    default:
      return state
  }
}

const store = createStore(reducer)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})


store.dispatch({
  type: 'INCREMENT',
  payload: 1,
})


store.dispatch({
  type: 'INCREMENT',
  payload: 1,
})

unsubscribe()

store.dispatch({
  type: 'DECREMENT',
  payload: 1,
})



store.dispatch({
  type: 'DECREMENT',
  payload: 1,
})
