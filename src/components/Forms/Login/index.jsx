/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';

import { UserContext } from '../../../contexts/user';
import logo from '../../../assets/logo.jpeg';

import { initialValues, SignupSchema, handleSubmit } from './formsSettings';
import './styles.css';

function LoginForm({ history }) {
  const { login } = useContext(UserContext);

  return (
    <div className="containerLoginForm">
      <div className="imgContainer">
        <img src={logo} alt="logoImage" />
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values, setSubmitting, login, history);
        }}
        validationSchema={SignupSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="email">
              E-mail:
              <Field type="email" name="email" id="email" />
              <ErrorMessage name="email" component="div" className="errorField" />
            </label>

            <label htmlFor="senha">
              Senha:
              <Field type="password" name="senha" id="senha" />
              <ErrorMessage name="senha" component="div" className="errorField" />
            </label>

            <button type="submit" disabled={isSubmitting}>Entrar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default withRouter(LoginForm);
