import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStylesAdvancedProject from 'theme/GlobalStylesAdvancedProject';
import HeaderAdvanced from 'components/organisms/HeaderSection/HeaderAdvanced';
import theme from 'theme/theme';

const Container = styled.div``;

const AdvancedProject = () => (
  <ThemeProvider theme={theme}>
    <GlobalStylesAdvancedProject />
    <Container>
      <HeaderAdvanced />
    </Container>
  </ThemeProvider>
);

export default AdvancedProject;
