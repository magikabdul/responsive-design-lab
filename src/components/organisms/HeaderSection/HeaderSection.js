import React from 'react';
import styled from 'styled-components';
import img from 'assets/image.jpg'

const Container = styled.header`
  margin: 25px 0;
  height: 200px;
  background: url(${img}) center/cover no-repeat;
`;

const HeaderSection = () => (
  <Container>
  </Container>
)

export default HeaderSection;
