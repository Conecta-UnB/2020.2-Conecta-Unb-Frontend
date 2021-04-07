import React from 'react';
import { render } from '@testing-library/react';
import ForumForms from '../../../../src/components/Forms/Forum';

describe('testando loginforms', () => {
  test('deve ser igual a snapshot', () => {
    const { asFragment } = render(<ForumForms />);
    expect(asFragment(<ForumForms />)).toMatchSnapshot();
  });
});
