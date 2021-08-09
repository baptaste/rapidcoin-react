const initialState = {
  coins: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_COINS_SUCCESS': {
      return {
        ...state,
        coins: action.coins,
      };
    }
    default:
      return state;
  }
};

export default reducer;