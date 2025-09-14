import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  analysis: null,
  loading: false,
  error: null,
  success: false,
};

const qualitySlice = createSlice({
  name: 'quality',
  initialState,
  reducers: {
    qualityAnalysisRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    qualityAnalysisSuccess: (state, action) => {
      state.loading = false;
      state.analysis = action.payload;
      state.success = true;
    },
    qualityAnalysisFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    qualityAnalysisReset: (state) => {
      state.analysis = null;
      state.success = false;
      state.error = null;
    },
  },
});

export const {
  qualityAnalysisRequest,
  qualityAnalysisSuccess,
  qualityAnalysisFail,
  qualityAnalysisReset,
} = qualitySlice.actions;

export default qualitySlice.reducer;
