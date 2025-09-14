import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  standards: [],
  standard: null,
  loading: false,
  error: null,
};

const standardSlice = createSlice({
  name: 'standard',
  initialState,
  reducers: {
    standardListRequest: (state) => {
      state.loading = true;
    },
    standardListSuccess: (state, action) => {
      state.loading = false;
      state.standards = action.payload;
    },
    standardListFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { standardListRequest, standardListSuccess, standardListFail } =
  standardSlice.actions;

export default standardSlice.reducer;
