import React, { useContext } from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { initialValues, SignupSchema, handleSubmit } from './formsSetting';
import './styles.css';
import { UserContext } from '../../../contexts/user';

export default function SignUpForm() {
  const { createUser } = useContext(UserContext);

  return (
    <div className="containerSignUpForm">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values, setSubmitting, createUser);
        }}
        validationSchema={SignupSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field name="nome" placeholder="Nome completo" />
            <ErrorMessage name="nome" component="div" className="errorField" />
            <Field name="matricula" placeholder="Matrícula" />
            <ErrorMessage name="matricula" component="div" className="errorField" />
            <Field type="email" name="email" placeholder="E-mail" />
            <ErrorMessage name="email" component="div" className="errorField" />
            <Field type="password" name="senha" placeholder="Senha" />
            <ErrorMessage name="senha" component="div" className="errorField" />
            <Field name="telefone" placeholder="Telefone" />
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
