const express = require('express');
const router = express.Router();
const { signup, login, forgotPassword, resetPassword } = require('./authController'); // Ensure correct path

// Signup Route
router.post('/signup', signup);

// Login Route
router.post('/login', login);

// Forgot Password Route
router.post('/forgot-password', forgotPassword);  // Ensure forgotPassword exists

// Reset Password Route
router.post('/reset-password/:token', resetPassword);  // Ensure resetPassword exists

module.exports = router;
