import { handleSubmit } from '../../../../src/components/Forms/News/formsSetting';

describe('testing news form settings', () => {
  test('handle submit function test', () => {
    const values = {
      titulo: 'Asfalto na FGA',
      autor: 'senho teste',
      imagem: 'Imagem do asfalto da FGA',
      conteudo: 'Finalmente um asfalto pra levar a senhora teste',
    };
    const setSubmitting = jest.fn();
    const createNews = jest.fn();
    handleSubmit(values, setSubmitting, createNews);
    expect(setSubmitting).toHaveBeenCalledWith(false);
    expect(createNews).toHaveBeenCalledWith(values);
  });
});
