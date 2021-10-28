import { connect } from 'react-redux';

import Table from 'src/components/Table';

const mapStateToProps = (state) => ({
  coins: state.coins,
  filteredCoins: state.filteredCoins,
  isEUR: state.isEUR,
  trendingCoins: state.trendingCoins,
});

const mapDispatchToProps = (dispatch) => ({
  getCoinId: (coin) => {
    const coinId = coin.id;
    dispatch({ type: 'GET_COIN_ID', coinId: coinId });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);