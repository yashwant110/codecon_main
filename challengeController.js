// challengeController.js
module.exports = {
  createChallenge: async (req, res) => {
    try {
      // Logic to create a new challenge
      res.status(201).json({ msg: 'Challenge created successfully' });
    } catch (err) {
      res.status(500).json({ msg: 'Server Error' });
    }
  },
  
  getAllChallenges: async (req, res) => {
    try {
      // Logic to get all challenges
      res.status(200).json({ msg: 'All challenges retrieved successfully' });
    } catch (err) {
      res.status(500).json({ msg: 'Server Error' });
    }
  }
};
