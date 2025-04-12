const aiRecommender = require('../utils/aiRecommender');

const getRecommendations = (req, res) => {
  const { userInput } = req.body;
  try {
    const recommendations = aiRecommender.getRecommendations(userInput);
    res.status(200).json(recommendations);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = { getRecommendations };
