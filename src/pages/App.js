import React from 'react';
import styled from 'styled-components';
import GlobalStyles from 'theme/GlobalStyles';
import HeaderSection from 'components/organisms/HeaderSection/HeaderSection';
import MainSection from 'components/organisms/MainSection/MainSection';
import AsideSection from 'components/organisms/AsideSection/AsideSection';
import FooterSection from 'components/organisms/FooterSection/FooterSection';

const Container = styled.div`
  margin: 0 auto;

  @media (min-width: 1100px) {
    width: 1050px;
  }

  @media (max-width: 1100px) {
    width: 950px;
  }

  @media (max-width: 1000px) {
    width: 750px;
  }

  @media (max-width: 800px) {
    width: 450px;
    & div {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 500px) {
    width: 90%;
    & div {
      grid-template-columns: 1fr;
    }
  }
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
