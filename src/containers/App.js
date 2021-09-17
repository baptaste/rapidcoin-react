import { connect } from 'react-redux';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getDefaultCoin: () => {
    dispatch({ type: 'GET_DEFAULT_COIN' })
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);