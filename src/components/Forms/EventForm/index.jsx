import React, { useContext } from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { EventContext } from '../../../contexts/event';
import { initialValues, EventSchema, handleSubmit } from './formsSettings';
import './styles.css';

export default function EventForms() {
  const { createEvent } = useContext(EventContext);

  return (
    <div className="containerEventsForms">
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values, setSubmitting, createEvent);
          }}
          validationSchema={EventSchema}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field name="titulo" placeholder="Título" />
              <ErrorMessage name="titulo" component="div" className="errorField" />
              <Field name="organizador" placeholder="Organizador" />
              <ErrorMessage name="organizador" component="div" className="errorField" />
              <Field name="date" placeholder="Data" />
              <ErrorMessage name="date" component="div" className="errorField" />
              <Field type="textarea" name="descricao" placeholder="Descrição" />
              <ErrorMessage name="descricao" component="div" className="errorField" />
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
