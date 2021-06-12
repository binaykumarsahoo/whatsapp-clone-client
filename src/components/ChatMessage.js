import React from 'react';
import './ChatMessage.css';

export default function ChatMessage({ messageRef, message, received }) {
  return (
    <div
      className={`chatMessage ${received ? 'message-in' : 'message-out'}`}
      ref={messageRef}
    >
      <div className={`text`}>{message}</div>
    </div>
  );
}
