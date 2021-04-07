import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUpForm from '../../../../src/components/Forms/SignUp';
import * as formSettings from '../../../../src/components/Forms/SignUp/formsSetting';
import { UserContext } from '../../../../src/contexts/user';

describe('testing loginforms', () => {
  test('deve ser igual a snapshot', () => {
    const { asFragment } = render(<SignUpForm />);
    expect(asFragment(<SignUpForm />)).toMatchSnapshot();
  });

  test('test if the form works', async () => {
    const createUser = jest.fn();
    formSettings.handleSubmit = jest.fn();
    render(
      <UserContext.Provider value={{ createUser }}>
        <SignUpForm />
      </UserContext.Provider>,
    );
    userEvent.type(screen.getByPlaceholderText('Matrícula'), '187362579');
    userEvent.type(screen.getByPlaceholderText('E-mail'), 'senhor_teste@gmail.com');
    userEvent.type(screen.getByPlaceholderText('Senha'), 'amoASenhoraTeste');
    userEvent.type(screen.getByPlaceholderText('Telefone'), '61993211456');
    userEvent.type(screen.getByPlaceholderText('Nome completo'), 'Senhor teste');
    userEvent.click(screen.getByRole('button', { name: /Cadastre-se/i }));
    await waitFor(() => {
      expect(formSettings.handleSubmit).toHaveBeenCalledTimes(1);
      expect(formSettings.handleSubmit).toHaveBeenCalledWith({
        email: 'senhor_teste@gmail.com',
        matricula: '187362579',
        nome: 'Senhor teste',
        senha: 'amoASenhoraTeste',
        telefone: '61993211456',
      },
      expect.any(Function),
      expect.any(Function));
    });
  });
});
