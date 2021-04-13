import React from 'react';
import './global.css';
import Routes from './routes';
import UserProvider from './contexts/user';
import NewsProvider from './contexts/news';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <NewsProvider>
          <Routes />
        </NewsProvider>
      </UserProvider>
    </div>
  );
}

export default App;
