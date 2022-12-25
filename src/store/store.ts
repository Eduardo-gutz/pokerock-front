import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from './slices/auth/auth.slice'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage
}

const reducers = combineReducers({
  authStore: authReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch