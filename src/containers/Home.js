import { connect } from 'react-redux';

import Home from 'src/components/Home';

const mapStateToProps = (state) => ({
  coins: state.coins,
  filteredCoins: state.filteredCoins,
  successMsg: state.successMsg,
  errorMsg: state.errorMsg,
  isLoading: state.isLoading,
  trendingCoins: state.trendingCoins,
  isEUR: state.isEUR,
  isSwitchDashboardClicked: state.isSwitchDashboardClicked,
});

const mapDispatchToProps = (dispatch) => ({
  getCoins: () => {
    dispatch({ type: 'GET_COINS' });
  },
  getCoinId: (coin) => {
    const coinId = coin.id;
    dispatch({ type: 'GET_COIN_ID', coinId: coinId });
  },
  getFilteredCoins: () => {
    dispatch({ type: 'ON_SEARCH_SUBMIT' })
  },
  resetFilteredCoins: () => {
    dispatch({ type: 'RESET_FILTERED_COINS' });
  },
  onLoadMore: () => {
    dispatch({ type: 'GET_MORE_COINS' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

