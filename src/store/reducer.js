const initialState = {
  coins: [], // array
  coin: {}, // object
  marketData: {}, // object
  image: {}, // object
  description: '', // string
  website: '', // string
  volumeInADay: 1, // number
  marketCap: 1, // number
  currentPrice: 1, // number
  coinId: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_COINS_SUCCESS': {
      return {
        ...state,
        coins: action.coins,
      };
    }
    case 'GET_ONECOIN_SUCCESS': {
      return {
        ...state,
        // PBs de undefined, tous des objects
        coin: action.coin, // ici
        marketData: action.marketData, // ici
        image: action.image, // ici
        description: action.description,
        website: action.website,
        volumeInADay: action.volumeInADay,
        marketCap: action.marketCap,
        currentPrice: action.currentPrice,
      };
    }
    case 'GET_COIN_ID': {
      return {
        ...state,
        coinId: action.coinId,
      };
    }
    default:
      return state;
  }
};

export default reducer;