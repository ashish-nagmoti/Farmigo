const express = require('express');
const router = express.Router();
const {
  getColdStorages,
  getColdStorageById,
  createColdStorage,
  updateColdStorage,
  deleteColdStorage,
  createColdStorageReview,
  getNearbyColdStorages,
  getTopColdStorages,
} = require('../controllers/coldStorageController');
const { protect, admin, broker } = require('../middleware/authMiddleware');

router.route('/').get(getColdStorages).post(protect, broker, createColdStorage);
router.route('/nearby').get(getNearbyColdStorages);
router.get('/top', getTopColdStorages);
router
  .route('/:id')
  .get(getColdStorageById)
  .put(protect, updateColdStorage)
  .delete(protect, admin, deleteColdStorage);
router.route('/:id/reviews').post(protect, createColdStorageReview);

module.exports = router;
