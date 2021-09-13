import { connect } from 'react-redux';

import Coins from 'src/components/Coins';

const mapStateToProps = (state) => ({
  coins: state.coins,
  filteredCoins: state.filteredCoins,
  successMsg: state.successMsg,
  errorMsg: state.errorMsg,
});

const mapDispatchToProps = (dispatch) => ({
  getCoinId: (coin) => {
    const coinId = coin.id;
    dispatch({ type: 'GET_COIN_ID', coinId: coinId });
  },
  resetFilteredCoins: () => {
    dispatch({ type: 'RESET_FILTERED_COINS' });
  },
  onLoadMore: () => {
    dispatch({ type: 'GET_MORE_COINS' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Coins);

