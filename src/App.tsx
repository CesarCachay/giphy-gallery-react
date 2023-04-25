import React, { useState, Suspense, lazy } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { GlobalStyle, darkTheme, lighTheme } from './utils/theme';
import { ErrorBoundary } from './components/atoms';
import { Navbar } from './components/organisms';
const LazyHome = lazy(() => import('@/components/layout/Home'));
const LazyFavorites = lazy(() => import('@/components/layout/Favorites'));

const App: React.FC = () => {
  const [theme, setTheme] = useState<string>('dark');
  const isDarkTheme = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lighTheme}>
        <ErrorBoundary fallback={<h1>Sorry... there was an uncaught error</h1>}>
          <SnackbarProvider
            maxSnack={2}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            <Suspense fallback={<div>Loading components ...</div>}>
              <GlobalStyle />
              <BrowserRouter>
                <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
                <Routes>
                  <Route path='/' element={<LazyHome />} />
                  <Route path='/favorites' element={<LazyFavorites />} />
                </Routes>
              </BrowserRouter>
            </Suspense>
          </SnackbarProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App;
