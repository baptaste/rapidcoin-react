import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CoinPage from 'src/components/CoinPage';

const mapStateToProps = (state) => ({
    coin: state.coin,
    marketData: state.marketData,
    image: state.image,
    description: state.description,
    website: state.website,
    volumeInADay: state.volumeInADay,
    marketCap: state.marketCap,
    currentPrice: state.currentPrice,
    isLoading: state.isLoading,
    isEUR: state.isEUR,
});

const mapDispatchToProps = (dispatch) => ({
  getOneCoin: () => {
    console.log('je suis bien dans le mapDispatchToProps de CoinPage !!!');
    dispatch({ type: 'GET_ONECOIN' });
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(CoinPage);

const containerWithRouter = withRouter(container);

export default containerWithRouter;