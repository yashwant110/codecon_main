const otpGenerator = require('otp-generator');

// Function to generate OTP
const generateOTP = () => {
    const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false, digits: true });
    return otp;
};

module.exports = generateOTP;
