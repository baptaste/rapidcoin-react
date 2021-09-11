import { connect } from 'react-redux';

import MobileMenu from 'src/components/MobileMenu';

const mapStateToProps = (state) => ({
  isMenuOpen: state.isMenuOpen,
});

const mapDispatchToProps = (dispatch) => ({
  hideMenu: () => {
    dispatch({ type: 'SET_IS_OPEN_MENU' });
  },
  resetFilter: () => {
    dispatch({ type: 'RESET_FILTERED_COINS' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu);