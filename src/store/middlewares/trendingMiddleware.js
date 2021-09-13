const trendingMiddleware = (store) => (next) => async (action) => {

  if (action.type === 'GET_TRENDING_COINS') {
    const state = store.getState();
    state.isLoading = true;

    try {
      const url = 'https://api.coingecko.com/api/v3/search/trending';
      const res = await fetch(url);
      if (!res.ok) {
          throw new Error('Error, request failed');
      };

      const coinsData = await res.json();
      // get an array with only items (obj)
      // we just need trending coins that are already presents in state
      const trendsData = coinsData.coins.map((trend) => trend.item);
      console.log(trendsData);
      // // get an array that remove trends that are not in state's coins array
      // const trendsPresentInCoinsState = trendsData.map((t) => state.coins.filter((coin) => coin.id === t.id));
      // // remove empty arrays
      // const trends = trendsPresentInCoinsState.filter((t) => t.length !== 0);
      // // destructuring the array of arrays into array of obj, thx to flat()
      // const trendingCoins = trends.flat();

      store.dispatch({ type: 'GET_TRENDING_COINS_SUCCESS', trendingCoins: trendsData });
    } catch (err) {
        console.error(err)
    }
  }

  next(action);
};

export default trendingMiddleware;