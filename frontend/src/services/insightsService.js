import api from './api';

/**
 * Get state-wise cold storage data
 * @returns {Promise<Array>} State-wise data
 */
export const getStatewiseColdStorageData = async () => {
  const { data } = await api.get('/insights/state-wise');
  return data;
};

/**
 * Get cold storage summary
 * @returns {Promise<Object>} Summary data
 */
export const getColdStorageInsightsSummary = async () => {
  const { data } = await api.get('/insights/summary');
  return data;
};

/**
 * Get data for a specific state
 * @param {string} stateName The name of the state
 * @returns {Promise<Object>} State-specific data
 */
export const getStateSpecificData = async (stateName) => {
  const { data } = await api.get(`/insights/state/${stateName}`);
  return data;
};

/**
 * Get yearly growth data
 * @returns {Promise<Array>} Yearly growth data
 */
export const getYearlyGrowthData = async () => {
  const { data } = await api.get('/insights/yearly-growth');
  return data;
};
