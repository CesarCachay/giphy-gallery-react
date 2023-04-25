import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Favorites, Home } from './components/layout';
import { GlobalStyle, darkTheme, lighTheme } from './utils/theme';
import { Navbar } from './components/organisms';

const App: React.FC = () => {
  const [theme, setTheme] = useState<string>('dark');
  const isDarkTheme = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lighTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App;
