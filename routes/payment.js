// routes/payment.js

const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Ensure you have this model
const sendEmail = require('../utils/emailService');

// Payment success route
router.post('/success', async (req, res) => {
  try {
    const { userId, paymentId } = req.body;

    if (!userId || !paymentId) {
      return res.status(400).json({ error: 'Missing userId or paymentId' });
    }

    const user = await User.findByIdAndUpdate(
      userId,
      {
        isPremium: true,
        premiumActivatedAt: new Date(),
        paymentId,
      },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await sendEmail(
      user.email,
      'CodeCon Subscription Successful 🎉',
      `Hello ${user.name},\n\nYour CodeCon premium subscription was successful! Enjoy all premium features now.\n\nThank you for joining us!\n\n- CodeCon Team`
    );

    res.status(200).json({ success: true, user });
  } catch (err) {
    console.error('Payment success error:', err);
    res.status(500).json({ error: 'Server error during payment success update' });
  }
});

module.exports = router;
