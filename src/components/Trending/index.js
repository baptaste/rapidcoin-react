import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './trending.scss';

const Trending = ({ getTrendingCoins, getCoinId, trendingCoins}) => {

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
            Previous
        </button>
        <h1 className="trending__title">Top 7 daily trending coins</h1>

        <div className="trending-coins">
          {trendingCoins.map((tcoin) => {
          const getCurrentCoinId = () => (getCoinId(tcoin.item));

          return (
            <Link
            key={tcoin.item.id}
            className="trending-coins__link"
            onClick={getCurrentCoinId}
            to={`/coin/${tcoin.item.id}`}
          >
            <article className="coin">
              <p className="coin__header">
                #{index++}
                <img src={tcoin.item.small} className="coin__header-img" />
              </p>
              <p className="coin__content">Name: {tcoin.item.name}</p>
              <p className="coin__content">Market Cap Rank: {tcoin.item.market_cap_rank}</p>
              <p className="coin__content">Symbol: {tcoin.item.symbol.toUpperCase()}</p>
              <p className="coin__content">Price-BTC: {tcoin.item.price_btc} €</p>
            </article>
          </Link>
          )
        })}
        </div>

    </section>
  );

  // return (
  //   <main className="coins">
  //     <Link to="/" className="goButton" onClick={getAllCoins()}>
  //       Home
  //     </Link>
  //     <h1 className="trending__title">Trending</h1>

  //     {trendingCoins.map((coin) => {
  //       const getCurrentCoinId = () => (
  //         getCoinId(coin.item)
  //       );
  //       console.log('je passe dans le map de trendingCoins dans le composant');

  //       return (
          // <Link
          // key={coin.item.id}
          // className="coins__link"
          // onClick={getCurrentCoinId}
          // to={`/coin/${coin.item.id}`}
          // >
  //           <article className="coin">
  //             <p className="coin__header">
  //               #{index++}
  //               <img src={coin.item.small} className="coin__header-img" />
  //             </p>
  //             <p className="coin__content">Name: {coin.item.name}</p>
  //             <p className="coin__content">Market Cap Rank: {coin.item.market_cap_rank}</p>
  //             <p className="coin__content">Symbol: {coin.item.symbol.toUpperCase()}</p>
  //             <p className="coin__content">Price-BTC: {coin.item.price_btc} €</p>

  //           </article>
  //       </Link>
  //       );

  //     })}
  //   </main>
  // );
}

export default Trending;