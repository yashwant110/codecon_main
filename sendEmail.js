const nodemailer = require('nodemailer');

const sendEmail = async (to, otp) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  let info = await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: to,
    subject: 'OTP for Password Reset',
    text: `Your OTP is: ${otp}`
  });

  return info;
};

module.exports = sendEmail;
