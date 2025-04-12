const express = require('express');
const { createOrder } = require('../controllers/paymentController'); // assuming it's in the controllers directory
const router = express.Router();

router.post('/create-order', createOrder);

module.exports = router;
