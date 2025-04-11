const express = require('express');
const router = express.Router();

router.post('/suggest', async (req, res) => {
  const { input } = req.body;

  if (!input) {
    return res.status(400).json({ error: 'No input provided' });
  }

  // Dummy logic for suggestions
  const response = {
    suggestions: {
      challenges: [
        { id: '101', title: 'Arrays Easy Challenge' },
        { id: '102', title: 'Intro to Loops' }
      ],
      courses: [
        { id: '201', title: 'Beginner JavaScript' },
        { id: '202', title: 'Mastering Functions in Python' }
      ]
    }
  };

  res.json(response);
});

module.exports = router;
