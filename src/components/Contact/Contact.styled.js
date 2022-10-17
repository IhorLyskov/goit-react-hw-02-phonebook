import styled from 'styled-components';

export const LiDivStyled = styled.div`
  display: flex;
  gap: ${p => p.theme.space[2]}px;
`;

export const LiStyled = styled.li`
  margin-left: ${p => p.theme.space[6]}px;
  margin-top: ${p => p.theme.space[3]}px;
`;

export const ButtonStyled = styled.button`
  display: block;
  width: ${p => p.theme.space[7]}px;
  padding: ${p => p.theme.space[0]}px;

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
  }
`;
