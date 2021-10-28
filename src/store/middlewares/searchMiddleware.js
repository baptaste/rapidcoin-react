const searchMiddleware = (store) => (next) => async (action) => {

  if (action.type === 'ON_SEARCH_SUBMIT') {
    const state = store.getState();
    const searchQuery = state.searchValue;
    const eur = state.currency;
    const usd = state.targetCurrency;
    const isEUR = state.isEUR;
    const isUSD = state.isUSD;
    let url;
    state.isLoading = true;

    try {
      if (isEUR && !isUSD) {
        url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${eur}&order=market_cap_desc&per_page=250&page=1&sparkline=false`;
      }
      if (isUSD && !isEUR) {
        url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${usd}&order=market_cap_desc&per_page=250&page=1&sparkline=false`;
      }
      const res = await fetch(url);
      if (!res.ok) {
          throw new Error('Error, request failed');
      };
      const coins = await res.json();

      const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(searchQuery.toLowerCase()));

      const successMsg = `Results for "${searchQuery}" :`;
      const errorMsg = `No results for "${searchQuery}"`;

      // no results, lets try on page 2
      if (filteredCoins.length === 0) {
        try {
          if (isEUR && !isUSD) {
            url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${eur}&order=market_cap_desc&per_page=250&page=2&sparkline=false`;
          }
          if (isUSD && !isEUR) {
            url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${usd}&order=market_cap_desc&per_page=250&page=2&sparkline=false`;
          }
          const res = await fetch(url);
          if (!res.ok) {
              throw new Error('Error, request failed');
          };
          const secondTryCoins = await res.json();

          const newFilteredCoins = secondTryCoins.filter((coin) => coin.name.toLowerCase().includes(searchQuery.toLowerCase()));

          if (newFilteredCoins.length === 0) {
            store.dispatch({ type: 'GET_FILTERED_COINS_ERROR', errorMsg: errorMsg });
          } else {
            store.dispatch({ type: 'GET_FILTERED_COINS_SUCCESS', filteredCoins: newFilteredCoins, successMsg });
          }
        } catch (err) {
          console.error(err)
        }

      } else {
        store.dispatch({ type: 'GET_FILTERED_COINS_SUCCESS', filteredCoins: filteredCoins, successMsg });
      }

    } catch (err) {
      console.error(err)
    }
  }

  next(action);
};

export default searchMiddleware;