const Challenge = require('../models/Challenge');

const createChallenge = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newChallenge = new Challenge({ title, description });
    await newChallenge.save();
    res.status(201).json(newChallenge);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = { createChallenge };
