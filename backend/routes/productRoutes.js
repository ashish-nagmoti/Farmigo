const express = require('express');
const router = express.Router();

// This is a placeholder route file for products
// We'll implement the controller functions later
router.get('/', (req, res) => {
  res.json({ message: 'Products API endpoint' });
});

module.exports = router;
