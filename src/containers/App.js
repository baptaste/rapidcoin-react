import { connect } from 'react-redux';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  isMenuOpen: state.isMenuOpen,
  documentTitle: state.documentTitle,
});

const mapDispatchToProps = (dispatch) => ({
  // init: () => {
  //   dispatch({ type: 'INIT' })
  // },
  getDefaultCoin: () => {
    dispatch({ type: 'GET_DEFAULT_COIN' })
  },
  hideMenu: () => {
    dispatch({ type: 'SET_IS_OPEN_MENU' })
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);