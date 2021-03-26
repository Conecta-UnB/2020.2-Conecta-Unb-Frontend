import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../src/components/Header';

describe('testando loginforms', () => {
  test('deve ser igual a snapshot', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment(<Header />)).toMatchSnapshot();
  });
});
