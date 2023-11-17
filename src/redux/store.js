import thunk from 'redux-thunk';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

export { store };
