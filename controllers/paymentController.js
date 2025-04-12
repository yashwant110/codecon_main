const Razorpay = require('razorpay');
const Order = require('../models/Order');

const razorpayInstance = new Razorpay({
  key_id: process.env.Razorpay_KEY_ID,
  key_secret: process.env.Razorpay_KEY_SECRET
});

const createPaymentOrder = async (req, res) => {
  const { amount } = req.body;
  try {
    const options = {
      amount: amount * 100,  // Convert to paise
      currency: 'INR',
      receipt: `receipt_${Date.now()}`
    };

    razorpayInstance.orders.create(options, async (err, order) => {
      if (err) {
        return res.status(500).json({ msg: "Error creating payment order" });
      }

      const newOrder = new Order({ orderId: order.id, amount, status: "created" });
      await newOrder.save();

      res.status(201).json({ order });
    });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = { createPaymentOrder };
