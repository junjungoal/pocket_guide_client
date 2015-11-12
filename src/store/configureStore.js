import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-logger';
import createLogger from 'redux-logger';
import rootReducer from '../reducers'

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunk, logger
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}