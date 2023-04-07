import React, { Suspense, useContext, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import './styles/index.scss';
import { Theme, ThemeContext } from './theme/ThemeContext';

import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import { useTheme } from './theme/useTheme';

const App = () => {
  const {theme, toggleTheme} = useTheme();
  
  return (
    <div className={`app ${theme}`}>
      <button className={`tog-theme ${theme}`} onClick={toggleTheme}></button>

      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPageLazy />} />

          <Route path={'/about'} element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
