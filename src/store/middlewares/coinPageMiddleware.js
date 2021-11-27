import { getLastYearInSeconds, getUnixTimestamp } from 'src/utils';

const coinPageMiddleware = (store) => (next) => async (action) => {
    const state = store.getState();
    const { isEUR, isUSD } = state;

    if (action.type === 'GET_ONECOIN') {
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
        state.isLoading = true;
        let url;
        try {
            if (state.coinId === null) {
                url = 'https://api.coingecko.com/api/v3/coins/bitcoin'
            } else {
                url = `https://api.coingecko.com/api/v3/coins/${state.coinId}`
            }
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Error, request failed');
            };
            const coinData = await res.json();

            store.dispatch({ type: 'GET_DEFAULT_COIN_SUCCESS', coin: coinData });
        } catch (err) {
            console.error(err)
        }
    }

    if (action.type === 'GET_MARKET_CHART') {
        state.isLoading = true;
        let url;

        try {
            if (isEUR && !isUSD) {
                url = `https://api.coingecko.com/api/v3/coins/${state.coinId}/market_chart?vs_currency=eur&days=${state.chartValue}`
            }
            if (isUSD && !isEUR) {
                url = `https://api.coingecko.com/api/v3/coins/${state.coinId}/market_chart?vs_currency=usd&days=${state.chartValue}`
            }
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Error, request failed');
            };
            const data = await res.json();
            const dataPrices = data.prices;
            store.dispatch({ type: 'GET_MARKET_CHART_SUCCESS', chartData: dataPrices });
        } catch (err) {
            console.error(err)
        }
    }

    next(action);
};


export default coinPageMiddleware;
