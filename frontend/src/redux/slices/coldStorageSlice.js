import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coldStorages: [],
  coldStorage: null,
  loading: false,
  error: null,
  page: 1,
  pages: 1,
  success: false,
};

const coldStorageSlice = createSlice({
  name: 'coldStorage',
  initialState,
  reducers: {
    coldStorageListRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    coldStorageListSuccess: (state, action) => {
      state.loading = false;
      state.coldStorages = action.payload.coldStorages;
      state.page = action.payload.page;
      state.pages = action.payload.pages;
    },
    coldStorageListFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    coldStorageDetailsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    coldStorageDetailsSuccess: (state, action) => {
      state.loading = false;
      state.coldStorage = action.payload;
    },
    coldStorageDetailsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    coldStorageCreateRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    coldStorageCreateSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.coldStorage = action.payload;
    },
    coldStorageCreateFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
    coldStorageCreateReset: (state) => {
      state.success = false;
      state.error = null;
    },
    coldStorageUpdateRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    coldStorageUpdateSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.coldStorage = action.payload;
    },
    coldStorageUpdateFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
    coldStorageUpdateReset: (state) => {
      state.success = false;
      state.error = null;
    },
    coldStorageReviewCreateRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    coldStorageReviewCreateSuccess: (state) => {
      state.loading = false;
      state.success = true;
    },
    coldStorageReviewCreateFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    coldStorageReviewCreateReset: (state) => {
      state.success = false;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  coldStorageListRequest,
  coldStorageListSuccess,
  coldStorageListFail,
  coldStorageDetailsRequest,
  coldStorageDetailsSuccess,
  coldStorageDetailsFail,
  coldStorageCreateRequest,
  coldStorageCreateSuccess,
  coldStorageCreateFail,
  coldStorageCreateReset,
  coldStorageUpdateRequest,
  coldStorageUpdateSuccess,
  coldStorageUpdateFail,
  coldStorageUpdateReset,
  coldStorageReviewCreateRequest,
  coldStorageReviewCreateSuccess,
  coldStorageReviewCreateFail,
  coldStorageReviewCreateReset,
  clearError,
} = coldStorageSlice.actions;

export default coldStorageSlice.reducer;
