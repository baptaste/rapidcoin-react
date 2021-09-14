import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';

import './coinpage.scss';

const CoinPage = ({
  getOneCoin, coin, marketData, image, description,
  website, volumeInADay, marketCap, currentPrice }) => {

  useEffect(() => {
    console.log('je passe bien dans le useEffect qui appelle getOneCoin() !');
    getOneCoin();
  }, []);

  const cleanDescription = DOMPurify.sanitize(description, {FORBID_TAGS: ['a']});
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <section className="coin__page">

      <div className="coin__page__preview">
        <div className="coin__page__preview-settings">
          <button type="button" className="goButton" onClick={handleGoBack}>
          <i className="fas fa-arrow-left" />
          </button>
          <h1 className="coin__page__preview-settings--title">{coin.name}</h1>
        </div>

        <article className="coin__page-item">
        <img src={image.large} className="coin__page-item--backgroundImg" />
          <p className="coin__header">
            #{coin.market_cap_rank}
            {/* <img src={image.small} className="coin__header-img" /> */}
          </p>
          <p className="coin__content">Name: {coin.name} ({coin.symbol.toUpperCase()})</p>
          <p className="coin__content">Market Cap Rank: {coin.market_cap_rank}</p>
          <p className="coin__content">Current Price: {currentPrice.toLocaleString()} €</p>
          <p className="coin__content">Market Cap: {marketCap.toLocaleString()} €</p>
          <p className="coin__content">Volume 24h: {volumeInADay.toLocaleString()} €</p>
          <p className="coin__content">Price change 24h:
            <span className={marketData.price_change_percentage_24h > 0 ?
              'coin__content--pos' : 'coin__content--neg'}>{marketData.price_change_percentage_24h} %
            </span>
          </p>
          <p className="coin__content">Price change 7d:
            <span className={marketData.price_change_percentage_7d > 0 ?
              'coin__content--pos' : 'coin__content--neg'}>{marketData.price_change_percentage_7d} %
            </span>
          </p>
          <p className="coin__content">Price change 1 month:
            <span className={marketData.price_change_percentage_30d > 0 ?
              'coin__content--pos' : 'coin__content--neg'}>{marketData.price_change_percentage_30d} %
            </span>
          </p>
          <p className="coin__content">Price change past 6 months:
            <span className={marketData.price_change_percentage_200d > 0 ?
              'coin__content--pos' : 'coin__content--neg'}>{marketData.price_change_percentage_200d} %
            </span>
          </p>
          <p className="coin__content">
            Circulating supply: {marketData.circulating_supply.toLocaleString()} units
            {marketData.max_supply !== null ? (` (max ${marketData.max_supply.toLocaleString()})`) : ' (unlimited)'}
          </p>
          {coin.hashing_algorithm && <p className="coin__content">Hashing algorithm: {coin.hashing_algorithm}</p>}
          {coin.genesis_date &&
          <p className="coin__content">Initial release: {coin.genesis_date}
          </p>}
          <p className="coin__content">Official website:
            <a href={website} target="_blank" className="coin__content--url"> {website}</a>
          </p>
        </article>
      </div>


  <div className="coin__page__desc">
  {cleanDescription ? (
    <>
    <h2 className="coin__page__desc--title">About</h2>
    <p className="coin__page__desc--text">{cleanDescription}</p>
    </>
  ) : (<p className="coin__page__desc--text">No description.</p> )
  }
  </div>


  </section>
  );
};

CoinPage.propTypes = {
  getOneCoin: PropTypes.func.isRequired,
  coin: PropTypes.shape({
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    genesis_date: PropTypes.string,
  }).isRequired,
  marketData: PropTypes.shape({
    market_cap_change_percentage_24h: PropTypes.number.isRequired,
    circulating_supply: PropTypes.number.isRequired,
  }).isRequired,
  image: PropTypes.shape({
    small: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  volumeInADay: PropTypes.number.isRequired,
  marketCap: PropTypes.number.isRequired,
  currentPrice: PropTypes.number.isRequired,
};


CoinPage.defaultProps = {
  genesis_date: '',
};

export default CoinPage;