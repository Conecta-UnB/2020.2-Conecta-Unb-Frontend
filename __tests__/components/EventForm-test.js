import React from 'react';
import { render } from '@testing-library/react';
import EventForms from '../../src/components/Forms/EventForm';

describe('testando loginforms', () => {
  test('deve ser igual a snapshot', () => {
    const { asFragment } = render(<EventForms />);
    expect(asFragment(<EventForms />)).toMatchSnapshot();
  });
});
