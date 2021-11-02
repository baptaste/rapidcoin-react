import { connect } from 'react-redux';

import MobileMenu from 'src/components/MobileMenu';

const mapStateToProps = (state) => ({
  isMenuOpen: state.isMenuOpen,
  isCurrencyTogglerClicked: state.isCurrencyTogglerClicked,
  isEUR: state.isEUR,
  isUSD: state.isUSD,
});

const mapDispatchToProps = (dispatch) => ({
  hideMenu: () => {
    dispatch({ type: 'SET_IS_OPEN_MENU' });
  },
  resetFilter: () => {
    dispatch({ type: 'RESET_FILTERED_COINS' });
  },
  toggleCurrency: (value) => {
    dispatch({ type: 'SET_CURRENCY_VALUE', value });
  },
  toggleCurrenciesButton: () => {
    dispatch({ type: 'SET_IS_CURRENCIES_WRAPPER_OPEN' })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu);