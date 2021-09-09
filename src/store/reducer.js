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
  // searchbar
  searchValue: '',
  filteredCoins: [],
  isLoading: false,
  isMenuOpen: false,
  trendingCoins: [],
  platforms: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_COINS_SUCCESS': {
      console.log('ETRANGE : je passe dans GET_COINS_SUCCESS dans le REDUCER');
      return {
        ...state,
        coins: action.coins,
        isLoading: false,
      };
    }

    case 'GET_ONECOIN_SUCCESS':
      return {
        ...state,
        coin: action.coin,
        marketData: action.marketData,
        image: action.image,
        description: action.description,
        website: action.website,
        volumeInADay: action.volumeInADay,
        marketCap: action.marketCap,
        currentPrice: action.currentPrice,
        isLoading: false,
      };
    case 'GET_COIN_ID':
      return {
        ...state,
        coinId: action.coinId,
      };
    case 'GET_TRENDING_COIN_ID':
      return {
        ...state,
        cointId: action.coinId,
      }
    case 'SET_INPUT_VALUE':
      return {
        ...state,
        searchValue: action.searchValue,
      }
    case 'GET_FILTERED_COINS_SUCCESS':
      return {
        ...state,
        filteredCoins: action.filteredCoins,
        searchValue: '',
        isLoading: false,
      }
    case 'RESET_FILTERED_COINS':
      return {
        ...state,
        filteredCoins: [],
      }
    case 'SET_IS_OPEN_MENU':
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      }
    case 'GET_TRENDING_COINS_SUCCESS': {
      console.log('je passe dans GET_TRENDING_COINS_SUCCESS dans le REDUCER');
      return {
        ...state,
        trendingCoins: action.trendingCoins,
        // isLoading: false,
      }
    }

    case 'GET_PLATFORMS_SUCCESS':
    return {
      ...state,
      platforms: action.platforms,
    }
    default:
      return state;
  }
};

export default reducer;