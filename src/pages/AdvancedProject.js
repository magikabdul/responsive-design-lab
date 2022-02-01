import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStylesAdvancedProject from 'theme/GlobalStylesAdvancedProject';
import HeaderAdvanced from 'components/organisms/HeaderSection/HeaderAdvanced';
import theme from 'theme/theme';
import HeroSection from 'components/molecules/HeroSection/HeroSection';
import ProjectSection from 'components/organisms/ProjectSection/ProjectSection';

const Container = styled.div``;

const AdvancedProject = () => (
  <ThemeProvider theme={theme}>
    <GlobalStylesAdvancedProject />
    <Container>
      <HeaderAdvanced />
      <HeroSection />
      <ProjectSection />
    </Container>
  </ThemeProvider>
);

export default AdvancedProject;
