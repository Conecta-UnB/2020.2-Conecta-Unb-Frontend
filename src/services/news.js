export async function createNews(Host, news, matricula) {
  try {
    const response = await fetch(`${Host}/api/news/create`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        imagem: news.imagem,
        autor: news.autor,
        titulo: news.titulo,
        conteudo: news.conteudo,
        id_user: matricula,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function getAllNews(Host) {
  try {
    const response = await fetch(`${Host}/api/news`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
