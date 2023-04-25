import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/layout';
import theme from './utils/theme';

const App: React.FC = () => {
  const globalStyles = {
    display: 'block',
    margin: '0',
    padding: '0',
    width: '100%',
    heigth: '100%',
    fontFamily: 'Open-Sans, Helvetica, Sans-Serif'
  };

  const GlobalStyle = createGlobalStyle`
    body {
      ${globalStyles}
    }
  `

  return (
    <React.Fragment>
      <BrowserRouter>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
