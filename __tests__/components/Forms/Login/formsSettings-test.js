import { handleSubmit } from '../../../../src/components/Forms/Login/formsSettings';

describe('testing signup form settings', () => {
  test('handle submit function test', () => {
    const values = {
      email: 'senhor_teste@gmail.com',
      senha: 'amoASenhoraTeste',
    };
    const setSubmitting = jest.fn();
    const createUser = jest.fn();
    handleSubmit(values, setSubmitting, createUser);
    expect(setSubmitting).toHaveBeenCalledWith(false);
    expect(createUser).toHaveBeenCalledWith(values);
  });
});
