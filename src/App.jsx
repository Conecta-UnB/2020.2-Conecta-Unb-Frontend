import React from 'react';
import './global.css';
import Routes from './routes';
import UserProvider from './contexts/user';
import EventProvider from './contexts/event';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <EventProvider>
          <Routes />
        </EventProvider>
      </UserProvider>
    </div>
  );
}

export default App;
