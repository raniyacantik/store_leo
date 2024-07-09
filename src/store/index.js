import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import logger from './middleware/logger';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;