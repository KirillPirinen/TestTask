import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit'
import { network } from '../network'
import type { Product, SliceResponce } from '../types'
import { RootState } from '../store'
import { getParsedProduct } from '../../utils/getParsedProduct'

const initialState: SliceResponce<Array<Product>> = {
  error: null,
  data: [],
  loading: false
}

export const fetchData = createAsyncThunk('products/fetchData',
  async (): Promise<Record<string, any>> => {
    const { status, data } = await network.get('products')
    return { status, data }
  }
)

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchData.rejected, (state) => {
      state.loading = false
      state.error = {
        code: 500,
        message: 'Что-то пошло ну совсем уж не так'
      }
    })
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false
      const { status, data } = action.payload
      
      if(status === 200 && Array.isArray(data.products)) {
        state.data = data.products
      } else {
        state.error = {
          code: 404,
          message: 'Нет данных'
        }
      }
    })
  },
})

export const getProductRawData = (state: RootState) => state.productSlice.data

export const isLoading = (state: RootState) => state.productSlice.loading

export const getError = (state: RootState) => state.productSlice.error

export const getParsedData = createSelector(getProductRawData, (data) => {
  const categories = new Set<string>()
  const parsedProducts = data.map(el => {
    categories.add(el.category)
    return getParsedProduct(el)
  })

  return {
    categories: [...categories],
    parsedProducts
  }
})

export default productSlice.reducer
