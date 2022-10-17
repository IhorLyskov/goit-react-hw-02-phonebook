import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const ErrorMessageStyled = styled(ErrorMessage)`
  color: ${p => p.theme.color.colorErrorMessage};
  margin-bottom: ${p => p.theme.space[1]}px;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  width: ${p => p.theme.space[10]}px;
  padding: 0 ${p => p.theme.space[2]}px ${p => p.theme.space[2]}px
    ${p => p.theme.space[2]}px;
  margin-top: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSize[2]}px;
  border: ${p => p.theme.border.normal};
  border-color: ${p => p.theme.color.colorFormBorder};
  border-radius: ${p => p.theme.radius.normal};
`;

export const LabelStyled = styled.label`
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[1]}px;
`;

export const FieldStyled = styled(Field)`
  margin-bottom: ${p => p.theme.space[2]}px;
  width: ${p => p.theme.space[9]}px;
  border: ${p => p.theme.border.normal};
  border-color: ${p => p.theme.color.colorBorder};
  border-radius: ${p => p.theme.radius.normal};
  font-size: ${p => p.theme.fontSize[1]}px;
  :hover {
    border-color: ${p => p.theme.color.colorComponentBg};
    box-shadow: 0 0 4px 2px ${p => p.theme.color.colorAccent};
  }
`;

export const ButtonStyled = styled.button`
  display: block;
  width: ${p => p.theme.space[8]}px;
  padding: ${p => p.theme.space[0]}px;
  margin-top: ${p => p.theme.space[2]}px;

  font-size: ${p => p.theme.fontSize[1]}px;
  font-weight: ${p => p.theme.fontWeight.medium};

  border: ${p => p.theme.border.normal};
  border-color: ${p => p.theme.color.colorBorder};
  border-radius: ${p => p.theme.radius.normal};

  background-color: ${p => p.theme.color.colorComponentBg};

  :hover {
    border-color: ${p => p.theme.color.colorAccent};
    background-color: ${p => p.theme.color.colorAccent};
    color: ${p => p.theme.color.colorComponentBg};
    /* box-shadow: 0 0 4px 2px ${p => p.theme.color.colorAccent}; */
  }
`;
