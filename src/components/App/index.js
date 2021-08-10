//  npm
import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// Component
import Coins from 'src/containers/Coins';
import CoinPage from 'src/containers/CoinPage';
import SearchBar from 'src/containers/SearchBar';

const App = ({ getAllCoins }) => {
  const location = useLocation();

  useEffect(() => {
    getAllCoins();
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  return (
    <div className="app">

      <SearchBar />

      <Route exact path="/">
        <Coins />
      </Route>

      <Route exact path="/coin/:id">
        <CoinPage />
      </Route>
    </div>
  );
};

export default App;