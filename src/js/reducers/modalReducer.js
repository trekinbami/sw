import { SET_MODAL_STATUS } from '../actions/types';

const defaultState = {
  active: false
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case SET_MODAL_STATUS:
      return {
        ...state,
        active: action.payload
      }

    default:
      return state;
  }
}
