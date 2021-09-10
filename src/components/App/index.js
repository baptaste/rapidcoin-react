//  npm
import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// Component
import Coins from 'src/containers/Coins';
import CoinPage from 'src/containers/CoinPage';
import Header from 'src/containers/Header';
import Loading from 'src/components/Loading';
import MobileMenu from 'src/containers/MobileMenu';
import Trendings from 'src/containers/Trendings';
import Platforms from 'src/containers/Platforms';

import './app.scss';

const App = ({ getAllCoins, isLoading }) => {
  const location = useLocation();

  useEffect(() => {
    getAllCoins();
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  return (
    <div className="app">
      <Header />
      <MobileMenu />
      <Route exact path="/">
        {isLoading ? <Loading /> : <Coins />}
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
  );
};

App.propTypes = {
  getAllCoins: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default App;