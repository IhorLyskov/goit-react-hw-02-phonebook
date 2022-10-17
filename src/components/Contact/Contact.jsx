import React from 'react';
import PropTypes from 'prop-types';
import { LiStyled, LiDivStyled, ButtonStyled } from './Contact.styled';

export const LiDiv = ({ name, number, children }) => (
  <LiDivStyled>
    <span>
      {name}: {number}
    </span>
    {children}
  </LiDivStyled>
);

function Contact({ id, name, number, onDelete }) {
  return (
    <LiStyled>
      <LiDiv name={name} number={number}>
        <ButtonStyled
          name="delete"
          type="button"
          onClick={() => onDelete({ id })}
        >
          Delete
        </ButtonStyled>
      </LiDiv>
    </LiStyled>
  );
}
Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
};

export default Contact;
