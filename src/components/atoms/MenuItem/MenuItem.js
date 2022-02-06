import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.li`
  position: relative;

  background: ${({theme, name}) => name === 'Contact' && theme.gradient.main};
  padding: ${({name}) => name === 'Contact' && '0.5rem 1.5rem'};
  border-radius: ${({name}) => name === 'Contact' && '1rem'};
  color: ${({name}) => name === 'Contact' && 'white'};

  &:hover::after {
    width: 100%;
  }

  @media only screen and (min-width: 1000px) {
    &::after {
      display: ${({name}) => (name === 'Contact' ? 'none' : 'block')};
      content: '';
      width: 0;
      height: 0.2rem;
      background: ${({theme}) => theme.gradient.main};
      position: absolute;
      left: 0;
      bottom: -0.2rem;
      border-radius: 2rem;
      transition: all 0.3s ease-in-out;
    }
  }
`;

const MenuItem = ({name, scrollName, setShow}) => (
  <Container>
    <Link to={scrollName} offset={-110} smooth>
      <Item data-key={name} name={name} onClick={() => setShow(false)}>
        {name}
      </Item>
    </Link>
  </Container>
);

export default MenuItem;
