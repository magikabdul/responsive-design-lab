import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStylesAdvancedProject from 'theme/GlobalStylesAdvancedProject';
import HeaderAdvanced from 'components/organisms/HeaderSection/HeaderAdvanced';
import theme from 'theme/theme';
import HeroSection from 'components/molecules/HeroSection/HeroSection';
import ProjectSection from 'components/organisms/ProjectSection/ProjectSection';
import AboutMeSection from 'components/molecules/AboutMeSection/AboutMeSection';
import TechnologiesSection from 'components/organisms/TechnologiesSection/TechnologiesSection';
import ContactSection from 'components/organisms/ContactSection/ContactSection';
import Footer from 'components/atoms/Footer/Footer';

const Container = styled.div``;

const AdvancedProject = () => (
  <ThemeProvider theme={theme}>
    <GlobalStylesAdvancedProject />
    <Container>
      <HeaderAdvanced />
      <HeroSection />
      <ProjectSection />
      <AboutMeSection />
      <TechnologiesSection />
      <ContactSection />
      <Footer />
    </Container>
  </ThemeProvider>
);

export default AdvancedProject;
