import React from 'react';
import { useConversations } from '../../contexts/ConversationsProvider';
import SidebarChat from '../SidebarChat';

function Conversations() {
  const { conversations, selectConversationIndex } = useConversations();

  return (
    <div>
      {conversations.map((conversation, index) => (
        <SidebarChat
          key={index}
          name={conversation.recipients.map((r) => r.name).join(', ')}
          onClick={() => selectConversationIndex(index)}
          active={conversation.selected}
        />
      ))}
    </div>
  );
}

export default Conversations;
