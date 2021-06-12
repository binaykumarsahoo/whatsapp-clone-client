import React, { useState } from 'react';
import './Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import AddIcon from '@material-ui/icons/Add';
import { SearchOutlined } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import SidebarChat from './SidebarChat';
import { Modal } from 'react-bootstrap';
import NewContactModal from './NewContactModal';
import Contacts from './Contacts/Contacts';
import Conversations from './Conversations/Conversations';

export default function Sidebar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [contactsOpen, setContactsOpen] = useState(false);

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton title="Status">
            <DonutLargeIcon />
          </IconButton>
          <IconButton title="New chat" onClick={() => setContactsOpen(true)}>
            <ChatIcon />
          </IconButton>
          <IconButton title="New Contact" onClick={() => setModalOpen(true)}>
            <AddIcon />
          </IconButton>
        </div>
      </div>

      {contactsOpen && <Contacts setContactsOpen={setContactsOpen} />}

      <Modal show={modalOpen} onHide={closeModal}>
        <NewContactModal closeModal={closeModal} />
      </Modal>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>

      {/* <div className="sidebar__chats">
        <SidebarChat name="Binay" />
        <SidebarChat name="Shuvankar" message="Hi" />
      </div> */}
      <Conversations />
    </div>
  );
}
