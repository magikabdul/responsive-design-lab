import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SimpleProject from 'pages/SimpleProject';
import GlobalStyles from 'theme/GlobalStyles';
import MainPage from 'pages/MainPage';
import NotFoundPage from 'pages/NotFoundPage';
import AdvancedProject from 'pages/AdvancedProject';

const App = () => (
  <BrowserRouter>
    <GlobalStyles />
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/simple-project' element={<SimpleProject />} />
      <Route path='/advanced-project' element={<AdvancedProject />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
