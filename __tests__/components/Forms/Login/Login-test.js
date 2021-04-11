import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import * as formSettings from '../../../../src/components/Forms/Login/formsSettings';
import { UserContext } from '../../../../src/contexts/user';
import LoginForm from '../../../../src/components/Forms/Login';

describe('testing loginforms', () => {
  test('must match snapshot', () => {
    const tree = render(
      <MemoryRouter initialEntries={[{ pathname: '/login' }]}>
        <LoginForm />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('test if the form works', async () => {
    const login = jest.fn();
    formSettings.handleSubmit = jest.fn();
    render(
      <UserContext.Provider value={{ login }}>
        <MemoryRouter initialEntries={[{ pathname: '/login' }]}>
          <LoginForm />
        </MemoryRouter>
      </UserContext.Provider>,
    );
    userEvent.type(screen.getByLabelText(/e-mail/i, { selector: 'input' }), 'senhor_teste@gmail.com');
    userEvent.type(screen.getByLabelText(/senha/i, { selector: 'input' }), 'amoASenhoraTeste');
    userEvent.click(screen.getByRole('button', { name: /Entrar/i }));
    await waitFor(() => {
      expect(formSettings.handleSubmit).toHaveBeenCalledTimes(1);
      expect(formSettings.handleSubmit).toHaveBeenCalledWith({
        email: 'senhor_teste@gmail.com',
        senha: 'amoASenhoraTeste',
      },
      expect.any(Function),
      expect.any(Function),
      expect.any(Object));
    });
  });
});
