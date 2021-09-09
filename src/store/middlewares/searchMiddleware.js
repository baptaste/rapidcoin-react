const searchMiddleware = (store) => (next) => async (action) => {
  if (action.type === 'ON_SEARCH_SUBMIT') {
    const state = store.getState();
    const searchQuery = state.searchValue;
    state.isLoading = true;

    try {
      const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false';
      const res = await fetch(url);
      if (!res.ok) {
          throw new Error('Error, request failed');
      };
      const coins = await res.json();

      const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(searchQuery.toLowerCase()));

      const successMsg = `Results for ${searchQuery} :`;
      const errorMsg = `Sorry, there are no results for ${searchQuery}.`;

      if (filteredCoins.length === 0) {
        store.dispatch({ type: 'GET_FILTERED_COINS_ERROR', errorMsg: errorMsg });
      }

      store.dispatch({ type: 'GET_FILTERED_COINS_SUCCESS', filteredCoins: filteredCoins, successMsg });

    } catch (err) {
      console.error(err)
    }
  } else {
    next(action);
  }
};

export default searchMiddleware;