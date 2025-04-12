const Course = require('../models/Course');

const createCourse = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newCourse = new Course({ title, description });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = { createCourse };
