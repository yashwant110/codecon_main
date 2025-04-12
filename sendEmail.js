// utils/sendEmail.js

const sgMail = require('./mail');

// Set SendGrid API Key from environment variable
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Send an email using SendGrid
 * @param {string} to - Recipient email address
 * @param {string} subject - Email subject
 * @param {string} html - HTML content of the email
 */
exports.sendEmail = async (to, subject, html) => {
  const msg = {
    to,
    from: 'your_verified_sendgrid_email@example.com', // Must be a verified sender in SendGrid
    subject,
    html,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error.response?.body || error.message);
    throw error;
  }
};
