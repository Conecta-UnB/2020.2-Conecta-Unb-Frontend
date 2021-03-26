import React from 'react';
import { render } from '@testing-library/react';
import LoginPage from '../../src/pages/Login';

describe('testando loginforms', () => {
  test('deve ser igual a snapshot', () => {
    const { asFragment } = render(<LoginPage />);
    expect(asFragment(<LoginPage />)).toMatchSnapshot();
  });
});
