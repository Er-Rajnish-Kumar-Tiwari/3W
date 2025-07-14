const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  totalPoints: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    default: 'Party Ranking'
  }
});

module.exports = mongoose.model('User', userSchema);