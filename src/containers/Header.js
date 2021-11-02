import { connect } from 'react-redux';

import Header from 'src/components/Header';

const mapStateToProps = (state) => ({
  isEUR: state.isEUR,
  isCurrencyTogglerClicked: state.isCurrencyTogglerClicked,
});

const mapDispatchToProps = (dispatch) => ({
  resetFilter: () => {
    dispatch({ type: 'RESET_FILTERED_COINS' });
  },
  toggleIsMenuOpen: () => {
    dispatch({ type: 'SET_IS_OPEN_MENU' });
  },
  toggleCurrency: (value) => {
    dispatch({ type: 'SET_CURRENCY_VALUE', value });
  },
  toggleCurrenciesButton: () => {
    dispatch({ type: 'SET_IS_CURRENCIES_WRAPPER_OPEN' })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);