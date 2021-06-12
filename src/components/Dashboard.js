import React from 'react';
import { useConversations } from '../contexts/ConversationsProvider';
import Chat from './Chat';
import './Dashboard.css';
import Sidebar from './Sidebar';

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversations();

  return (
    <div className="dashboard">
      <div className="dashboard__body">
        <Sidebar />
        {selectedConversation && <Chat />}
      </div>
    </div>
  );
}
