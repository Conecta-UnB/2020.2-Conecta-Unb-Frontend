export async function createNews(Host, news, matricula) {
  console.log(news, matricula);
  try {
    const response = await fetch(`${Host}/api/news/create`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        autor: news.autor,
        titulo: news.titulo,
        conteudo: news.conteudo,
        id_user: matricula,
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
    console.log('Success: ', data);
    return data;
  } catch (error) {
    console.log('error ', error);
    return error;
  }
}
