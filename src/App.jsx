import React from 'react';
import './global.css';
import Routes from './routes';
import UserProvider from './contexts/user';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routes />
      </UserProvider>
    </div>
  );
}

export default App;
