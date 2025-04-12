const Razorpay = require('razorpay');
const Order = require('../models/Order');

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const createOrder = async (req, res) => {
  const { amount } = req.body;
  try {
    const orderOptions = {
      amount: amount * 100,  // Amount in paise
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
    };

    razorpayInstance.orders.create(orderOptions, async (err, order) => {
      if (err) {
        return res.status(500).json({ msg: 'Failed to create order', error: err });
      }

      const newOrder = new Order({
        orderId: order.id,
        amount: amount,
        status: 'pending',
      });

      await newOrder.save();

      return res.status(200).json({
        orderId: order.id,
        amount: order.amount / 100, // convert back to rupees
        currency: order.currency,
      });
    });
  } catch (error) {
    return res.status(500).json({ msg: 'Server Error', error });
  }
};

module.exports = { createOrder };
