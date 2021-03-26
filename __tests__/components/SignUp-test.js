import React from 'react';
import { render } from '@testing-library/react';
import SignUpForm from '../../src/components/Forms/SignUp';

describe('testando loginforms', () => {
  test('deve ser igual a snapshot', () => {
    const { asFragment } = render(<SignUpForm />);
    expect(asFragment(<SignUpForm />)).toMatchSnapshot();
  });
});
