import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './Contacts.css';
import { IconButton } from '@material-ui/core';
import { useContacts } from '../../contexts/ContactsProvider';
import { useConversations } from '../../contexts/ConversationsProvider';
import SidebarChat from '../SidebarChat';

export default function Contacts({ setContactsOpen }) {
  const { contacts } = useContacts();
  const { createConversation } = useConversations();

  const handleClick = (contactId) => {
    createConversation([contactId]);
    setContactsOpen(false);
  };

  return (
    <div className="contacts">
      <header>
        <div className="headerWrapper">
          <IconButton
            className="iconButton"
            onClick={() => {
              setContactsOpen(false);
            }}
          >
            <ArrowBackIcon style={{ color: '#ffffff' }} />
          </IconButton>
          <div className="newChatText">New chat</div>
        </div>
      </header>

      {contacts.map((contact) => (
        <SidebarChat
          key={contact.id}
          name={contact.name}
          message={'Hey there! I am using WhatsApp.'}
          onClick={() => handleClick(contact.id)}
        />
      ))}
    </div>
  );
}
