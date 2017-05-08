import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import itemReducer from './itemReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  categories: categoryReducer,
  items: itemReducer,
  modal: modalReducer
});

export default rootReducer;
