const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/authRoutes'); // ✅ Correct import

const app = express();

app.use(cors());
app.use(bodyParser.json());

// ✅ Route middleware
app.use('/api/auth', authRoutes);

// ✅ Optional: root route
app.get('/', (req, res) => {
  res.send('CodeCon Backend Running');
});

module.exports = app;
