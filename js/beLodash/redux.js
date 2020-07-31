function createStore(reducer, initialState) {
  let store = initialState || reducer(undefined, { type: '@_get_state' });
  let listener = [];

  return {
    dispatch: action => {
      store = reducer(store, action);
      listener.forEach(observer => {
        const [func] = Object.values(observer);
        func()
      })
    },
    getState: () => store,
    subscribe: fn => {
      listener = [...listener, { [fn.toString()]: fn }]
      return () => {
        listener = listener.filter(item => {
          const [key] = Object.keys(item);
          return key !== fn.toString();
        })
      }
    }
  }
}

function combineReducers(reducers) {
  return (store, action) => {
    return Object.entries(reducers).reduce((acc, [key, reducer]) => {
      return {
        ...acc,
        [key]: reducer(!store ? store : store[key], action)
      }
    }, {})
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

function writter(state = 'hello', action) {
  switch (action.type) {
    case 'WORLD':
      return state + action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({
  counter,
  writter,
})

const store = createStore(rootReducer)

const unsubscribe = store.subscribe(() =>
  console.log(store.getState(), 'first')
)

store.subscribe(() =>
  console.log(store.getState(), 'last')
)

unsubscribe()

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })
store.dispatch({ type: 'WORLD', payload: 'payload' })