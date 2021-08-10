//  npm
import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// Component
import Coins from 'src/containers/Coins';
import CoinPage from 'src/containers/CoinPage';
import SearchBar from 'src/containers/SearchBar';

const App = ({ getAllCoins, resetFilteredCoins }) => {
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

  return (
    <div className="app">

      <SearchBar />

      <Route exact path="/">
        <button type="button" className="goButton" onClick={handleGoToHome}>
          Home
        </button>
        <Coins />
      </Route>

      <Route exact path="/coin/:id">
        <CoinPage />
      </Route>

    </div>
  );
};

App.propTypes = {
  getAllCoins: PropTypes.func.isRequired,
  resetFilteredCoins: PropTypes.func.isRequired,
}

export default App;