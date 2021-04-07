import React, { createContext } from 'react';
import * as UserService from '../services/user';

export const UserContext = createContext({});

// eslint-disable-next-line react/prop-types
export default function UserProvider({ children }) {
  // const [user, setUser] = useState({});
  const Host = 'http://localhost:3333';
  async function createUser(user) {
    console.log('ola', user);
    const response = await UserService.createUser(Host, user);
    return response;
  }

  async function login(user) {
    const response = await UserService.login(Host, user);
    return response;
  }

  return (
    <UserContext.Provider
      value={{
        createUser,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
