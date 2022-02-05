import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 1rem;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.062) 0 3px 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  @media only screen and (max-width: 500px) {
    margin: 1rem 0.5rem;
  }

  &:hover {
    box-shadow: rgba(143, 143, 143, 0.212) 0 5px 15px;
  }
`;

const Name = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-size: .8rem;
  margin-top: 1rem;
  color: ${({theme}) => theme.color.text.secondary};
  white-space: pre-wrap;
`;

const TechCard = ({name, Icon}) => (
  <Container>
    <Icon width="6rem" height="6rem"/>
    <Name>{name}</Name>
  </Container>
);

export default TechCard;
