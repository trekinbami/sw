import { FETCH_CATEGORIES, SET_ACTIVE_CATEGORY } from '../actions/types';
const defaultState = {
  items: {},
  active: ''
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        items: { ...action.payload }
      };

    case SET_ACTIVE_CATEGORY:
      return {
        ...state,
        active: action.payload
      };

    default:
      return state;
  }
}
