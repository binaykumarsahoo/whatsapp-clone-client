import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css';

export default function SidebarChat({
  profilePic,
  name,
  message,
  onClick,
  active,
}) {
  return (
    <div className={`sidebarChat ${active ? 'active' : ''}`} onClick={onClick}>
      <div className="sidebarChat__avatar">
        <Avatar src={profilePic} />
      </div>
      <div className="sidebarChat__info">
        <h2>{name}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
}
