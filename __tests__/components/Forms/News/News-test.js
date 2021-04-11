import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import {
  render, waitFor, screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsForms from '../../../../src/components/Forms/News';
import * as formSettings from '../../../../src/components/Forms/News/formsSetting';
import { NewsContext } from '../../../../src/contexts/news';

describe('testando news creation forms', () => {
  test('must match snapshot', () => {
    const tree = render(<NewsForms />);
    expect(tree).toMatchSnapshot();
  });

  test('test if the form works', async () => {
    const createNews = jest.fn();
    formSettings.handleSubmit = jest.fn();
    render(
      <NewsContext.Provider value={{ createNews }}>

        <MemoryRouter initialEntries={[{ pathname: '/login' }]}>
          <NewsForms />
        </MemoryRouter>
      </NewsContext.Provider>,
    );
    userEvent.type(screen.getByPlaceholderText('Título'), 'Asfalto na FGA');
    userEvent.type(screen.getByPlaceholderText('Autor'), 'Alguem');
    userEvent.type(screen.getByPlaceholderText('Imagem'), 'aaaaaaaaaaaaaaa');
    const a = screen.getByPlaceholderText('Conteúdo');
    userEvent.type(a, 'Finalmente a FGA tem asfalto');
    userEvent.click(screen.getByRole('button', { name: /Postar/i }));
    await waitFor(() => {
      expect(formSettings.handleSubmit).toHaveBeenCalledTimes(1);
      expect(formSettings.handleSubmit).toHaveBeenCalledWith({
        titulo: 'Asfalto na FGA',
        autor: 'Alguem',
        imagem: 'aaaaaaaaaaaaaaa',
        conteudo: 'Finalmente a FGA tem asfalto',
      },
      expect.any(Function),
      expect.any(Function));
    });
  });
});
