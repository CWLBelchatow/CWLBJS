const express = require('express');
const router = express.Router();
const crypto = require('crypto');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Hash the password for comparison
    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');

    const result = await req.pool.query(
      'SELECT * FROM users WHERE username =  AND password = ',
      [username, hashedPassword]
    );

    if (result.rows.length > 0) {
      res.status(200).json({ message: 'Login successful!' });
    } else {
      res.status(401).json({ message: 'Invalid username or password.' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
      // Hash the password for storage
      const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');

      const result = await req.pool.query(
        'INSERT INTO users (username, password) VALUES (, ) RETURNING *',
        [username, hashedPassword]
      );

      res.status(201).json({ message: 'User registered successfully!', user: result.rows[0] });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
module.exports = router;
