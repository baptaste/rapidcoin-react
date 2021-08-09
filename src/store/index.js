/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware , compose} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import reducer from './reducer';
import coinsMiddleware from './middlewares/coinsMiddleware';
import coinPageMiddleware from './middlewares/coinPageMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'rapidcoin',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer);

const enhancers = composeEnhancers(
  applyMiddleware(coinsMiddleware, coinPageMiddleware),
);

export const store = createStore(persistedReducer, enhancers);
export const persistor = persistStore(store);
