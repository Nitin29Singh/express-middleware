// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Import middleware
const logger = require('./middleware/logger');

// Import routes
const publicRoutes = require('./routes/public');
const protectedRoutes = require('./routes/protected');

// Use global middleware
app.use(logger);

// Use routes
app.use(publicRoutes);
app.use(protectedRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
