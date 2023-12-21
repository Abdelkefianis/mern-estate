import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//redux persist to keep user info in the local storage 
//------------------------redux persist-------------------------start
const rootReducer = combineReducers({ user: userReducer });

const PersistConfig = {
    key: 'root',
    storage,
    version: 1,
}

const persistedReducer = persistReducer(PersistConfig, rootReducer)
//------------------------redux persist-------------------------end

export const store = configureStore({
    reducer: persistedReducer,//redux persist
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false, // Immutable.js isn't serializable
    }),
});

export const persistor = persistStore(store)

