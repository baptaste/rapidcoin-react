//  npm
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

// Component
import Coins from 'src/containers/Coins';
import CoinPage from 'src/containers/CoinPage';

const App = ({ getAllCoins }) => {
  useEffect(() => {
    getAllCoins();
  }, []);

  return (
    <div className="app">
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