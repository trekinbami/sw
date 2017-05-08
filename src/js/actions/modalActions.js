import { SET_MODAL_STATUS } from './types';

export function setModalStatus(payload) {
  return {
    type: SET_MODAL_STATUS,
    payload
  };
}
