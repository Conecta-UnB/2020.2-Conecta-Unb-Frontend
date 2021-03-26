import React, { createContext } from 'react';
import * as UserService from '../services/user';

export const UserContext = createContext({});

// eslint-disable-next-line react/prop-types
export default function UserProvider({ children }) {
  // const [user, setUser] = useState({});

  async function createUser(user) {
    const Host = 'http://localhost:3333';
    console.log('ola', user);
    const response = await UserService.createUser(
      Host,
      user,
    );
    return response;
  }

  return (
    <UserContext.Provider
      value={{
        createUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
