import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  & h1 {
    margin-bottom: 50px;
    font-size: 2.5rem;
    text-transform: uppercase;
    text-shadow: rgba(0, 0, 0, 0.16) 0 3px 6px, rgba(0, 0, 0, 0.23) 0 3px 6px;

    & span {
      display: block;
      text-align: center;
    }
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

const MainPage = () => (
  <Container>
    <h1>Examples of web project with <span>RWD implementation</span></h1>
    <Link to="simple-project">
      <LinkButton>simple project</LinkButton>
    </Link>
    <Link to="advanced-project">
      <LinkButton>advanced project</LinkButton>
    </Link>
  </Container>
);

export default MainPage;
