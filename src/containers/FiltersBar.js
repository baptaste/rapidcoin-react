import { connect } from 'react-redux';

import FiltersBar from 'src/components/FiltersBar';

const mapStateToProps = (state) => ({
  isFilterByPriceClicked: state.isFilterByPriceClicked,
  isCoinsFilteredDESC: state.isCoinsFilteredDESC,
  isCoinsFilteredASC: state.isCoinsFilteredASC,
  isEUR: state.isEUR,
  isFilterByMarketCapClicked: state.isFilterByMarketCapClicked,
  isMarketCapFilteredDESC: state.isMarketCapFilteredDESC,
  isMarketCapFilteredASC: state.isMarketCapFilteredASC,
  isBlockDashboard: state.isBlockDashboard,
  isSwitchDashboardClicked: state.isSwitchDashboardClicked,
});

const mapDispatchToProps = (dispatch) => ({
  getCoins: () => {
    dispatch({ type: 'GET_COINS' });
  },
  getCoinsByPriceDESC: () => {
    dispatch({ type: 'GET_COINS_BY_PRICE_DESC' });
  },
  getCoinsByPriceASC: () => {
    dispatch({ type: 'GET_COINS_BY_PRICE_ASC' });
  },
  toggleCurrency: () => {
    dispatch({ type: 'SET_CURRENCY_VALUE' });
  },
  getCoinsByMarketCapDESC: () => {
    dispatch({ type: 'GET_COINS_BY_MARKETCAP_DESC' });
  },
  getCoinsByMarketCapASC: () => {
    dispatch({ type: 'GET_COINS_BY_MARKETCAP_ASC' });
  },
  switchDashboard: () => {
    dispatch({ type: 'SET_DASHBOARD' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersBar);