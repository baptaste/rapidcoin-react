import { connect } from 'react-redux';

import Header from 'src/components/Header';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  resetFilter: () => {
    dispatch({ type: 'RESET_FILTERED_COINS' });
  },
  toggleIsMenuOpen: () => {
    dispatch({ type: 'SET_IS_OPEN_MENU' });
  }
});

export default connect(null, mapDispatchToProps)(Header);