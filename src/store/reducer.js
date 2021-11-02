const initialState = {
  coins: [],
  coin: {},
  coinId: null,
  // searchbar
  searchValue: '',
  successMsg: '',
  errorMsg: '',
  filteredCoins: [],
  suggestedCoins: [],
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
  currency: 'eur',
  targetCurrency: 'usd',
  isCurrencyTogglerClicked: false,
  isEUR: true,
  isUSD: false,
  isFilterByMarketCapClicked: false,
  isMarketCapFilteredDESC: false,
  isMarketCapFilteredASC: false,
  // Table
  isSwitchDashboardClicked: false,
  isBlockDashboard: true,
  isTableDashboard: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_COINS_SUCCESS': {
      if (!state.isSwitchDashboardClicked) {
        return {
          ...state,
          coins: action.coins,
          currentPage: 1,
          isLoading: false,
          isFilterByPriceClicked: false,
          isCoinsFilteredDESC: false,
          isCoinsFilteredASC: false,
          isCurrencyTogglerClicked: false,
          isMarketCapFilteredDESC: false,
          isMarketCapFilteredASC: false,
          isFilterByMarketCapClicked: false,
          isSwitchDashboardClicked: false,
          isBlockDashboard: true,
          isTableDashboard: false,
          suggestedCoins: [],
        }
      }
      if (state.isSwitchDashboardClicked) {
        return {
          ...state,
          coins: action.coins,
          currentPage: 1,
          isLoading: false,
          isFilterByPriceClicked: false,
          isCoinsFilteredDESC: false,
          isCoinsFilteredASC: false,
          isCurrencyTogglerClicked: false,
          isMarketCapFilteredDESC: false,
          isMarketCapFilteredASC: false,
          isFilterByMarketCapClicked: false,
          isSwitchDashboardClicked: true,
          isBlockDashboard: false,
          isTableDashboard: true,
          suggestedCoins: [],
        }
      }
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
        isFilterByMarketCapClicked: false,
        isMarketCapFilteredDESC: false,
        isMarketCapFilteredASC: false,
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
        isFilterByMarketCapClicked: false,
        isMarketCapFilteredDESC: false,
        isMarketCapFilteredASC: false,
      }
    }
    case 'GET_COINS_BY_MARKETCAP_DESC': {
      const coinsCopy = state.coins.map((coin) => coin);
      const coinsByMarketCapDESC = coinsCopy.sort(function(a, b) {
        return b.market_cap - a.market_cap;
      });
      return {
        ...state,
        coins: coinsByMarketCapDESC,
        isFilterByMarketCapClicked: !state.isFilterByMarketCapClicked,
        isMarketCapFilteredDESC: true,
        isMarketCapFilteredASC: false,
        isFilterByPriceClicked: false,
        isCoinsFilteredASC: false,
        isCoinsFilteredDESC: false,
      }
    }
    case 'GET_COINS_BY_MARKETCAP_ASC': {
      const coinsCopy = state.coins.map((coin) => coin);
      const coinsByMarketCapASC = coinsCopy.sort(function(a, b) {
        return a.market_cap - b.market_cap;
      });
      return {
        ...state,
        coins: coinsByMarketCapASC,
        isFilterByMarketCapClicked: !state.isFilterByMarketCapClicked,
        isMarketCapFilteredDESC: false,
        isMarketCapFilteredASC: true,
        isFilterByPriceClicked: false,
        isCoinsFilteredASC: false,
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
    case 'GET_MORE_COINS_DESC_PRICE_SUCCESS' : {
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
    case 'GET_MORE_COINS_ASC_PRICE_SUCCESS' : {
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
    case 'GET_MORE_COINS_DESC_MARKET_SUCCESS': {
      const newCoins = [
        ...state.coins,
        ...action.coinsDESC,
      ];
      newCoins.sort(function(a, b) {
        return b.market_cap - a.market_cap;
      });
      return {
        ...state,
        coins: newCoins,
        currentPage: action.currentPage,
        isLoading: false,
      }
    }
    case 'GET_MORE_COINS_ASC_MARKET_SUCCESS': {
      const newCoins = [
        ...state.coins,
        ...action.coinsASC,
      ];
      newCoins.sort(function(a, b) {
        return a.market_cap - b.market_cap;
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
    case 'EMPTY_INPUT_VALUE':
    return {
      ...state,
      searchValue: '',
    }
    case 'GET_SUGGESTED_COINS_SUCCESS':
    return {
      ...state,
      suggestedCoins: action.suggestedCoins,
    }
    case 'GET_FILTERED_COINS_SUCCESS':
      return {
        ...state,
        filteredCoins: action.filteredCoins,
        successMsg: action.successMsg,
        searchValue: '',
        suggestedCoins: [],
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
    case 'SET_CURRENCY_VALUE': {
      if (action.value === 'EUR') {
        return {
          ...state,
          isCurrencyTogglerClicked: false,
          isEUR: true,
          isUSD: false,
        }
      }
      if (action.value === 'USD') {
        return {
          ...state,
          isCurrencyTogglerClicked: false,
          isUSD: true,
          isEUR: false,
        }
      }
    }
    case 'SET_IS_CURRENCIES_WRAPPER_OPEN':
    return {
      ...state,
      isCurrencyTogglerClicked: !state.isCurrencyTogglerClicked,
    }
    case 'SET_DASHBOARD':
    return {
      ...state,
      isSwitchDashboardClicked: !state.isSwitchDashboardClicked,
      isBlockDashboard: !state.isBlockDashboard,
      isTableDashboard: !state.isTableDashboard,
    }
    default:
      return state;
  }
};

export default reducer;