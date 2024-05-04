import { configureStore } from '@reduxjs/toolkit'
import couterSlice from './feature/counter/couterSlice'
import tokenSlice from './feature/auth/authSlice'
import { productApi } from './service/product'


// create store
export const makeStore = () => {
  return configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        counter: couterSlice,
        auth:tokenSlice,
       
        
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(productApi.middleware)
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']