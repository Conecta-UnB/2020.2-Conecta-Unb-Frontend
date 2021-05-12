import React, { createContext, useState } from 'react';
import * as UserService from '../services/user';

export const UserContext = createContext({});

// eslint-disable-next-line react/prop-types
export default function UserProvider({ children }) {
  // const [user, setUser] = useState({});
  const [user, setUser] = useState({});
  const Host = 'http://localhost:3333';

  async function createUser(userInfo) {
    const response = await UserService.createUser(Host, userInfo);
    return response;
  }

  async function login(userInfo) {
    const response = await UserService.login(Host, userInfo);
    setUser({
      nome: response.nome,
      matricula: response.matricula,
      email: response.email,
      telefone: response.telefone,
      role: response.role,
    });
    return response;
  }

  return (
    <UserContext.Provider
      value={{
        createUser,
        login,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
