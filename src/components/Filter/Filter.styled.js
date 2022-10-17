import styled from 'styled-components';

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[1]}px;
`;

export const InputStyled = styled.input`
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
