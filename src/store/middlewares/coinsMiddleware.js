const coinsMiddleware = (store) => (next) => async (action) => {
  // if (action.type === 'GET_ALL_COINS') {
  //   const state = store.getState();
  //   state.isLoading = true;

  //   try {
  //     // default: 100 per page
  //     const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  //     const res = await fetch(url);
  //     if (!res.ok) {
  //         throw new Error('Error, request failed');
  //     };
  //     const coinsData = await res.json();
  //     store.dispatch({ type: 'GET_ALL_COINS_SUCCESS', allCoins: coinsData });
  //   } catch (err) {
  //       console.error(err)
  //   }
  // } else {
  //   next(action);
  // }

  if (action.type === 'GET_COINS') {
    const state = store.getState();
    state.isLoading = true;

    try {
      // default: 100 per page
      const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=12&page=1&sparkline=false'
      const res = await fetch(url);
      if (!res.ok) {
          throw new Error('Error, request failed');
      };
      const coinsData = await res.json();
      store.dispatch({ type: 'GET_COINS_SUCCESS', coins: coinsData });
    } catch (err) {
        console.error(err)
    }
  }

  if (action.type === 'GET_MORE_COINS') {
    const state = store.getState();
    const newCurrentPage = state.currentPage + 1;
    state.isLoading = true;

    try {
      // default: 100 per page
      const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=12&page=${newCurrentPage}&sparkline=false`
      const res = await fetch(url);
      if (!res.ok) {
          throw new Error('Error, request failed');
      };
      const coinsData = await res.json();
      store.dispatch({ type: 'GET_MORE_COINS_SUCCESS', coins: coinsData, currentPage: newCurrentPage });
    } catch (err) {
        console.error(err)
    }
  }

  next(action);
};

export default coinsMiddleware;
