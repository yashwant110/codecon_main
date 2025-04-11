const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

/**
 * Send a generic email
 */
const sendEmail = async (to, subject, text, html) => {
  const mailOptions = {
    from: `"CodeCon" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
    html
  };

  return transporter.sendMail(mailOptions);
};

/**
 * Send OTP email
 */
const sendOTPEmail = async (email, otp) => {
  const subject = 'Your CodeCon OTP Code';
  const html = `
    <p>Hello 👋,</p>
    <p>Your OTP code for CodeCon is: <strong>${otp}</strong></p>
    <p>This code will expire in 5 minutes.</p>
    <br><p>Happy coding! 🚀<br/>Team CodeCon</p>
  `;
  return sendEmail(email, subject, `Your OTP: ${otp}`, html);
};

/**
 * Send password reset email
 */
const sendPasswordResetEmail = async (email, resetLink) => {
  const subject = 'Reset your CodeCon password';
  const html = `
    <p>Hello,</p>
    <p>Click the link below to reset your password:</p>
    <p><a href="${resetLink}">${resetLink}</a></p>
    <p>This link is valid for 15 minutes only.</p>
    <br><p>Team CodeCon</p>
  `;
  return sendEmail(email, subject, 'Reset your password using the link above.', html);
};

/**
 * Send payment confirmation email
 */
const sendPaymentConfirmationEmail = async (email, name) => {
  const subject = 'CodeCon Premium Subscription Confirmed 🎉';
  const html = `
    <p>Hi ${name},</p>
    <p>Thank you for subscribing to CodeCon Premium! 🏆</p>
    <p>Your one-time payment of ₹1000 has been successfully received.</p>
    <p>You now have full access to all premium challenges and courses.</p>
    <br>
    <p>Happy coding!<br/>— Team CodeCon 💻</p>
  `;
  return sendEmail(email, subject, 'Thank you for your subscription!', html);
};

module.exports = {
  sendEmail,
  sendOTPEmail,
  sendPasswordResetEmail,
  sendPaymentConfirmationEmail
};
