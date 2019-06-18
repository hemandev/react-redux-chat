import {
  SET_ACTIVE_USER_ID,
  SET_TYPING_VALUE,
  SEND_MESSAGE
} from '../constants/action-types';
export const setActiveUserId = userId => ({
  type: SET_ACTIVE_USER_ID,
  payload: {
    userId
  }
});

export const setTypingValue = text => ({
  type: SET_TYPING_VALUE,
  payload: {
    text
  }
});

export const sendMessage = (message, user_id) => ({
  type: SEND_MESSAGE,
  payload: {
    user_id,
    message
  }
});