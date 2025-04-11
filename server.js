const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'frontend')));

// API routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/challenges', require('./routes/challenges'));
app.use('/api/courses', require('./routes/courses'));
app.use('/api/compiler', require('./routes/compiler'));
app.use('/api/bepo', require('./routes/bepo'));
app.use('/api/payment', require('./routes/payment'));

// Fallback route to serve index.html for all frontend routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
