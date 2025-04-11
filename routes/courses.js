const express = require('express');
const router = express.Router();

// Dummy course data
const courses = [
  { id: '1', title: 'JavaScript for Beginners', premium: false },
  { id: '2', title: 'Data Structures in Depth', premium: true },
  { id: '3', title: 'System Design Bootcamp', premium: true }
];

// GET /api/courses
router.get('/', (req, res) => {
  res.json(courses);
});

// GET /api/courses/:id
router.get('/:id', (req, res) => {
  const course = courses.find(c => c.id === req.params.id);
  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ error: 'Course not found' });
  }
});

module.exports = router;
