import { configureStore } from '@reduxjs/toolkit'
import couterSlice from './feature/counter/couterSlice'
// create store
export const makeStore = () => {
  return configureStore({
    reducer: {
      // Add reducers 
      counter: couterSlice,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']