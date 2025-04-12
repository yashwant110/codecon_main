// paymentRoutes.js

const express = require('express');
const router = express.Router();
const paymentController = require('./paymentController');  // Updated import path for root directory

router.post('/create-order', paymentController.createOrder);

module.exports = router;
