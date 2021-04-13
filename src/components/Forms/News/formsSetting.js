import * as Yup from 'yup';

export const initialValues = {
  titulo: '',
  autor: '',
  imagem: '',
  conteudo: '',
};

export const SignupSchema = Yup.object().shape({
  titulo: Yup.string().required('É necessário informar um título'),
  autor: Yup.string().required('É necessário indicar um autor'),
  imagem: Yup.string(),
  conteudo: Yup.string().required('É necessário indicar o conteúdo'),
});

export const handleSubmit = async (values, setSubmitting, createNews) => {
  setSubmitting(false);
  await createNews({
    titulo: values.titulo,
    autor: values.autor,
    imagem: values.imagem,
    conteudo: values.conteudo,
  });
};
