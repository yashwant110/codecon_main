const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const challengeRoutes = require('./routes/challengeRoutes');
const courseRoutes = require('./routes/courseRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const bepoRoutes = require('./routes/bepoRoutes');

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
