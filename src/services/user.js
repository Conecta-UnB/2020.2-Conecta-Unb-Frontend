export async function createUser(Host, user) {
  try {
    const response = await fetch(`${Host}/api/user/create`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome: user.nome,
        matricula: user.matricula,
        email: user.email,
        senha: user.senha,
        telefone: user.telefone,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function login(Host, user) {
  try {
    const response = await fetch(`${Host}/api/user/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.email,
        senha: user.senha,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
