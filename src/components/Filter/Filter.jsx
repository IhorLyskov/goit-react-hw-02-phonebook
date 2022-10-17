import PropTypes from 'prop-types';
import { LabelStyled, InputStyled } from './Filter.styled';

function Filter({ onInput }) {
  const handleInput = event => {
    const value = event.target.value;
    onInput({ value });
  };

  return (
    <>
      <LabelStyled htmlFor="search">Find contacts by name</LabelStyled>
      <InputStyled name="search" onChange={handleInput}></InputStyled>
    </>
  );
}

Filter.propTypes = {
  onInput: PropTypes.func,
};

export default Filter;
