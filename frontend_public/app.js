const express = require('express');
const cors = require('cors');
const path = require('path'); // Import the path module

const app = express();
const port = 5000;

app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Example: Route to serve snake.html
app.get('/snake', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'snake.html'));
});

// Handle 404 errors (optional)
app.use((req, res, next) => {
  res.status(404).send('404: Page not found');
});

app.listen(port, () => {
  console.log('Public website server listening at http://localhost:');
});
