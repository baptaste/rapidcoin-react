import { connect } from 'react-redux';

import Coins from 'src/components/Coins';

const mapStateToProps = (state) => ({
  coins: state.coins,
  filteredCoins: state.filteredCoins,
});

const mapDispatchToProps = (dispatch) => ({
  getCoinId: (coin) => {
    const coinId = coin.id;
    dispatch({ type: 'GET_COIN_ID', coinId: coinId });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Coins);

