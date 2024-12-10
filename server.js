
const express = require('express');
const path = require('path');

const app = express();

// Middleware to log a message before serving static files
app.use((req, res, next) => {
  console.log('Serving static file:', req.url);
  next();
});

// Serve static files
app.use(express.static(path.join(__dirname, 'dist/mrw-web-front')));

// ...existing code...
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});