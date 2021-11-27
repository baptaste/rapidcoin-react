import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';

import Graph from 'src/containers/Graph';
import GraphSelects from 'src/components/GraphSelects'

import './coinpage.scss';

const CoinPage = ({ getOneCoin, coin, coinId, isEUR, setMarketChartValue, chartValue, trendingCoins }) => {
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

  const trendyCoin = trendingCoins.find((trend) =>  trend.id === coin.id);

  return (
    coin !== {} && (
      <section className="coin__page">
        <div className="coin__page-header">
          <button type="button" className=" goButton coin__page-goButton" onClick={handleGoBack} aria-label="Go previous page">
            <i className="fas fa-arrow-left" />
          </button>
          <img src={image.small} className="coin__page-header--img" alt={`${coin.name} logo`}/>
        </div>
        <div className="coin__page-intro">
          <h1 className="coin__page-intro--title">{coin.name} <span className="symbol smallText">({coin.symbol.toUpperCase()})</span></h1>
          <div className="flex-align-center">
            <aside className="coin__page-intro--ranking">Rank #{coin.market_cap_rank}</aside>
            {trendyCoin !== undefined && <i className="fab fa-hotjar" title="Trending" />}
          </div>
        </div>

        <div className="graphContainer">
          <div className="graphHeader">
            <GraphSelects setMarketChartValue={setMarketChartValue} chartValue={chartValue} coin={coin} />
            <div className="rightSide">
              <span className="coin__price smallText">{coin.name} Price</span>
                <div className="coin__price">
                  <span className="coin__price-big">{isEUR ? (market_data.current_price.eur) : (market_data.current_price.usd)} {currency}</span>
                  {isEUR ? (
                <span className={market_data.price_change_percentage_24h_in_currency.eur > 0 ?
                  'coin__content--pos textBold' : 'coin__content--neg textBold'}>{market_data.price_change_percentage_24h_in_currency.eur.toLocaleString()} %
                </span>
                ) : (
                <span className={market_data.price_change_percentage_24h_in_currency.usd > 0 ?
                  'coin__content--pos textBold' : 'coin__content--neg textBold'}>{market_data.price_change_percentage_24h_in_currency.usd.toLocaleString()} %
                </span>)}
                </div>
            </div>
          </div>
          <Graph />
        </div>
        <div className="coin__page__details">
          <article className="coin__page-item">
            <img src={image.large} className="coin__page-item--backgroundImg" alt={`${coin.name} logo`}/>
            <p className="coin__header">#{coin.market_cap_rank}</p>
            <p className="coin__content">Name: <span className="textBold">{coin.name} </span>
            ({coin.symbol.toUpperCase()})</p>
            <p className="coin__content">Market Cap Rank: <span className="textBold">{coin.market_cap_rank}</span></p>
            <p className="coin__content">Current Price: <span className="textBold">{isEUR ?
              (market_data.current_price.eur) : (market_data.current_price.usd)} {currency}</span></p>
            <p className="coin__content">Market Cap: <span className="textBold">{isEUR ?
              (market_data.market_cap.eur.toLocaleString()) : (market_data.market_cap.usd.toLocaleString())} {currency}</span></p>
            <p className="coin__content">Volume 24h: <span className="textBold">{isEUR ?
              (market_data.total_volume.eur.toLocaleString()) : (market_data.total_volume.usd.toLocaleString())} {currency}</span></p>
            <p className="coin__content--price-list">Price change:</p>
            <p className="coin__content--price-change">24h:
              {isEUR ? (
                <span className={market_data.price_change_percentage_24h_in_currency.eur > 0 ?
                  'coin__content--pos textBold' : 'coin__content--neg textBold'}>{market_data.price_change_percentage_24h_in_currency.eur} %
                </span>
              ) : (
                <span className={market_data.price_change_percentage_24h_in_currency.usd > 0 ?
                  'coin__content--pos textBold' : 'coin__content--neg textBold'}>{market_data.price_change_percentage_24h_in_currency.usd} %
                </span>)}
            </p>
            <p className="coin__content--price-change">7d:
            {isEUR ? (
              <span className={market_data.price_change_percentage_7d_in_currency.eur > 0 ?
                'coin__content--pos textBold' : 'coin__content--neg textBold'}>{market_data.price_change_percentage_7d_in_currency.eur} %
              </span>
              ) : (
                <span className={market_data.price_change_percentage_7d_in_currency.usd > 0 ?
                  'coin__content--pos textBold' : 'coin__content--neg textBold'}>{market_data.price_change_percentage_7d_in_currency.usd} %
                </span>)}
            </p>
            <p className="coin__content--price-change">1 month:
            {isEUR ? (
              <span className={market_data.price_change_percentage_30d_in_currency.eur > 0 ?
                'coin__content--pos textBold' : 'coin__content--neg textBold'}>{market_data.price_change_percentage_30d_in_currency.eur} %
              </span>
            ) : (
              <span className={market_data.price_change_percentage_30d_in_currency.usd > 0 ?
                'coin__content--pos textBold' : 'coin__content--neg textBold'}>{market_data.price_change_percentage_30d_in_currency.usd} %
              </span>)}
            </p>

            {isEUR &&
              <p className="coin__content--price-change">6 months:
              {market_data.price_change_percentage_200d !== 0 &&
              market_data.price_change_percentage_200d_in_currency.eur !== 0 ? (
                <span className={market_data.price_change_percentage_200d_in_currency.eur > 0 ?
                  'coin__content--pos textBold' : 'coin__content--neg textBold'}>{market_data.price_change_percentage_200d_in_currency.eur} %
                </span>
              ) : (' No stats yet')}
              </p>}
            {!isEUR &&
              <p className="coin__content--price-change">6 months:
              {market_data.price_change_percentage_200d !== 0 &&
              market_data.price_change_percentage_200d_in_currency.usd !== 0 ? (
                <span className={market_data.price_change_percentage_200d_in_currency.usd > 0 ?
                  'coin__content--pos textBold' : 'coin__content--neg textBold'}>{market_data.price_change_percentage_200d_in_currency.usd} %
                </span>
              ) : (' No stats yet')}
            </p>}

            {isEUR &&
              <p className="coin__content--price-change">1 year:
              {market_data.price_change_percentage_1y !== 0 &&
              market_data.price_change_percentage_1y_in_currency.eur !== 0 ? (
                <span className={market_data.price_change_percentage_1y_in_currency.eur > 0 ?
                  'coin__content--pos textBold' : 'coin__content--neg textBold'}>{market_data.price_change_percentage_1y_in_currency.eur} %
                </span>
              ) : (' No stats yet')}
              </p>}
            {!isEUR &&
              <p className="coin__content--price-change">1 year:
              {market_data.price_change_percentage_1y !== 0 &&
              market_data.price_change_percentage_1y_in_currency.usd !== 0 ? (
                <span className={market_data.price_change_percentage_1y_in_currency.usd > 0 ?
                  'coin__content--pos textBold' : 'coin__content--neg textBold'}>{market_data.price_change_percentage_1y_in_currency.usd} %
                </span>
              ) : (' No stats yet')}
              </p>}

            <p className="coin__content">
              Circulating supply: <span className="textBold">{market_data.circulating_supply.toLocaleString()} units
              {market_data.max_supply !== null ?
              ` (max ${market_data.max_supply.toLocaleString()})` : ' (unlimited)'}</span>
            </p>

            {coin.hashing_algorithm &&
            <p className="coin__content">Hashing algorithm: <span className="textBold">{coin.hashing_algorithm}</span></p>}
            {coin.genesis_date &&
            <p className="coin__content">Initial release: <span className="textBold">{coin.genesis_date}</span>
            </p>}
            {links.homepage[0] &&
            <p className="coin__content">Official website:
              <a href={links.homepage[0]} target="_blank" className="coin__content--url" rel="noopener noreferrer">
                <span className="textBold"> {links.homepage[0]}</span>
              </a>
            </p>}
          </article>
      </div>

      <div className="coin__page__desc">
      {cleanDescription ? (
        <>
        <h2 className="coin__page__desc--title">About {coin.name}</h2>
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
};


CoinPage.defaultProps = {
  genesis_date: '',
};

export default CoinPage;