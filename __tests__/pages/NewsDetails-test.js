import React from 'react';
import { render } from '@testing-library/react';
import NewsDetails from '../../src/pages/NewsDetails';
import NewsProvider from '../../src/contexts/news';

describe('testando loginforms', () => {
  test('deve ser igual a snapshot', () => {
    const news = {
      titulo: 'FGA ganha asfalto',
      autor: 'Alguem',
      imagem: 'Finge que é uma imagem',
      conteudo: 'Depois de 10 anos o campus finalmente ganhou asfalto',
    };
    const tree = render(
      <NewsProvider value={news}>
        <NewsDetails />
      </NewsProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
