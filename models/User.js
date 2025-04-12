const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: String,
  otp: String,
  otpExpiry: Date,
  isPremium: { type: Boolean, default: false }
}, { timestamps: true });
module.exports = mongoose.model('User', userSchema);