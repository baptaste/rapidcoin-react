import { connect } from 'react-redux';

import Suggestions from 'src/components/Suggestions';

const mapStateToProps = (state) => ({
  isSearchBarOpen: state.isSearchBarOpen,
  searchValue: state.searchValue,
  suggestedCoins: state.suggestedCoins,
  trendingCoins: state.trendingCoins
});

const mapDispatchToProps = (dispatch) => ({
  getCoinId: (coin) => {
    const coinId = coin.id;
    dispatch({ type: 'GET_COIN_ID', coinId: coinId });
  },
  hideSuggestions: () => {
    dispatch({ type: 'EMPTY_INPUT_VALUE' })
  },
  getTrendingCoins: () => {
    dispatch({ type: 'GET_TRENDING_COINS' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Suggestions);
