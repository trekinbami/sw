import { FETCH_ITEMS, SET_SINGLE_ITEM, LOADING_ITEMS } from '../actions/types';
const defaultState = {
  items: {},
  singleActive: {},
  itemsLoading: false,
  singleLoading: false
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        items: { ...action.payload }
      };

    case SET_SINGLE_ITEM:
      return {
        ...state,
        singleActive: { ...action.payload }
      };

    case LOADING_ITEMS:
      return {
        ...state,
        itemsLoading: action.payload
      };

    default:
      return state;
  }
}
