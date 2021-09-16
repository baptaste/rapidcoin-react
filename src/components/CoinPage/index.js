import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';

import './coinpage.scss';

const CoinPage = ({
  getOneCoin, coin, isEUR, coinId }) => {

  useEffect(() => {
    getOneCoin();
  }, [coinId]);

  const { market_data, image, description, links } = coin;

  const cleanDescription = DOMPurify.sanitize(description.en, {ALLOWED_TAGS: ['em', 'strong']});
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  let currency;
  if (isEUR) currency = '€';
  if (!isEUR) currency = '$';

  return (
    coin !== {} && (
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
          <p className="coin__header">#{coin.market_cap_rank}</p>
          <p className="coin__content">Name: {coin.name} ({coin.symbol.toUpperCase()})</p>
          <p className="coin__content">Market Cap Rank: {coin.market_cap_rank}</p>
          <p className="coin__content">Current Price: {isEUR ?
            (market_data.current_price.eur.toLocaleString()) : (market_data.current_price.usd.toLocaleString())} {currency}</p>
          <p className="coin__content">Market Cap: {isEUR ?
            (market_data.market_cap.eur.toLocaleString()) : (market_data.market_cap.usd.toLocaleString())} {currency}</p>
          <p className="coin__content">Volume 24h: {isEUR ?
            (market_data.total_volume.eur.toLocaleString()) : (market_data.total_volume.usd.toLocaleString())} {currency}</p>
          <p className="coin__content--price-list">Price change:</p>
          <p className="coin__content--price-change">24h:
            {isEUR ? (
              <span className={market_data.price_change_percentage_24h_in_currency.eur > 0 ?
                'coin__content--pos' : 'coin__content--neg'}>{market_data.price_change_percentage_24h_in_currency.eur} %
              </span>
            ) : (
              <span className={market_data.price_change_percentage_24h_in_currency.usd > 0 ?
                'coin__content--pos' : 'coin__content--neg'}>{market_data.price_change_percentage_24h_in_currency.usd} %
              </span>)}
          </p>
          <p className="coin__content--price-change">7d:
          {isEUR ? (
            <span className={market_data.price_change_percentage_7d_in_currency.eur > 0 ?
              'coin__content--pos' : 'coin__content--neg'}>{market_data.price_change_percentage_7d_in_currency.eur} %
            </span>
            ) : (
              <span className={market_data.price_change_percentage_7d_in_currency.usd > 0 ?
                'coin__content--pos' : 'coin__content--neg'}>{market_data.price_change_percentage_7d_in_currency.usd} %
              </span>)}
          </p>
          <p className="coin__content--price-change">1 month:
          {isEUR ? (
            <span className={market_data.price_change_percentage_30d_in_currency.eur > 0 ?
              'coin__content--pos' : 'coin__content--neg'}>{market_data.price_change_percentage_30d_in_currency.eur} %
            </span>
          ) : (
            <span className={market_data.price_change_percentage_30d_in_currency.usd > 0 ?
              'coin__content--pos' : 'coin__content--neg'}>{market_data.price_change_percentage_30d_in_currency.usd} %
            </span>)}
          </p>

          {isEUR &&
            <p className="coin__content--price-change">6 months:
            {market_data.price_change_percentage_200d !== 0 &&
            market_data.price_change_percentage_200d_in_currency.eur !== 0 ? (
              <span className={market_data.price_change_percentage_200d_in_currency.eur > 0 ?
                'coin__content--pos' : 'coin__content--neg'}>{market_data.price_change_percentage_200d_in_currency.eur} %
              </span>
            ) : (' No stats yet')}
            </p>}
          {!isEUR &&
            <p className="coin__content--price-change">6 months:
            {market_data.price_change_percentage_200d !== 0 &&
            market_data.price_change_percentage_200d_in_currency.usd !== 0 ? (
              <span className={market_data.price_change_percentage_200d_in_currency.usd > 0 ?
                'coin__content--pos' : 'coin__content--neg'}>{market_data.price_change_percentage_200d_in_currency.usd} %
              </span>
            ) : (' No stats yet')}
          </p>}

          {isEUR &&
            <p className="coin__content--price-change">1 year:
            {market_data.price_change_percentage_1y !== 0 &&
            market_data.price_change_percentage_1y_in_currency.eur !== 0 ? (
              <span className={market_data.price_change_percentage_1y_in_currency.eur > 0 ?
                'coin__content--pos' : 'coin__content--neg'}>{market_data.price_change_percentage_1y_in_currency.eur} %
              </span>
            ) : (' No stats yet')}
            </p>}
          {!isEUR &&
            <p className="coin__content--price-change">1 year:
            {market_data.price_change_percentage_1y !== 0 &&
            market_data.price_change_percentage_1y_in_currency.usd !== 0 ? (
              <span className={market_data.price_change_percentage_1y_in_currency.usd > 0 ?
                'coin__content--pos' : 'coin__content--neg'}>{market_data.price_change_percentage_1y_in_currency.usd} %
              </span>
            ) : (' No stats yet')}
            </p>}

          <p className="coin__content">
            Circulating supply: {market_data.circulating_supply.toLocaleString()} units
            {market_data.max_supply !== null ?
            ` (max ${market_data.max_supply.toLocaleString()})` : ' (unlimited)'}
          </p>

          {coin.hashing_algorithm &&
          <p className="coin__content">Hashing algorithm: {coin.hashing_algorithm}</p>}
          {coin.genesis_date &&
          <p className="coin__content">Initial release: {coin.genesis_date}
          </p>}
          <p className="coin__content">Official website:
            <a href={links.homepage[0]} target="_blank" className="coin__content--url"> {links.homepage[0]}</a>
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
    )

  );
};

CoinPage.propTypes = {
  getOneCoin: PropTypes.func.isRequired,
  coin: PropTypes.shape({
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    genesis_date: PropTypes.string,
  }).isRequired,
  // market_data: PropTypes.shape({
  //   market_cap_change_percentage_24h: PropTypes.number.isRequired,
  //   circulating_supply: PropTypes.number.isRequired,
  // }).isRequired,
  // image: PropTypes.shape({
  //   large: PropTypes.string.isRequired,
  // }).isRequired,
  // description: PropTypes.string.isRequired,
  // market_cap: PropTypes.number.isRequired,
};


CoinPage.defaultProps = {
  genesis_date: '',
};

export default CoinPage;