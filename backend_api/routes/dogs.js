const express = require('express');
const router = express.Router();

// GET all dogs
router.get('/', async (req, res) => {
  try {
    const result = await req.pool.query('SELECT * FROM dogs');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST a new dog
router.post('/addDog', async (req, res) => {
  const { name, race, color, photo, number, illnesses } = req.body;
  try {
    const result = await req.pool.query(
      'INSERT INTO dogs (name, race, color, photo, number, illnesses) VALUES (, , , , , ) RETURNING *',
      [name, race, color, photo, number, illnesses]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE a dog
router.post('/delete', async (req, res) => {
  const { id } = req.body;
    try {
    const result = await req.pool.query(
      'DELETE FROM dogs WHERE id =  RETURNING *',
      [id]
    );
      res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
