import { connect } from 'react-redux';

import Trending from 'src/components/Trending';

const mapStateToProps = (state) => ({
  trendingCoins: state.trendingCoins,
  coins: state.coins,
});

const mapDispatchToProps = (dispatch) => ({
  getTrendingCoins: () => {
    dispatch({ type: 'GET_TENDING_COINS' });
  },
  getCoinId: (coin) => {
    const coinId = coin.id;
    dispatch({ type: 'GET_COIN_ID', coinId: coinId });
  },
  getAllCoins: () => {
    dispatch({ type: 'GET_COINS' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Trending);