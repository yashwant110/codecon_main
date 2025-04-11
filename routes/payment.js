// routes/payment.js

const express = require('express');
const router = express.Router();
const sendEmail = require('../services/emailService');

router.post('/confirmation', async (req, res) => {
  const { email, name } = req.body;

  try {
    const subject = 'CodeCon Premium Subscription Confirmed';
    const message = `Hey ${name},\n\nThank you for subscribing to CodeCon Premium! You're all set to explore challenges and advanced courses.\n\nHappy coding! 🚀\n\n- CodeCon Team`;

    await sendEmail(email, subject, message);
    res.status(200).json({ message: 'Confirmation email sent.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send confirmation email.' });
  }
});

module.exports = router;
