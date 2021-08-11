import { connect } from 'react-redux';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  filteredCoins: state.filteredCoins,
});

const mapDispatchToProps = (dispatch) => ({
  getAllCoins: () => {
    dispatch({ type: 'GET_COINS' });
  },
  resetFilteredCoins: () => {
    dispatch({ type: 'RESET_FILTERED_COINS' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);