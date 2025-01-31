const express = require('express');
const router = express.Router();
const db = require('../db'); // Assume a PostgreSQL connection

// Fetch all markets
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM markets');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new market (admin-only)
router.post('/', async (req, res) => {
  const { electionName, endTime } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO markets (election_name, end_time) VALUES ($1, $2) RETURNING *',
      [electionName, endTime]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
