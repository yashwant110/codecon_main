const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController'); // adjust if needed

// Signup route
router.post('/signup', AuthController.signup);

// Login route
router.post('/login', AuthController.login);

// Add more routes if needed (OTP login, forgot password, etc.)

module.exports = router; // ✅ Correct export
