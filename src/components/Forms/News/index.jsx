import React, { useContext } from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { initialValues, SignupSchema, handleSubmit } from './formsSetting';
import './styles.css';
import { NewsContext } from '../../../contexts/news';

export default function NewsForm() {
  const { createNews } = useContext(NewsContext);

  return (
    <div className="containerNewsForm">
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values, setSubmitting, createNews);
          }}
          validationSchema={SignupSchema}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field name="titulo" placeholder="Título" />
              <ErrorMessage name="titulo" component="div" className="errorField" />
              <Field name="autor" placeholder="Autor" />
              <ErrorMessage name="autor" component="div" className="errorField" />
              <Field name="imagem" placeholder="Imagem" />
              <ErrorMessage name="imagem" component="div" className="errorField" />
              <Field type="textarea" name="conteudo" placeholder="Conteúdo" />
              <ErrorMessage name="conteudo" component="div" className="errorField" />
              <button type="submit" disabled={isSubmitting}>
                Postar
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
