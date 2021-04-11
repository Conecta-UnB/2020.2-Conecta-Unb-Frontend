import React, { useContext } from 'react';
import {
  render, screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserContext } from '../../src/contexts/user';
import NewsProvider, { NewsContext } from '../../src/contexts/news';
import * as NewsService from '../../src/services/news';
import '@testing-library/jest-dom/extend-expect';

describe('testing news context', () => {
  test('createNews test', async () => {
    NewsService.createNews = jest.fn();
    const user = {
      matricula: '164021503',
    };

    const TestComponent = () => {
      const { createNews } = useContext(NewsContext);

      return (
        <button
          type="button"
          onClick={() => createNews({
            autor: 'Senhor teste',
            titulo: 'Asfalto na FGA',
            conteudo: 'Finalmente asfalto na FGA',
          })}
        >
          Click
        </button>
      );
    };

    render(
      <UserContext.Provider value={{ user }}>
        <NewsProvider>
          <TestComponent />
        </NewsProvider>
      </UserContext.Provider>,
    );

    userEvent.click(screen.getByRole('button', { name: /click/i }));
    expect(NewsService.createNews).toHaveBeenCalledWith('http://localhost:3333', {
      autor: 'Senhor teste',
      titulo: 'Asfalto na FGA',
      conteudo: 'Finalmente asfalto na FGA',
    }, '164021503');
  });

  test('getAllNews test', async () => {
    NewsService.getAllNews = jest.fn();

    const TestComponent = () => {
      const { getAllNews } = useContext(NewsContext);

      return (
        <button
          type="button"
          onClick={() => getAllNews()}
        >
          Click
        </button>
      );
    };

    render(
      <NewsProvider>
        <TestComponent />
      </NewsProvider>,
    );

    userEvent.click(screen.getByRole('button', { name: /click/i }));

    expect(NewsService.getAllNews).toHaveBeenCalledWith('http://localhost:3333');
  });

  /* test('setNewsDetails test', async () => {
    NewsService.getAllNews = jest.fn();
    const TestComponent = () => {
      const { setNewsDetails, news } = useContext(NewsContext);

      return (
        <>
          <div data-testid="test-div">{ news && news.name}</div>
          <button
            type="button"
            onClick={() => setNewsDetails('test')}
          >
            Click
          </button>
        </>
      );
    };

    render(
      <NewsProvider>
        <TestComponent />
      </NewsProvider>,
    );

    userEvent.click(screen.getByRole('button', { name: /click/i }));
    const testDiv = await screen.findByText('test');
    console.log('testDiv = ', testDiv);
    expect(testDiv).toBeInTheDocument();
  }); */
});
