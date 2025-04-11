// utils/emailService.js

const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME, // your Gmail or SMTP email
    pass: process.env.EMAIL_PASSWORD, // your App password or SMTP password
  },
});

async function sendEmail(to, subject, text) {
  const mailOptions = {
    from: `"CodeCon" <${process.env.EMAIL_USERNAME}>`,
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent to ${to}`);
  } catch (error) {
    console.error(`❌ Failed to send email to ${to}`, error);
  }
}

module.exports = sendEmail;

