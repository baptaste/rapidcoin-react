import React, { useEffect } from 'react';
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';

const CoinPage = ({
  getOneCoin, coin, marketData, image, description,
  website, volumeInADay, marketCap, currentPrice }) => {

  useEffect(() => {
    getOneCoin();
  }, []);

  const cleanDescription = DOMPurify.sanitize(description, {FORBID_TAGS: ['a']});

  return (
    <section className="coin__page">
      <h1>{coin.name}</h1>

      <article className="coin">
        <p className="coin__header">
          #{coin.market_cap_rank}
          <img src={image.small} className="coin__header-img" />
        </p>
        <p className="coin__content">Nom: {coin.name}</p>
        <p className="coin__content">Symbole: {coin.symbol}</p>
        <p className="coin__content">Création: {coin.genesis_date}</p>
        <p className="coin__content">Prix: {currentPrice} €</p>
        <p className="coin__content">Capitalisation de marché: {marketCap} €</p>
        <p className="coin__content">Volume 24h: {volumeInADay} €</p>
        <p className="coin__content">
          Evolution 24h:
          <span className={marketData.market_cap_change_percentage_24h > 0 ?
            'coin__content--pos' : 'coin__content--neg'}
          >
            {marketData.market_cap_change_percentage_24h} %
          </span>
        </p>
        <p className="coin__content">
          Approvisionnement en circulation: {marketData.circulating_supply}</p>
        <p className="coin__content">Site officiel: {website}</p>
      </article>

  <div className="coin__page__desc">
    <h2 className="coin__page__desc--title">A propos de {coin.name}</h2>
    <p className="coin__page__desc--text">{cleanDescription}</p>
  </div>

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