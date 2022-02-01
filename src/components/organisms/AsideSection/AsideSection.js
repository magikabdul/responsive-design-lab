import React from 'react';
import styled from 'styled-components';

const Container = styled.aside`
  margin: 0 0 25px;
  
  & nav {
    & ul {
      list-style: none;
      & li {
        margin-bottom: 1px;
        & a {
          display: block;
          text-decoration: none;
          color: black;
          background-color: #ffc000;
          padding: 8px 20px;
          &:hover {
            background-color: #212121;
            color: white;
          }
        }
      }
    }
  }
`;

const AsideSection = () => (
  <Container>
    <nav>
      <ul>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <li><a href="#">Start</a></li>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <li><a href="#">O firmie</a></li>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <li><a href="#">Oferta</a></li>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <li><a href="#">Galeria</a></li>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <li><a href="#">Kontakt</a></li>
      </ul>
    </nav>
  </Container>
);

export default AsideSection;
