import PropTypes from 'prop-types';
import { SectionH1Styled, SectionH2Styled } from './Section.styled';

export const H1 = ({ title, children }) => (
  <SectionH1Styled>
    <h1>{title}</h1>
    {children}
  </SectionH1Styled>
);

export const H2 = ({ title, children }) => (
  <SectionH2Styled>
    <h2>{title}</h2>
    {children}
  </SectionH2Styled>
);

H1.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

H2.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
