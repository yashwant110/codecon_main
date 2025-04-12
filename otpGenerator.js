const otpGenerator = require('otp-generator');

exports.generateOTP = () => {
  // You can modify the length and options as needed
  const otp = otpGenerator.generate(6, { 
    digits: true, 
    upperCaseAlphabets: false, 
    specialChars: false 
  });
  
  return otp;
};
