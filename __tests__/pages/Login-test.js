import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LoginPage from '../../src/pages/Login';

describe('testando loginforms', () => {
  test('deve ser igual a snapshot', () => {
    const tree = render(
      <MemoryRouter initialEntries={[{ pathname: '/login' }]}>
        <LoginPage />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
