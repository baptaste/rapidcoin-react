/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware , compose} from 'redux';
import reducer from './reducer';
import coinsMiddleware from './middlewares/coinsMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(coinsMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;