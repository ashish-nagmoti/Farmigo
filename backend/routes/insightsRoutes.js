const express = require('express');
const router = express.Router();
const {
  getStatewiseColdStorageData,
  getColdStorageInsightsSummary,
  getStateSpecificData,
  getYearlyGrowthData,
} = require('../controllers/insightsController');

// Get all state-wise data
router.get('/state-wise', getStatewiseColdStorageData);

// Get summary data
router.get('/summary', getColdStorageInsightsSummary);

// Get data for a specific state
router.get('/state/:stateName', getStateSpecificData);

// Get yearly growth data
router.get('/yearly-growth', getYearlyGrowthData);

module.exports = router;
