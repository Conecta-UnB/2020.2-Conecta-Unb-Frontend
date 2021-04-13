import * as newsService from '../../src/services/news';

describe('testing news-related services', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('successeful createNews', async () => {
    const news = {
      autor: 'Senhor teste',
      titulo: 'Asfalto na FGA',
      conteudo: 'Finalmente asfalto na FGA',
    };
    const Host = 'http://localhost:3333';
    fetch.mockResponseOnce(JSON.stringify({
      data: {
        news,
      },
      message: 'Notícia criada com sucesso',
    }));

    const response = await newsService.createNews(Host, news, 'um_id_qualquer');
    news.id_user = 'um_id_qualquer';
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${Host}/api/news/create`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(news),
    });
    expect(response.message).toBe('Notícia criada com sucesso');
  });

  test('failed createNews', async () => {
    fetch.mockRejectOnce({ message: 'error' });
    const news = {
      autor: 'Senhor teste',
      titulo: 'Asfalto na FGA',
      conteudo: 'Finalmente asfalto na FGA',
    };
    const Host = 'http://localhost:3333';
    const response = await newsService.createNews(Host, news, 'um_id_qualquer');
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(response.message).not.toBe('Notícia criada com sucesso!');
  });

  test('successeful getAllNews', async () => {
    const Host = 'http://localhost:3333';
    fetch.mockResponseOnce(JSON.stringify({
      message: 'success',
      data: {
        news: [{ titulo: 'asfalto fga', conteudo: 'finalmente asfalto na FGA' }],
      },
    }));

    const response = await newsService.getAllNews(Host);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${Host}/api/news`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    expect(response.message).toBe('success');
  });

  test('failed getAllNews', async () => {
    fetch.mockRejectOnce({ message: 'error' });
    const Host = 'http://localhost:3333';
    const response = await newsService.getAllNews(Host);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(response.message).not.toBe('success');
  });
});
