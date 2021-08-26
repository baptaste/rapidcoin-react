import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './trending.scss';

const Trending = ({ getTrendingCoins, getCoinId, trendingCoins, getAllCoins, coins }) => {

  useEffect(() => {
    getTrendingCoins();
  }, []);

  let index = 1;

  return (
    <main className="coins">
      <Link to="/" className="goButton" onClick={getAllCoins()}>
        Home
      </Link>
      <h1 className="trending__title">Trending</h1>

      {trendingCoins.map((coin) => {
        const getCurrentCoinId = () => (
          getCoinId(coin.item)
        );

        return (
          <Link
          key={coin.item.id}
          className="coins__link"
          onClick={getCurrentCoinId}
          to={`/coin/${coin.item.id}`}
          >
            <article className="coin">
              <p className="coin__header">
                #{index++}
                <img src={coin.item.small} className="coin__header-img" />
              </p>
              <p className="coin__content">Name: {coin.item.name}</p>
              <p className="coin__content">Market Cap Rank: {coin.item.market_cap_rank}</p>
              <p className="coin__content">Symbol: {coin.item.symbol.toUpperCase()}</p>
              <p className="coin__content">Price-BTC: {coin.item.price_btc} €</p>

            </article>
        </Link>
        );

      })}
    </main>
  );
}

export default Trending;