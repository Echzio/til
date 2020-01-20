import { combineReducers } from 'redux';
import { window1 } from './window1';
import { pagination } from './pagination';

export const rootReducer = combineReducers({
  window1,
  pagination,
});
