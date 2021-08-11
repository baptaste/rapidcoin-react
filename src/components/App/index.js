//  npm
import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// Component
import Coins from 'src/containers/Coins';
import CoinPage from 'src/containers/CoinPage';
import Header from 'src/components/Header';

const App = ({ getAllCoins, filteredCoins, resetFilteredCoins }) => {
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
      <Header resetFilter={resetFilteredCoins} />

      <Route exact path="/">
        {filteredCoins.length !== 0 &&
        <button type="button" className="goButton" onClick={handleGoToHome}>
          Home
        </button>}
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
  filteredCoins: PropTypes.array.isRequired,
  resetFilteredCoins: PropTypes.func.isRequired,
}

export default App;