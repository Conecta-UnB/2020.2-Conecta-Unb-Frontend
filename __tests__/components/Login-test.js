import React from 'react';
import { render } from '@testing-library/react';
import Login from '../../src/components/Forms/Login';

describe('testando loginforms', () => {
  test('deve ser igual a snapshot', () => {
    const { asFragment } = render(<Login />);
    expect(asFragment(<Login />)).toMatchSnapshot();
  });
});
