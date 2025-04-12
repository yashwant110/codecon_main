const express = require('express');
const { createCourse } = require('./courseController');
const router = express.Router();

router.post('/', createCourse);

module.exports = router;
