import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';

import './coinpage.scss';

const CoinPage = ({
  getOneCoin, coin, marketData, image, description,
  website, volumeInADay, marketCap, currentPrice }) => {

  useEffect(() => {
    getOneCoin();
  }, []);

  const cleanDescription = DOMPurify.sanitize(description, {FORBID_TAGS: ['a']});
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <section className="coin__page">
       <button type="button" className="goButton" onClick={handleGoBack}>
        Previous
      </button>

      <h1 className="coin__page--title">{coin.name}</h1>

      <article className="coin">
        <p className="coin__header">
          #{coin.market_cap_rank}
          <img src={image.small} className="coin__header-img" />
        </p>
        <p className="coin__content">Name: {coin.name}</p>
        <p className="coin__content">Symbol: {coin.symbol.toUpperCase()}</p>
        {coin.genesis_date &&
        <p className="coin__content">
          Birth: {coin.genesis_date}</p>}
        <p className="coin__content">Current Price: {currentPrice} €</p>
        <p className="coin__content">Market Cap: {marketCap} €</p>
        <p className="coin__content">Volume 24h: {volumeInADay} €</p>
        <p className="coin__content">
          Price change 24h:
          <span className={marketData.market_cap_change_percentage_24h > 0 ?
            'coin__content--pos' : 'coin__content--neg'}
          >
            {marketData.market_cap_change_percentage_24h} %
          </span>
        </p>
        <p className="coin__content">
        Circ supply: {marketData.circulating_supply}</p>
        <a href={website} target="_blank" className="coin__content">Official website: {website}</a>
      </article>

  {cleanDescription ?
  <div className="coin__page__desc">
    <h2 className="coin__page__desc--title">About {coin.name}</h2>
    <p className="coin__page__desc--text">{cleanDescription}</p>
  </div>
  : <p className="coin__page__desc--text">There is no description about {coin.name}</p> }

  </section>
  );
};

CoinPage.propTypes = {
  getOneCoin: PropTypes.func.isRequired,
  coin: PropTypes.shape({
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    genesis_date: PropTypes.string.isRequired,
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

export default CoinPage;