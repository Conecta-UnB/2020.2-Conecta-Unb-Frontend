import * as userService from '../../src/services/user';

describe('testing user-related services', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('successeful createUser', async () => {
    const user = {
      nome: 'Senhor teste',
      matricula: '187362579',
      email: 'senhor_teste@gmail.com',
      senha: 'amoASenhoraTeste',
      telefone: '61993211456',
    };
    const Host = 'http://localhost:3333';
    fetch.mockResponseOnce(JSON.stringify({
      data: {
        user,
      },
      message: 'Usuário criado com sucesso!',
    }));

    const response = await userService.createUser(Host, user);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${Host}/api/user/create`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    expect(response.message).toBe('Usuário criado com sucesso!');
  });

  test('failed createUser', async () => {
    fetch.mockRejectOnce({ message: 'error' });
    const user = {
      nome: 'Senhor teste',
      matricula: '187362579',
      email: 'senhor_teste@gmail.com',
      senha: 'amoASenhoraTeste',
      telefone: '61993211456',
    };
    const Host = 'http://localhost:3333';
    const response = await userService.createUser(Host, user);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(response.message).not.toBe('Usuário criado com sucesso!');
  });

  test('successeful login', async () => {
    const user = {
      email: 'senhor_teste@gmail.com',
      senha: 'amoASenhoraTeste',
    };
    const Host = 'http://localhost:3333';
    fetch.mockResponseOnce(JSON.stringify({
      data: {
        user,
      },
      message: 'Login efetuado com sucesso!',
    }));

    const response = await userService.login(Host, user);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${Host}/api/user/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    expect(response.message).toBe('Login efetuado com sucesso!');
  });

  test('failed login', async () => {
    fetch.mockRejectOnce({ message: 'error' });
    const user = {
      email: 'senhor_teste@gmail.com',
      senha: 'amoASenhoraTeste',
    };
    const Host = 'http://localhost:3333';
    const response = await userService.login(Host, user);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(response.message).not.toBe('Usuário criado com sucesso!');
  });
});
