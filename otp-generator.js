const otpGenerator = require('otp-generator');

const otp = otpGenerator.generate(6, { // Generates a 6-digit OTP
  upperCase: false,    // No uppercase letters
  specialChars: false, // No special characters
  digits: true         // Include digits
});

console.log(`Generated OTP: ${otp}`);
