import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Coin from '../Coin';
import Loading from 'src/components/Loading';
import FiltersBar from 'src/containers/FiltersBar';
import Table from 'src/containers/Table';

import './home.scss';

import blockchain from 'src/assets/blockchain.svg';
import blockchainDark from 'src/assets/blockchainDark.svg';

const Home = ({
  getCoins,
  coins,
  getCoinId,
  filteredCoins,
  successMsg,
  errorMsg,
  resetFilteredCoins,
  theme,
  onLoadMore,
  isLoading,
  trendingCoins,
  isCurrencyTogglerClicked,
  isEUR,
  isSwitchDashboardClicked,
 }) => {

  useEffect(() => {
    getCoins();
  }, [isCurrencyTogglerClicked]);

  const handleGoToHome = () => {
    resetFilteredCoins();
  };

  return (
    <main className="home">
      {filteredCoins.length !== 0 &&
        <div className="app__desc">
          <img src={theme === 'dark' ? blockchainDark : blockchain} className="blockchain_img" alt="Blockchain" />
          <button type="button" className="goButton goButton__home" onClick={handleGoToHome} aria-label="Go previous page">
                <i className="fas fa-arrow-left" />
          </button>
          <div className="results__msgField">
              <p className="results__msgField--success">{isLoading ? 'Searching...' : successMsg}</p>
          </div>
        </div>}

        {filteredCoins.length === 0 &&
          <div className="app__desc">
            <img src={theme === 'dark' ? blockchainDark : blockchain} className="blockchain_img" alt="Blockchain" />
            {errorMsg ? (
              <div className="results__msgField">
                <p className="results__msgField--error">{isLoading ? 'Searching...' : errorMsg}</p>
              </div>
            ) : (
              <>
              <h1 className="app__desc--title">Welcome to Rapidcoin</h1>
              <p className="app__desc--content">
                Rapidcoin is an easy and fast way to find your favorite cryptocurrency,
                check world's current ranking, stats and learn about coins stories
                </p>
              </>
            )}
          </div>}

      {filteredCoins.length === 0 && <FiltersBar />}

      <div className="coins">
        {isLoading ? (
          <Loading />
        ) : (
          // all coins
          isSwitchDashboardClicked ? (
            <Table />
          ) : (
            filteredCoins.length === 0 ? (
              <>
              {coins.map((coin) => {
                const getCurrentCoinId = () => (
                  getCoinId(coin)
                );
                return (
                  <Link
                  key={coin.id}
                  className="coins__link"
                  onClick={getCurrentCoinId}
                  to={`/coin/${coin.id}`}
                  >
                    <Coin
                      {...coin}
                      trendingCoins={trendingCoins}
                      coin={coin}
                      isEUR={isEUR}
                    />
                </Link>
                );
              })}

              {/* {Mettre composant Table ICI} */}
              {/* {isSwitchDashboardClicked && <Table />} */}


              </>
            ) : (
              // searched coins
              filteredCoins.map((coin) => {
                const getCurrentCoinId = () => (
                  getCoinId(coin)
                );
                return (
                  <Link
                  key={coin.id}
                  className="coins__link"
                  onClick={getCurrentCoinId}
                  to={`/coin/${coin.id}`}
                  >
                    <Coin
                      {...coin}
                      trendingCoins={trendingCoins}
                      coin={coin}
                      isEUR={isEUR}
                    />
                </Link>
                );
              })
            )
          )


        )}
      </div>

      {coins && filteredCoins.length === 0 &&
      <button className="home__load-more" onClick={onLoadMore}>{isLoading ? 'Loading...' : 'Load more'}</button>}

  </main>
  );

};


Home.propTypes = {
  coins: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      current_price: PropTypes.number.isRequired,
      market_cap: PropTypes.number.isRequired,
      total_volume: PropTypes.number.isRequired,
      price_change_percentage_24h: PropTypes.number.isRequired,
      circulating_supply: PropTypes.number.isRequired,
      market_cap_rank: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  filteredCoins: PropTypes.array.isRequired,
  resetFilteredCoins: PropTypes.func.isRequired,
  successMsg: PropTypes.string,
  errorMsg: PropTypes.string,
};

Home.defaultProps = {
  successMsg: '',
  errorMsg: '',
};

export default Home;
