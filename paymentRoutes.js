const express = require('express');
const { createPaymentOrder } = require('./paymentController');
const router = express.Router();

router.post('/create', createPaymentOrder);

module.exports = router;
