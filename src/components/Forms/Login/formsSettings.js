import * as Yup from 'yup';

export const initialValues = {
  email: '',
  senha: '',
};

export const SignupSchema = Yup.object().shape({
  email: Yup
    .string()
    .email('Email inváilido')
    .required('É necessário indicar um email'),
  senha: Yup
    .string()
    .min(6, 'A senha deve ter pelo menos 6 dígitos')
    .required('É necessário criar uma senha'),

});

export const handleSubmit = async (values, setSubmitting, login) => {
  setSubmitting(false);
  await login({
    email: values.email,
    senha: values.senha,
  });
};
