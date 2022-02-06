import React from 'react';
import styled from 'styled-components';
import MenuItem from 'components/atoms/MenuItem/MenuItem';

const menuLinks = [
  {
    name: 'Home',
    scrollName: 'home-section',
  },
  {
    name: 'Projects',
    scrollName: 'project-section',
  },
  {
    name: 'About Me',
    scrollName: 'about-me-section',
  },
  {
    name: 'Contact',
    scrollName: 'contact-section',
  }
];

const Container = styled.ul`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  position: absolute;
  left: 0;
  top: 0;
  background: ${({ theme }) => theme.gradient.main};
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
  list-style: none;
  
  transform: ${({ show }) => show ? 'translateX(0)' : 'translateX(100%)'};
  transition: all 0.3s ease-in-out;
  
  @media only screen and (min-width: 1000px) {
    width: revert;
    height: revert;
    flex-direction: row;
    background: inherit;
    color: ${({ theme }) => theme.color.text.primary};
    
    position: unset;
    transform: translateX(0);
    font-size: 1.2rem;
    font-weight: normal;
  }
`;

const HeaderMenu = ({ show, setShow }) => (
  <Container show={show}>
    {menuLinks.map((link) => (
      <MenuItem key={link.name} name={link.name} scrollName={link.scrollName} setShow={setShow}/>
    ))}
  </Container>
);

export default HeaderMenu;
