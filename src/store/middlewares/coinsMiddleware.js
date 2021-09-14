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
      const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=12&page=${newCurrentPage}&sparkline=false`
      const res = await fetch(url);
      if (!res.ok) {
          throw new Error('Error, request failed');
      };
      const coinsData = await res.json();

      if (state.isCoinsFilteredDESC === true) {
        const coinsDataCopyDESC = coinsData.map((coin) => coin);
        coinsDataCopyDESC.sort(function(a, b) {
          return b.current_price - a.current_price;
        });
        store.dispatch({ type: 'GET_MORE_COINS_DESC_SUCCESS', coinsDESC: coinsDataCopyDESC, currentPage: newCurrentPage });
      }

      if (state.isCoinsFilteredASC === true) {
        const coinsDataCopyASC = coinsData.map((coin) => coin);
        coinsDataCopyASC.sort(function(a, b) {
          return a.current_price - b.current_price;
        });
        store.dispatch({ type: 'GET_MORE_COINS_ASC_SUCCESS', coinsASC: coinsDataCopyASC, currentPage: newCurrentPage });
      }

      if (!state.isFilterByPriceClicked && !state.isCoinsFilteredDESC && !state.isCoinsFilteredASC) {
        store.dispatch({ type: 'GET_MORE_COINS_SUCCESS', coins: coinsData, currentPage: newCurrentPage });
      }

    } catch (err) {
        console.error(err)
    }
  }

  next(action);
};

export default coinsMiddleware;
