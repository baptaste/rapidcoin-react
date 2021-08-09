//  npm
import React, { useState, useEffect } from 'react';

// Component
import Coins from 'src/components/Coins';

const App = () => {
  const [ coinsData, setCoinsData ] = useState([]);

  const getAllCoins = async () => {
    try {
      const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      const res = await fetch(url);
      if (!res.ok) {
          throw new Error('Error, request failed');
      };
      const coins = await res.json();
      setCoinsData(coins);
    } catch (err) {
        console.error(err)
    }
  }

  useEffect(() => {
    getAllCoins();
  }, []);

  return (
    <div className="app">
      <Coins coins={coinsData}/>
    </div>
  );
};

export default App;