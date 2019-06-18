import { getMessages } from '../static-data';
import { SEND_MESSAGE } from '../constants/action-types';

console.log(getMessages(10));
export default (state = getMessages(10), action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let { user_id: userId, message } = action.payload;
      let userMessagesObject = state[userId];
      let newMessageNumber = Object.keys(userMessagesObject).length;
      let newMessage = {
        [newMessageNumber]: {
          number: newMessageNumber,
          text: message,
          is_user_msg: true
        }
      };

      return {
        ...state,
        [userId]: {
          ...state[userId],
          ...newMessage
        }
      };
    default:
      return state;
  }
};
