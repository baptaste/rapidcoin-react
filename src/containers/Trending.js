import { connect } from 'react-redux';

import Trending from 'src/components/Trending';

const mapStateToProps = (state) => ({
  trendingCoins: state.trendingCoins,
});

const mapDispatchToProps = (dispatch) => ({
  getTrendingCoins: () => {
    dispatch({ type: 'GET_TRENDING_COINS' });
  },
  getCoinId: (coin) => {
    const coinId = coin.id;
    dispatch({ type: 'GET_COIN_ID', coinId: coinId });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Trending);