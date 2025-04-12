const express = require('express');
const cors = require('cors');
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const challengeRoutes = require('./challengeRoutes');
const courseRoutes = require('./courseRoutes');
const paymentRoutes = require('./paymentRoutes');
const bepoRoutes = require('./bepoRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/challenge', challengeRoutes);
app.use('/api/course', courseRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/bepo', bepoRoutes);

module.exports = app;
