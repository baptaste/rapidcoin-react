const trendingMiddleware = (store) => (next) => async (action) => {
  if (action.type === 'GET_TENDING_COINS') {
    const state = store.getState();
    // state.isLoading = true;

    try {
      const url = 'https://api.coingecko.com/api/v3/search/trending'
      const res = await fetch(url);
      if (!res.ok) {
          throw new Error('Error, request failed');
      };
      const coinsData = await res.json();
      store.dispatch({ type: 'GET_TRENDING_COINS_SUCCESS', trendingCoins: coinsData.coins });
    } catch (err) {
        console.error(err)
    }
  } else {
    next(action);
  }
};

export default trendingMiddleware;