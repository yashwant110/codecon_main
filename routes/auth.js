// backend/routes/auth.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Dummy user for example purposes (replace with DB later)
const dummyUser = {
  email: 'user@example.com',
  password: '$2a$10$7BvJ5PyLf2/fD8oh7FS7XehwFFtU6C8qsy4bk6gL1VpkIlgDOmAeG', // hashed 'password123'
  id: '123',
  name: 'CodeCon User'
};

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if email matches
    if (email !== dummyUser.email) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, dummyUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: dummyUser.id, email: dummyUser.email }, 'secret123', {
      expiresIn: '1h'
    });

    return res.status(200).json({ token, user: { id: dummyUser.id, name: dummyUser.name } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
