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
    console.log('Success: ', data);
    return data;
  } catch (error) {
    console.log('error ', error);
    return error;
  }
}
export async function getUser(Host, matricula) {
  const response = await fetch(`${Host}/api/user/${matricula}`);
  try {
    const data = await response.json;
    return data.data.user;
  } catch (error) {
    return error;
  }
}
