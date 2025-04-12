// utils/otpGenerator.js

const otpGenerator = require('otp-generator');

const generateOTP = () => {
  const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false, digits: true });
  return otp;
};

module.exports = { generateOTP };
