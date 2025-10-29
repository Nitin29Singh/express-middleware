// routes/public.js
const express = require('express');
const router = express.Router();

router.get('/public', (req, res) => {
  res.status(200).send('This is a public route. No authentication required.');
});

module.exports = router;
