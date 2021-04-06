import React from 'react';
import { render } from '@testing-library/react';
import NewsForms from '../../src/components/Forms/News';

describe('testando loginforms', () => {
  test('deve ser igual a snapshot', () => {
    const { asFragment } = render(<NewsForms />);
    expect(asFragment(<NewsForms />)).toMatchSnapshot();
  });
});
