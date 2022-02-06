import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  font-size: 0.8rem;
  text-align: center;
  padding: 1rem;
  background: ${({theme}) => theme.gradient.main};
  color: white;

  @media only screen and (min-width: 1000px) {
    font-size: 1.2rem;
  }
`;

const Footer = () => (
  <Container>
    <p>Copyright &copy; 2022 by Mateusz Skrobiś, coded by Krzysztof Cholewa.</p>
  </Container>
);

export default Footer;
