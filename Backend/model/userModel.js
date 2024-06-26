const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'user', // Adjust default role as needed
  },
  batch: {
    type: String,
    required: true,
    enum: ['Super60', 'Uniques 1.0', 'Uniques 2.0', 'The Uniques'], // Include all possible batches
  },
});

module.exports = mongoose.model('User', userSchema);
