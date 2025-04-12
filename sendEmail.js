// sendEmail.js (Using Nodemailer or SendGrid)
const nodemailer = require('nodemailer');
const sendGridMail = require('@sendgrid/mail');

// If using Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Or your preferred service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// If using SendGrid (Uncomment if using SendGrid)
// sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

// Send an email (Nodemailer example)
exports.sendEmail = async (to, subject, html) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    html
  };
  await transporter.sendMail(mailOptions);  // Nodemailer
};

// Or use SendGrid to send the email
/*
exports.sendEmail = async (to, subject, html) => {
  const msg = {
    to,
    from: process.env.EMAIL_USER,
    subject,
    html
  };
  await sendGridMail.send(msg); // SendGrid
};
*/
