import { connect } from 'react-redux';
import App from 'src/components/App';

const mapDispatchToProps = (dispatch) => ({
  getAllCoins: () => {
    dispatch({ type: 'GET_COINS' });
  },
  resetFilteredCoins: () => {
    dispatch({ type: 'RESET_FILTERED_COINS' });
  },
});

export default connect(null, mapDispatchToProps)(App);