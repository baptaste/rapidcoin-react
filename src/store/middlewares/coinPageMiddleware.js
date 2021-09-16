const coinPageMiddleware = (store) => (next) => async (action) => {

    if (action.type === 'GET_ONECOIN') {

        const state = store.getState();
        const isEUR = state.isEUR;
        const isUSD = state.isUSD;
        state.isLoading = true;

        try {
            const url = `https://api.coingecko.com/api/v3/coins/${state.coinId}`
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Error, request failed');
            };
            const coinData = await res.json();

            let current_price;
            let market_cap;
            let total_volume;

            if (isEUR) current_price = coinData.market_data.current_price.eur;
            if (isUSD) current_price = coinData.market_data.current_price.usd;
            if (isEUR) market_cap = coinData.market_data.market_cap.eur;
            if (isUSD) market_cap = coinData.market_data.market_cap.usd;
            if (isEUR) total_volume = coinData.market_data.total_volume.eur;
            if (isUSD) total_volume = coinData.market_data.total_volume.usd;

            const market_data = coinData.market_data;
            const coin_desc = coinData.description.en;
            const coin_img = coinData.image;
            const coin_website = coinData.links.homepage[0];

            store.dispatch({ type: 'GET_ONECOIN_SUCCESS',
                coin: coinData,
                marketData: market_data,
                currentPrice: current_price,
                marketCap: market_cap,
                volumeInADay: total_volume,
                description: coin_desc,
                image: coin_img,
                website: coin_website,
            });

        } catch (err) {
            console.error(err)
        }
    }

    next(action);
};


export default coinPageMiddleware;
