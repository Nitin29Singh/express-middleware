// routes/protected.js
const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/auth');

router.get('/protected', authenticateToken, (req, res) => {
  res
    .status(200)
    .send('You have accessed a protected route with a valid Bearer token!');
});

module.exports = router;
