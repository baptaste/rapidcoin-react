import { findCoin } from 'src/selectors/coins';

const coinPageMiddleware = (store) => (next) => async (action) => {
  if (action.type === 'GET_ONECOIN') {
        const state = store.getState();
        const foundCoin = findCoin(state.coins, state.coinId);
        // console.log('foundCoin in middleware: ', foundCoin);
        const coinId = foundCoin.id;

        try {
            const url = `https://api.coingecko.com/api/v3/coins/${coinId}`
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Error, request failed');
            };
            const coinData = await res.json();

            const market_data = coinData.market_data;
            const current_price = coinData.market_data.current_price.eur;
            const market_cap = coinData.market_data.market_cap.eur;
            const total_volume = coinData.market_data.total_volume.eur;
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

            next(action);
        } catch (err) {
            console.error(err)
        }
    } else {
    next(action);
  }
};

export default coinPageMiddleware;
