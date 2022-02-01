import React from 'react';
import styled from 'styled-components';
import GlobalStyles from 'theme/GlobalStyles';
import HeaderSection from 'components/organisms/HeaderSection/HeaderSection';
import MainSection from 'components/organisms/MainSection/MainSection';
import AsideSection from 'components/organisms/AsideSection/AsideSection';
import FooterSection from 'components/organisms/FooterSection/FooterSection';

const Container = styled.div`
  width: 1050px;
  margin: 0 auto;
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 5%;
`;

const App = () => (
  <Container>
    <GlobalStyles/>
    <HeaderSection/>
    <GridBox>
      <AsideSection/>
      <MainSection/>
    </GridBox>
    <FooterSection/>
  </Container>
);

export default App;
