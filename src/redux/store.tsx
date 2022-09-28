
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productSlice from './slices/productsSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    productSlice,
  },
})

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch 

export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
