import { connect } from 'react-redux';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  // getCoins: () => {
  //   dispatch({ type: 'GET_COINS' });
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);