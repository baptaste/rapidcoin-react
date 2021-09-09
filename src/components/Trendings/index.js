import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './trending.scss';

const Trendings = ({ getTrendingCoins, getCoinId, trendingCoins }) => {

  useEffect(() => {
    getTrendingCoins();
  }, []);

  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  let index = 1;

  return (
    <section className="trending">
       <button type="button" className="goButton goButton__trending" onClick={handleGoBack}>
          <i className="fas fa-arrow-left" />
        </button>
        <h1 className="trending__title">Top {trendingCoins.length} daily trending coins (Ordered by most popular first)</h1>

        <div className="trending-coins">
          {trendingCoins.map((trend) => {
            const getCurrentCoinId = () => (getCoinId(trend));
            return (
              <Link
                  key={trend.id}
                  className="trending-coins__link"
                  onClick={getCurrentCoinId}
                  to={`/coin/${trend.id}`}
                >
                  <article className="coin">
                    <p className="coin__header">
                      #{index++}
                      <img src={trend.image} className="coin__header-img" />
                    </p>
                    <p className="coin__content">Name: {trend.name}</p>
                    <p className="coin__content">Symbol: {trend.symbol.toUpperCase()}</p>
                    <p className="coin__content">Current Price: {trend.current_price} €</p>
                    <p className="coin__content">Market Cap: {trend.market_cap_rank}</p>
                    <p className="coin__content">Volume 24h: {trend.total_volume} €</p>
                    <p className="coin__content">
                    Price change 24h:
                    <span className={trend.price_change_percentage_24h > 0 ? 'coin__content--pos' : 'coin__content--neg'}>
                      {trend.price_change_percentage_24h} %
                    </span>
                  </p>
                  <p className="coin__content">Circ supply: {trend.circulating_supply}</p>
                  </article>
                </Link>
              );
          })}
        </div>

    </section>
  );
}

export default Trendings;