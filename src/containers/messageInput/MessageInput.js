import React from 'react';
import './MessageInput.css';
import { setTypingValue, sendMessage } from '../../../actions';
import { dispatch, getState } from '../../../store';

const MessageInput = ({ value }) => {
  const state = getState();

  const handleTextChange = evt => {
    dispatch(setTypingValue(evt.target.value));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log('Submitted');
    const { typing, activeUserId } = state;
    dispatch(sendMessage(typing, activeUserId))
  }

  return (
    <form className="MessageInput" onSubmit={handleSubmit}>
      <input
        type="text"
        className="MessageInput__input"
        value={value}
        placeholder="Write a message"
        onChange={handleTextChange}
      />
    </form>
  );
};

export default MessageInput;
