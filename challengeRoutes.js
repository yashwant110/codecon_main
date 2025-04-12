// challengeRoutes.js
const express = require('express');
const router = express.Router();
const challengeController = require('./challengeController');

router.post('/create', challengeController.createChallenge);
router.get('/all', challengeController.getAllChallenges);

module.exports = router;
