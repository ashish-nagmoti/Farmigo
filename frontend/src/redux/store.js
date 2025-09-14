import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import coldStorageReducer from './slices/coldStorageSlice';
import productReducer from './slices/productSlice';
import standardReducer from './slices/standardSlice';
import qualityReducer from './slices/qualitySlice';
import insightsReducer from './slices/insightsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    coldStorage: coldStorageReducer,
    product: productReducer,
    standard: standardReducer,
    quality: qualityReducer,
    insights: insightsReducer,
  },
});

export default store;
