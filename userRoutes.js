const express = require('express');
const { getUserProfile } = require('./userController');
const router = express.Router();

router.get('/profile', getUserProfile);

module.exports = router;
