import React, { useContext } from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import './styles.css';
import { UserContext } from '../../../contexts/user';

export default function SignUpForm() {
  const { createUser } = useContext(UserContext);

  const SignupSchema = Yup.object().shape({
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

  async function handleSubmit(values, setSubmitting) {
    setSubmitting(false);
    await createUser({
      nome: values.nome,
      matricula: values.matricula,
      email: values.email,
      senha: values.senha,
      telefone: values.telefone,
    });
  }

  const initialValues = {
    nome: 'Nome completo',
    matricula: 'Matrícula',
    email: 'E-mail',
    senha: 'Senha',
    telefone: 'Telefone',
  };

  return (
    <div className="containerSignUpForm">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values, setSubmitting);
        }}
        validationSchema={SignupSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field name="nome" />
            <ErrorMessage name="nome" component="div" className="errorField" />
            <Field name="matricula" />
            <ErrorMessage name="matricula" component="div" className="errorField" />
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="errorField" />
            <Field type="password" name="senha" />
            <ErrorMessage name="senha" component="div" className="errorField" />
            <Field name="telefone" />
            <ErrorMessage name="telefone" component="div" className="errorField" />
            <button type="submit" disabled={isSubmitting}>
              Cadastre-se
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
