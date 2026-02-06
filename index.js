const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
const mongoose = require('mongoose');

const MovieRoutes = require('./routes/movie.routes');

env.config();

const app = express();

/**
 * 🔥 CRITICAL FIX
 * Remove hidden characters (\n, spaces, tabs) from URL
 * This runs BEFORE Express parses req.params
 */
app.use((req, res, next) => {
  if (req.url) {
    req.url = req.url.replace(/\s+/g, '');
  }
  next();
});

// ✅ Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ Routes
MovieRoutes(app);

app.get('/home', (req, res) => {
  console.log("Hitting /home");
  return res.json({
    success: true,
    message: "Fetch home"
  });
});

// ✅ Start server AFTER DB connection
mongoose.connect(process.env.DB_URL)
  .then(() => {
    console.log("✅ Successfully connected to MongoDB");

    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server started on Port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Not able to connect MongoDB", err);
  });
