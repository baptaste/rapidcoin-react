import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CoinPage from 'src/components/CoinPage';

const mapStateToProps = (state) => ({
    coin: state.coin,
    isLoading: state.isLoading,
    isEUR: state.isEUR,
    coinId: state.coinId,
});

const mapDispatchToProps = (dispatch) => ({
  getOneCoin: () => {
    dispatch({ type: 'GET_ONECOIN' });
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(CoinPage);

const containerWithRouter = withRouter(container);

export default containerWithRouter;