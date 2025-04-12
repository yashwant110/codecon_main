const express = require('express');
const router = express.Router();
const { signup, login, forgotPassword, resetPassword } = require('../controllers/authController');

// Signup Route
router.post('/signup', signup);

// Login Route
router.post('/login', login);

// Forgot Password Route
router.post('/forgot-password', forgotPassword);

// Reset Password Route
router.post('/reset-password/:token', resetPassword);

module.exports = router;
