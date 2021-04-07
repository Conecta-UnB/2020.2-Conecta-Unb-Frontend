import { handleSubmit } from '../../../../src/components/Forms/SignUp/formsSetting';

describe('testing signup form settings', () => {
  test('handle submit function test', () => {
    const values = {
      email: 'senhor_teste@gmail.com',
      matricula: '187362579',
      nome: 'Senhor teste',
      senha: 'amoASenhoraTeste',
      telefone: '61993211456',
    };
    const setSubmitting = jest.fn();
    const createUser = jest.fn();
    handleSubmit(values, setSubmitting, createUser);
    expect(setSubmitting).toHaveBeenCalledWith(false);
    expect(createUser).toHaveBeenCalledWith(values);
  });
});
