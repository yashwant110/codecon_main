// middleware/premiumMiddleware.js

const premiumMiddleware = (req, res, next) => {
  if (req.user && req.user.isPremium) {
    return next();
  } else {
    return res.status(403).json({ message: 'Access denied. Premium membership required.' });
  }
};

module.exports = { premiumMiddleware };
