const {
  parseStatewiseColdStorageData,
  getColdStorageSummary,
} = require('../utils/coldStorageDataParser');

// @desc    Get state-wise cold storage data
// @route   GET /api/insights/state-wise
// @access  Public
const getStatewiseColdStorageData = async (req, res) => {
  try {
    const data = await parseStatewiseColdStorageData();
    res.json(data);
  } catch (error) {
    console.error('Error parsing state-wise data:', error);
    res.status(500).json({ message: 'Error fetching state-wise data' });
  }
};

// @desc    Get cold storage summary
// @route   GET /api/insights/summary
// @access  Public
const getColdStorageInsightsSummary = async (req, res) => {
  try {
    const data = await parseStatewiseColdStorageData();
    const summary = getColdStorageSummary(data);
    res.json(summary);
  } catch (error) {
    console.error('Error generating summary:', error);
    res.status(500).json({ message: 'Error generating summary data' });
  }
};

// @desc    Get data for a specific state
// @route   GET /api/insights/state/:stateName
// @access  Public
const getStateSpecificData = async (req, res) => {
  try {
    const { stateName } = req.params;
    const data = await parseStatewiseColdStorageData();
    
    // Find the state data
    const stateData = data.find(
      (item) => item.state.toLowerCase() === stateName.toLowerCase()
    );
    
    if (!stateData) {
      return res.status(404).json({ message: 'State not found' });
    }
    
    res.json(stateData);
  } catch (error) {
    console.error('Error fetching state-specific data:', error);
    res.status(500).json({ message: 'Error fetching state-specific data' });
  }
};

// @desc    Get yearly growth data
// @route   GET /api/insights/yearly-growth
// @access  Public
const getYearlyGrowthData = async (req, res) => {
  try {
    const data = await parseStatewiseColdStorageData();
    const summary = getColdStorageSummary(data);
    res.json(summary.yearlyGrowth);
  } catch (error) {
    console.error('Error fetching yearly growth data:', error);
    res.status(500).json({ message: 'Error fetching yearly growth data' });
  }
};

module.exports = {
  getStatewiseColdStorageData,
  getColdStorageInsightsSummary,
  getStateSpecificData,
  getYearlyGrowthData,
};
