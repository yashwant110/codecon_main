const User = require('./User');

// Controller for updating user profile, fetching user details etc.
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = { getUserProfile };
