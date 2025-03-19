const express = require('express');
const path = require('path');

const app = express();
const port = 8501;

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log('Frontend Panel server listening at http://localhost:');
});
