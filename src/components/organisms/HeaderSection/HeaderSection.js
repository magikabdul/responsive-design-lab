import React from 'react';
import styled from 'styled-components';
import img from 'assets/image.jpg';

const Container = styled.header`
  margin: 25px 0;
  height: 200px;
  background: url(${img}) center/cover no-repeat;

  @media (min-width: 1100px) {
    height: 200px;
  }

  @media (max-width: 1100px) {
    height: 180px;
  }

  @media (max-width: 1000px) {
    height: 160px;
  }

  @media (max-width: 800px) {
    height: 120px;
  }

  @media (max-width: 500px) {
    height: 80px;
  }
`;

const HeaderSection = () => (
  <Container>
  </Container>
);

export default HeaderSection;
