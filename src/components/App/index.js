//  npm
import React, { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import {ThemeProvider} from "styled-components";
import PropTypes from 'prop-types';

// Component
import Coins from 'src/containers/Coins';
import CoinPage from 'src/containers/CoinPage';
import Header from 'src/containers/Header';
import Loading from 'src/components/Loading';
import MobileMenu from 'src/containers/MobileMenu';
import Trendings from 'src/containers/Trendings';
import Platforms from 'src/containers/Platforms';

import GlobalStyles from 'src/components/Globalstyle';
import { lightTheme, darkTheme } from 'src/components/Themes';
import './app.scss';

const App = ({ getAllCoins, isLoading }) => {
  useEffect(() => {
    getAllCoins();
  }, []);

  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  // theme mode toggler (light by default)
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setMode('dark') : setMode('light')
  };
  // persist user's preferences by storing theme in localStorage
  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  };
  useEffect(() => {
      const localTheme = window.localStorage.getItem('theme');
      localTheme && setTheme(localTheme)
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
      <div className="app">
        <Header themeToggler={themeToggler} theme={theme} />
        <MobileMenu themeToggler={themeToggler} theme={theme} />

        <Route exact path="/">
          {isLoading ? <Loading /> : <Coins theme={theme} />}
        </Route>
        <Route exact path="/coin/:id">
          {isLoading ? <Loading /> : <CoinPage />}
        </Route>
        <Route exact path="/trendings">
          {isLoading ? <Loading /> : <Trendings />}
        </Route>
        <Route exact path="/platforms">
          {isLoading ? <Loading /> : <Platforms />}
        </Route>
      </div>
      </>
    </ThemeProvider>
  );
};

App.propTypes = {
  getAllCoins: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default App;