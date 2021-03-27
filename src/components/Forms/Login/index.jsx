/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { initialValues, SignupSchema, handleSubmit } from './formsSettings';
import { UserContext } from '../../../contexts/user';
import logo from '../../../assets/logo.jpeg';
import './styles.css';

export default function LoginForm() {
  const { login } = useContext(UserContext);

  return (
    <div className="containerLoginForm">
      <div className="imgContainer">
        <img src={logo} alt="logoImage" />
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values, setSubmitting, login);
        }}
        validationSchema={SignupSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <label>
              E-mail:
              <Field type="email" name="email" />
              <ErrorMessage name="nome" component="div" className="errorField" />
            </label>

            <label>
              Senha:
              <Field type="password" name="senha" />
              <ErrorMessage name="nome" component="div" className="errorField" />
            </label>

            <button type="submit" disabled={isSubmitting}>Entrar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
