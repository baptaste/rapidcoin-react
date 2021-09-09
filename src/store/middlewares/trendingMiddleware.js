const trendingMiddleware = (store) => (next) => async (action) => {
  if (action.type === 'GET_TRENDING_COINS') {
    // const state = store.getState();
    // state.isLoading = true;
    console.log('GET_TRENDING_COINS je passe dans le midlleware Trending');

    try {
      const url = 'https://api.coingecko.com/api/v3/search/trending';
      const res = await fetch(url);
      if (!res.ok) {
          throw new Error('Error, request failed');
      };
      const coinsData = await res.json();
      console.log('je passe dans le SUCCESS du midlleware Trending');
      store.dispatch({ type: 'GET_TRENDING_COINS_SUCCESS', trendingCoins: coinsData.coins });
    } catch (err) {
        console.error(err)
    }
  } else {
    next(action);
  }
};

export default trendingMiddleware;