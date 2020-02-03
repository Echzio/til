import { combineReducers } from 'redux'
import todo from './todo';
import theme from './theme';

const rootReducer = combineReducers({
  todo,
  theme,
})

export { rootReducer }