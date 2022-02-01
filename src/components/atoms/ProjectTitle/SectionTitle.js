import React from 'react';
import styled, { keyframes } from 'styled-components';

const square = keyframes`
  from {
    box-shadow: rgba(240, 46, 170, 0.4) 0 0,
    rgba(240, 46, 170, 0.3) 0 0, rgba(240, 46, 170, 0.2) 0 0,
    rgba(240, 46, 170, 0.1) 0 0, rgba(240, 46, 170, 0.05) 0 0;
  }
  to {
    box-shadow: rgba(240, 46, 170, 0.4) 5px 5px,
    rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px,
    rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
  }
`;

const Container = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem;

  @media only screen and (min-width: 1000px) {
    font-size: 3rem;
  }
`;

const Beginning = styled.div`
  background: ${({theme}) => theme.gradient.secondary};
  color: white;
  padding: 0.4rem;
  border-top-left-radius: 1rem;
`;

const Ending = styled.span`
  color: ${({theme}) => theme.color.text.primary};
  position: relative;

  &::after {
    content: '';
    background: ${({theme}) => theme.gradient.secondary};
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    bottom: -1.5rem;
    right: -1.5rem;
    border-bottom-right-radius: 0.5rem;
    animation: 1s ${square} infinite alternate-reverse ease-in-out;
  }
`;

const SectionTitle = ({ begin, end }) => (
  <Container>
    <Beginning>{begin}</Beginning>
    <Ending>{end}</Ending>
  </Container>
);

export default SectionTitle;
