const coinsMiddleware = (store) => (next) => async (action) => {
  if (action.type === 'GET_COINS') {
    const state = store.getState();
    state.isLoading = true;

    try {
      const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      const res = await fetch(url);
      if (!res.ok) {
          throw new Error('Error, request failed');
      };
      const coinsData = await res.json();
      store.dispatch({ type: 'GET_COINS_SUCCESS', coins: coinsData });
    } catch (err) {
        console.error(err)
    }
  } else {
    next(action);
  }
};

export default coinsMiddleware;
