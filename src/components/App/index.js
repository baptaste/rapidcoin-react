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
import Trending from 'src/containers/Trending';

import blockchain from 'src/assets/blockchain.svg';
import './app.scss';

const App = ({ getAllCoins, filteredCoins, resetFilteredCoins, isLoading }) => {
  const location = useLocation();

  useEffect(() => {
    getAllCoins();
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  const handleGoToHome = () => {
    resetFilteredCoins();
  };

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <div className="app">
      <Header />
      <MobileMenu />
      <Route exact path="/">
        {filteredCoins.length !== 0 &&
          <button type="button" className="goButton" onClick={handleGoToHome}>
            Home
          </button>}
        {filteredCoins.length === 0 &&
          <div className="app__desc">
            <img src={blockchain} className="blockchain_img" alt="Blockchain" />
            <h1 className="app__desc--title">Welcome to Rapidcoin</h1>
            <p className="app__desc--content">
              Rapidcoin is an easy and fast way to find your cryptocurrency,
              check world's current ranking, stats and learn about coins stories
              </p>
          </div>}
        {isLoading ? <Loading /> : <Coins />}
      </Route>

      <Route exact path="/coin/:id">
        {isLoading ? <Loading /> : <CoinPage />}
      </Route>

      <Route exact path="/trending">
        <Trending />
      </Route>

    </div>
  );
};

App.propTypes = {
  getAllCoins: PropTypes.func.isRequired,
  filteredCoins: PropTypes.array.isRequired,
  resetFilteredCoins: PropTypes.func.isRequired,
}

export default App;