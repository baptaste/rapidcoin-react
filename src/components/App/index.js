//  npm
import React, { useEffect } from 'react';

// Component
import Coins from 'src/containers/Coins';

const App = ({ getAllCoins }) => {
  useEffect(() => {
    getAllCoins();
  }, []);

  return (
    <div className="app">
      <Coins />
    </div>
  );
};

export default App;