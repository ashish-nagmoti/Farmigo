// Placeholder slices for other features
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  product: null,
  loading: false,
  error: null,
  success: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productListRequest: (state) => {
      state.loading = true;
    },
    productListSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    productListFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { productListRequest, productListSuccess, productListFail } =
  productSlice.actions;

export default productSlice.reducer;
