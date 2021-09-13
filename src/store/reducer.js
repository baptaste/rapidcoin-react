const initialState = {
  allCoins: [],
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
  successMsg: '',
  errorMsg: '',
  filteredCoins: [],
  isLoading: false,
  isMenuOpen: false,
  trendingCoins: [],
  platforms: [],
  currentPage: 1,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_COINS_SUCCESS':
      return {
        ...state,
        coins: action.coins,
        currentPage: 1,
        isLoading: false,
      };
    case 'GET_MORE_COINS_SUCCESS': {
      const newCoins = [
        ...state.coins,
        ...action.coins,
      ];
      return {
        ...state,
        coins: newCoins,
        currentPage: action.currentPage,
        isLoading: false,
      }
    }
    // case 'GET_ALL_COINS_SUCCESS':
    // return {
    //   ...state,
    //   allCoins: action.allCoins,
    // }
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
      }
    case 'GET_COIN_ID':
      return {
        ...state,
        coinId: action.coinId,
      }
    case 'GET_TRENDING_COIN_ID':
      return {
        ...state,
        coinId: action.coinId,
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
        successMsg: action.successMsg,
        searchValue: '',
        isLoading: false,
      }
    case 'GET_FILTERED_COINS_ERROR':
    return {
      ...state,
      errorMsg: action.errorMsg,
    }
    case 'RESET_FILTERED_COINS':
      return {
        ...state,
        filteredCoins: [],
        successMsg: '',
        errorMsg: '',
        isMenuOpen: false,
      }
    case 'SET_IS_OPEN_MENU':
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      }
    case 'GET_TRENDING_COINS_SUCCESS':
      return {
        ...state,
        trendingCoins: action.trendingCoins,
        isLoading: false,
      }
    case 'GET_PLATFORMS_SUCCESS':
      return {
        ...state,
        platforms: action.platforms,
        isLoading: false,
      }
    default:
      return state;
  }
};

export default reducer;