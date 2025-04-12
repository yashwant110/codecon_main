// paymentController.js

const Razorpay = require('razorpay');
const dotenv = require('dotenv');
dotenv.config();

// Setup Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const createOrder = async (req, res) => {
  try {
    const { amount, currency } = req.body;
    
    const options = {
      amount: amount * 100,  // amount is in paisa
      currency: currency,
      receipt: `receipt_order_${Math.random()}`,
    };

    const order = await razorpay.orders.create(options);
    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ msg: 'Failed to create order', error });
  }
};

module.exports = { createOrder };
