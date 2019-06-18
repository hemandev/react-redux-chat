import React from 'react';
import './ChatWindow.css';
import { getState } from '../../../store';
import _ from 'lodash';
import Header from '../../components/header/Header';
import Chats from '../../components/chats/Chats';
import MessageInput from '../messageInput/MessageInput';

const ChatWindow = ({ activeUserId }) => {
  const state = getState();
  const activeUser = state.contacts[activeUserId];
  const activeUserMessages = state.messages[activeUserId];
  const typing = state.typing;

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeUserMessages)} />
      <MessageInput value={typing}/>
    </div>
  );
};

export default ChatWindow;
