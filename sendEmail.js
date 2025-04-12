// utils/sendEmail.js

const sgMail = require('@sendgrid/mail');

// Set the API key from environment variable
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Sends an email using SendGrid
 * @param {string} to - recipient's email
 * @param {string} subject - email subject
 * @param {string} html - email body in HTML
 */
const sendEmail = async (to, subject, html) => {
  const msg = {
    to,
    from: process.env.EMAIL_USER, // Must be verified sender on SendGrid
    subject,
    html,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully to', to);
  } catch (error) {
    console.error('Error sending email:', error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
};

module.exports = sendEmail;
