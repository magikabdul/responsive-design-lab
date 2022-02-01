import React from 'react';
import styled from 'styled-components';
import background from 'assets/not-found.jpg'
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
  &:before {
    position: absolute;
    content: '';
    background: url(${background}) center/cover no-repeat;
    width: 100%;
    height: 100vh;
    opacity: 0.7;
    z-index: -1;
  }
  
  & h1 {
    text-transform: uppercase;
    font-size: 48px;
    color: black;
  }
`;

const LinkButton = styled.button`
  margin: 10px auto;
  padding: 16px 24px;
  min-width: 300px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: blue;
  color: white;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: rgb(38, 57, 77) 0 20px 30px -10px;

  &:hover {
    background-color: yellow;
    color: black;
  }
`;

const NotFoundPage = () => (
  <Container>
    <h1>page not found</h1>
    <Link to="/">
      <LinkButton>home</LinkButton>
    </Link>
  </Container>
)

export default NotFoundPage;
