import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import checkedOptionsReducer from '../reducers/checkedOptionsSlice';
import { recipesApi } from '../../services/recipesApi';

export const store = configureStore({
  reducer: {
    checkedReducer: checkedOptionsReducer,
    [recipesApi.reducerPath]: recipesApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipesApi.middleware),
})

setupListeners(store.dispatch);