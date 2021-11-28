import { connect } from 'react-redux';

import SearchBar from 'src/components/SearchBar';

const mapStateToProps = (state) => ({
  searchValue: state.searchValue,
  suggestedCoins: state.suggestedCoins,
  isSearching: state.isSearching,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (value) => {
    dispatch({ type: 'SET_INPUT_VALUE', searchValue: value });
    dispatch({ type: 'GET_SEARCH_SUGGESTIONS' })
  },
  onSearchSubmit: (evt) => {
    evt.preventDefault();
    dispatch({ type: 'ON_SEARCH_SUBMIT' });
  },
  getCoinId: (coin) => {
    const coinId = coin.id;
    dispatch({ type: 'GET_COIN_ID', coinId: coinId });
  },
  handleIsSearching: () => {
    dispatch({ type: 'SET_IS_SEARCHING' })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);