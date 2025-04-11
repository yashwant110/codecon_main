const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// API routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/challenges', require('./routes/challenges'));
app.use('/api/courses', require('./routes/courses'));
app.use('/api/compiler', require('./routes/compiler'));
app.use('/api/bepo', require('./routes/bepo'));
app.use('/api/payment', require('./routes/payment'));

// Serve static frontend assets
app.use(express.static(path.join(__dirname, 'frontend')));

// Catch-all to support client-side routing
app.get('/:path(.*)', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
