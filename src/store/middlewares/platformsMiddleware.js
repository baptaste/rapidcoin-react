const platformsMiddleware = (store) => (next) => async (action) => {
  if (action.type === 'GET_PLATFORMS') {
    const state = store.getState();
    state.isLoading = true;

    try {
      const url = 'https://api.coingecko.com/api/v3/finance_platforms'
      const res = await fetch(url);
      if (!res.ok) {
          throw new Error('Error, request failed');
      };
      const platformsData = await res.json();
      console.log(platformsData);
      store.dispatch({ type: 'GET_PLATFORMS_SUCCESS', platforms: platformsData });
    } catch (err) {
        console.error(err)
    }
  } else {
    next(action);
  }
};

export default platformsMiddleware;