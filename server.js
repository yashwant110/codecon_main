// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv  = require('dotenv');
const cors    = require('cors');
const path    = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ─── MIDDLEWARE ───────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ─── DATABASE ─────────────────────────────────────────────────────────────────
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser:    true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

// ─── API ROUTES ────────────────────────────────────────────────────────────────
app.use('/api/auth',       require('./routes/auth'));
app.use('/api/profile',    require('./routes/profile'));
app.use('/api/challenges', require('./routes/challenges'));
app.use('/api/courses',    require('./routes/courses'));
app.use('/api/compiler',   require('./routes/compiler'));
app.use('/api/bepo',       require('./routes/bepo'));
app.use('/api/payment',    require('./routes/payment'));

// ─── STATIC FRONTEND ──────────────────────────────────────────────────────────
// Serve your built frontend files from /frontend
app.use(express.static(path.join(__dirname, 'frontend')));

// ─── SPA FALLBACK ─────────────────────────────────────────────────────────────
// Use a simple '*' wildcard so path-to-regexp v6 doesn’t choke
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// ─── START SERVER ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
