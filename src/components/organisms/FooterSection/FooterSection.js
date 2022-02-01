import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  color: white;
  background: #121212;
  padding: 15px 0 15px 30px;
`;

const FooterSection = () => (
  <Container>
    <p>Footstep.pl © 2013</p>
  </Container>
)

export default FooterSection;
