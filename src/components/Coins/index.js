import React from 'react';

import Coin from '../Coin';
import './coins.scss';

const Coins = ({ coins }) => (
  <main className="coins">
    {coins.map((coin) => (
      <Coin
        key={coin.id}
        {...coin}
      />
    ))};
  </main>
);

export default Coins;
