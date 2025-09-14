import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  statewiseData: [],
  summaryData: null,
  stateData: null,
  yearlyGrowth: [],
  loading: false,
  error: null,
};

const insightsSlice = createSlice({
  name: 'insights',
  initialState,
  reducers: {
    insightsDataRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    statewiseDataSuccess: (state, action) => {
      state.loading = false;
      state.statewiseData = action.payload;
    },
    summaryDataSuccess: (state, action) => {
      state.loading = false;
      state.summaryData = action.payload;
    },
    stateDataSuccess: (state, action) => {
      state.loading = false;
      state.stateData = action.payload;
    },
    yearlyGrowthSuccess: (state, action) => {
      state.loading = false;
      state.yearlyGrowth = action.payload;
    },
    insightsDataFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearInsightsData: (state) => {
      state.stateData = null;
    },
  },
});

export const {
  insightsDataRequest,
  statewiseDataSuccess,
  summaryDataSuccess,
  stateDataSuccess,
  yearlyGrowthSuccess,
  insightsDataFail,
  clearInsightsData,
} = insightsSlice.actions;

// Action creators
export const fetchStatewiseColdStorageData = () => async (dispatch) => {
  try {
    dispatch(insightsDataRequest());
    
    // Call the API to get state-wise data
    const { data } = await axios.get('http://localhost:5000/api/insights/state-wise');
    
    dispatch(statewiseDataSuccess(data));
  } catch (error) {
    dispatch(
      insightsDataFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const fetchColdStorageInsightsSummary = () => async (dispatch) => {
  try {
    dispatch(insightsDataRequest());
    
    // Call the API to get summary data
    const { data } = await axios.get('http://localhost:5000/api/insights/summary');
    
    dispatch(summaryDataSuccess(data));
  } catch (error) {
    dispatch(
      insightsDataFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const fetchStateSpecificData = (stateName) => async (dispatch) => {
  try {
    dispatch(insightsDataRequest());
    
    // Call the API to get state-specific data
    const { data } = await axios.get(`http://localhost:5000/api/insights/state/${stateName}`);
    
    dispatch(stateDataSuccess(data));
  } catch (error) {
    dispatch(
      insightsDataFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const fetchYearlyGrowthData = () => async (dispatch) => {
  try {
    dispatch(insightsDataRequest());
    
    // Call the API to get yearly growth data
    const { data } = await axios.get('http://localhost:5000/api/insights/yearly-growth');
    
    dispatch(yearlyGrowthSuccess(data));
  } catch (error) {
    dispatch(
      insightsDataFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export default insightsSlice.reducer;
