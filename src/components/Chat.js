import { Avatar, IconButton } from '@material-ui/core';
import React, { useState, useCallback } from 'react';
import './Chat.css';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import SendIcon from '@material-ui/icons/Send';
import ChatMessage from './ChatMessage';
import { useConversations } from '../contexts/ConversationsProvider';

export default function Chat() {
  const [text, setText] = useState('');
  const setRef = useCallback((node) => {
    if (node) node.scrollIntoView({ smooth: true });
  }, []);
  const { sendMessage, selectedConversation } = useConversations();

  const handleSend = () => {
    sendMessage(
      selectedConversation.recipients.map((r) => r.id),
      text
    );
    setText('');
  };

  return (
    <div className="chat">
      <div className="chat__backgroundImage"></div>
      <header className="chat__header">
        <div className="chat__headerLeft">
          <div className="chat__headerLeftAvatar">
            <Avatar />
          </div>
          <div className="chat__info">
            <span>
              {selectedConversation.recipients.map((r) => r.name).join(', ')}
            </span>
            <p>last seen today at 5.44 PM</p>
          </div>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </header>

      <div className="chat__body">
        {/* <ChatMessage message="Chat message" />
        <ChatMessage message="Chat message" received /> */}
        {selectedConversation.messages.map((message, index) => {
          const lastMessage =
            selectedConversation.messages.length - 1 === index;
          return (
            <ChatMessage
              messageRef={lastMessage ? setRef : null}
              message={message.text}
              received={!message.fromMe}
              key={index}
            />
          );
        })}
      </div>

      <footer className="chat__footer">
        <div className="chat__footerLeft">
          <IconButton>
            <EmojiEmotionsOutlinedIcon style={{ fontSize: '26px' }} />
          </IconButton>
          <IconButton>
            <AttachFileOutlinedIcon />
          </IconButton>
        </div>
        <div className="chat__footerMiddle">
          <textarea
            type="text"
            placeholder="Type a message"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
        <div className="chat__footerRight">
          <IconButton>
            <SendIcon onClick={handleSend} />
          </IconButton>
        </div>
      </footer>
    </div>
  );
}
