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
  successMsg: '',
  errorMsg: '',
  filteredCoins: [],
  isLoading: false,
  isMenuOpen: false,
  trendingCoins: [],
  platforms: [],
  // home pagination
  currentPage: 1,
  // filtersBar
  isFilterByPriceClicked: false,
  isCoinsFilteredDESC: false,
  isCoinsFilteredASC: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_COINS_SUCCESS':
      return {
        ...state,
        coins: action.coins,
        currentPage: 1,
        isLoading: false,
        isFilterByPriceClicked: false,
        isCoinsFilteredDESC: false,
        isCoinsFilteredASC: false,
      }
    case 'GET_COINS_BY_PRICE_DESC': {
      const coinsCopy = state.coins.map((coin) => coin);
      // first time clicked => default price DESC
      const coinsByPriceDesc = coinsCopy.sort(function(a, b) {
        return b.current_price - a.current_price;
      });
      return {
        ...state,
        coins: coinsByPriceDesc,
        isFilterByPriceClicked: !state.isFilterByPriceClicked,
        isCoinsFilteredDESC: true,
        isCoinsFilteredASC: false,
      }
    }
    case 'GET_COINS_BY_PRICE_ASC': {
      const coinsCopy = state.coins.map((coin) => coin);
      // second/x time clicked => ASC price
      const coinsByPriceAsc = coinsCopy.sort(function(a, b) {
        return a.current_price - b.current_price;
      });
      return {
        ...state,
        coins: coinsByPriceAsc,
        isFilterByPriceClicked: !state.isFilterByPriceClicked,
        isCoinsFilteredASC: true,
        isCoinsFilteredDESC: false,
      }
    }
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
    case 'GET_MORE_COINS_DESC_SUCCESS' : {
      const newCoins = [
        ...state.coins,
        ...action.coinsDESC,
      ];
      newCoins.sort(function(a, b) {
        return b.current_price - a.current_price;
      });
      return {
        ...state,
        coins: newCoins,
        currentPage: action.currentPage,
        isLoading: false,
      }
    }
    case 'GET_MORE_COINS_ASC_SUCCESS' : {
      const newCoins = [
        ...state.coins,
        ...action.coinsASC,
      ];
      newCoins.sort(function(a, b) {
        return a.current_price - b.current_price;
      });
      return {
        ...state,
        coins: newCoins,
        currentPage: action.currentPage,
        isLoading: false,
      }
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
      searchValue: '',
      isLoading: false,
    }
    case 'RESET_FILTERED_COINS':
      return {
        ...state,
        filteredCoins: [],
        searchValue: '',
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