const coinPageMiddleware = (store) => (next) => async (action) => {
    if (action.type === 'GET_ONECOIN') {
        const state = store.getState();
        state.isLoading = true;

        try {
            const url = `https://api.coingecko.com/api/v3/coins/${state.coinId}`
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Error, request failed');
            };
            const coinData = await res.json();

            store.dispatch({ type: 'GET_ONECOIN_SUCCESS', coin: coinData });

        } catch (err) {
            console.error(err)
        }
    }

    if (action.type === 'GET_DEFAULT_COIN') {
        const state = store.getState();
        state.isLoading = true;

        try {
            const url = 'https://api.coingecko.com/api/v3/coins/bitcoin'
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Error, request failed');
            };
            const coinData = await res.json();

            store.dispatch({ type: 'GET_ONECOIN_SUCCESS', coin: coinData });

        } catch (err) {
            console.error(err)
        }
    }

    next(action);
};


export default coinPageMiddleware;
