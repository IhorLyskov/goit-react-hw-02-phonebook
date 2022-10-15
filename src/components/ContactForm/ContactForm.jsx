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
} from './ContactForm.styled';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Minimum 3 letters!')
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
    const id = 'id-' + customAlphabet('1234567890', 3)(3);

    console.log(id, name, number);
    // if (onSubmit({ id, name, number })) {
    //   resetForm();
    // }
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormStyled name="contact-form">
        <label htmlFor="name">
          Name:
          <FieldStyled type="text" name="name" />
          <ErrorMessageStyled name="name" component="div" />
        </label>

        <label htmlFor="number">
          Number:
          <FieldStyled type="tel" name="number" />
          <ErrorMessageStyled name="number" component="div" />
        </label>

        <ButtonStyled type="submit">Add contact</ButtonStyled>
      </FormStyled>
    </Formik>
  );
}

ContactForm.tropTypes = { onSubmit: PropTypes.func };

export default ContactForm;
