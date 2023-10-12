import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productSlice from "./features/Product/productSlice";
import favoriteSlice from './features/Favorites/favoriteSlice';
import cartSlice from './features/Cart/cartSlice';
import storage from 'redux-persist/lib/storage';
import searchSlice from './features/Search/searchSlice';
import detailSlice from './features/Details/detailSlice';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    product: productSlice,
    favorite: favoriteSlice,
    cart: cartSlice,
    search: searchSlice,
    details: detailSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer, 
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

});
  

export const persistor = persistStore(store)