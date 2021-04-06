import React from 'react';
import { render } from '@testing-library/react';
import SignUpPage from '../../src/pages/SignUp';

describe('testando loginforms', () => {
  test('deve ser igual a snapshot', () => {
    const { asFragment } = render(<SignUpPage />);
    expect(asFragment(<SignUpPage />)).toMatchSnapshot();
  });
});
