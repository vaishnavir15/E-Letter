// server.js

const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ELetter', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error(error));

// Define a schema for images
const imageSchema = new mongoose.Schema({
  filename: String,
  url: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

// Create a model for images
const Image = mongoose.model('Image', imageSchema);

// Configure multer middleware for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Middleware to ensure user is authenticated
function authMiddleware(req, res, next) {
  if (!req.user) {
    res.status(401).send('Not authorized');
  } else {
    next();
  }
}

// Upload endpoint
app.post('/upload', authMiddleware, upload.single('image'), async (req, res) => {
  const file = req.file;

  // Save the uploaded image to MongoDB
  const newImage = new Image({
    filename: file.filename,
    url: `/uploads/${file.filename}`,
    owner: req.user._id,
  });
  await newImage.save();

  res.send('Image uploaded successfully');
});

// Image retrieval endpoint
app.get('/uploads/:userId', async (req, res) => {
  const images = await Image.find({ owner: req.params.userId });
  res.json(images);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

  



