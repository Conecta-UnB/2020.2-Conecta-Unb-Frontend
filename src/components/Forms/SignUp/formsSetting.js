import * as Yup from 'yup';

export const initialValues = {
  nome: '',
  matricula: '',
  email: '',
  senha: '',
  telefone: '',
};

export const SignupSchema = Yup.object().shape({
  nome: Yup.string().required('Required'),
  matricula: Yup
    .string()
    .length(9, 'Insira a matricula sem o /, total de 9 números')
    .matches(/^\d+$/, 'A matricula deve ser um número')
    .required('É necessário indicar uma matricula válida'),
  email: Yup
    .string()
    .email('Email inváilido')
    .required('É necessário indicar um email'),
  telefone: Yup
    .string()
    .length(11, 'O telefone deve ter 11 digitos')
    .matches(/^\d+$/, 'O telefone deve ser um número')
    .required('É necessário indicar um número'),
  senha: Yup
    .string()
    .min(6, 'A senha deve ter pelo menos 6 dígitos')
    .required('É necessário criar uma senha'),

});

export const handleSubmit = async (values, setSubmitting, createUser) => {
  setSubmitting(false);
  await createUser({
    nome: values.nome,
    matricula: values.matricula,
    email: values.email,
    senha: values.senha,
    telefone: values.telefone,
  });
};
