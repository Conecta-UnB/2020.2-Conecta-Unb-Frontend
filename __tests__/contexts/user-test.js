import React, { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserProvider, { UserContext } from '../../src/contexts/user';
import * as UserService from '../../src/services/user';

describe('testing user context', () => {
  test('createUser test', async () => {
    UserService.createUser = jest.fn();

    const TestComponent = () => {
      const { createUser } = useContext(UserContext);

      return (
        <button
          type="button"
          onClick={() => createUser({
            email: 'senhor_teste@gmail.com',
            matricula: '187362579',
            nome: 'Senhor teste',
            senha: 'amoASenhoraTeste',
            telefone: '61993211456',
          })}
        >
          Click
        </button>
      );
    };

    render(
      <UserProvider>
        <TestComponent />
      </UserProvider>,
    );

    userEvent.click(screen.getByRole('button', { name: /click/i }));

    expect(UserService.createUser).toHaveBeenCalledWith('http://localhost:3333', {
      email: 'senhor_teste@gmail.com',
      matricula: '187362579',
      nome: 'Senhor teste',
      senha: 'amoASenhoraTeste',
      telefone: '61993211456',
    });
  });

  test('login test', async () => {
    UserService.login = jest.fn();

    const TestComponent = () => {
      const { login } = useContext(UserContext);

      return (
        <button
          type="button"
          onClick={() => login({
            email: 'senhor_teste@gmail.com',
            senha: 'amoASenhoraTeste',
          })}
        >
          Click
        </button>
      );
    };

    render(
      <UserProvider>
        <TestComponent />
      </UserProvider>,
    );

    userEvent.click(screen.getByRole('button', { name: /click/i }));

    expect(UserService.login).toHaveBeenCalledWith('http://localhost:3333', {
      email: 'senhor_teste@gmail.com',
      senha: 'amoASenhoraTeste',
    });
  });
});
