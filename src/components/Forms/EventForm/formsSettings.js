import * as Yup from 'yup';

export const initialValues = {
  titulo: '',
  organizador: '',
  date: '',
  descricao: '',
};

export const EventSchema = Yup.object().shape({
  titulo: Yup.string().required('É necessário informar um título'),
  organizador: Yup.string().required('É necessário indicar um organizador'),
  date: Yup.date().required('É necessário informar uma data'),
  descricao: Yup.string().required('É necessário indicar a descrição do evento'),
});

export const handleSubmit = async (values, setSubmitting, createEvent) => {
  setSubmitting(false);
  await createEvent({
    titulo: values.titulo,
    organizador: values.organizador,
    date: values.date,
    descricao: values.descricao,
  });
};
