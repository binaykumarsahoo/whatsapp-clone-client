import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { ContactsProvider } from './contexts/ContactsProvider';
import { ConversationsProvider } from './contexts/ConversationsProvider';
import { SocketProvider } from './contexts/SocketProvider';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [id, setId] = useLocalStorage('id');

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  );
  return (
    <div className="app">{id ? dashboard : <Login onIdSubmit={setId} />}</div>
  );
}

export default App;
