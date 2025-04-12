const express = require('express');
const { getRecommendations } = require('./bepoController');
const router = express.Router();

router.post('/recommend', getRecommendations);

module.exports = router;
