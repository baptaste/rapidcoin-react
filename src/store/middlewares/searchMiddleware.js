const searchMiddleware = (store) => (next) => async (action) => {

  if (action.type === 'ON_SEARCH_SUBMIT') {
    const state = store.getState();
    const searchQuery = state.searchValue;
    state.isLoading = true;

    try {
      const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=250&page=1&sparkline=false';
      const res = await fetch(url);
      if (!res.ok) {
          throw new Error('Error, request failed');
      };
      const coins = await res.json();

      const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(searchQuery.toLowerCase()));

      const successMsg = `Results for "${searchQuery}" :`;
      const errorMsg = `Sorry, there are no results for "${searchQuery}".`;

      if (filteredCoins.length === 0) {
        console.log('on a rien trouvé, on passe dans le 1er if');
        try {
          console.log('2nde requete en page 2');
          const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=250&page=2&sparkline=false';
          const res = await fetch(url);
          if (!res.ok) {
              throw new Error('Error, request failed');
          };
          const secondTryCoins = await res.json();
          console.log('response = secondTryCoins :', secondTryCoins);

          const newFilteredCoins = secondTryCoins.filter((coin) => coin.name.toLowerCase().includes(searchQuery.toLowerCase()));
          console.log('newFilteredCoins :', newFilteredCoins);

          if (newFilteredCoins.length === 0) {
            console.log('on a toujours rien trouvé, on passe dans le 2nd if == ERROR');
            store.dispatch({ type: 'GET_FILTERED_COINS_ERROR', errorMsg: errorMsg });
          } else {
            console.log('on a trouvé en seconde requete !! on dispatch ');
            store.dispatch({ type: 'GET_FILTERED_COINS_SUCCESS', filteredCoins: newFilteredCoins, successMsg });
          }
        } catch (err) {
          console.error(err)
        }
        // store.dispatch({ type: 'GET_FILTERED_COINS_ERROR', errorMsg: errorMsg });
      } else {
        console.log('on a trouvé a la 1ère requete !! on dispatch ');
        store.dispatch({ type: 'GET_FILTERED_COINS_SUCCESS', filteredCoins: filteredCoins, successMsg });
      }

    } catch (err) {
      console.error(err)
    }
  }

  next(action);
};

export default searchMiddleware;