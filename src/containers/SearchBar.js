import { connect } from 'react-redux';

import SearchBar from 'src/components/SearchBar';

const mapStateToProps = (state) => ({
  searchValue: state.searchValue,
  filteredCoins: state.filteredCoins,
  coin: state.coin,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (value) => {
    dispatch({ type: 'SET_INPUT_VALUE', searchValue: value });
  },
  onSearchSubmit: (evt) => {
    evt.preventDefault();
    dispatch({ type: 'ON_SEARCH_SUBMIT' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);