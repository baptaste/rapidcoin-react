import React from 'react';
import { Link } from 'react-router-dom';

import Coin from '../Coin';
import './table.scss';

const Table = ({
  getCoinId,
  coins,
  filteredCoins,
  isEUR,
  trendingCoins,
}) => {

  const trendyCoins = trendingCoins
                              .filter((trend) => trend.id)
                              .map((trend) => trend.id);
  // // console.log(trendyCoins);
  // const coinId = getCoinId(coin);
  // console.log(coinId);

  let currency;
  if (isEUR) currency = '€';
  if (!isEUR) currency = '$';

  return (
    <table className="table">
    <thead>
        <tr>
          <th>#</th>
          <th className="name-column">Name</th>
          <th>Price</th>
          <th>24h %</th>
          <th>Market Capitalization</th>
          <th>Volume 24h</th>
          <th>Circulating supply</th>
        </tr>
    </thead>
    <tbody>
      {filteredCoins.length === 0 ? (

        coins.map((coin) => {
          const getCurrentCoinId = () => {
            return getCoinId(coin);
            // return coin.id;
          }
          return (
            <tr className="table-coin" key={coin.id}>
              <td>{coin.market_cap_rank.toLocaleString()}</td>
              <td className="table-coin__link">
                <Link
                onClick={getCurrentCoinId}
                to={`/coin/${coin.id}`}
                title={`See ${coin.name} infos`}
                >
                  <div className="table-coin flex">
                    <img src={coin.image} alt={`${coin.name} logo`} className="coin-images" />
                    <p className="table-coin__name">{coin.name}</p>
                    <p>({coin.symbol.toUpperCase()})</p>
                    {trendyCoins.find((id) => id === coin.id) && <i className="fab fa-hotjar" title="Trending" />}
                  </div>
                </Link>
              </td>
              <td className="table-coin__price">{coin.current_price} {currency}</td>
              <td className="table-coin__td">
                 <span className={coin.price_change_percentage_24h > 0 ?
                'coin__content--pos' : 'coin__content--neg'}>{coin.price_change_percentage_24h} %
              </span>
              </td>
              <td className="table-coin__td">{coin.market_cap.toLocaleString()} {currency}</td>
              <td className="table-coin__td">{coin.total_volume.toLocaleString()} {currency}</td>
              <td className="table-coin__td">{coin.circulating_supply.toLocaleString()} {coin.symbol.toUpperCase()}</td>
            </tr>
          );
        })
      ) : (

        filteredCoins.map((coin) => {
          const getCurrentCoinId = () => (
            getCoinId(coin)
          );
          return (
            <tr className="table-coin" key={coin.id}>
              <td>{coin.market_cap_rank.toLocaleString()}</td>
              <td className="table-coin__link">
                <Link
                  onClick={getCurrentCoinId}
                  to={`/coin/${coin.id}`}
                  title={`See ${coin.name} infos`}
                >
                  <div className="table-coin flex">
                    <img src={coin.image} alt={`${coin.name} logo`} className="coin-images" />
                    <p className="table-coin__name">{coin.name}</p>
                    <p>({coin.symbol.toUpperCase()})</p>
                    {trendyCoins.find((id) => id === coin.id) && <i className="fab fa-hotjar" title="Trending" />}
                  </div>
                </Link>
              </td>
              <td className="table-coin__price">{coin.current_price} {currency}</td>
              <td className="table-coin__td">
                 <span className={coin.price_change_percentage_24h > 0 ?
                'coin__content--pos' : 'coin__content--neg'}>{coin.price_change_percentage_24h} %
              </span>
              </td>
              <td className="table-coin__td">{coin.market_cap.toLocaleString()} {currency}</td>
              <td className="table-coin__td">{coin.total_volume.toLocaleString()} {currency}</td>
              <td className="table-coin__td">{coin.circulating_supply.toLocaleString()} {coin.symbol.toUpperCase()}</td>
            </tr>
          );
        })
      )}
    </tbody>
</table>
  );

};

export default Table;