const coinsMiddleware = (store) => (next) => async (action) => {
  const state = store.getState()
  const eur = state.currency
  const usd = state.targetCurrency
  const isEUR = state.isEUR
  const isUSD = state.isUSD
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
    state.isLoading = true;
    try {
      let url;
      if (isEUR && !isUSD) {
        url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${eur}&order=market_cap_desc&per_page=12&page=1&sparkline=false`;
      }
      if (isUSD && !isEUR) {
        url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${usd}&order=market_cap_desc&per_page=12&page=1&sparkline=false`;
      }
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
    state.isLoading = true;
    const newCurrentPage = state.currentPage + 1; // increase current page value by 1 each time
    try {
      let url;
      if (isEUR && !isUSD) {
        url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${eur}&order=market_cap_desc&per_page=12&page=${newCurrentPage}&sparkline=false`;
      }
      if (isUSD && !isEUR) {
        url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${usd}&order=market_cap_desc&per_page=12&page=${newCurrentPage}&sparkline=false`;
      }
      const res = await fetch(url);
      if (!res.ok) {
          throw new Error('Error, request failed');
      };
      const coinsData = await res.json();

      // filtered by desc price
      if (state.isCoinsFilteredDESC) {
        const coinsDataCopyDESC = coinsData.map((coin) => coin);
        coinsDataCopyDESC.sort(function(a, b) {
          return b.current_price - a.current_price;
        });
        store.dispatch({ type: 'GET_MORE_COINS_DESC_PRICE_SUCCESS', coinsDESC: coinsDataCopyDESC, currentPage: newCurrentPage });
      }
      // filtered by asc price
      if (state.isCoinsFilteredASC) {
        const coinsDataCopyASC = coinsData.map((coin) => coin);
        coinsDataCopyASC.sort(function(a, b) {
          return a.current_price - b.current_price;
        });
        store.dispatch({ type: 'GET_MORE_COINS_ASC_PRICE_SUCCESS', coinsASC: coinsDataCopyASC, currentPage: newCurrentPage });
      }
      // filtered by desc market cap
      if (state.isMarketCapFilteredDESC) {
        const coinsDataCopyDESC = coinsData.map((coin) => coin);
        coinsDataCopyDESC.sort(function(a, b) {
          return b.market_cap - a.market_cap;
        });
        store.dispatch({ type: 'GET_MORE_COINS_DESC_MARKET_SUCCESS', coinsDESC: coinsDataCopyDESC, currentPage: newCurrentPage });
      }
      // filtered by asc market cap
      if (state.isMarketCapFilteredASC) {
        const coinsDataCopyASC = coinsData.map((coin) => coin);
        coinsDataCopyASC.sort(function(a, b) {
          return a.market_cap - b.market_cap;
        });
        store.dispatch({ type: 'GET_MORE_COINS_ASC_MARKET_SUCCESS', coinsASC: coinsDataCopyASC, currentPage: newCurrentPage });
      }

      if (
        !state.isFilterByPriceClicked &&
        !state.isCoinsFilteredDESC &&
        !state.isCoinsFilteredASC &&
        !state.isMarketCapFilteredDESC &&
        !state.isMarketCapFilteredASC) {
        store.dispatch({ type: 'GET_MORE_COINS_SUCCESS', coins: coinsData, currentPage: newCurrentPage });
      }

    } catch (err) {
        console.error(err)
    }
  }

  next(action);
};

export default coinsMiddleware;
