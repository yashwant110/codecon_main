const express = require('express');
const router = express.Router();

// Dummy POST endpoint to simulate code compilation
router.post('/', async (req, res) => {
  const { code, language } = req.body;

  if (!code || !language) {
    return res.status(400).json({ error: 'Missing code or language' });
  }

  try {
    // Simulate compilation response
    const output = `Code received in ${language}:\n${code}\nOutput: Hello World!`;
    res.json({ output });
  } catch (err) {
    res.status(500).json({ error: 'Failed to compile code' });
  }
});

module.exports = router;
