import {
  insightsDataRequest,
  statewiseDataSuccess,
  summaryDataSuccess,
  stateDataSuccess,
  yearlyGrowthSuccess,
  insightsDataFail,
} from '../redux/slices/insightsSlice';

import {
  getStatewiseColdStorageData,
  getColdStorageInsightsSummary,
  getStateSpecificData,
  getYearlyGrowthData,
} from './insightsService';

// Get state-wise cold storage data
export const fetchStatewiseColdStorageData = () => async (dispatch) => {
  try {
    dispatch(insightsDataRequest());
    const data = await getStatewiseColdStorageData();
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

// Get cold storage summary
export const fetchColdStorageInsightsSummary = () => async (dispatch) => {
  try {
    dispatch(insightsDataRequest());
    const data = await getColdStorageInsightsSummary();
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

// Get data for a specific state
export const fetchStateSpecificData = (stateName) => async (dispatch) => {
  try {
    dispatch(insightsDataRequest());
    const data = await getStateSpecificData(stateName);
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

// Get yearly growth data
export const fetchYearlyGrowthData = () => async (dispatch) => {
  try {
    dispatch(insightsDataRequest());
    const data = await getYearlyGrowthData();
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
