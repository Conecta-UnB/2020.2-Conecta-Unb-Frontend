import React from 'react';
import { render } from '@testing-library/react';
import EJsForms from '../../../../src/components/Forms/EJs';

describe('testando EJsForms', () => {
  test('deve ser igual a snapshot', () => {
    const { asFragment } = render(<EJsForms />);
    expect(asFragment(<EJsForms />)).toMatchSnapshot();
  });
});
