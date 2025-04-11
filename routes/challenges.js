const express = require('express');
const router = express.Router();

// Dummy challenges array
const challenges = [
  { id: '1', title: 'Two Sum', difficulty: 'Easy' },
  { id: '2', title: 'Binary Search', difficulty: 'Medium' },
  { id: '3', title: 'Dijkstra Algorithm', difficulty: 'Hard' }
];

// GET /api/challenges
router.get('/', (req, res) => {
  res.json(challenges);
});

// GET /api/challenges/:id
router.get('/:id', (req, res) => {
  const challenge = challenges.find(c => c.id === req.params.id);
  if (challenge) {
    res.json(challenge);
  } else {
    res.status(404).json({ error: 'Challenge not found' });
  }
});

module.exports = router;
