import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import {
  render, screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NewsContext } from '../../../src/contexts/news';
import Header from '../../../src/components/Header';

describe('testando header', () => {
  test('should match snapshot', () => {
    const getAllNews = jest.fn();
    const tree = render(
      <MemoryRouter initialEntries={[{ pathname: '/login' }]}>
        <NewsContext.Provider value={{ getAllNews }}>
          <Header />
        </NewsContext.Provider>
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('should get news before navigating', () => {
    const getAllNews = jest.fn();
    render(
      <MemoryRouter initialEntries={[{ pathname: '/login' }]}>
        <NewsContext.Provider value={{ getAllNews }}>
          <Header />
        </NewsContext.Provider>
      </MemoryRouter>,
    );
    const home = screen.getByText('Home').closest('a');
    const news = screen.getByText('Notícias').closest('a');
    expect(home.href).toBe('http://localhost/');
    expect(news.href).toBe('http://localhost/news');
    userEvent.click(news);
    expect(getAllNews).toHaveBeenCalledTimes(1);
  });
});
