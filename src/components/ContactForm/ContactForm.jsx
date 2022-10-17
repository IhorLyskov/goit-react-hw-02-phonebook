import React from 'react';
import PropTypes from 'prop-types';

import { customAlphabet } from 'nanoid';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { namePattern, phonePattern } from '../constants/Constants';

import {
  FormStyled,
  ErrorMessageStyled,
  FieldStyled,
  ButtonStyled,
  LabelStyled,
} from './ContactForm.styled';

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(
      namePattern,
      'Name may contain only letters, apostrophe, dash and spaces!'
    )
    .required('This field is required!'),

  number: Yup.string()
    .matches(
      phonePattern,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +!'
    )
    .required('This field is required!'),
});

function ContactForm({ onSubmit }) {
  const handleSubmit = ({ name, number }, { resetForm }) => {
    const id = 'id-' + customAlphabet('1234567890', 3)();
    if (onSubmit({ id, name, number })) {
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <LabelStyled htmlFor="name">Name</LabelStyled>
        <FieldStyled type="text" name="name" />
        <ErrorMessageStyled name="name" component="div" />

        <LabelStyled htmlFor="number">Number</LabelStyled>
        <FieldStyled type="tel" name="number" />
        <ErrorMessageStyled name="number" component="div" />

        <ButtonStyled type="submit">Add contact</ButtonStyled>
      </FormStyled>
    </Formik>
  );
}

ContactForm.tropTypes = { handleSubmit: PropTypes.func };

export default ContactForm;
